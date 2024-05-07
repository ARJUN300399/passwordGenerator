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
    <>
    <div className=''>
      <h1>Password Generator</h1>
      <div>
        <input type="text" value={password} readOnly 
        ref={passwordRef}
        className="outline-none w-full px-3 py-1 border-b-4"
        />
        <input type="button" value="Copy" 
        onClick={copyPasswordToClipboard}
        className="border-separate" />
      </div>
      <div>
        <input type="range"
        min={8}
        max={20}
        onChange={(e)=>{setLength(e.target.value)}}/>
        <label>range {length}</label>
      </div>
      <div>
        <input type="checkbox" name="" id="numcheck"
        onChange={()=>{setAllowNum((prev)=>!prev)}}
        className='' />
        <label htmlFor="numcheck">Number</label>
      </div>
      <div>
        <input type="checkbox" name="" id="charcheck" 
        onChange={()=>{setAllowChar((prev)=>!prev)}}
        className=''/>
        <label htmlFor="charcheck">Character</label>
      </div>
    </div>
    </>
  )
}

export default App
