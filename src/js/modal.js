import { Api } from "./api.js";

export class Modal {

    static loginForm() {

        const sectionLogin   = document.createElement("section");
        const form           = document.createElement("form");
        const divTitle       = document.createElement("div");
        const tagH1          = document.createElement("h1");
        const tagFontAwesome = document.createElement("i");
        const divInput       = document.createElement("div");
        const labelEmail     = document.createElement("label");
        const inputEmail     = document.createElement("input");
        const labelPassword  = document.createElement("label");
        const inputPassword  = document.createElement("input"); 
        const button         = document.createElement("button");
        const tagP = `<p>Not a user yet? <span class="form__handle">Create an account</span> and <span class="form__handle">join us</span> today</p>`;
        
        sectionLogin.classList.add("form__container", "form__login", "hidden");
        form.classList.add("form__modal");
        divTitle.classList.add("form__title__container");
        tagFontAwesome.classList.add("fa-solid", "fa-xmark");
        divInput.classList.add("form__modal__container");
        inputEmail.setAttribute("id", "form__email__login");
        inputPassword.setAttribute("id", "form__password__login");
        button.classList.add("form__button");

        tagH1.innerText           = "Employee Login";
        labelEmail.innerText      = "Email:";
        inputEmail.placeholder    = "Type your email here...";
        labelPassword.innerText   = "Password:";
        inputPassword.placeholder = "Type password here...";
        button.innerText          = "Login";

        divTitle.append(tagH1, tagFontAwesome);
        divInput.append(labelEmail, inputEmail, labelPassword, inputPassword, button);
        divInput.insertAdjacentHTML("beforeend", tagP);
        form.append(divTitle, divInput);
        sectionLogin.append(form);

        console.log(sectionLogin);
        return sectionLogin;
    
    }

    static signUpForm() {
    
        const sectionSignUp        = document.createElement("section");
        const form                 = document.createElement("form");
        const divTitle             = document.createElement("div");
        const tagH1                = document.createElement("h1");
        const tagFontAwesome       = document.createElement("i");
        const divInput             = document.createElement("div");
        const labelUsername        = document.createElement("label");
        const inputUsername        = document.createElement("input");
        const labelEmail           = document.createElement("label");
        const inputEmail           = document.createElement("input");
        const labelCreatePassword  = document.createElement("label");
        const inputCreatePassword  = document.createElement("input");
        const labelConfirmPassword = document.createElement("label");                        
        const inputConfirmPassword = document.createElement("input");
        const labelProLevel        = document.createElement("label");
        const divRegisterContainer = document.createElement("div");
        const divInputContainer1   = document.createElement("div");
        const labelJunior          = document.createElement("label");
        const inputJunior          = document.createElement("input");
        const divInputContainer2   = document.createElement("div");
        const labelMid             = document.createElement("label");
        const inputMid             = document.createElement("input");
        const divInputContainer3   = document.createElement("div");
        const labelSenior          = document.createElement("label");
        const inputSenior          = document.createElement("input");
        const spanErrorMessage     = document.createElement("span");
        const registerButton       = document.createElement("button");
        const tagP                 = `Already a user? Login with your account <span class="form__handle">here!</span>`;

        sectionSignUp.classList.add("form__container", "form__signUp", "hidden");
        form.classList.add("form__modal");
        divTitle.classList.add("form__title__container");
        tagFontAwesome.classList.add("fa-solid", "fa-xmark");
        divInput.classList.add("form__modal__container");
        inputUsername.setAttribute("id", "form__username__signup");
        inputEmail.setAttribute("id", "form__email__signup__input");
        inputCreatePassword.setAttribute("id", "form__password__signup");
        inputConfirmPassword.setAttribute("id", "form__password__signup__confirm");
        divRegisterContainer.classList.add("form__register__container");
        divInputContainer1.setAttribute("id", "form__register__proLevel__container");
        inputJunior.classList.add("junior");
        divInputContainer2.setAttribute("id", "form__register__proLevel__container");
        inputMid.classList.add("mid-level");
        divInputContainer3.setAttribute("id", "form__register__proLevel__container");
        inputSenior.classList.add("senior");
        spanErrorMessage.classList.add("form__error__message");
        registerButton.classList.add("form__button");
        
        tagH1.innerText                  = "Register";
        labelUsername.innerText          = "Username";
        inputUsername.placeholder        = "Create username...";
        labelEmail.innerText             = "Email";
        inputEmail.placeholder           = "Add your email here...";
        labelCreatePassword.innerText    = "Create password:";
        inputCreatePassword.placeholder  = "Create password here...";
        labelConfirmPassword.innerText   = "Confirm password:";
        inputConfirmPassword.placeholder = "Confirm password...";
        labelProLevel.innerText          = "Select your professional level:";
        labelJunior.innerText            = "Junior";
        labelMid.innerText               = "Mid-Level";
        labelSenior.innerText            = "Senior";
        spanErrorMessage.innerText       = "";
        registerButton.innerText         = "Register account";

        divTitle.append(tagH1, tagFontAwesome);
        divRegisterContainer.append(divInputContainer1, divInputContainer2, divInputContainer3);
        divInputContainer1.append(labelJunior, inputJunior);
        divInputContainer2.append(labelMid, inputMid);
        divInputContainer3.append(labelSenior, inputSenior);
        divInput.append(labelUsername, inputUsername, labelEmail, inputEmail, labelCreatePassword, inputCreatePassword, labelConfirmPassword, inputConfirmPassword, labelProLevel, divRegisterContainer, registerButton);
        divInput.insertAdjacentHTML("beforeend", tagP);
        form.append(divTitle, divInput);
        sectionSignUp.append(form);

        console.log(sectionSignUp);
        return sectionSignUp;

    }

    static handleLoginModal() {

        const token = localStorage.getItem("@kenzieEnterprises:token");

        if(token === true && token.value !== undefined) {
        
            window.location.assign("../dashboard/dashboard.html");
        
        }

        const inputEmail       = document.querySelector("#form__email__login");
        const inputPassword    = document.querySelector("#form__password__login");
        const loginButtonModal = document.querySelector(".form__button");
        const loginRedirect    = document.querySelectorAll(".form__handle");

        // loginButtonModal.addEventListener("click", async () => {
        
        //     const data = {
        //         email: inputEmail.value,
        //         password: inputPassword.value,
        //     }

        //     await Api.login(data);
        
        // });

        // loginRedirect.forEach(element => {
        
        //     element.addEventListener("click", () => {
        
        //         Modal.loginForm().remove();
        //         Modal.signUpForm();
    
        //     });
        // }); 
    }

    static handleSignUpModal() {

        const inputUsername        = document.querySelector("#form__username__signup");
        const inputPassword        = document.querySelector("#form__password__signup");
        const confirmedPassword    = document.querySelector("#form__password__signup__confirm");
        const inputEmail           = document.querySelector("#form__email__signup__input");        
        const inputJunior          = document.querySelector("#junior");
        const inputMidLevel        = document.querySelector("#mid-level");
        const inputSenior          = document.querySelector("#senior");
        const registerButton       = document.querySelector(".form__button");
        const signUpRedirect       = document.querySelector(".form__handle");
        const errorMessage         = document.querySelector(".form__error__message");
        let   proLevelSelected;

        // registerButton.addEventListener("click", async () => {
        
        //     if(inputPassword.innerText !== confirmedPassword.innerText) {
        
        //         errorMessage.innerText = "Passwords do not match. Please, type again your password."
            
        //     }

        //     if(inputJunior.checked) {
                
        //         proLevelSelected = "júnior";

        //     }else if(inputMidLevel.checked) {
                
        //         proLevelSelected = "pleno";
            
        //     }else if(inputSenior.checked) {
            
        //         proLevelSelected = "sênior";
            
        //     } else {
            
        //         errorMessage.innerText = "Please, select a professional level.";
            
        //     }

        //     const data = {
        //         "password": confirmedPassword.value,
        //         "email": inputEmail.value,
        //         "professional_level": proLevelSelected,
        //         "username": inputUsername.value
        //     }

        //     await Api.createUser(data);

        // });

        // signUpRedirect.addEventListener("click", () => {
        
        //     Modal.signUpForm().remove();
        //     Modal.loginForm();
        
        // });
    }

    static showLoginModal() {
    
        const loginButton  = document.querySelectorAll(".login__button");
        
        loginButton.forEach(element => {
        
            element.addEventListener("click", () => {
            
                //Modal.signUpForm().remove();
                Modal.loginForm();
                Modal.handleLoginModal();
            
            });
        });
    }

    static showSignUpModal() {
        
        const signUpButton = document.querySelectorAll(".signUp__button");
    
        signUpButton.forEach(element => {
            
            element.addEventListener("click", () => {
                
                //Modal.loginForm().remove();
                Modal.signUpForm();
                Modal.handleSignUpModal();
            
            });
        });
    }

    static closeModal() {
    
        const xFactor = document.querySelectorAll(".fa-xmark");
        const modal   = document.querySelectorAll(".form__container");

        xFactor.forEach(element => {
            
            element.addEventListener("click", () => {
        
                modal.forEach(elem => {
                    
                    elem.remove();
                    
                });
            });
        });
    }
}