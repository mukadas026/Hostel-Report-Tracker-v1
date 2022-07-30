form1 = document.getElementById('form1')
form2 = document.getElementById('form2')
textArea = document.getElementById('textArea')
const username = document.getElementById('username')
para = document.getElementById('test_para')

function changePara(){
    para.innerHTML = username.value
}

// form1.addEventListener('submit', (e) => {
//     // document.write(username.value)
//     para.innerHTML = username.value
//     e.preventDefault()
    
//     // changePara()
// })



form2.addEventListener('submit', (e) => {
   let messages = []

   if(textArea.value === '' || textArea.value == null){
       messages.push('Please provide further details on your complaint so we can attend to it........Thank You!')
    }
   
    if(messages.length > 0){
        e.preventDefault()
        alert(messages)
        textArea.focus()
        textArea.style.border = "1.5px solid red"
    }
    else{
        let confirmation = confirm('Are you sure about this???')

        if (confirmation == false){
            e.preventDefault()
            textArea.style.border = '1.5px solid red'
        }
        else{
            alert('You have successfully Submitted your complaint, We will get back to you as soon as possible!')
        }
    }

}) 