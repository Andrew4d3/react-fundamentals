// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

const isLowerCase = str => str.toLowerCase() === str
const LOWERCASE_ERROR_MSG = 'Username must be lower case'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = React.useRef(null)
  const [error, setError] = React.useState(LOWERCASE_ERROR_MSG)

  const handleSubmit = event => {
    event.preventDefault() // this will prevent the browser to refresh

    const inputValue = usernameRef.current.value
    // Here we're making sure we're submiting something that is validated
    if (isLowerCase(inputValue)) {
      onSubmitUsername(inputValue)
    }
  }

  // To handle any change on the input value
  const handleChange = event => {
    const {value} = event.target
    setError(isLowerCase(value) ? null : LOWERCASE_ERROR_MSG)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          ref={usernameRef}
          type="text"
          onChange={handleChange}
        />
      </div>
      {!!error ? (
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      ) : null}
      <button type="submit" disabled={!!error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
