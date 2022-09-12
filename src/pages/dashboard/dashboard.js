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
        
            const adminOptions = document.querySelector(".admin");
            adminOptions.classList.remove("admin");
        
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

}

Dashboard.renderDashboard();
Dashboard.handleDarkMode();
Dashboard.handleProfileMenu();
Dashboard.handleProfileMenuOptions();
Dashboard.handleDesktopMenu();