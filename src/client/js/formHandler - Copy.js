

const posturl = async (url='',data={}) => {
    const responde = await fetch (url,{
        method:'POST',
        credentials : 'same-origin',
        mode: 'cors',
        headers :{
            'Content-Type': 'application/json'

        },
        body : JSON.stringify(data)

    }) 
    try {
           return await response.json()
    } catch(error) {
        console.log(error)
    }
}

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
  
   posturl('http://localhost:8081/getreq', {url}).then(data => {

   
    
       document.getElementById('results').innerHTML = res.message
   })
 
   
    /*fetch('http://localhost:8081/test' 
   

      )
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}*/
}
export { handleSubmit }
