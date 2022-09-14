import { Modal } from "./modal.js";
import { Toast } from "./toast.js";
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

                                    setTimeout(() => {
                                        
                                        window.location.replace("../dashboard/dashboard.html");
                                        
                                    }, 1000);
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
                                .then(resp => {
                                    
                                    console.log(resp);
                                    return resp;

                                })
                                .catch(err => console.log(err));

        return sectors;
    
    }
/*******************************************************************************************************************************************/ 
/*********************************************************LOGGED USERS**********************************************************************/ 
/*******************************************************************************************************************************************/

    static async loggedUserInfo() {
    
        const userInfo = await fetch(`${this.ulrBase}users/profile`, {
                                    method: "GET",
                                    headers: this.headers
                                })
                                .then(resp => resp.json())
                                .then(resp => {
                                  
                                  console.log(resp);
                                  return resp;

                                })
                                .catch(err => console.log(err));

        return userInfo;

    }

    static async allUserCoworkersDepartment() {

        const userDepartmentCoworkers = await fetch(`${this.ulrBase}users/departments/coworkers`, {
                                                    method: "GET",
                                                    headers: this.headers
                                                })
                                                .then(resp => resp.json())
                                                .then(resp => {
                                  
                                                    console.log(resp)
                                                    if(resp.error) {
                                                    
                                                        return Toast.create(resp.error, "red");
                                                    
                                                    }

                                                    return resp;
                    
                                                })
                                                .catch(err => console.log(err));

        return userDepartmentCoworkers;
    
    }

    static async allUserCompanyDepartments() {
    
        const userCompanyDepartments = await fetch(`${this.ulrBase}users/departments`, {
                                            method: "GET",
                                            headers: this.headers
                                        })
                                        .then(resp => resp.json())
                                        .then(resp => {
                                        
                                            console.log(resp);
                                            if(resp.error) {
                                                    
                                                return Toast.create(resp.error, "red");
                                            
                                            }

                                            return resp;

                                        })
                                        .catch(err => console.log(err));

        return userCompanyDepartments;
    
    }

    static async updateUserData(data) {
    
        const userDataUpdate = await fetch(`${this.ulrBase}users`, {
                                           method: "PATCH",
                                           headers: this.headers,
                                           body: JSON.stringify(data)
                                       })
                                       .then(resp => resp.json())
                                       .then(resp => {
                                 
                                            console.log(resp);
                                            if(resp.error) {
                                            
                                                return Toast.create(resp.error, "red");
                                            
                                            }

                                            const standardUpdateModal = document.querySelector(".form__user__standard__update");
                                            
                                            setTimeout(()=> {
                                        
                                                standardUpdateModal.remove();
                                                
                                            }, 2000);

                                            Toast.create("Success! You updated your data.", "linear-gradient(to right, #00b09b, #96c93d)");

                                        })
                                        .catch(err => console.log(err));

        return userDataUpdate;        
    
    }

/*******************************************************************************************************************************************/ 
/*********************************************************ADMIN & LOGGED USERS**************************************************************/ 
/*******************************************************************************************************************************************/

    static async listAllEmployees() {

      const listAllEmployees = await fetch(`${this.ulrBase}users`, {
                                           method: "GET",
                                           headers: this.headers,
                                       })
                                       .then(resp => resp.json())
                                       .then(resp => {
                                 
                                            console.log(resp);
                                            if(resp.error) {
                                            
                                                return Toast.create(resp.error, "red");
                                            
                                            }
                                            return resp;

                                        })
                                        .catch(err => console.log(err));

        return listAllEmployees;        

    }
 
/*******************************************************************************************************************************************/ 
/*********************************************************ADMIN USER ONLY!!!****************************************************************/ 
/*******************************************************************************************************************************************/
    static async noDepartmentUsers() {
    
      const departmentlessUsers = await fetch(`${this.ulrBase}admin/out_of_work`, {
                                           method: "GET",
                                           headers: this.headers,
                                       })
                                       .then(resp => resp.json())
                                       .then(resp => {
                                 
                                            console.log(resp);
                                            if(resp.error) {
                                            
                                                return Toast.create(resp.error, "red");
                                            
                                            }
                                            return resp;

                                        })
                                        .catch(err => console.log(err));

        return departmentlessUsers;
    
    }

    static async updateEmployeeDataAdmin(data, uuid) {
    
      const updatedEmployeeData = await fetch(`${this.ulrBase}admin/update_user/${uuid}`, {
                                           method: "PATCH",
                                           headers: this.headers,
                                           body: JSON.stringify(data)
                                       })
                                       .then(resp => resp.json())
                                       .then(resp => {
                                 
                                            console.log(resp);
                                            if(resp.error) {
                                            
                                                return Toast.create(resp.error, "red");
                                            
                                            }

                                            Toast.create("Success! User data updated.", "linear-gradient(to right, #00b09b, #96c93d)");

                                        })
                                        .catch(err => console.log(err));

        return updatedEmployeeData;
    
    }
    
    static async deleteUser(uuid) {

      const deleteUserRequest = await fetch(`${this.ulrBase}admin/delete_user/${uuid}`, {
                                           method: "DELETE",
                                           headers: this.headers,
                                       })
                                       .then(resp => resp.json())
                                       .then(resp => {
                                 
                                            console.log(resp);
                                            if(resp.error) {
                                            
                                                return Toast.create(resp.error, "red");
                                            
                                            }

                                            return Toast.create("Success! User deleted.", "linear-gradient(to right, #00b09b, #96c93d)");

                                        })
                                        .catch(err => console.log(err));

        return deleteUserRequest;
    
    }

/*******************************************************************************************************************************************/ 
/*********************************************************ADMIN & LOGGED USERS**************************************************************/ 
/*******************************************************************************************************************************************/

/***************************************************************COMPANY********************************************************************/

    static async registerCompany(data) {

      const subscribingCompany = await fetch(`${this.ulrBase}companies`, {
                                           method: "POST",
                                           headers: this.headers,
                                           body: JSON.stringify(data)
                                        })
                                        .then(resp => resp.json())
                                        .then(resp => {
                                 
                                            console.log(resp);
                                            if(resp.error) {
                                            
                                                Toast.create(resp.error, "red");
                                            
                                            }

                                            Toast.create("Success! Company registered.", "linear-gradient(to right, #00b09b, #96c93d)");

                                        })
                                        .catch(err => console.log(err));

        return subscribingCompany;
    
    }

/***************************************************************SECTORS********************************************************************/

    static async listAllSectors() {

      const allSectors = await fetch(`${this.ulrBase}sectors`, {
                                   method: "GET",
                                   headers: this.headers,
                                })
                                .then(resp => resp.json())
                                .then(resp => {
                                 
                                    console.log(resp);
                                    if(resp.error) {
                                            
                                        return Toast.create(resp.error, "red");
                                    
                                    }

                                    return resp;

                                })
                                .catch(err => console.log(err));

        return allSectors;
        
    }

/**************************************************************DEPARTMENT******************************************************************/

    static async listAllDepartments() {

        const allDepartments = await fetch(`${this.ulrBase}departments`, {
                                            method: "GET",
                                            headers: this.headers,
                                        })
                                        .then(resp => resp.json())
                                        .then(resp => {
                                 
                                            console.log(resp);
                                            if(resp.error) {
                                                
                                                return Toast.create(resp.error, "red");
                                            
                                            }

                                            return resp;

                                        })
                                        .catch(err => console.log(err));

        return allDepartments;
    
    }

    static async listAllCompanyDepartments(uuidCompany) {
        
        const allDepartmentsCompany = await fetch(`${this.ulrBase}departments/${uuidCompany}`, {
                                                method: "GET",
                                                headers: this.headers,
                                            })
                                            .then(resp => resp.json())
                                            .then(resp => {
                                 
                                                console.log(resp);
                                                if(resp.error) {
                                                
                                                    return Toast.create(resp.error, "red");
                                                
                                                }

                                                return resp;

                                            })
                                            .catch(err => console.log(err));

        return allDepartmentsCompany;
    
    }

    static async createDepartment(data) {

          const createRequest = await fetch(`${this.ulrBase}departments`, {
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

                                            Toast.create("Success! Department created.", "linear-gradient(to right, #00b09b, #96c93d)");
                                            return resp;

                                        })
                                        .catch(err => console.log(err));

        return createRequest;
    
    }

    static async hireEmployee(data) {

        const hiringRequest = await fetch(`${this.ulrBase}departments/hire/`, {
                                        method: "PATCH",
                                        headers: this.headers,
                                        body: JSON.stringify(data)
                                    })
                                    .then(resp => resp.json())
                                    .then(resp => {
                                 
                                        console.log(resp);
                                        if(resp.error) {
                                        
                                            return Toast.create(resp.error, "red");
                                        
                                        }

                                        Toast.create("Success! Employee hired.", "linear-gradient(to right, #00b09b, #96c93d)");
                                        return resp;

                                    })
                                    .catch(err => console.log(err));

        return hiringRequest;
    
    }

    static async fireEmployee(uuid) {

        const hiringRequest = await fetch(`${this.ulrBase}departments/dismiss/${uuid}`, {
                                        method: "PATCH",
                                        headers: this.headers,
                                    })
                                    .then(resp => resp.json())
                                    .then(resp => {
                                 
                                        console.log(resp);
                                        if(resp.error) {
                                        
                                            return Toast.create(resp.error, "red");
                                        
                                        }

                                        Toast.create("You're fired! >:(", "linear-gradient(to right, #00b09b, #96c93d)");
                                        return resp;

                                    })
                                    .catch(err => console.log(err));

        return hiringRequest;
    
    }

    static async editDepartment(data, uuidCompany) {

        const editingDepartment = await fetch(`${this.ulrBase}departments/${uuidCompany}`, {
                                            method: "PATCH",
                                            headers: this.headers,
                                            body: JSON.stringify(data)
                                        })
                                        .then(resp => resp.json())
                                        .then(resp => {
                                 
                                            console.log(resp);
                                            return resp;

                                        })
                                        .catch(err => console.log(err));

        return editingDepartment;

    }

    static async deleteDepartment(uuidCompany) {

        const deletingDepartment = await fetch(`${this.ulrBase}departments/${uuidCompany}`, {
                                                method: "DELETE",
                                                headers: this.headers,
                                            })
                                            .then(resp => resp.json())
                                            .then(resp => {
                                 
                                                console.log(resp);
                                                return resp;

                                            })
                                            .catch(err => console.log(err));

        return deletingDepartment;
    
    }
}