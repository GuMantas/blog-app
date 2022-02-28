import { max } from "moment";

export function validateQuestionForm():any {
    const title:any = document.getElementById('questionTitle');
    const body:any = document.getElementById('questionBody');
    const btn: any = document.getElementById('questionBtn')
    // btn.disabled = true
let isValid = true
    if (title.value.length < 1 || title.value.length >10) {
        document.getElementById('titleError').innerText = 'This field is required'
        console.log(title.value.length)
        // btn.disabled = true
        isValid = false
    }else {
        btn.disabled = true
        document.getElementById('titleError').innerText = 'This field is to much words'

        isValid = false
    }
    if(body.value) {
        document.getElementById('bodyError').innerText = 'This field is required'
        isValid = false
    
    }
    else {
return true    }
}
validateQuestionForm()
// Papildyti validacija kad tikrintu
// 1. title,body maziausia simboliu butu 3-4 daugiausia 50 body daugiausia 2000
// 2.jeigu forma validi, istrinti visus erorrus
