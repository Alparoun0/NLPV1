function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
  const url= document.getElementById('results').innerHTML
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test1',{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        } ,
        body :JSON.stringify({res : url })
         
    })
    .then(res => res.json())
    .then((res) => {
        console.log(res)
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }