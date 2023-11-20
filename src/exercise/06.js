// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = React.useRef(null)
  const [username, setUsername] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault() // this will prevent the browser to refresh

    // Since now our input value is being controlled by a react state, we don't
    // need to use ref anymore
    onSubmitUsername(username)
  }

  // To handle any change on the input value
  const handleChange = event => {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          ref={usernameRef}
          value={username}
          type="text"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

// TODO extra credit 3
