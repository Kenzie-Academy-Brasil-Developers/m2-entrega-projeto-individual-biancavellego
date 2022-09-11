import { Api } from "../../js/api.js";
import { Modal } from "../../js/modal.js";

export class HomePage {

    static handleDarkMode() {
        
        const modeButton = document.querySelectorAll("#dark__toggle");
        const html       = document.querySelector("html");

        modeButton.forEach(element => {
        
            element.addEventListener("click", () => {
            
                html.classList.toggle("dark__mode");
            
            });
        });
    }

    static handleMobileMenu() {
    
        const menuMobile        = document.querySelector(".menu__button--mobile");
        const menuMobileOptions = document.querySelector(".menu__button__container--mobile");

        menuMobile.addEventListener("click", () => {
        
            menuMobileOptions.classList.toggle("hidden");
        
        });
    }

    static pauseVideo() {
    
        const videoMobile  = document.querySelector("#main__video--mobile");
        const videoDesktop = document.querySelector("#main__video--desktop");
        const videoButton  = document.querySelector(".main__pause__button");

        videoButton.addEventListener("click", () => {
        
            if(videoButton.innerHTML === "Pause video") {
            
                videoMobile.pause();
                videoDesktop.pause();
                videoButton.innerHTML = "Play video";
            
            }else if(videoButton.innerHTML === "Play video") {

                videoMobile.play();
                videoDesktop.play();
                videoButton.innerHTML = "Pause video";
            
            }        
        });
    }

    static handleLogout() {
        
        const logoutButton = document.querySelectorAll(".login__button");
        const token        = localStorage.getItem("@kenzieEnterprises:token");

        logoutButton.forEach(element => {

            if(token) {
        
                if(element.className.includes("menu__button--desktop login__button")) {
                    
                    const tagI = document.createElement("i");
                    tagI.classList.add("fa-solid", "fa-arrow-right-from-bracket");

                    element.className = "menu__button--desktop logout__button";
                    element.innerHTML = "Logout";
                    element.append(tagI);

                }else if(element.className.includes("menu__user__button login__button")) {

                    const tagI = document.createElement("i");
                    tagI.classList.add("fa-solid", "fa-user-tie");

                    element.className = "menu__user__button login logout__button";
                    element.innerHTML = "";
                    element.append(tagI);

                }else if(element.className.includes("menu__button__mobile login__button")) {
                
                    const tagImg = document.createElement("img");
                    tagImg.src   = `../../img/icons/Grid - Small.svg`;

                    element.className = "menu__button__mobile logout__button";
                    element.innerText = "Logout";
                    element.append(tagImg);
              
                }

                element.addEventListener('click', () => {

                    localStorage.clear();
                    window.location.replace('../home/index.html');
            
                });
            }
        });
    }

    static async renderSectorMenu() {
    
        const sectorOptionsMobile  = document.querySelector(".bySector__options__container--mobile");
        const sectorOptionsDesktop = document.querySelector(".bySector__options__container--desktop");
        const bySectorButton       = document.querySelectorAll(".bySector__button");
        const allCompaniesData     = await Api.listCompanies();
        const arraySectors         = [];

        allCompaniesData.forEach(object => {
            
            const sectors = object.sectors.description;

            arraySectors.push(sectors);

        });

        const arraySectorsNonDuplicates = [...new Set(arraySectors)];

        bySectorButton.forEach(element => {
        
            element.addEventListener("click", () => {

                sectorOptionsMobile.classList.toggle("hidden");
                sectorOptionsDesktop.classList.toggle("hidden");
                sectorOptionsMobile.innerHTML  = "";
                sectorOptionsDesktop.innerHTML = "";

                arraySectorsNonDuplicates.forEach(sector => {
                
                    const tagLiMobile      = document.createElement("li");
                    const tagLiDesktop     = document.createElement("li");
                    tagLiMobile.innerHTML  = sector;
                    tagLiDesktop.innerHTML = sector;
            
                    sectorOptionsMobile.append(tagLiMobile);
                    sectorOptionsDesktop.append(tagLiDesktop);
                
                });

                arraySectorsNonDuplicates.forEach(async (sector) => {
                
                    await HomePage.renderBySector(sector);
                
                });
            });
        });
    }

    static async renderAllCompanies() {
    
        const main               = document.querySelector("main");
        const ulContainerMain    = document.createElement("ul");
        const mainTitleContainer = document.querySelector(".main__title__container");
        const showAllbutton      = document.querySelectorAll(".showAll__button");
        const allCompaniesData   = await Api.listCompanies();
           
        showAllbutton.forEach(element => {

            element.addEventListener("click", async () => {
           
                mainTitleContainer.classList.add("hidden");
                ulContainerMain.innerHTML        = "";
   
                allCompaniesData.forEach(async (object) => {
                   
                // const sample = {
                //      "name": 'Skina Lanches', 
                //      "opening_hours": '09:00', 
                //      "description": 'Podrão de qualidade', 
                //      "sectors": 
                //          {"uuid": '08502c47-9072-4c11-803c-5c4dd72c0531',
                //          "description": 'Alimenticio'},
                //      "uuid": '831b0657-85cf-40d6-872f-366f7ac57920',
                // }

                const liContainerCompany = document.createElement("li");
                const name               = document.createElement("p");
                const hours              = document.createElement("p");
                const description        = document.createElement("p");
                const sector             = document.createElement("p");

                ulContainerMain.classList.add("main__list__container");

                name.innerText        = await object.name;
                hours.innerText       = await object.opening_hours;
                description.innerText = await object.description;
                sector.innerText      = await object.sectors.description;

                liContainerCompany.append(name, hours, description, sector);
                ulContainerMain.append(liContainerCompany);
                main.append(ulContainerMain);

                });
            });
        });
    }

    static async renderBySector(sector) {

        const main               = document.querySelector("main");
        const ulContainerMain    = document.createElement("ul");
        const mainTitleContainer = document.querySelector(".main__title__container");
        const sectorULMobile     = document.querySelector(".bySector__options__container--mobile");
        const sectorULDesktop    = document.querySelector(".bySector__options__container--desktop");
        const sectorLiMobile     = document.querySelectorAll(".bySector__options__container--mobile li");
        const sectorLiDesktop    = document.querySelectorAll(".bySector__options__container--desktop li");

        sectorULMobile.addEventListener("click", async (event) => {

            sectorLiMobile.forEach(async (element) => {
            
                if(event.target === element) {
            
                    mainTitleContainer.classList.add("hidden");
                    ulContainerMain.innerHTML = "";
    
                    if(element.innerHTML === sector) {
                
                        const objectArraySector = await Api.listCompaniesBySector(sector);
                        objectArraySector.forEach(async (object) => {
                        
                            const liContainerCompany = document.createElement("li");
                            const name               = document.createElement("p");
                            const hours              = document.createElement("p");
                            const description        = document.createElement("p");
                            const sector             = document.createElement("p");
            
                            ulContainerMain.classList.add("main__list__container");
            
                            name.innerText        = await object.name;
                            hours.innerText       = await object.opening_hours;
                            description.innerText = await object.description;
                            sector.innerText      = await object.sectors.description;
            
                            liContainerCompany.append(name, hours, description, sector);
                            ulContainerMain.append(liContainerCompany);
                            main.append(ulContainerMain);
                        
                        });
                    }
                }
            })
        });

        sectorULDesktop.addEventListener("click", async (event) => {
        
            sectorLiDesktop.forEach(async (element) => {
            
                if(event.target === element) {
            
                    mainTitleContainer.classList.add("hidden");
                    ulContainerMain.innerHTML = "";
    
                    if(element.innerHTML === sector) {
                
                        const objectArraySector = await Api.listCompaniesBySector(sector);
                        objectArraySector.forEach(async (object) => {
                        
                            const liContainerCompany = document.createElement("li");
                            const name               = document.createElement("p");
                            const hours              = document.createElement("p");
                            const description        = document.createElement("p");
                            const sector             = document.createElement("p");
            
                            ulContainerMain.classList.add("main__list__container");
            
                            name.innerText        = await object.name;
                            hours.innerText       = await object.opening_hours;
                            description.innerText = await object.description;
                            sector.innerText      = await object.sectors.description;
            
                            liContainerCompany.append(name, hours, description, sector);
                            ulContainerMain.append(liContainerCompany);
                            main.append(ulContainerMain);
                        
                        });
                    }
                }
            });
        });
    }
}

HomePage.handleDarkMode();
HomePage.handleMobileMenu();
HomePage.handleLogout();
HomePage.pauseVideo();
HomePage.renderAllCompanies();
HomePage.renderSectorMenu();
Modal.showLoginModal();
Modal.showSignUpModal();