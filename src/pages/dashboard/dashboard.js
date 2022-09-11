import { Api } from "../../js/api.js";
import { Toast } from "../../js/toast.js";
class Dashboard {

    static token = localStorage.getItem("@kenzieEnterprises:token");

    static renderDashboard() {
    
        if(!this.token) {
        
            window.location.replace("../home/index.html");
            
        }
    
    }

}

Dashboard.renderDashboard();