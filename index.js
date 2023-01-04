//name, phone number, email,photo

/**FUNCTION FOR POSTING */
function postContact(){
    const form=document.getElementById("postForm")
    const name =document.getElementById("name").value
    const email =document.getElementById("email").value
    const phoneNumber =document.getElementById("phoneNumber").value
    const image =document.getElementById("image").value


    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        
        fetch("http://localhost:3000/contacts",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                email:email,
                number:phoneNumber,
                image:image
            })
            
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            alert("Contact has been added")
        })
        .catch(error=>console.log(error))
    })
}