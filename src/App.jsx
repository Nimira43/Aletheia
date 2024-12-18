import React from 'react'

export default function App() {
  return (
    <div className='container'>
      <h1>Password Genie</h1>
      <div className="password-generator">
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
            <label htmlFor='numbers'>Numbers</label>
            <input 
              type='checkbox' 
              name='numbers' 
              id='numbers' 
            />
          </article>
        </form>
      </div>
    </div>
  )
}
