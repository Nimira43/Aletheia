import React, {useState} from 'react'

export default function App() {
  const [passwordLength, setPasswordLength] = useState(8)
  const {LowercaseLetters, setLowercaseLetters] = useState(false)
  const [passwordLength, setPasswordLength] = useState(8)
  const [passwordLength, setPasswordLength] = useState(8)
  const [passwordLength, setPasswordLength] = useState(8)

  return (
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
            />
          </article>
          <article>
            <label htmlFor='lowercase-letters'>Lowercase Letters</label>
            <input 
              type='checkbox' 
              name='lowercase-letters' 
              id='lowercase-letters' 
            />
          </article>
          <article>
            <label htmlFor='uppercase-letters'>Uppercase Letters</label>
            <input 
              type='checkbox' 
              name='uppercase-letters' 
              id='uppercase-letters' 
            />
          </article>
          <article>
            <label htmlFor='numbers'>Numbers</label>
            <input 
              type='checkbox' 
              name='numbers' 
              id='numbers' 
            />
          </article>
          <article>
            <label htmlFor='symbols'>Symbols</label>
            <input 
              type='checkbox' 
              name='symbols' 
              id='symbols' 
            />
          </article>
          <button type='Submit'>Generate Password</button>
        </form>
      </div>
    </div>
  )
}
