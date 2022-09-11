//import { Api } from "../../js/api.js";
import { Toast } from "../../js/toast.js";
//import { HomePage } from "../home/index.js";
export class Dashboard {

    static token = localStorage.getItem("@kenzieEnterprises:token");

    static getUserValue() {
        
        const isAdmin = JSON.parse(window.localStorage.getItem("@kenzieEnterprises:is_admin"));
        return isAdmin.is_admin;
    
    }

    static async renderDashboard() {

        if(!this.token) {
        
            //window.location.replace("../home/index.html");
            
        }
    
    }

}

Dashboard.renderDashboard();