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

    static handleLogout() {
        
        const logoutButton = document.querySelectorAll(".login__button");
        const token        = localStorage.getItem("@kenzieEnterprises:token");

        logoutButton.forEach(element => {

            if(token) {
        
                if(element.className.includes("menu__button--desktop login__button")) {
                    
                    const tagI = document.createElement("i");
                    tagI.classList.add("fa-solid", "fa-arrow-right-from-bracket");

                    element.className = "menu__button--desktop logout__button";
                    element.innerHTML = "Logout";
                    element.append(tagI);

                }else if(element.className.includes("menu__user__button login__button")) {

                    const tagI = document.createElement("i");
                    tagI.classList.add("fa-solid", "fa-user-tie");

                    element.className = "menu__user__button login logout__button";
                    element.innerHTML = "";
                    element.append(tagI);

                }else if(element.className.includes("menu__button__mobile login__button")) {
                
                    const tagImg = document.createElement("img");
                    tagImg.src   = `../../img/icons/Grid - Small.svg`;

                    element.className = "menu__button__mobile logout__button";
                    element.innerText = "Logout";
                    element.append(tagImg);
              
                }

                element.addEventListener('click', () => {

                    localStorage.clear();
                    window.location.replace('../home/index.html');
            
                });
            }
        });
    }
}

HomePage.handleDarkMode();
HomePage.handleMobileMenu();
HomePage.handleLogout();
HomePage.pauseVideo();
Modal.showLoginModal();
Modal.showSignUpModal();