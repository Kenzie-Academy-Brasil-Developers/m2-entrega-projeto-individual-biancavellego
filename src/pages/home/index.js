import { Api } from "../../js/api.js";
import { Modal } from "../../js/modal.js";

export class HomePage {

    static handleDarkMode() {
        
        const modeButton = document.querySelectorAll("#dark__toggle");
        const html       = document.querySelector("html");

        modeButton.forEach(element => {
        
            element.addEventListener("click", () => {
            
                html.classList.toggle("dark__mode");
            
            });
        });
    }

    static handleMobileMenu() {
    
        const menuMobile        = document.querySelector(".menu__button--mobile");
        const menuMobileOptions = document.querySelector(".menu__button__container--mobile");

        menuMobile.addEventListener("click", () => {
        
            menuMobileOptions.classList.toggle("hidden");
        
        });
    }

    static handleLoginModal() {
    
        const loginButtonMenu = document.querySelector(".login__button");
        const token           = localStorage.getItem("@kenzieEnterprises:token");

        if(token === true && token.value !== undefined) {
        
            window.location.assign("../dashboard/dashboard.html");
        
        }

        loginButtonMenu.addEventListener("click", () => {
        
            const newLoginModal = Modal.loginForm();

        });

        const inputEmail       = document.querySelector("#form__email__login");
        const inputPassword    = document.querySelector("#form__password__login");
        const loginButtonModal = document.querySelector(".form__button");
        const loginRedirect    = document.querySelector(".form__handle");

        loginButtonModal.addEventListener("click", () => {
        
            const data = {
                email: inputEmail.value,
                password: inputPassword.value,
            }

            Api.login(data);
        
        });

        loginRedirect.addEventListener("click", () => {
        
            Modal.signUpForm();

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
        
            Modal.loginForm();
        
        });
    }

    static closeModal() {
    
        const xFactor = document.querySelectorAll(".fa-solid");
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

HomePage.handleDarkMode();
HomePage.handleMobileMenu();
HomePage.handleLoginModal();
HomePage.closeModal();