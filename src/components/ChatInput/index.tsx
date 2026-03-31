import React, { useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Send, StopCircle, Paperclip } from 'lucide-react';
import { cn } from '../MessageBubble';

export interface ChatInputProps {
  /** Current input value */
  value: string;
  /** Callback when input value changes */
  onChange: (value: string) => void;
  /** Callback when user submits the message */
  onSubmit: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Whether the AI is currently generating a response (changes send button to stop) */
  isGenerating?: boolean;
  /** Callback when the stop button is clicked */
  onStop?: () => void;
  /** Callback when the attachment button is clicked */
  onAttach?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Custom class names for the container */
  className?: string;
  /** Maximum number of rows before scrolling */
  maxRows?: number;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder = 'Type a message...',
  isGenerating = false,
  onStop,
  onAttach,
  disabled = false,
  className,
  maxRows = 6,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !disabled && !isGenerating) {
        onSubmit(value);
      }
    }
  };

  const handleSubmitClick = () => {
    if (isGenerating) {
      onStop?.();
    } else if (value.trim() && !disabled) {
      onSubmit(value);
      // Optional: refocus after sending
      textareaRef.current?.focus();
    }
  };

  return (
    <div className={cn(
      "relative flex items-end w-full p-2 bg-white border border-gray-200 rounded-2xl shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all",
      disabled && "opacity-60 bg-gray-50 cursor-not-allowed",
      className
    )}>
      {/* Attachment Button */}
      {onAttach && (
        <button
          onClick={onAttach}
          disabled={disabled}
          className="p-2 mb-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors disabled:hover:bg-transparent"
          title="Attach file"
        >
          <Paperclip size={20} />
        </button>
      )}

      {/* Auto-resizing Textarea */}
      <TextareaAutosize
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        maxRows={maxRows}
        className="w-full resize-none bg-transparent py-3 px-3 mx-1 text-gray-800 placeholder-gray-400 focus:outline-none text-[15px] leading-relaxed max-h-[200px] overflow-y-auto min-h-[44px]"
      />

      {/* Send / Stop Button */}
      <button
        onClick={handleSubmitClick}
        disabled={disabled || (!value.trim() && !isGenerating)}
        className={cn(
          "p-2 mb-1 rounded-full transition-colors flex items-center justify-center shrink-0",
          isGenerating 
            ? "bg-red-100 text-red-600 hover:bg-red-200" 
            : value.trim() 
              ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm" 
              : "bg-gray-100 text-gray-400"
        )}
        title={isGenerating ? "Stop generating" : "Send message (Enter)"}
      >
        {isGenerating ? <StopCircle size={18} /> : <Send size={18} className="ml-[2px]" />}
      </button>
    </div>
  );
};
