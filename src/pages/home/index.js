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

    static handleLoginModal() {
    
        const loginButton = document.querySelector(".login__button");

        loginButton.addEventListener("click", () => {
        
            const newLoginModal = Modal.loginForm();

        });
    }

}

HomePage.handleDarkMode();
HomePage.handleLoginModal();