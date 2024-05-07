import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("sdcsdcdscsd");

  const passwordGenerator = useCallback(()=>{
    let str = 'ABCDEFGHIJKLMNOPabcdefghijklmnop';
    if(allowNum) str+= '1234567890';
    if(allowChar) str+= '!@#$%^&&*()';
    let pass = "";
    for(let i =1; i<= length;i++){
      let char = Math.floor(Math.random()* str.length+1);
      pass+= str.charAt(char);
    }
    setPassword(pass);
  },[length, allowChar, allowNum])
  const passwordRef = useRef(null)
  
  useEffect(passwordGenerator,[length,allowChar, allowNum])
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
    <div className='container mx-auto p-4 max-w-4xl bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg'>
      <h1 className='text-3xl font-bold text-center text-white mb-6'>Password Generator</h1>
      <div className='flex justify-between items-center mb-4 bg-white p-2 rounded shadow'>
        <input type="text" value={password} readOnly 
          ref={passwordRef}
          className="bg-transparent p-2 rounded focus:outline-none flex-grow mr-2 transition duration-300 ease-in-out transform focus:scale-105"
          style={{ flex: '8' }}
        />
        <button onClick={copyPasswordToClipboard}
          className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out transform active:scale-95"
          style={{ flex: '2' }}>
          Copy
        </button>
      </div>
      <div className='my-4'>
        <input type="range" min={8} max={20} value={length}
          onChange={(e) => {setLength(e.target.value)}}
          className="cursor-pointer w-64 bg-transparent focus:outline-none focus:ring-3"
        />
        <label className='block text-sm font-medium text-white'>Length: {length}</label>
      </div>
      <div className='flex items-center space-x-2 text-white'>
        <input type="checkbox" id="numcheck"
          checked={allowNum}
          onChange={() => {setAllowNum((prev) => !prev)}}
          className='rounded text-blue-500 focus:ring-blue-500'
        />
        <label htmlFor="numcheck" className='text-sm font-medium'>Include Numbers</label>
      </div>
      <div className='flex items-center space-x-2 text-white'>
        <input type="checkbox" id="charcheck" 
          checked={allowChar}
          onChange={() => {setAllowChar((prev) => !prev)}}
          className='rounded text-blue-500 focus:ring-blue-500'
        />
        <label htmlFor="charcheck" className='text-sm font-medium'>Include Characters</label>
      </div>
    </div>
  );  
}

export default App
