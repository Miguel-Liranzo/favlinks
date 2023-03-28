import { useState } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {
  const [favLinks, setFavLinks] = useState([])

  const handleRemove = (index) => {
    setFavLinks(
      favLinks.filter((e, i) => {
        return i !== index 
      })
    )
  }
    
  const handleSubmit = (favLink) => {   
    let temp = favLinks
    temp.push(favLink) 
    setFavLinks(temp)
  }
 
  return (  
    <div className="container"> 
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p> 
      <Table linkData={favLinks} removeLink={handleRemove}/>
      <br />
      <h3>Add New</h3>
      <Form addLink={handleSubmit}/>
    </div>
  )
} 

export default LinkContainer
