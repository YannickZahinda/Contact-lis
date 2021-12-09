var inputName = document.getElementById("name");
var inputMail = document.getElementById("email");
var phoneInput = document.getElementById("Phone");
var myContactList = document.getElementsByClassName("section-three");
var clickButton = document.getElementById('click-button');
var myFormContainer = document.getElementById('third-container');
var containerTwo = document.getElementById('second-container');
var myForm = document.getElementById("my-form");
var sectionFive = document.getElementById("section-five");
var mySubmitButton = document.getElementById("submit-button");
var errorMessage = document.getElementById("error_message");
clickButton.addEventListener('mouseover', Opening);


myFormContainer.style.display = "none";


// Let's operate the click button for adding the Form with the plus icon :

function Opening(){
    myFormContainer.style.display ="block";
    document.body.style.padding = "20px";
    containerTwo.style.transition = "6s ease";
    containerTwo.style.color = "red";
    setTimeout(function(){
        containerTwo.style.color = "green";
    },3000);
    setTimeout(function (){
        containerTwo.remove()
    },6000);
}

var closingClick = document.getElementById("closing");
var closeButton = document.getElementById("closed");
closingClick.addEventListener("click", Close);
closeButton.addEventListener("click", closing)

function Close(){
    containerTwo.remove();
}

function closing(){
    myForm.remove();
}

let contactArray = [];

//une fonction constructrice pour contacts

function Contact(inputName, inputMail, phoneInput){
    this.inputName = inputName;
    this.inputMail = inputMail;
    this.phoneInput = phoneInput;
}

document.addEventListener("DOMContentLoaded", function(){
    contactArray = [
        {
            inputName : "Yannick",
            inputMail : "ymulikuza@gmail.com",
            phoneInput : "+250 783 020 147",
        }
    ]

    displayContact();
})

//Lets display that contact

function displayContact(){
    contactArray.forEach(function(singleContact){
        addToList(singleContact);
    })
}



myForm.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(inputName.value ==''|| inputMail.value =='' || phoneInput.value == ''){
        errorMessage.innerHTML = "The value filled is not recognized";
        errorMessage.classList.add("my_error_message");

        setTimeout((function(){
            errorMessage.remove();
        }),3000)



    }else{
        // newSection.id = "new_section";

        // var newSection = document.createTextNode(`Your name is : ${inputName.value}`+ '\n'+`; Your email is : ${inputMail.value}`+`; Your phone number is : ${phoneInput.value}`);
        // sectionFive.classList.add("section-five");
        // sectionFive.style.border = "1px solid black";
        // sectionFive.style.backgroundColor ="rgb(73, 72, 72)";
        // sectionFive.style.width = "max-content";
        // document.body.appendChild(sectionFive);

        const contact = new Contact(inputName.value, inputMail.value, phoneInput.value);
        contactArray.push(contact);

        addToList(contact);

        

        inputName.value = "";
        inputMail.value = "";
        phoneInput.value = "";
    }
}

function addToList(item){
    const newSection = document.createElement("div");
    newSection.classList.add("first-contact");
    newSection.innerHTML = `<div><img src="./IMG_1829.jpg" alt="photo de yann" id="my_user_image">
    <div><i class="fas fa-plus photo-adding ">Add photo</i></div></div><p>Name : <span>${item.inputName}</span></p>
    <p>E-mail : <span>${item.inputMail}</span></p>
    <p>Phone : <span>${item.phoneInput}</span></p>
    <p>Call : <i class="fas fa-phone phone-icon"></i></p>
    <br><p id= "delete_and_rating_icons"><div><i class="fas fa-trash trash-icon"><br>Delete</i></div>&nbsp;&nbsp;<div><span class="fas fa-star star-icon" id="starButton" data-star = "1"></span><span class="fas fa-star star-icon" id="starButton" data-star = "2"></span><span class="fas fa-star star-icon" id="starButton" data-star = "3"></span><span class="fas fa-star star-icon" id="starButton" data-star = "4"></span><span class="fas fa-star star-icon" id="starButton" data-star = "5"></span> rating</div></p>`;

    sectionFive.appendChild(newSection);
}

var relodingPage = document.getElementById("reload_button");
relodingPage.addEventListener("click", Reloading);

function Reloading(){
    location.reload();
}

//Let's display the file message when applying mouseover;

const fileDisplaying = document.querySelector("h2");
fileDisplaying.addEventListener("mouseover", showFile);

function showFile(){
    const myFile = document.getElementById("myFile");
    const sectionThree = document.getElementById("section-three");
    const newErea = document.getElementById("contact-list");
    const newEreaElement = document.createElement(`a`);
    const newEreaText = document.createTextNode(`No File Found, Log in to display your personal list`);
    // const newEreaLocation = oldErea.nextSibling.nextSibling;
    newEreaElement.appendChild(newEreaText);
    myFile.appendChild(newErea);
    // sectionThree.appendChild(newErea);
    newErea.appendChild(newEreaElement);
    // document.body.appendChild(newErea);
    newErea.style.listStyleType = "none";
    newErea.style.marginTop = "8px";
    newErea.style.cursor = "pointer";
    newErea.style.padding = "8px";
    newErea.style.color = "red";
    newErea.style.borderRadius = "8px";
    newErea.style.backgroundColor = "#fff";
    newErea.style.width = "max-content";
    newErea.style.transition = "5s";
    (function(){
        setTimeout((function(){
            const login = document.getElementById("login");
            login.innerHTML = "<a href='/Users/yannzah/Desktop/my contact list/login.html' id = 'open-window'>Log in</a>";
            login.classList.add("anchorTag");
        }),5000);
    })();
}

fileDisplaying.addEventListener("mouseout", removeFile);

function removeFile(){
    const newErea = document.getElementById("contact-list");
    setTimeout((function(){
        newErea.remove();
    }),5000);
}


//let's use icons

const starButton = document.querySelectorAll(".fa-star");

displayColor();
function displayColor(){
    starButton.forEach(star =>{
        star.addEventListener("click", gettingColor())
    })
}

function gettingColor(e){
   console.log(e);
}


//--------------------Let's toggle the menu bar-----------------------//

const menuButton = document.querySelector("#menu-icon");
const navBar = document.getElementById("nav-bar");
const menuContainer = document.getElementById("menu_container");
const angleUpIcon = document.getElementById("angle-up");
angleUpIcon.style.display = "none";
angleUpIcon.style.cursor = "pointer";
const dropDownIcon = document.getElementById("drop_down");
dropDownIcon.style.cursor = "pointer";


menuButton.addEventListener("click", displayMenu);

menuButton.addEventListener("click", displayMenu)
function displayMenu(){
    menuContainer.style.display = "block";
    angleUpIcon.style.display = "block";
    dropDownIcon.style.display = "none";
}

angleUpIcon.addEventListener("click", () => {
menuContainer.style.display = "none";
angleUpIcon.style.display = "none";
dropDownIcon.style.display = "block";
})

///----------------------------------------Displaying window about my info---------------------------------//

const myInfo = document.getElementById("displaySmallWindow");
const myInfoContainer = document.getElementById("info_window");
myInfo.addEventListener("mouseover", () =>{
    myInfoContainer.innerHTML = "<p>My info..</p><p>Contact me</p>";
})






