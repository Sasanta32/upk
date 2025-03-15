let input = document.querySelector('.submit-input')

function submit_btn() {
    input.style.size = '82%'
}

class Applicant {
   constructor(name, phone, email, name_company) {
       this.name = name
       this.email = email
       this.phone = phone
       this.name_company = name_company
   }
} 

function submit_send() {

    event.preventDefault()

    let name = document.querySelector('.submit-input-name').value
    let email = document.querySelector('.submit-input-email').value
    let phone = document.querySelector('.submit-input-number').value
    let name_company =  document.querySelector('.submit-input-namecomp').value

    let check = false

    if (check == false) {
        if (name == "") {
            check = false
        } else if (email == "") {
            check = false
        } else if (phone == "") {
            check = false
        } else {
            check = true
        }

        if (check == true) {
            let applicant = {
                name: name,
                email: email,
                phone: phone,
                name_company: name_company,
            }
            

            alert('Заявка отправлена!')

            send_email(name, email, phone, name_company)

            console.log('Name:', name)
            console.log('Email:', email)
            console.log('Phone number:', phone)
            console.log('Name company:', name_company)
            
        }
    }  
}

function send_email(name, email, phone, name_company) {
    emailjs.init('YGfm7WIrxh5xbg35-') // PUBLIC KEY, US_ID

    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        name_company: name_company,
    }

    emailjs.send('service_ifpetao', 'template_c1jve8t', templateParams) // Service_ID, Template_ID, const
        .then(function(response) {
            console.log('Success', response)
        }, function(error) {
            console.log('Error', error)
        })
}


let submit_btn_send = document.querySelector('.submit-btn')
submit_btn_send.addEventListener('click', submit_send)

//transport@oooyupk.ru

