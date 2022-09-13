import { Api } from "../../js/api.js";
import { Toast } from "../../js/toast.js";
import { Modal } from "../../js/modal.js";
export class Dashboard {

    static token   = localStorage.getItem("@kenzieEnterprises:token");
    static isAdmin = JSON.parse(window.localStorage.getItem("@kenzieEnterprises:is_admin"));

    static async renderDashboard() {

        if(!this.token) {
        
            window.location.replace("../home/index.html");
            
        }

        if(this.isAdmin) {
        
            const adminOptions = document.querySelectorAll(".admin");

            adminOptions.forEach(element => {
            
                element.classList.remove("admin");
            
            });
        }
    }

    static handleDarkMode() {
    
        const modeButton = document.querySelector("#dark__toggle");
        const html       = document.querySelector("html");

        modeButton.addEventListener("click", () => {
            
                html.classList.toggle("dark__mode");
            
        });
    
    }

    static handleProfileMenu() {
    
        const profileButton = document.querySelector(".nav__menu");
        const profileMenu   = document.querySelector(".nav__button__container");

        profileButton.addEventListener("click", () => {
        
            profileMenu.classList.toggle("hidden");
        
        });
    }

    static handleProfileMenuOptions() {

        const companyButton  = document.querySelector(".company__button");
        const companyOptions = document.querySelector(".company__button__options");

        companyButton.addEventListener("click", () => {
        
            companyOptions.classList.toggle("hiddenOptions");
        
        });

        const sectorsButton  = document.querySelector(".sectors__button");
        const sectorsOptions = document.querySelector(".sectors__button__options");

        sectorsButton.addEventListener("click", () => {
        
            sectorsOptions.classList.toggle("hiddenOptions");
        
        });

        const departmentButton  = document.querySelector(".department__button");
        const departmentOptions = document.querySelector(".department__button__options");

        departmentButton.addEventListener("click", () => {
        
            departmentOptions.classList.toggle("hiddenOptions");
        
        });
    }

    static handleDesktopMenu() {
    
        const companyButton  = document.querySelector(".company__button--desktop");
        const companyOptions = document.querySelector(".company__button__options--desktop");

        companyButton.addEventListener("click", () => {
        
            companyOptions.classList.toggle("hidden");
        
        });

        const sectorsButton = document.querySelector(".sectors__button--desktop");
        const sectorsOptions = document.querySelector(".sectors__button__options--desktop");

        sectorsButton.addEventListener("click", () => {
        
            sectorsOptions.classList.toggle("hidden");
        
        });

        const departmentButton = document.querySelector(".department__button--desktop");
        const departmentOptions = document.querySelector(".department__button__options--desktop");

        departmentButton.addEventListener("click", () => {
        
            departmentOptions.classList.toggle("hidden");
        
        });
    }

    static handleLogout() {
    
        const navBarLogoutButton = document.querySelector(".nav__button__logout");
        const menuLogoutButton   = document.querySelector(".logout__button");

        navBarLogoutButton.addEventListener("click", () => {
        
            localStorage.clear();
            window.location.replace('../home/index.html');
        
        });

        menuLogoutButton.addEventListener("click", () => {
        
            localStorage.clear();
            window.location.replace('../home/index.html');
        
        });
    }

    static resetScreen() {
    
        const main            = document.querySelector("main");
        const ulContainerMain = document.querySelector(".main__list__container");

        main.addEventListener("click", () => {
        
            ulContainerMain.classList.add("hidden");
            ulContainerMain.innerHTML = "";
        
        });
    }

    static async renderUserInfo() {
    
        const ulContainerMain = document.querySelector(".main__list__container");
        const profileButton   = document.querySelector(".profile__button");
       
        profileButton.addEventListener("click", async () => {
            
            const userInfo = await Api.loggedUserInfo();
            ulContainerMain.classList.toggle("hidden");
            ulContainerMain.innerHTML = "";

            if(userInfo.error) {
        
                Toast.create(userInfo.error, "red");
            }

            const liContainer    = document.createElement("li");
            const username       = document.createElement("p");
            const email          = document.createElement("p");
            const proLevel       = document.createElement("p");
            const kindofWork     = document.createComment("p");

            username.innerText   = `Username: ${await userInfo.username}`;
            email.innerText      = `Email: ${await userInfo.email}`;
            proLevel.innerText   = `Professional Level: ${await userInfo.professional_level}`;
            kindofWork.innerText = `Job: ${await userInfo.kind_of_work}`;

            liContainer.append(username, email, proLevel, email, kindofWork, kindofWork);
            ulContainerMain.append(liContainer);

        });
    }

    static async renderAllCoworkers() {
    
        const ulContainerMain    = document.querySelector(".main__list__container");
        const allCoworkersButton = document.querySelector(".your__coworkers__button");

            allCoworkersButton.addEventListener("click", async () => {
                
                const allCoworkersData = await Api.allUserCoworkersDepartment();
            
                ulContainerMain.classList.toggle("hidden");
                ulContainerMain.innerHTML = "";

                // "uuid": "fc65d0be-507e-4c6e-badc-ccc4417ef980",
                // "name": "TI",
                // "description": "Departamento de TI",
                // "company_uuid": "3a1746a3-c8e4-4a77-8e55-5de43ef245f8",
                // "users": [
                //     {
                //         "uuid": "0212ff4a-94de-4c97-8fbf-e7e4bb06e258",
                //         "username": "Teste",
                //         "email": "mail@mail.com",
                //         "password": "$2a$08$YijK0p9TBsDW9UIyc3NPjuoFzHq3/WGUWXTp/SlNeEWCITWpYqLwO",
                //         "professional_level": "sênior",
                //         "kind_of_work": null,
                //         "is_admin": false,
                //         "department_uuid": "fc65d0be-507e-4c6e-badc-ccc4417ef980"

                const liContainer     = document.createElement("li");
                const sector          = document.createElement("p");
                const description     = document.createElement("p");
                const usersTitle      = document.createElement("p");
                const username        = document.createElement("p");
                const email           = document.createElement("p");
                const proLevel        = document.createElement("p");
                const kindofWork      = document.createComment("p");

                sector.innerText      = `Sector: ${allCoworkersData.name}`;
                description.innerText = `Description: ${allCoworkersData.description}`;
                usersTitle.innerText  = `Your Coworkers: `;

                 (allCoworkersData.users).forEach(coworkers => {
                
                    username.innerText    = `Username: ${coworkers.coworkersname}`;
                    email.innerText       = `Email: ${coworkers.email}`;
                    proLevel.innerText    = `Professional Level: ${coworkers.professional_level}`;
                    kindofWork.innerText  = `Job: ${coworkers.kind_of_work}`;

                    liContainer.append(sector, description, username, email, proLevel, kindofWork);
                    ulContainerMain.append(liContainer);
            });
        });
    }

    static renderUserDepartments() {
    
        const ulContainerMain       = document.querySelector(".main__list__container");
        const yourDepartmentsButton = document.querySelector(".your__departments__button");

        yourDepartmentsButton.addEventListener("click", async () => {
            
            const usersDepartments = await Api.allUserCompanyDepartments();
            ulContainerMain.classList.toggle("hidden");
            ulContainerMain.innerHTML = "";

            // {
            //     "uuid": "3a1746a3-c8e4-4a77-8e55-5de43ef245f8",
            //     "name": "Nerd lab",
            //     "opening_hours": "09:00",
            //     "description": "Criamos um site rapidão pra você",
            //     "sector_uuid": "17247c6b-5205-4067-9695-278fcb97d592",
            //     "departments": [
            //         {
            //             "uuid": "fc65d0be-507e-4c6e-badc-ccc4417ef980",
            //             "name": "TI",
            //             "description": "Departamento de TI",
            //             "company_uuid": "3a1746a3-c8e4-4a77-8e55-5de43ef245f8"
            //         },
            //         {
            //             "uuid": "09b216d6-6f25-4ad6-89f4-6eece6602feb",
            //             "name": "RH",
            //             "description": "Recrutamento e seleção",
            //             "company_uuid": "3a1746a3-c8e4-4a77-8e55-5de43ef245f8"
            //         }
                
            const liContainer           = document.createElement("li");
            const companyName           = document.createElement("p");
            const openingHours          = document.createElement("p");
            const companyDescription    = document.createElement("p");
            const departmentsTitle      = document.createElement("p");
            const departmentName        = document.createElement("p");
            const departmentDescription = document.createElement("p");

            companyName.innerText        = `Company Name: ${usersDepartments.name}`;
            openingHours.innerText       = `Opens: ${usersDepartments.opening_hours}`;
            companyDescription.innerText = `Description: ${usersDepartments.description}`;
            departmentsTitle.innerText   = `All Company Departments: `;

            (usersDepartments.users).forEach(departments => {
                
                departmentName.innerText        = `Department's Name: ${departments.name}`;
                departmentDescription.innerText = `Department Description: ${departments.description}`;

                liContainer.append(companyName, openingHours, companyDescription, departmentsTitle, departmentName, departmentDescription);
                ulContainerMain.append(liContainer);
                 
            });
        });
    }

    static allEmployees() {
    
        
    
    }

}

Dashboard.renderDashboard();
Dashboard.handleDarkMode();
Dashboard.handleProfileMenu();
Dashboard.handleProfileMenuOptions();
Dashboard.handleDesktopMenu();
Dashboard.handleLogout();
Dashboard.renderUserInfo();
Dashboard.resetScreen();
Dashboard.renderAllCoworkers();
Dashboard.renderUserDepartments();
Modal.showStandardUserUpdate();