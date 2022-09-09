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

    static pauseVideo() {
    
        const videoMobile  = document.querySelector("#main__video--mobile");
        const videoDesktop = document.querySelector("#main__video--desktop");
        const videoButton  = document.querySelector(".main__pause__button");

        videoButton.addEventListener("click", () => {
        
            if(videoButton.innerHTML === "Pause video") {
            
                videoMobile.pause();
                videoDesktop.pause();
                videoButton.innerHTML = "Play video";
            
            }else if(videoButton.innerHTML === "Play video") {

                videoMobile.play();
                videoDesktop.play();
                videoButton.innerHTML = "Pause video";
            
            }        
        });
    }
}

HomePage.handleDarkMode();
HomePage.handleMobileMenu();
HomePage.pauseVideo();
Modal.showLoginModal();
Modal.showSignUpModal();