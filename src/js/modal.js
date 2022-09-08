import { Api } from "./api.js";

export class Modal {

    static template(form) {
    
        const body    = document.querySelector("body");
        const section = document.createElement("section");

        section.classList.add("modal");
    
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
        let proLevelSelected;

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

        signUpRedirect.addEventListener("click", () => {
        
            Modal.showModal();
        
        });
    }

    static showModal() {
    
        const loginModal   = document.querySelector(".form__login");
        const signUpModal  = document.querySelector(".form__signUp");
        const loginButton  = document.querySelectorAll(".login__button");
        const signUpButton = document.querySelectorAll(".signUp__button");

        loginButton.forEach(element => {

            console.log(element)
        
            element.addEventListener("click", () => {
            
                loginModal.classList.toggle("hidden");
                //signUpModal.classList.to("hidden");
            
            });
        });

        signUpButton.forEach(element => {
            
            element.addEventListener("click", () => {
                
                signUpModal.classList.toggle("hidden");
                //loginModal.classList.add("hidden");
            
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