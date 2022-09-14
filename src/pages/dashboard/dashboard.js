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

        const resetButton  = document.querySelector(".fa-arrow-rotate-left");
        const ulContainerMain = document.querySelector(".main__list__container");

        resetButton.addEventListener("click", () => {
        
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
            const kindofWork     = document.createElement("p");
            const isAdmin        = document.createElement("p");

            username.innerText   = `Username: ${userInfo.username}`;
            email.innerText      = `Email: ${userInfo.email}`;
            proLevel.innerText   = `Professional Level: ${userInfo.professional_level}`;
            kindofWork.innerText = `Job: ${userInfo.kind_of_work}`;
            isAdmin.innerText    = `Is Admin: ${userInfo.is_admin}`;

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

                allCoworkersData.forEach(coworker => {

                    const liContainer     = document.createElement("li");
                    const sector          = document.createElement("p");
                    const description     = document.createElement("p");
                    const usersTitle      = document.createElement("p");
                    const username        = document.createElement("p");
                    const email           = document.createElement("p");
                    const proLevel        = document.createElement("p");
                    const kindofWork      = document.createComment("p");

                    sector.innerText      = `Sector: ${coworker.name}`;
                    description.innerText = `Description: ${coworker.description}`;
                    usersTitle.innerText  = `Your Coworkers: `;
                    username.innerText    = `Username: ${coworker.users.name}`;
                    email.innerText       = `Email: ${coworker.users.email}`;
                    proLevel.innerText    = `Professional Level: ${coworker.users.professional_level}`;
                    kindofWork.innerText  = `Job: ${coworker.users.kind_of_work}`;

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

            usersDepartments.forEach(department => {

                const liContainer           = document.createElement("li");
                const companyName           = document.createElement("p");
                const openingHours          = document.createElement("p");
                const companyDescription    = document.createElement("p");
                const departmentsTitle      = document.createElement("p");
                const departmentName        = document.createElement("p");
                const departmentDescription = document.createElement("p");

                companyName.innerText        = `Company Name: ${department.name}`;
                openingHours.innerText       = `Opens: ${department.opening_hours}`;
                companyDescription.innerText = `Description: ${department.description}`;
                departmentsTitle.innerText   = `All Company Departments: `;
                departmentName.innerText        = `Department's Name: ${department.departments.name}`;
                departmentDescription.innerText = `Department Description: ${department.departments.description}`;

                liContainer.append(companyName, openingHours, companyDescription, departmentsTitle, departmentName, departmentDescription);
                ulContainerMain.append(liContainer);
                 
            });
        });
    }

    static async renderAllEmployees() {
    
        const ulContainerMain = document.querySelector(".main__list__container");
        const allUsersButton  = document.querySelector(".all__users__button");

        allUsersButton.addEventListener("click", async () => {
        
            const allUsers = await Api.listAllEmployees();
            ulContainerMain.classList.toggle("hidden");
            ulContainerMain.innerHTML = "";

            allUsers.forEach(user => {
            
                const userCards = Dashboard.userCardGenerator(user);
                ulContainerMain.append(userCards);
            
            });
        });
    }

    static async renderNoDepartmentUsers() {
    
        const ulContainerMain    = document.querySelector(".main__list__container");
        const noDepartmentButton = document.querySelector(".no__department__button");

        noDepartmentButton.addEventListener("click", async () => {
            
            const noDepartmentUsers = await Api.noDepartmentUsers();
            ulContainerMain.classList.toggle("hidden");
            ulContainerMain.innerHTML = "";

            noDepartmentUsers.forEach(user => {
                
                const userCards = Dashboard.userCardGenerator(user);
                ulContainerMain.append(userCards);
            
            });
        });
    }

    static userCardGenerator(eachUser) {
        
        const liContainer = document.createElement("li");
            
        // "uuid": "b4808e91-fc8b-433b-b372-36b2d222888a",
        // "username": "ADMIN",
        // "email": "admin@mail.com",
        // "password": "$2a$08$NAsa8GwVgqY8EuM.1ocBC.ea3p3hFwm8UgidwzKcLgee3s7P9WgfG",
        // "professional_level": "junior",
        // "kind_of_work": "home office",
        // "is_admin": true,
        // "department_uuid": null

        const username    = document.createElement("p");
        const email       = document.createElement("p");
        const proLevel    = document.createElement("p");
        const kindOfWork  = document.createElement("p");
        const isAdmin     = document.createElement("p");

        username.innerText   = `Username: ${eachUser.username}`;
        email.innerText      = `E-mail: ${eachUser.email}`;
        proLevel.innerText   = `Professional Level: ${eachUser.professional_level}`;
        kindOfWork.innerText = `Job Type: ${eachUser.kind_of_work}`;
        isAdmin.innerText    = `Is Admin: ${eachUser.is_admin}`;

        liContainer.append(username, email, proLevel, kindOfWork, isAdmin);

        return liContainer;

    }

    static async renderAllSectors() {

        const ulContainerMain  = document.querySelector(".main__list__container");
        const allSectorsButton = document.querySelector(".list__all__sectors");

        allSectorsButton.addEventListener("click", async () => {
            
            const allSectors = await Api.listAllSectors();
            ulContainerMain.classList.remove("hidden");
            ulContainerMain.innerHTML = "";

            allSectors.forEach(sector => {
                
                const liContainer = document.createElement("li");
                const description = document.createElement("p");
    
                description.innerText = `Sector: ${sector.description}`;

                liContainer.append(description);
                ulContainerMain.append(liContainer);
            
            });
        });
    }

    static renderAllDepartments() {
    
        const ulContainerMain      = document.querySelector(".main__list__container");
        const allDepartmentsButton = document.querySelector(".all__departments");

        allDepartmentsButton.addEventListener("click", async () => {
            
            const allDepartments = await Api.listAllDepartments();
            ulContainerMain.classList.remove("hidden");
            ulContainerMain.innerHTML = "";

            allDepartments.forEach(department => {
                
                const liContainer = document.createElement("li");
                const description = document.createElement("p");
    
                description.innerText = `Department: ${department.description}`;

                liContainer.append(description);
                ulContainerMain.append(liContainer);
            
            });
        });
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
Dashboard.renderAllEmployees();
Dashboard.renderNoDepartmentUsers();
Modal.showAdminUserUpdate();
Modal.showDeleteUserAdmin();
Dashboard.renderAllSectors();
Dashboard.renderAllDepartments();
Modal.showRegisterCompany();
Modal.showAllCompanyDepartments();
Modal.showCreateDepartment();
Modal.showHireEmployee();
Modal.showFireEmployee();