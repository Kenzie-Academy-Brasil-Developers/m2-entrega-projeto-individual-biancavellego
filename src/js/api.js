export class Api {

    static ulrBase = "http://localhost:6278/";

    static async login(data) {
    
        const response = await fetch(`${this.ulrBase}auth/login`, {
                                    method: "POST",
                                    headers: {"Content-Type": "application/json"},
                                    body: JSON.stringify(data)
                            })
                            .then(resp => resp.json())
                            .then(resp => {
                                console.log(resp)
                                localStorage.setItem("@blogKenzie:token", resp.token);
                                localStorage.setItem("@blogKenzie:userID", resp.userId);
                                window.location.assign("../pages/dashboard.html");

                                return resp;
                            })
                            .catch(err => {
                                console.log(err);
                                console.log(err.message);
                            });

        return response;

    }

    static async createUser(data) {

        const response = await fetch(`${this.urlBase}register/user`, {
                                    method: "POST",
                                    headers: {"Content-Type": "application/json"},
                                    body: JSON.stringify(data)
                            })
                            .then(resp => resp.json())
                            .then(resp => {
                                console.log(resp)
                            })
                            .catch(err => console.log(err));

        return response;

    }

    static async listCompanies() {
        
        const response = await fetch(`${this.ulrBase}companies`, {
                                    method: "GET",
                                    headers: {
                                        "Content-Type": "application/json",
                                        Authorization: `Bearer null` 
                                    },
                            })
                            .then(resp => resp.json())
                            .then(resp => console.log(resp))
                            .catch(err => console.log(err));

        return response;
        
    }

    static listCompaniesBySector() {
    

    
    }


    //LOGGED USERS:
    static listAllSectorEmployees() {
    
    
    
    }

    static listEmployeeDepartment() {
    
    
    
    }

    static updateEmployeeData() {
    
    
    
    }

    //ADMIN:
    static listAllEmployees() {
    
        

    }

    static noDepartmentUsers() {
    
        
    
    }

    static updateEmployeeDataAdmin() {
    
        
    
    }

    static subscribeCompany() {
    

    
    }

    static listAllSectors() {
    
        
        
    }

    static listAllDepartments() {
    
        
    
    }

    static listAllCompaniesDepartments() {
        

    
    }

    static createDepartment() {
    
    

    }

    static hireEmployee() {
    
        

    }

    static fireEmployee() {
    
        
    
    }

    static deleteDepartment() {
    
    
    
    }

}