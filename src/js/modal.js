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
        
        sectionLogin.classList.add("form__container", "form__login");
        form.classList.add("form__modal");
        divTitle.classList.add("form__title__container");
        tagFontAwesome.classList.add("fa-solid", "fa-xmark");
        divInput.classList.add("form__modal__container");
        inputEmail.setAttribute("id", "form__email__login");
        inputPassword.setAttribute("id", "form__password__login");
        button.classList.add("form__button");

        labelEmail.setAttribute("for", "email");
        inputEmail.setAttribute("type", "text");
        inputEmail.setAttribute("title", "E-mail");
        inputEmail.setAttribute("name", "email");
        labelPassword.setAttribute("for", "email");
        inputPassword.setAttribute("type", "password");
        inputPassword.setAttribute("title", "Password");
        inputPassword.setAttribute("name", "password");
        button.setAttribute("type", "button");

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
        const tagP                 = `<p>Already a user? Login with your account <span class="form__handle">here!</span></p>`;

        sectionSignUp.classList.add("form__container", "form__signUp");
        form.classList.add("form__modal");
        divTitle.classList.add("form__title__container");
        tagFontAwesome.classList.add("fa-solid", "fa-xmark");
        divInput.classList.add("form__modal__container");
        inputUsername.setAttribute("id", "form__username__signup");
        inputEmail.setAttribute("id", "form__email__signup__input");
        inputCreatePassword.setAttribute("id", "form__password__signup");
        inputConfirmPassword.setAttribute("id", "form__password__signup__confirm");
        divRegisterContainer.classList.add("form__register__container");
        divInputContainer1.classList.add("form__register__proLevel__container");
        inputJunior.setAttribute("id", "junior");
        divInputContainer2.classList.add("form__register__proLevel__container");
        inputMid.setAttribute("id", "mid-level");
        divInputContainer3.classList.add("form__register__proLevel__container");
        inputSenior.setAttribute("id", "senior");
        spanErrorMessage.classList.add("form__error__message");
        registerButton.classList.add("form__button");

        labelUsername.setAttribute("for", "username");
        inputUsername.setAttribute("type", "text");
        inputUsername.setAttribute("title", "Username");
        labelEmail.setAttribute("for", "email");
        inputEmail.setAttribute("type", "text");
        inputEmail.setAttribute("title", "E-mail");
        labelCreatePassword.setAttribute("for", "text");
        inputCreatePassword.setAttribute("type", "text");
        inputCreatePassword.setAttribute("title", "Password");
        labelConfirmPassword.setAttribute("for", "text");
        inputConfirmPassword.setAttribute("type", "text");
        inputConfirmPassword.setAttribute("title", "Password Confirmation");
        labelProLevel.setAttribute("for", "text");
        labelJunior.setAttribute("for", "text");
        inputJunior.setAttribute("type", "radio");
        inputJunior.setAttribute("title", "Professional level");
        inputJunior.setAttribute("name", "professional_level");
        inputJunior.setAttribute("value", "Junior");
        labelMid.setAttribute("for", "text");
        inputMid.setAttribute("type", "radio");
        inputMid.setAttribute("title", "Professional level");
        inputMid.setAttribute("name", "professional_level");
        inputMid.setAttribute("value", "Mid-Level");
        labelSenior.setAttribute("for", "text");
        inputSenior.setAttribute("type", "radio");
        inputSenior.setAttribute("title", "Professional level");
        inputSenior.setAttribute("name", "professional_level");
        inputSenior.setAttribute("value", "Senior");
        registerButton.setAttribute("type", "button");
        
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

        return sectionSignUp;

    }

    static showLoginModal() {
    
        const main         = document.querySelector("main");
        const loginButton  = document.querySelectorAll(".login__button");
        
        loginButton.forEach(element => {
        
            element.addEventListener("click", () => {
            
                const sectionLogin  = Modal.loginForm();
                main.append(sectionLogin);
                Modal.closeModal();
                Modal.handleLoginModal();
                Modal.redirect();

                const mainSection  = document.querySelectorAll("section");

                if(mainSection.length > 1) {
                
                    mainSection.forEach(elem => {
                    
                        elem.remove();
                    
                    });
                }
            });
        });
    }

    static showSignUpModal() {
        
        const main         = document.querySelector("main");
        const signUpButton = document.querySelectorAll(".signUp__button");
    
        signUpButton.forEach(element => {
            
            element.addEventListener("click", () => {
                
                const sectionSignUp = Modal.signUpForm();
                main.append(sectionSignUp);
                Modal.closeModal();
                Modal.handleSignUpModal();
                Modal.redirect();

                const mainSection  = document.querySelectorAll("section");

                if(mainSection.length > 1) {
                
                    mainSection.forEach(elem => {
                    
                        elem.remove();
                    
                    });
                }
            });
        });
    }

    static redirect() {

        const main     = document.querySelector("main");
        const redirect = document.querySelectorAll(".form__handle");

        redirect.forEach(element => {

            element.addEventListener("click", () => {
            
                console.log(element.closest("section").className);

                if(element.closest("section").className.includes("form__login")) {
            
                    const sectionSignUp = Modal.signUpForm();
                    main.append(sectionSignUp);
                    Modal.closeModal();
                
                }else if(element.closest("section").className.includes("form__signUp")) {
                
                    const sectionLogin  = Modal.loginForm();
                    main.append(sectionLogin);
                    Modal.closeModal();
                
                }
            });
        });
    }

    static closeModal() {
    
        const xFactor = document.querySelector(".fa-xmark");
        const modal   = document.querySelector(".form__container");

        xFactor.addEventListener("click", () => {
        
            modal.classList.add("disappearAnimation");

            setTimeout(()=> {
                
                modal.remove();
            
            }, 1000);
        });
    }

    static handleLoginModal() {

        const token = localStorage.getItem("@kenzieEnterprises:token");

        if(token) {
        
            window.location.replace("../dashboard/dashboard.html");
        
        }

        const inputEmail       = document.querySelector("#form__email__login");
        const inputPassword    = document.querySelector("#form__password__login");
        const loginButtonModal = document.querySelector(".form__button");

        loginButtonModal.addEventListener("click", async () => {
        
            const data = {
                email: inputEmail.value,
                password: inputPassword.value,
            }

            await Api.login(data);
        
        });
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
        const errorMessage         = document.querySelector(".form__error__message");
        let   proLevelSelected;

        registerButton.addEventListener("click", async () => {
        
            if(inputPassword.innerText !== confirmedPassword.innerText) {
        
                errorMessage.innerText = "Passwords do not match. Please, type again your password."
            
            }

            if(inputJunior.checked) {
                
                proLevelSelected = "júnior";

            }else if(inputMidLevel.checked) {
                
                proLevelSelected = "pleno";
            
            }else if(inputSenior.checked) {
            
                proLevelSelected = "sênior";
            
            } else {
            
                errorMessage.innerText = "Please, select a professional level.";
            
            }

            const data = {
                "password": confirmedPassword.value,
                "email": inputEmail.value,
                "professional_level": proLevelSelected,
                "username": inputUsername.value
            }

            await Api.createUser(data);

        });

    }

    
}