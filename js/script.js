
/* 
    Hey guys, thank you for looking up my script file, this is your homie Marcel Senga...
    I'm really excited to get started, so what are we waiting for ? 😜
*/

// ALL ABOUT GLOBAL VARIABLES
let id = 1
let contacts = document.querySelectorAll('contact')



// ALL ABOUT EVENT LISTENERS

eventListeners()

function eventListeners() {
    document.getElementById('contact-form').addEventListener('submit', addContact)

    document.querySelector('.contacts').addEventListener('click', removeEdit)
}


// ALL ABOUT FUNCTIONS

// adding a contact handling
function addContact(e) {
    e.preventDefault()

    let contactFirstName = document.getElementById('first-name').value
    let contactName = document.getElementById('name').value
    let contactGroup = document.getElementById('group').value
    let contactBio = document.getElementById('bio').value
    let contactId = document.getElementById('id')

    if (contactId.value == "") {
        contactId.value = id;
    }

    console.log(contacts);
    
    // searching for existing contact
    contacts.forEach((contact, index) => {
        if (contact.children[2].children[4].textContent == contactId.value) {
            console.log(true);
        }
    });

    // creating a new element on the DOM
    createContact(contactFirstName,contactName,contactGroup,contactBio,contactId.value)

    // clearing the form
    this.reset()
    id++
}


// creating a new contact
function createContact(firstName, name, group, bio, id) {
    // creating a new element on the DOM
    let contactElement = document.createElement('div')
    
    contactElement.className = 'contact'

    contactElement.innerHTML = `
            <button class="close"><i class="bi bi-x remove-from-dom"></i></button>
            <div class="contact-img"></div>
            <div class="contact-details">
              <button class="edit"><i class="bi bi-pen edit-contact"></i></button>
              <p class="names"><span class="first-name">${firstName}</span> <span class="name">${name}</span></p>
              <p class="group">${group}</p>
              <p class="bio">
                ${bio}
              </p>
              <span class="hidden">${id}</span>
            </div>
    `

    document.querySelector('.contacts').appendChild(contactElement)
}

// this function will either remove an element from the DOM or allow the edit by sending back data to the form
function removeEdit(e) {

    if (e.target.classList.contains('remove-from-dom')) {
        e.target.parentElement.parentElement.remove()
    } else if (e.target.classList.contains('edit-contact')) {
        
        let contactFirstName = e.target.parentElement.nextElementSibling.children[0].textContent
        let contactName = e.target.parentElement.nextElementSibling.children[1].textContent
        let contactGroup = e.target.parentElement.nextElementSibling.nextElementSibling.textContent
        let contactBio = e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.textContent
        let contactId = e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent
        
        sendToEdit(contactFirstName, contactName, contactGroup, contactBio, contactId)
    }
}

// this function send editable data to the form
function sendToEdit(firstName, name, group, bio, id) {
    document.getElementById('first-name').value = firstName
    document.getElementById('name').value = name
    document.getElementById('group').value = group
    document.getElementById('bio').value = bio
    document.getElementById('id').value = id
}