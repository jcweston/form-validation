const submitButton=document.getElementById("submit-button")
const user = {
    'firstName':'',
    'lastName':'',
    'dob':'',
    'userName':'',
    'gender':'',
    'email':'',
    'phoneNumber':''
}
let valid=true

function testName(nameType) {
    let nameRegex=/[\D]/
    let testType = `${nameType}Name`
    let name=document.getElementById(testType)
    let regexTest = nameRegex.test(name.value)
    if (!regexTest) {
        name.className="input-error"
        valid=false
    } else {
        user[testType]=name.value
        name.className="input-normal"
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
        user['dob']=date.value
        date.className="input-normal"
    }
}

submitButton.addEventListener("click",()=>{
    valid=true
    testName('first')
    testName('last')
    testDate()
    if(valid) {
       console.log(user) 
    }
})