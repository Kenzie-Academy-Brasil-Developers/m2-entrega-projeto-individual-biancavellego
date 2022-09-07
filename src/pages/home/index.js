import { Api } from "../../js/api.js";

export class HomePage {

    static handleDarkMode() {
        
        const modeButton = document.querySelectorAll("#mode__button");
        const html       = document.querySelector("html");

        modeButton.forEach(element => {
        
            element.addEventListener("click", () => {
            
                html.classList.toggle("dark__mode");
            
            });
        });
    }

    

}

HomePage.handleDarkMode()