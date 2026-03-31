import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronDown, ChevronRight, Bot, User, Copy, Check } from 'lucide-react';
import { TypingEffect } from '../TypingEffect';

/** Utility for tailwind class merging */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Custom Code Block Component
type CodeBlockProps = {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const CodeBlock = ({ inline, className, children }: CodeBlockProps) => {
  const match = /language-(\w+)/.exec(className || '');
  const [copied, setCopied] = useState(false);
  const language = match ? match[1] : 'text';
  
  const handleCopy = () => {
    navigator.clipboard.writeText(String(children).replace(/\n$/, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!inline && match) {
    return (
      <div className="relative rounded-lg overflow-hidden my-4 border border-gray-700 bg-[#282c34]">
        <div className="flex items-center justify-between px-4 py-1.5 bg-gray-800 text-gray-300 text-xs font-mono">
          <span>{language}</span>
          <button 
            onClick={handleCopy}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
        <SyntaxHighlighter
          style={oneDark}
          language={language}
          PreTag="div"
          customStyle={{ margin: 0, padding: '1rem', background: 'transparent' }}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    );
  }

  return (
    <code className={cn("bg-gray-100 text-pink-600 rounded px-1.5 py-0.5 text-sm font-mono", className)}>
      {children}
    </code>
  );
};

const markdownComponents: Components = {
  code: CodeBlock,
};

export interface MessageBubbleProps {
  /** The message content, supports markdown */
  content: string;
  /** Role of the sender */
  role: 'user' | 'ai' | 'system';
  /** Whether the message is currently streaming/typing */
  isTyping?: boolean;
  /** Avatar URL or ReactNode */
  avatar?: React.ReactNode | string;
  /** DeepSeek style thinking process content */
  thinkingContent?: string;
  /** Custom class names */
  className?: string;
  /** Time string */
  timestamp?: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  content,
  role,
  isTyping = false,
  avatar,
  thinkingContent,
  className,
  timestamp,
}) => {
  const [isThinkingExpanded, setIsThinkingExpanded] = useState(true);
  const isAI = role === 'ai';
  const isUser = role === 'user';

  const renderAvatar = () => {
    if (typeof avatar === 'string') {
      return <img src={avatar} alt={`${role} avatar`} className="w-8 h-8 rounded-full object-cover" />;
    }
    if (avatar) return avatar;
    
    // Default avatars
    return (
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
        isUser ? "bg-blue-100 text-blue-600" : "bg-emerald-100 text-emerald-600"
      )}>
        {isUser ? <User size={18} /> : <Bot size={18} />}
      </div>
    );
  };

  return (
    <div className={cn(
      "flex w-full gap-4 mb-6",
      isUser ? "flex-row-reverse" : "flex-row",
      className
    )}>
      {/* Avatar */}
      {role !== 'system' && renderAvatar()}

      {/* Message Container */}
      <div className={cn(
        "flex flex-col max-w-[80%]",
        isUser ? "items-end" : "items-start"
      )}>
        {/* Thinking Process (DeepSeek Style) */}
        {isAI && thinkingContent && (
          <div className="w-full mb-2">
            <button 
              onClick={() => setIsThinkingExpanded(!isThinkingExpanded)}
              className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-700 transition-colors py-1 px-2 rounded-md hover:bg-gray-100"
            >
              {isThinkingExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              <span className="font-medium">Thinking Process</span>
            </button>
            
            {isThinkingExpanded && (
              <div className="mt-1 p-3 bg-gray-50/80 border border-gray-200 rounded-lg text-sm text-gray-600 border-l-4 border-l-gray-400">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {thinkingContent}
                </ReactMarkdown>
              </div>
            )}
          </div>
        )}

        {/* Main Bubble */}
        <div className={cn(
          "nova-bubble",
          isUser ? "nova-bubble-user" : "nova-bubble-ai",
          role === 'system' && "bg-gray-100 text-gray-600 text-center text-sm w-full max-w-full italic"
        )}>
          {isTyping && isAI ? (
            <TypingEffect content={content} speed={20} />
          ) : (
            <div className="prose prose-sm md:prose-base prose-slate max-w-none break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 prose-pre:bg-transparent">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {content}
              </ReactMarkdown>
            </div>
          )}
        </div>

        {/* Timestamp */}
        {timestamp && (
          <span className="text-xs text-gray-400 mt-1 px-1">
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};
