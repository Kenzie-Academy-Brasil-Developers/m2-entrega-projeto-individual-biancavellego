import { Modal } from "./modal.js";

export class Api {

    static ulrBase = "http://localhost:6278/";
    static token   = localStorage.getItem("@kenzieEnterprises:token");
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    };

    static async login(data) {
    
        const response = await fetch(`${this.ulrBase}auth/login`, {
                                    method: "POST",
                                    headers: this.headers,
                                    body: JSON.stringify(data)
                                })
                                .then(resp => resp.json())
                                .then(resp => {
                                    console.log(resp)
                                    localStorage.setItem("@kenzieEnterprises:token", resp.token);
                                    localStorage.setItem("@kenzieEnterprises:User_id", resp.uuid);
                                    //window.location.assign("../dashboard/dashboard.html");

                                    return resp;
                                })
                                    .catch(err => {
                                    console.log(err);
                                    console.log(err.message);
                                });

        return response;

    }

    static async createUser(data) {

        const response = await fetch(`${this.urlBase}auth/register/user`, {
                                    method: "POST",
                                    headers: this.headers,
                                    body: JSON.stringify(data)
                                })
                                .then(resp => resp.json())
                                .then(resp => {
                                    Modal.loginForm()
                                    console.log(resp)
                                })
                                .catch(err => console.log(err));

        return response;

    }

    static async listCompanies() {
        
        const response = await fetch(`${this.ulrBase}companies`, {
                                    method: "GET",
                                    headers: this.headers
                                })
                                .then(resp => resp.json())
                                .then(resp => console.log(resp))
                                .catch(err => console.log(err));

        return response;
        
    }

    static async listCompaniesBySector() {
    

    
    }


    //LOGGED USERS:
    static async listAllSectorEmployees() {
    
    
    
    }

    static async listEmployeeDepartment() {
    
    
    
    }

    static async updateEmployeeData() {
    
    
    
    }

    //ADMIN:
    static async listAllEmployees() {
    
        

    }

    static async noDepartmentUsers() {
    
        
    
    }

    static async updateEmployeeDataAdmin() {
    
        
    
    }

    static async subscribeCompany() {
    

    
    }

    static async listAllSectors() {
    
        
        
    }

    static async listAllDepartments() {
    
        
    
    }

    static async listAllCompaniesDepartments() {
        

    
    }

    static async createDepartment() {
    
    

    }

    static async hireEmployee() {
    
        

    }

    static async fireEmployee() {
    
        
    
    }

    static async deleteDepartment() {
    
    
    
    }
}