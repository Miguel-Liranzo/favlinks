import { useState } from 'react'

const Form = (props) => {
  const [name, setName] = useState('')
  const [URL, setURL] = useState('')

  const handleChange = (event) => {
    if (event.target.id === "name") {
      setName(event.target.value)
    } else {
      setURL(event.target.value)
    }
  }

  const onFormSubmit = (event) => {   
    event.preventDefault()

    if (name !== '' && URL !== '') {
      props.addLink({name: name, URL: URL})
      setName('')
      setURL('')
    } else {
      console.log("empty name and/or url")
    }
  }

  return (
    <form>
      <label>
        Name
        <input
          id="name"
          type="text"
          onChange={handleChange}
          value={name}
        />
      </label>
      <label>
        URL
        <input
          id="URL"
          type="text"
          onChange={handleChange}
          value={URL}
        />
      </label>
      <input
        type="submit"
        value="add"
        onClick={onFormSubmit}
      />
    </form>
  )
}

export default Form
