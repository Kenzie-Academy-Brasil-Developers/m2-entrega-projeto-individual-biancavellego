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
        const token       = localStorage.getItem("@kenzieEnterprises:token");

        loginButtonMenu.addEventListener("click", () => {
        
            const newLoginModal = Modal.loginForm();

        });

        if(token) {
        
            window.location.assign("../dashboard/dashboard.html");
        
        }

        const inputEmail       = document.querySelector("#form__email__login");
        const inputPassword    = document.querySelector("#form__password__login");
        const loginButtonModal = document.querySelector(".form__button");
        const signUpRedirect   = document.querySelector(".form__handle");

        loginButtonModal.addEventListener("click", () => {
        
            const data = {
                email: inputEmail.value,
                password: inputPassword.value,
            }

            Api.login(data);
        
        });


    }
}

HomePage.handleDarkMode();
HomePage.handleLoginModal();
HomePage.handleMobileMenu();