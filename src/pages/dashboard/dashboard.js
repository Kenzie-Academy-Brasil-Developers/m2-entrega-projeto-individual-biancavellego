import { Api } from "../../js/api.js";


class Dashboard {

    static token = localStorage.getItem("@kenzieEnterprises:token");

    static renderDashboard() {
    
        if(!this.token) { 
        
            window.location.assign("../home/index.html");
        
        }
    
    }

}

Dashboard.renderDashboard();