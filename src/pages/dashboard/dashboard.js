import { Api } from "../../js/api.js";
import { Toast } from "../../js/toast.js";
export class Dashboard {

    static token   = localStorage.getItem("@kenzieEnterprises:token");
    static isAdmin = JSON.parse(window.localStorage.getItem("@kenzieEnterprises:is_admin"));

    static async renderDashboard() {

        if(!this.token) {
        
            window.location.replace("../home/index.html");
            
        }
        if(this.isAdmin) {
        
            //render additional admin resources...
        
        }
    }

    static handleDarkMode() {
    
        const modeButton = document.querySelector("#dark__toggle");
        const html       = document.querySelector("html");

        modeButton.addEventListener("click", () => {
            
                html.classList.toggle("dark__mode");
            
        });
    
    }

}

Dashboard.renderDashboard();
Dashboard.handleDarkMode();