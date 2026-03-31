import React, { useState } from 'react';
import { MessageBubble, ChatInput } from '../../dist';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (val: string) => {
    console.log('Sending:', val);
    setInputValue('');
    setIsGenerating(true);
    
    // Simulate generation time
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Nova UI Playground</h1>
      
      <div style={{ border: '1px solid #eee', borderRadius: '12px', padding: '1rem', backgroundColor: '#fafafa', marginBottom: '2rem' }}>
        <MessageBubble 
          role="user" 
          content="Can you explain how quantum computing works?" 
        />
        
        <MessageBubble 
          role="ai" 
          thinkingContent="The user is asking for an explanation of quantum computing. I should explain it in simple terms, using analogies like a spinning coin to explain superposition, and explain entanglement."
          content={`**Quantum computing** is a fundamentally new way of processing information. 

While classical computers use bits (which can be either 0 or 1), quantum computers use **qubits**. Qubits can exist in multiple states at once thanks to a property called *superposition*.

Here is a simple example in Python of how you might use a quantum computing library like Qiskit:
\`\`\`python
from qiskit import QuantumCircuit

# Create a Quantum Circuit acting on a quantum register of three qubits
circ = QuantumCircuit(3)

# Add a H gate on qubit 0, putting this qubit in superposition.
circ.h(0)

# Add a CX (CNOT) gate on control qubit 0 and target qubit 1, putting
# the qubits in a Bell state.
circ.cx(0, 1)

# Add a CX (CNOT) gate on control qubit 0 and target qubit 2, putting
# the qubits in a GHZ state.
circ.cx(0, 2)
\`\`\`
`} 
        />
        
        <MessageBubble 
          role="ai" 
          isTyping={true}
          content="This allows them to solve certain complex problems much faster than traditional computers..." 
        />
      </div>

      {/* Chat Input Demo */}
      <div className="max-w-2xl mx-auto">
        <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Try the Chat Input</h3>
        <ChatInput 
          value={inputValue}
          onChange={setInputValue}
          onSubmit={handleSubmit}
          isGenerating={isGenerating}
          onStop={() => setIsGenerating(false)}
          onAttach={() => alert('Attach clicked!')}
          placeholder="Ask Nova anything... (Press Enter to send, Shift+Enter for new line)"
        />
      </div>
    </div>
  );
}
