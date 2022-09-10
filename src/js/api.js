import { Modal } from "./modal.js";
import { Toast } from "./toast.js";
import { HomePage } from "../pages/home/index.js";

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
                                .then((resp) => resp.json())
                                .then(resp => {

                                    console.log(resp);

                                    if(resp.error) {
                                    
                                        return Toast.create(resp.error, "red");

                                    }

                                    localStorage.setItem("@kenzieEnterprises:token", resp.token);
                                    localStorage.setItem("@kenzieEnterprises:user_id", resp.uuid);
                                    localStorage.setItem("@kenzieEnterprises:is_admin", resp.is_admin);
                                    Toast.create("Success! You are now logged in.", "linear-gradient(to right, #00b09b, #96c93d)");
                            
                                    HomePage.handleLogout();

                                    setTimeout(() => {
                                        
                                        window.location.replace("../dashboard/dashboard.html");
                                        
                                    }, 2000);
                                })
                                .catch(err => {

                                    console.log(err);
                                    console.log(err.message);

                                });

        return response;

    }

    static async createUser(data) {

        const response = await fetch(`http://localhost:6278/auth/register/user`, {
                                    method: "POST",
                                    headers: this.headers,
                                    body: JSON.stringify(data)
                                })
                                .then(resp => resp.json())
                                .then(resp => {

                                    console.log(resp);

                                    if(resp.error) {
                                    
                                        return Toast.create(resp.error, "red");

                                    }

                                    Toast.create("You subscribed successfully!", "linear-gradient(to right, #00b09b, #96c93d)");
                                    const signUpModal = document.querySelector(".form__signUp");
                                    const main        = document.querySelector("main");
                                    const loginModal  = Modal.loginForm();

                                    signUpModal.classList.add("disappearAnimation");

                                    setTimeout(()=> {
                                        
                                        signUpModal.remove();
                                        main.append(loginModal);
                                        Modal.handleLoginModal();
                                    
                                    }, 2000);
                                })
                                .catch(err => console.log(err));

        return response;

    }

    static async listCompanies() {
        
        const companies = await fetch(`${this.ulrBase}companies`, {
                                    method: "GET",
                                    headers: this.headers
                                })
                                .then(resp => resp.json())
                                .then(resp => {
                                    
                                    console.log(resp);
                                    return resp;
                                
                                })
                                .catch(err => console.log(err));

        return companies;
        
    }

    static async listCompaniesBySector(sector) {
    
         const sectors = await fetch(`${this.ulrBase}companies/${sector}`, {
                                    method: "GET",
                                    headers: this.headers
                                })
                                .then(resp => resp.json())
                                .then(resp => console.log(resp))
                                .catch(err => console.log(err));

        return sectors;
    
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