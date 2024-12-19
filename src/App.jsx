import React, {useState} from 'react'

export default function App() {
  const [passwordLength, setPasswordLength] = useState(8)
  const [lowercaseLetters, setLowercaseLetters] = useState(false)
  const [uppercaseLetters, setUppercaseLetters] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  return (
    <>
      <div className='container'>
          <h1>Password Genie</h1>
        <div className='password-generator'>
          <p className='generated-password'>Generated Password</p>
          <form>
            <article>
              <label htmlFor='password-length'>Password Length</label>
              <input 
                type='number' 
                name='password-length' 
                id='password-length' 
                min={8} 
                max={20}
                defaultValue={passwordLength}
                onChange={(e) => setPasswordLength(e.target.value)}
              />
            </article>
            <article>
              <label htmlFor='lowercase-letters'>Lowercase Letters</label>
              <input 
                type='checkbox' 
                name='lowercase-letters' 
                id='lowercase-letters' 
                checked={lowercaseLetters}
                onChange={(e) => setLowercaseLetters(e.target.checked)}
              />
            </article>
            <article>
              <label htmlFor='uppercase-letters'>Uppercase Letters</label>
              <input 
                type='checkbox' 
                name='uppercase-letters' 
                id='uppercase-letters' 
                checked={uppercaseLetters}
                onChange={(e) => setUppercaseLetters(e.target.checked)}
              />
            </article>
            <article>
              <label htmlFor='numbers'>Numbers</label>
              <input 
                type='checkbox' 
                name='numbers' 
                id='numbers' 
                checked={numbers}
                onChange={(e) => setNumbers(e.target.checked)}
              />
            </article>
            <article>
              <label htmlFor='symbols'>Symbols</label>
              <input 
                type='checkbox' 
                name='symbols' 
                id='symbols' 
                checked={symbols}
                onChange={(e) => setSymbols(e.target.checked)}
              />
            </article>
            <button type='Submit'>Generate Password</button>
          </form>
        </div>
      </div>
    </>
  )
}
