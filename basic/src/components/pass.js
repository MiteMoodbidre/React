import React, { useState,useCallback,useEffect,useRef } from 'react';

const Pass = () => {
    const [length,setlength]=useState(8)
    const [allowed,setallowed] =useState(false)
    const [symbol,setsym] =useState(false)
    const [password,setpassword] =useState('')

    const passref=useRef(null)

    const generatePasswords = useCallback(() => {
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if (allowed) str += '0123456789';
        if (symbol) str += '@#$%*()?.,';
    
        for (let i = 0; i < length; i++) {
            const ans = Math.floor(Math.random() * str.length); // Correct random index calculation
            pass += str.charAt(ans);
        }
        setpassword(pass);
    }, [length, allowed, symbol]);
    

    useEffect(()=>{
        generatePasswords()
    },[length,allowed,symbol])

    const copyPassword = ()=>{
        window.navigator.clipboard.writeText(password)
        passref.current?.select()
    }
  return (
    <div>
      <div className='text-3xl bg-purple-400 text-center'>Password Generator</div>
      <div>
        <input type="text" value={password} placeholder='password' readOnly ref={passref}></input>
        <button onClick={copyPassword}>Copy</button>
      </div>


      <div>
        <input type='range' min={6} max={100} value={length} onChange={(e)=>setlength(e.target.value)}></input>
        <label htmlFor='length'>Length {length}</label>
      </div>


      <div>
        <input type='checkbox' defaultChecked={allowed} onChange={()=>setallowed((prev)=>!prev)}></input>
        <label htmlFor='numbers'>Numbers</label>
      </div>


      <div>
        <input type='checkbox' defaultChecked={symbol} onChange={()=>setsym((prev)=>!prev)}></input>
        <label htmlFor='character'>Characters</label>
      </div>

    </div>
  );
}

export default Pass;
