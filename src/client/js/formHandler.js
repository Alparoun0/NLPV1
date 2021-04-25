import { checkurl } from "./checkurl";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkurl(formText)
   
    //console.log("::: Form Submitted :::")
    //console.log(formText)
    if (checkurl(formText)) {

    fetch('http://localhost:8081/test2',{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        } ,
        body :JSON.stringify({ formText: formText })
         
    })
    .then(res => res.json())
    .then((res) => {
        //console.log(res)
        document.getElementById('text').textContent = res.text
        document.getElementById('agreement').textContent ='Agreement >>>  '+ res.agreement
        document.getElementById('confidence').textContent ='Confidence >>>  '+ res.confidence
        document.getElementById('score_tag').textContent = 'Score Tag >>>  '+res.score_tag
        document.getElementById('subjectivity').textContent ='Subjectivity >>>  '+ res.subjectivity
        document.getElementById('irony').textContent ='Irony >>>  '+res.irony    })
}
else {
    alert('please enter a valid URL and try again');
}
}
export { handleSubmit
      }