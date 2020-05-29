const submitButton=document.getElementById("submit-button")
const firstNameInput=document.getElementById('firstName')
const form=document.getElementById('form')
let gender =''

function testName(nameType) {
    let nameRegex=/[\D]/
    let testType = `${nameType}Name`
    let name=document.getElementById(testType)
    let regexTest = nameRegex.test(name.value)
    if (!regexTest) {
        name.className="input-error"
        return false
    } else {
        name.className="input-normal"
        return true
    }
}

function testUserName() {
    let userNameRegex=/[\D]/
    let userName=document.getElementById("userName")
    let regexTest=userNameRegex.test(userName.value)
    if (!regexTest) {
        userName.className="input-error"
        return false
    } else {
        userName.className="input-normal"
        return true
    }
}

function testDate() {
    let date=document.getElementById("dob")
    let currentDate=new Date()
    let dateNum=date.valueAsNumber
    if (dateNum>currentDate-568080000000) {
        date.className="input-error"
        valid=false
    } else {
        date.className="input-normal"
    }
}

function formSubmit(event) {
    event.preventDefault();
    let user = {
        'firstName' : document.getElementById("firstName"),
        'lastName' : document.getElementById("lastName"),
        'dob' : document.getElementById("dob"),
        'gender' : gender,
        'firstName' : document.getElementById("firstName"),
        'firstName' : document.getElementById("firstName"),
    }
    console.log(user)
    // fetch('https://intense-coast-72655.herokuapp.com/',{method:'POST',body:JSON.stringify(user)}).then(response=>response.json())
}


form.addEventListener('submit',formSubmit)