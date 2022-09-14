import { Api } from "./api.js";
import { Toast } from "./toast.js";
export class Modal {

    static isAdmin = localStorage.getItem("@kenzieEnterprises:is_admin");

    static loginForm() {

        const sectionLogin   = document.createElement("section");
        const form           = document.createElement("form");
        const divTitle       = document.createElement("div");
        const tagH1          = document.createElement("h1");
        const tagFontAwesome = document.createElement("i");
        const divInput       = document.createElement("div");
        const labelEmail     = document.createElement("label");
        const inputEmail     = document.createElement("input");
        const labelPassword  = document.createElement("label");
        const inputPassword  = document.createElement("input"); 
        const button         = document.createElement("button");
        const tagP = `<p>Not a user yet? <span class="form__handle">Create an account</span> and <span class="form__handle">join us</span> today</p>`;
        
        sectionLogin.classList.add("form__container", "form__login");
        form.classList.add("form__modal");
        divTitle.classList.add("form__title__container");
        tagFontAwesome.classList.add("fa-solid", "fa-xmark");
        divInput.classList.add("form__modal__container");
        inputEmail.setAttribute("id", "form__email__login");
        inputPassword.setAttribute("id", "form__password__login");
        button.classList.add("form__button");

        labelEmail.setAttribute("for", "email");
        inputEmail.setAttribute("type", "text");
        inputEmail.setAttribute("title", "E-mail");
        inputEmail.setAttribute("name", "email");
        labelPassword.setAttribute("for", "email");
        inputPassword.setAttribute("type", "password");
        inputPassword.setAttribute("title", "Password");
        inputPassword.setAttribute("name", "password");
        button.setAttribute("type", "button");

        tagH1.innerText           = "Employee Login";
        labelEmail.innerText      = "Email:";
        inputEmail.placeholder    = "Type your email here...";
        labelPassword.innerText   = "Password:";
        inputPassword.placeholder = "Type password here...";
        button.innerText          = "Login";

        divTitle.append(tagH1, tagFontAwesome);
        divInput.append(labelEmail, inputEmail, labelPassword, inputPassword, button);
        divInput.insertAdjacentHTML("beforeend", tagP);
        form.append(divTitle, divInput);
        sectionLogin.append(form);

        return sectionLogin;
    
    }

    static signUpForm() {
    
        const sectionSignUp        = document.createElement("section");
        const form                 = document.createElement("form");
        const divTitle             = document.createElement("div");
        const tagH1                = document.createElement("h1");
        const tagFontAwesome       = document.createElement("i");
        const divInput             = document.createElement("div");
        const labelUsername        = document.createElement("label");
        const inputUsername        = document.createElement("input");
        const labelEmail           = document.createElement("label");
        const inputEmail           = document.createElement("input");
        const labelCreatePassword  = document.createElement("label");
        const inputCreatePassword  = document.createElement("input");
        const labelConfirmPassword = document.createElement("label");                        
        const inputConfirmPassword = document.createElement("input");
        const labelProLevel        = document.createElement("label");
        const divRegisterContainer = document.createElement("div");
        const divInputContainer1   = document.createElement("div");
        const labelJunior          = document.createElement("label");
        const inputJunior          = document.createElement("input");
        const divInputContainer2   = document.createElement("div");
        const labelMid             = document.createElement("label");
        const inputMid             = document.createElement("input");
        const divInputContainer3   = document.createElement("div");
        const labelSenior          = document.createElement("label");
        const inputSenior          = document.createElement("input");
        const spanErrorMessage     = document.createElement("span");
        const spanErrorMessage2    = document.createElement("span");
        const registerButton       = document.createElement("button");
        const tagP                 = `<p>Already a user? Login with your account <span class="form__handle">here!</span></p>`;

        sectionSignUp.classList.add("form__container", "form__signUp");
        form.classList.add("form__modal");
        divTitle.classList.add("form__title__container");
        tagFontAwesome.classList.add("fa-solid", "fa-xmark");
        divInput.classList.add("form__modal__container");
        inputUsername.setAttribute("id", "form__username__signup");
        inputEmail.setAttribute("id", "form__email__signup__input");
        inputCreatePassword.setAttribute("id", "form__password__signup");
        inputConfirmPassword.setAttribute("id", "form__password__signup__confirm");
        divRegisterContainer.classList.add("form__register__container");
        divInputContainer1.classList.add("form__register__proLevel__container");
        inputJunior.setAttribute("id", "junior");
        divInputContainer2.classList.add("form__register__proLevel__container");
        inputMid.setAttribute("id", "mid-level");
        divInputContainer3.classList.add("form__register__proLevel__container");
        inputSenior.setAttribute("id", "senior");
        spanErrorMessage.classList.add("form__error__message", "error__password");
        spanErrorMessage2.classList.add("form__error__message", "error__proLevel");
        registerButton.classList.add("form__button");

        labelUsername.setAttribute("for", "username");
        inputUsername.setAttribute("type", "text");
        inputUsername.setAttribute("title", "Username");
        labelEmail.setAttribute("for", "email");
        inputEmail.setAttribute("type", "text");
        inputEmail.setAttribute("title", "E-mail");
        labelCreatePassword.setAttribute("for", "text");
        inputCreatePassword.setAttribute("type", "text");
        inputCreatePassword.setAttribute("title", "Password");
        labelConfirmPassword.setAttribute("for", "text");
        inputConfirmPassword.setAttribute("type", "text");
        inputConfirmPassword.setAttribute("title", "Password Confirmation");
        labelProLevel.setAttribute("for", "text");
        labelJunior.setAttribute("for", "text");
        inputJunior.setAttribute("type", "radio");
        inputJunior.setAttribute("title", "Professional level");
        inputJunior.setAttribute("name", "professional_level");
        inputJunior.setAttribute("value", "Junior");
        labelMid.setAttribute("for", "text");
        inputMid.setAttribute("type", "radio");
        inputMid.setAttribute("title", "Professional level");
        inputMid.setAttribute("name", "professional_level");
        inputMid.setAttribute("value", "Mid-Level");
        labelSenior.setAttribute("for", "text");
        inputSenior.setAttribute("type", "radio");
        inputSenior.setAttribute("title", "Professional level");
        inputSenior.setAttribute("name", "professional_level");
        inputSenior.setAttribute("value", "Senior");
        registerButton.setAttribute("type", "button");
        
        tagH1.innerText                  = "Register";
        labelUsername.innerText          = "Username";
        inputUsername.placeholder        = "Create username...";
        labelEmail.innerText             = "Email";
        inputEmail.placeholder           = "Add your email here...";
        labelCreatePassword.innerText    = "Create password:";
        inputCreatePassword.placeholder  = "Create password here...";
        labelConfirmPassword.innerText   = "Confirm password:";
        inputConfirmPassword.placeholder = "Confirm password...";
        labelProLevel.innerText          = "Select your professional level:";
        labelJunior.innerText            = "Junior";
        labelMid.innerText               = "Mid-Level";
        labelSenior.innerText            = "Senior";
        spanErrorMessage.innerText       = "";
        registerButton.innerText         = "Register account";

        divTitle.append(tagH1, tagFontAwesome);
        divRegisterContainer.append(divInputContainer1, divInputContainer2, divInputContainer3);
        divInputContainer1.append(labelJunior, inputJunior);
        divInputContainer2.append(labelMid, inputMid);
        divInputContainer3.append(labelSenior, inputSenior);
        divInput.append(labelUsername, inputUsername, labelEmail, inputEmail, labelCreatePassword, inputCreatePassword, spanErrorMessage, labelConfirmPassword, inputConfirmPassword, labelProLevel, divRegisterContainer, spanErrorMessage2, registerButton);
        divInput.insertAdjacentHTML("beforeend", tagP);
        form.append(divTitle, divInput);
        sectionSignUp.append(form);

        return sectionSignUp;

    }

    static showLoginModal() {
    
        const main         = document.querySelector("main");
        const loginButton  = document.querySelectorAll(".login__button");
        
        loginButton.forEach(element => {
        
            element.addEventListener("click", () => {
            
                const sectionLogin = Modal.loginForm();
                main.append(sectionLogin);
                Modal.closeModal();
                Modal.handleLoginModal();
                Modal.redirect();
                
                const mainSection  = document.querySelectorAll("section");

                if(mainSection.length > 1) {
                
                    mainSection.forEach(elem => {
                    
                        elem.remove();
                    
                    });
                }
            });
        });
    }

    static showSignUpModal() {
        
        const main         = document.querySelector("main");
        const signUpButton = document.querySelectorAll(".signUp__button");
    
        signUpButton.forEach(element => {
            
            element.addEventListener("click", () => {
                
                const sectionSignUp = Modal.signUpForm();
                main.append(sectionSignUp);
                Modal.closeModal();
                Modal.handleSignUpModal();
                Modal.redirect();

                const mainSection = document.querySelectorAll("section");

                if(mainSection.length > 1) {
                
                    mainSection.forEach(elem => {
                    
                        elem.remove();
                    
                    });
                }
            });
        });
    }

    static redirect() {

        const main     = document.querySelector("main");
        const redirect = document.querySelectorAll(".form__handle");

        redirect.forEach(element => {

            element.addEventListener("click", () => {
            
                console.log(element.closest("section").className);

                if(element.closest("section").className.includes("form__login")) {
            
                    const sectionSignUp = Modal.signUpForm();
                    main.append(sectionSignUp);
                    Modal.closeModal();
                
                }else if(element.closest("section").className.includes("form__signUp")) {
                
                    const sectionLogin  = Modal.loginForm();
                    main.append(sectionLogin);
                    Modal.closeModal();
                
                }
            });
        });
    }

    static closeModal() {
    
        const xFactor = document.querySelector(".fa-xmark");
        const modal   = document.querySelector(".form__container");

        xFactor.addEventListener("click", () => {
        
            modal.classList.add("disappearAnimation");

            setTimeout(()=> {
                
                modal.remove();
            
            }, 500);
        });
    }

    static handleLoginModal() {

        const token = localStorage.getItem("@kenzieEnterprises:token");

        if(token) {
        
            window.location.replace("../dashboard/dashboard.html");
        
        }

        const inputEmail       = document.querySelector("#form__email__login");
        const inputPassword    = document.querySelector("#form__password__login");
        const loginButtonModal = document.querySelector(".form__button");

        loginButtonModal.addEventListener("click", async () => {
        
            const data = {
                email: inputEmail.value,
                password: inputPassword.value,
            }

            await Api.login(data);
        
        });
    }

    static handleSignUpModal() {

        const inputUsername        = document.querySelector("#form__username__signup");
        const inputPassword        = document.querySelector("#form__password__signup");
        const confirmedPassword    = document.querySelector("#form__password__signup__confirm");
        const inputEmail           = document.querySelector("#form__email__signup__input");        
        const inputJunior          = document.querySelector("#junior");
        const inputMidLevel        = document.querySelector("#mid-level");
        const inputSenior          = document.querySelector("#senior");
        const registerButton       = document.querySelector(".form__button");
        const spanErrorMessage     = document.querySelector(".error__password");
        const spanErrorMessage2    = document.querySelector(".error__proLevel");
        let   proLevelSelected;

        registerButton.addEventListener("click", async () => {
        
            if(inputPassword.value !== confirmedPassword.value) {
        
                spanErrorMessage.innerHTML = "Passwords do not match. Please, type again your password."
            
            }

            if(inputJunior.checked) {
                
                proLevelSelected = "júnior";

            }else if(inputMidLevel.checked) {
                
                proLevelSelected = "pleno";
            
            }else if(inputSenior.checked) {
            
                proLevelSelected = "sênior";
            
            } else {
            
                spanErrorMessage2.innerText = "Please, select a professional level.";
            
            }

            const data = {
                "password": confirmedPassword.value,
                "email": inputEmail.value,
                "professional_level": proLevelSelected,
                "username": inputUsername.value
            }

            await Api.createUser(data);

        });
    }

    static standardUserUpdateForm() {
    
        const sectionStandardUpdate = document.createElement("section");
        const form                  = document.createElement("form");
        const divTitle              = document.createElement("div");
        const tagH1                 = document.createElement("h1");
        const tagFontAwesome        = document.createElement("i");
        const divInput              = document.createElement("div");
        const labelNewUsername      = document.createElement("label");
        const inputNewUsername      = document.createElement("input");
        const labelEmail            = document.createElement("label");
        const inputEmail            = document.createElement("input");
        const labelPassword         = document.createElement("label");
        const inputPassword         = document.createElement("input"); 
        const button                = document.createElement("button");
        const tagP = `<p>© 2022 Kenzie Enterprises™ | All Rights Reserved</p>`;
        
        sectionStandardUpdate.classList.add("form__container", "form__user__standard__update");
        form.classList.add("form__modal");
        divTitle.classList.add("form__title__container");
        tagFontAwesome.classList.add("fa-solid", "fa-xmark");
        divInput.classList.add("form__modal__container");
        inputNewUsername.setAttribute("id", "form__username__update");
        inputEmail.setAttribute("id", "form__email__update");
        inputPassword.setAttribute("id", "form__password__update");
        button.classList.add("form__button");

        labelNewUsername.setAttribute("for", "username");
        inputNewUsername.setAttribute("type", "text");
        inputNewUsername.setAttribute("title", "Username");
        inputNewUsername.setAttribute("name", "username");
        labelEmail.setAttribute("for", "email");
        inputEmail.setAttribute("type", "text");
        inputEmail.setAttribute("title", "E-mail");
        inputEmail.setAttribute("name", "email");
        labelPassword.setAttribute("for", "email");
        inputPassword.setAttribute("type", "password");
        inputPassword.setAttribute("title", "Password");
        inputPassword.setAttribute("name", "password");
        button.setAttribute("type", "button");

        tagH1.innerText              = "Update Your Data";
        labelNewUsername.innerText   = "New User Name:";
        inputNewUsername.placeholder = "Type your user name here...";
        labelEmail.innerText         = "New E-mail:";
        inputEmail.placeholder       = "Type your email here...";
        labelPassword.innerText      = "New Password:";
        inputPassword.placeholder    = "Type password here...";
        button.innerText             = "Update Data";

        divTitle.append(tagH1, tagFontAwesome);
        divInput.append(labelNewUsername, inputNewUsername, labelEmail, inputEmail, labelPassword, inputPassword, button);
        divInput.insertAdjacentHTML("beforeend", tagP);
        form.append(divTitle, divInput);
        sectionStandardUpdate.append(form);

        return sectionStandardUpdate;
    
    }

    static showStandardUserUpdate() {
        
        const main             = document.querySelector("main");
        const updateUserButton = document.querySelector(".update__user__button");

        updateUserButton.addEventListener("click", () => {
        
            const sectionUpdateForm = Modal.standardUserUpdateForm();
            main.append(sectionUpdateForm);
            Modal.closeModal();
            Modal.handleStandardUserUpdate();

            const mainSection = document.querySelectorAll("section");

             if(mainSection.length > 1) {
      
                mainSection.forEach(elem => {
          
                    elem.remove();
          
                });
            }
        });
    }

    static handleStandardUserUpdate() {

        const inputNewUsername = document.querySelector("#form__username__update");
        const inputEmail       = document.querySelector("#form__email__update");
        const inputPassword    = document.querySelector("#form__password__update");
        const updateButton     = document.querySelector(".form__button");
        
        updateButton.addEventListener("click", () => {

            const data = {
                "username": inputNewUsername.value,
                "email": inputEmail.value,
                "password": inputPassword.value,
            }

            Api.updateUserData(data);

        });
    }

    static adminUserUpdateForm() {

        const sectionUpdateAdmin    = document.createElement("section");
        const form                  = document.createElement("form");
        const divTitle              = document.createElement("div");
        const tagH1                 = document.createElement("h1");
        const tagFontAwesome        = document.createElement("i");
        const divSelect             = document.createElement("div");
        const labelSelectUser       = document.createElement("label");
        const tagSelect             = document.createElement("select");
        const divJobType            = document.createElement("div");
        const labelJobType          = document.createElement("label");
        const divRegisterContainer1 = document.createElement("div");
        const divRadioContainer1    = document.createElement("div");
        const labelWorkFromHome     = document.createElement("label");
        const inputWorkFromHome     = document.createElement("input");
        const divRadioContainer2    = document.createElement("div");
        const labelHybrid           = document.createElement("label");
        const inputHybrid           = document.createElement("input");
        const divRadioContainer3    = document.createElement("div");
        const labelOnSite           = document.createElement("label");
        const inputOnSite           = document.createElement("input");
        const labelProLevel         = document.createElement("label");
        const formRegisterContainer2 = document.createElement("form");
        const divInputContainer1    = document.createElement("div");
        const labelIntern           = document.createElement("label");
        const inputIntern           = document.createElement("input");
        const divInputContainer2    = document.createElement("div");
        const labelJunior           = document.createElement("label");
        const inputJunior           = document.createElement("input");
        const divInputContainer3    = document.createElement("div");
        const labelMid              = document.createElement("label");
        const inputMid              = document.createElement("input");
        const divInputContainer4    = document.createElement("div");
        const labelSenior           = document.createElement("label");
        const inputSenior           = document.createElement("input");
        const spanErrorMessage      = document.createElement("span");
        const updateDataButton      = document.createElement("button");
        const tagP                  = `<p>© 2022 Kenzie Enterprises™ | All Rights Reserved</p>`;

        sectionUpdateAdmin.classList.add("form__container", "form__admin__user__update");
        form.classList.add("form__modal");
        divTitle.classList.add("form__title__container");
        tagFontAwesome.classList.add("fa-solid", "fa-xmark");
        divSelect.classList.add("form__modal__container");
        labelSelectUser.setAttribute("for", "users");
        tagSelect.setAttribute("name", "users");
        tagSelect.setAttribute("id", "select__user__update");
        tagSelect.setAttribute("title", "users");
        tagSelect.setAttribute("required", "");
        divJobType.classList.add("form__modal__container");
        labelJobType.setAttribute("for", "select__job__type");
        divRegisterContainer1.classList.add("form__register__container");
        divRadioContainer1.classList.add("form__register__proLevel__container");
        labelWorkFromHome.setAttribute("for", "work__from__home");
        inputWorkFromHome.setAttribute("type", "radio");
        inputWorkFromHome.setAttribute("id", "work__from__home");
        inputWorkFromHome.setAttribute("title", "Job Type");
        inputWorkFromHome.setAttribute("name", "professional_level");
        inputWorkFromHome.setAttribute("value", "work__from__home");
        inputWorkFromHome.setAttribute("required", "");
        divRadioContainer2.classList.add("form__register__proLevel__container");
        labelHybrid.setAttribute("for", "hybrid");
        inputHybrid.setAttribute("type", "radio");
        inputHybrid.setAttribute("id", "hybrid");
        inputHybrid.setAttribute("title", "Job Type");
        inputHybrid.setAttribute("name", "professional_level");
        inputHybrid.setAttribute("value", "hybrid");
        inputHybrid.setAttribute("required", "");
        divRadioContainer3.classList.add("form__register__proLevel__container");
        labelOnSite.setAttribute("for", "on__site");
        inputOnSite.setAttribute("type", "radio");
        inputOnSite.setAttribute("id", "on__site");
        inputOnSite.setAttribute("title", "Job Type");
        inputOnSite.setAttribute("name", "professional_level");
        inputOnSite.setAttribute("value", "on__site");
        inputOnSite.setAttribute("required", "");
        labelProLevel.setAttribute("for", "text");
        formRegisterContainer2.classList.add("form__register__container");
        divInputContainer1.classList.add("form__register__proLevel__container");
        labelIntern.setAttribute("for", "intern");
        inputIntern.setAttribute("type", "radio");
        inputIntern.setAttribute("id", "intern");
        inputIntern.setAttribute("title", "Professional level");
        inputIntern.setAttribute("name", "professional_level");
        inputIntern.setAttribute("value", "intern");
        inputIntern.setAttribute("required", "");
        divInputContainer2.classList.add("form__register__proLevel__container");
        labelJunior.setAttribute("for", "text");
        inputJunior.setAttribute("type", "radio");
        inputJunior.setAttribute("title", "Professional level");
        inputJunior.setAttribute("name", "professional_level");
        inputJunior.setAttribute("id", "junior");
        inputJunior.setAttribute("required", "");
        divInputContainer3.classList.add("form__register__proLevel__container");
        labelMid.setAttribute("for", "text");
        inputMid.setAttribute("type", "radio");
        inputMid.setAttribute("title", "Professional level");
        inputMid.setAttribute("name", "professional_level");
        inputMid.setAttribute("id", "mid-level");
        inputMid.setAttribute("required", "");
        divInputContainer4.classList.add("form__register__proLevel__container");
        labelSenior.setAttribute("for", "text");
        inputSenior.setAttribute("type", "radio");
        inputSenior.setAttribute("title", "Professional level");
        inputSenior.setAttribute("name", "professional_level");
        inputSenior.setAttribute("id", "senior");
        inputSenior.setAttribute("required", "");
        updateDataButton.classList.add("form__button");
        updateDataButton.setAttribute("type", "button");
        
        tagH1.innerText             = "Update User (Admins Only)";
        labelSelectUser.innerText   = "Select user to update:";
        labelJobType.innerText      = "Select user's job type:";
        labelWorkFromHome.innerText = "Work from home";
        labelHybrid.innerText       = "Hybrid";
        labelOnSite.innerText       = "On-site";
        labelProLevel.innerText     = "Select user's professional level:";
        labelIntern.innerText       = "Intern";
        labelJunior.innerText       = "Junior";
        labelMid.innerText          = "Mid-Level";
        labelSenior.innerText       = "Senior";
        updateDataButton.innerText  = "Update Data";

        divTitle.append(tagH1, tagFontAwesome);

        divRegisterContainer1.append(divRadioContainer1, divRadioContainer2, divRadioContainer3);
        formRegisterContainer2.append(divInputContainer1, divInputContainer2, divInputContainer3, divInputContainer4, updateDataButton);
        
        divRadioContainer1.append(labelWorkFromHome, inputWorkFromHome);
        divRadioContainer2.append(labelHybrid, inputHybrid);
        divRadioContainer3.append(labelOnSite, inputOnSite);

        divInputContainer1.append(labelIntern, inputIntern);
        divInputContainer2.append(labelJunior, inputJunior);
        divInputContainer3.append(labelMid, inputMid);
        divInputContainer4.append(labelSenior, inputSenior);

        divSelect.append(labelSelectUser, tagSelect);
        divJobType.append(labelJobType, divRegisterContainer1, labelProLevel, formRegisterContainer2);
        
        divJobType.insertAdjacentHTML("beforeend", tagP);
        
        form.append(divTitle, divSelect, divJobType);
        sectionUpdateAdmin.append(form);

        return sectionUpdateAdmin;
    
    }

    static async handleAdminUserUpdateSelect() {
        
        const allUsers         = await Api.listAllEmployees();
        const selectTag        = document.querySelector("#select__user__update");
        const formUpdate       = document.querySelector(".form__admin__user__update");
        const updateDataButton = document.querySelector(".form__button");

        allUsers.forEach(user => {
            
            const optionTag = document.createElement("option");
            optionTag.setAttribute("id", "option__user__update");
            optionTag.innerText = user.username;
            selectTag.append(optionTag);
        
        });

        let data;
        let uuid;

        formUpdate.addEventListener("click", async (event) => {

            const selectedUser = event.target.value;

            allUsers.forEach(async (user) => {

                if(selectedUser === user.username) {
                    
                    data = await Modal.handleAdminUserUpdate();
                    uuid = user.uuid;
                    
                }
            });

            if(updateDataButton === event.target) {
            
                await Api.updateEmployeeDataAdmin(data, uuid);
            
            }
        });
    }

    static async handleAdminUserUpdate() {

        const inputWorkFromHome = document.querySelector("#work__from__home");
        const inputHybrid       = document.querySelector("#hybrid");        
        const inputOnSite       = document.querySelector("#on__site");     
        const inputIntern       = document.querySelector("#intern");
        const inputJunior       = document.querySelector("#junior");
        const inputMidLevel     = document.querySelector("#mid-level");
        const inputSenior       = document.querySelector("#senior");
        let   jobTypeSelected;
        let   proLevelSelected;

            if(inputWorkFromHome.checked) {
            
                jobTypeSelected = "home office";
            
            }if(inputHybrid.checked) {
            
                jobTypeSelected = "hibrido";
            
            }if(inputOnSite.checked) {
            
                jobTypeSelected = "presencial";
            
            }if(inputIntern.checked) {
            
                proLevelSelected = "estágio";
        
            }
            if(inputJunior.checked) {
                
                proLevelSelected = "júnior";

            } 
            if(inputMidLevel.checked) {
               
                proLevelSelected = "pleno";
            
            }if(inputSenior.checked) {
            
                proLevelSelected = "sênior";
            
            }

            const data = {
                "kind_of_work": jobTypeSelected,
                "professional_level": proLevelSelected,
            }

            return data;

    }

    static showAdminUserUpdate() {
    
        const main             = document.querySelector("main");
        const updateDataButton = document.querySelector(".update__user__button__admin");

        updateDataButton.addEventListener("click", async () => {
        
            const sectionUpdateForm = Modal.adminUserUpdateForm();
            main.append(sectionUpdateForm);
            Modal.closeModal();
            await Modal.handleAdminUserUpdateSelect();
            await Modal.handleAdminUserUpdate();

            const mainSection = document.querySelectorAll("section");

             if(mainSection.length > 1) {
      
                mainSection.forEach(elem => {
          
                    elem.remove();
          
                });
            }
        });
    }

    static deleteUserAdminForm() {
    
        const sectionDeletedmin = document.createElement("section");
        const form              = document.createElement("form");
        const divTitle          = document.createElement("div");
        const tagH1             = document.createElement("h1");
        const tagFontAwesome    = document.createElement("i");
        const divSelect         = document.createElement("div");
        const labelSelectUser   = document.createElement("label");
        const tagSelect         = document.createElement("select");
        const deleteButton      = document.createElement("button");
        const tagP = `<p>© 2022 Kenzie Enterprises™ | All Rights Reserved</p>`;
        
        sectionDeletedmin.classList.add("form__container", "form__delete");
        form.classList.add("form__modal");
        divTitle.classList.add("form__title__container");
        tagFontAwesome.classList.add("fa-solid", "fa-xmark");
        divSelect.classList.add("form__modal__container");
        labelSelectUser.setAttribute("for", "select");
        tagSelect.setAttribute("id", "form__select__delete");
        tagSelect.setAttribute("required", "");
        deleteButton.classList.add("form__button");
        deleteButton.setAttribute("type", "button");
        
        tagH1.innerText           = "Delete User";
        labelSelectUser.innerText = "Select a user to delete:";
        deleteButton.innerText    = "Delete User";

        divTitle.append(tagH1, tagFontAwesome);
        divSelect.append(labelSelectUser, tagSelect, deleteButton);
        divSelect.insertAdjacentHTML("beforeend", tagP);
        form.append(divTitle, divSelect);
        sectionDeletedmin.append(form);
        
        return sectionDeletedmin;

    }

    static async handleDeleteUserAdmin() {
    
        const allUsers  = await Api.listAllEmployees();
        const selectTag = document.querySelector("#form__select__delete");

        allUsers.forEach(user => {
            
            const optionTag = document.createElement("option");
            optionTag.setAttribute("id", "option__user__delete");
            optionTag.innerText = user.username;
            selectTag.append(optionTag);
        
        });

        selectTag.addEventListener("click", async (event) => {
            
            const selectedUser = event.target.value;

            allUsers.forEach(async (user) => {

                if(selectedUser === user.username) {
                    console.log(user.uuid)
                    
                    const uuid = user.uuid;
                    await Modal.userDeletionAdmin(uuid);
                }
            });
        });
        
    }

    static async showDeleteUserAdmin() {
        
        const main                 = document.querySelector("main");
        const deleteUserButtonMenu = document.querySelector(".delete__user__button");

        deleteUserButtonMenu.addEventListener("click", async () => {
        
            const sectionUpdateForm = Modal.deleteUserAdminForm();
            main.append(sectionUpdateForm);
            await Modal.handleDeleteUserAdmin();
            await Modal.userDeletionAdmin();
            Modal.closeModal();

            const mainSection = document.querySelectorAll("section");

             if(mainSection.length > 1) {
      
                mainSection.forEach(elem => {
          
                    elem.remove();
          
                });
            }
        });
    }

    static userDeletionAdmin(uuid) {
        
        const modalDeleteButton = document.querySelector(".form__button");

        modalDeleteButton.addEventListener("click", () => {
        
            Api.deleteUser(uuid);
        
        });
    
    }

    static registerCompanyForm() {

        const sectionStandardUpdate = document.createElement("section");
        const form                  = document.createElement("form");
        const divTitle              = document.createElement("div");
        const tagH1                 = document.createElement("h1");
        const tagFontAwesome        = document.createElement("i");
        const divInput              = document.createElement("div");
        const labelNewCompanyName   = document.createElement("label");
        const inputNewCompanyName   = document.createElement("input");
        const labelOpeningHours     = document.createElement("label");
        const inputOpeningHours     = document.createElement("input");
        const labelDescription      = document.createElement("label");
        const inputDescription      = document.createElement("input");
        const labelSelectSector     = document.createElement("label");
        const selectSector          = document.createElement("select");
        const registerCompanyButton = document.createElement("button");
        const tagP = `<p>© 2022 Kenzie Enterprises™ | All Rights Reserved</p>`;
        
        sectionStandardUpdate.classList.add("form__container", "form__user__standard__update");
        form.classList.add("form__modal");
        divTitle.classList.add("form__title__container");
        tagFontAwesome.classList.add("fa-solid", "fa-xmark");
        divInput.classList.add("form__modal__container");
        labelNewCompanyName.setAttribute("for", "form__company__name");
        inputNewCompanyName.setAttribute("id", "form__company__name");
        inputNewCompanyName.setAttribute("type", "text");
        inputNewCompanyName.setAttribute("title", "Company Name");
        inputNewCompanyName.setAttribute("name", "form__company__name");
        inputNewCompanyName.setAttribute("required", "");
        labelOpeningHours.setAttribute("for", "form__company__hours");
        inputOpeningHours.setAttribute("id", "form__company__hours");
        inputOpeningHours.setAttribute("type", "time");
        inputOpeningHours.setAttribute("value", "00:00:00");
        inputOpeningHours.setAttribute("title", "Opening Hours");
        inputOpeningHours.setAttribute("name", "form__company__hours");
        inputOpeningHours.setAttribute("required", "");
        labelDescription.setAttribute("for", "form__company__description");
        inputDescription.setAttribute("id", "form__company__description");
        inputDescription.setAttribute("type", "text");
        inputDescription.setAttribute("title", "Opening description");
        inputDescription.setAttribute("name", "form__company__description");
        inputDescription.setAttribute("required", "");
        labelSelectSector.setAttribute("for", "select");
        selectSector.setAttribute("id", "form__select__sector");
        selectSector.setAttribute("required", "");
        registerCompanyButton.classList.add("form__button");
        registerCompanyButton.setAttribute("type", "button");

        tagH1.innerText                 = "Register Company";
        labelNewCompanyName.innerText   = "Company Name:";
        inputNewCompanyName.placeholder = "Type company name here...";
        labelOpeningHours.innerText     = "Opening Hours:";
        labelDescription.innerText      = "Description:";
        inputDescription.placeholder    = "Type description here...";
        registerCompanyButton.innerText = "Register";

        divTitle.append(tagH1, tagFontAwesome);
        divInput.append(labelNewCompanyName, inputNewCompanyName, labelOpeningHours, inputOpeningHours, labelDescription, inputDescription, labelSelectSector, selectSector, registerCompanyButton);
        divInput.insertAdjacentHTML("beforeend", tagP);
        form.append(divTitle, divInput);
        sectionStandardUpdate.append(form);

        return sectionStandardUpdate;     
    
    }

    static async handleRegisterCompany(sector) {

        const inputNewCompanyName   = document.querySelector("#form__company__name");
        const inputOpeningHours     = document.querySelector("#form__company__hours");
        const inputDescription      = document.querySelector("#form__company__description");
        const registerCompanyButton = document.querySelector(".form__button");

        registerCompanyButton.addEventListener("click", async () => {

            const data = {
                "name": inputNewCompanyName.value,
                "opening_hours": inputOpeningHours.value,
                "description": inputDescription.value,
                "sector_uuid": sector,
            }

            await Api.registerCompany(data);

        });
    }

    static showRegisterCompany() {
    
        const main                  = document.querySelector("main");
        const registerCompanyButton = document.querySelector(".register__company");
        
        registerCompanyButton.addEventListener("click", async () => {
        
                const sectionUpdateForm = Modal.registerCompanyForm();
                main.append(sectionUpdateForm);
                Modal.closeModal();
                await Modal.handleRegisterCompany();
                await Modal.handleCompanyUpdateSelect();
    
                const mainSection = document.querySelectorAll("section");
    
                 if(mainSection.length > 1) {
          
                    mainSection.forEach(elem => {
              
                        elem.remove();
              
                });
            }
        });
    }

    static async handleCompanyUpdateSelect() {
        
        const allSectors   = await Api.listAllSectors();
        const selectSector = document.querySelector("#form__select__sector");

        allSectors.forEach(async (sector) => {

            const optionTag = document.createElement("option");
            optionTag.setAttribute("id", "option__user__update");
            optionTag.innerText = await sector.description;
            selectSector.append(optionTag);
        
        });

        selectSector.addEventListener("click", async (event) => {
            
            const selectedSector = event.target.value;

            allSectors.forEach((sector) => {

                if(selectedSector === sector.description) {

                    const uuid = sector.uuid;

                    Modal.handleRegisterCompany(uuid);
                    
                }
            });
        });
    }

    static allCompanyDepartmentsForm() {
    
        const sectionCompanyDepartments = document.createElement("section");
        const form                      = document.createElement("form");
        const divTitle                  = document.createElement("div");
        const tagH1                     = document.createElement("h1");
        const tagFontAwesome            = document.createElement("i");
        const divSelect                 = document.createElement("div");
        const labelSelectUser           = document.createElement("label");
        const tagSelect                 = document.createElement("select");
        const companyDepartmentsButton  = document.createElement("button");
        const tagP = `<p>© 2022 Kenzie Enterprises™ | All Rights Reserved</p>`;
        
        sectionCompanyDepartments.classList.add("form__container", "form__company__departments");
        form.classList.add("form__modal");
        divTitle.classList.add("form__title__container");
        tagFontAwesome.classList.add("fa-solid", "fa-xmark");
        divSelect.classList.add("form__modal__container");
        labelSelectUser.setAttribute("for", "select");
        tagSelect.setAttribute("id", "form__select__company__departments");
        tagSelect.setAttribute("required", "");
        companyDepartmentsButton.classList.add("form__button");
        companyDepartmentsButton.setAttribute("type", "button");
        
        tagH1.innerText                    = "Departments By Company";
        labelSelectUser.innerText          = "Select a Company:";
        companyDepartmentsButton.innerText = "View Departments";

        divTitle.append(tagH1, tagFontAwesome);
        divSelect.append(labelSelectUser, tagSelect, companyDepartmentsButton);
        divSelect.insertAdjacentHTML("beforeend", tagP);
        form.append(divTitle, divSelect);
        sectionCompanyDepartments.append(form);
        
        return sectionCompanyDepartments;
    
    }

    static async handleAllCompanyDepartments() {
    
        const allCompanies               = await Api.listCompanies();
        const formCompanyDepartments     = document.querySelector(".form__company__departments")
        const selectTag                  = document.querySelector("#form__select__company__departments");
        const allCompanyDepartmentButton = document.querySelector(".form__button");

        allCompanies.forEach(company => {
            
            const optionTag = document.createElement("option");
            optionTag.setAttribute("id", "option__user__departments");
            optionTag.innerText = company.name;
            selectTag.append(optionTag);
        
        });

        let uuid;
        let response;

        formCompanyDepartments.addEventListener("click", async (event) => {
            
            const selectedCompany = event.target.value;

            allCompanies.forEach(async (company) => {

                if(selectedCompany === company.name) {

                    uuid = await company.uuid;

                }
            });

            if(allCompanyDepartmentButton === event.target) {
                
                response = await Api.listAllCompanyDepartments(uuid);
                const ulContainerMain = document.querySelector(".main__list__container");
                ulContainerMain.classList.remove("hidden");
                ulContainerMain.innerHTML = "";
                
                if(response) {    

                    response.forEach(department => {
                        
                        const liContainer            = document.createElement("li");
                        const departmentName         = document.createElement("p");
                        const departmentDescription  = document.createElement("p");
                        const companyDepartmentTitle = document.createElement("p");
                        const companyName            = document.createElement("p");
                        const openingHours           = document.createElement("p");
                        const companyDescription     = document.createElement("p");
                        
                        departmentName.innerText         = `Department Name: ${department.name}`;
                        departmentDescription.innerText  = `Description: ${department.description}`;
                        companyDepartmentTitle.innerText = `Company's Info:`;
                        companyName.innerText            = `Company Name: ${department.companies.name}`;
                        openingHours.innerText           = `Opening Hours: ${department.companies.opening_hours}`;
                        companyDescription.innerText     = `Company Description: ${department.companies.description}`;

                        liContainer.append(departmentName, departmentDescription, companyDepartmentTitle, companyName, openingHours, companyDescription);
                        ulContainerMain.append(liContainer);
                    
                    });
                }
            }
        });
    }

    static showAllCompanyDepartments() {
    
        const main                       = document.querySelector("main");
        const departmentsByCompanyButton = document.querySelector(".departments__by__company");

        departmentsByCompanyButton.addEventListener("click", async () => {
        
            const sectionDepartmentsForm = Modal.allCompanyDepartmentsForm();
            main.append(sectionDepartmentsForm);
            Modal.closeModal();
            await Modal.handleAllCompanyDepartments();

            const mainSection = document.querySelectorAll("section");

             if(mainSection.length > 1) {
      
                mainSection.forEach(elem => {
          
                    elem.remove();
          
                });
            }
        });
    }

    static createDepartmentForm() {

        const sectionCreateDepartment = document.createElement("section");
        const form                    = document.createElement("form");
        const divTitle                = document.createElement("div");
        const tagH1                   = document.createElement("h1");
        const tagFontAwesome          = document.createElement("i");
        const divInput                = document.createElement("div");
        const labelSelectCompany      = document.createElement("label");
        const selectTag               = document.createElement("select");
        const labelDepartmentName     = document.createElement("label");
        const inputDepartmentName     = document.createElement("input");
        const labelDescription        = document.createElement("label");
        const inputDescription        = document.createElement("input");
        const button                  = document.createElement("button");
        const tagP = `<p>© 2022 Kenzie Enterprises™ | All Rights Reserved</p>`;
        
        sectionCreateDepartment.classList.add("form__container", "form__create__department");
        form.classList.add("form__modal");
        divTitle.classList.add("form__title__container");
        tagFontAwesome.classList.add("fa-solid", "fa-xmark");
        divInput.classList.add("form__modal__container");
        labelSelectCompany.setAttribute("for", "select");
        selectTag.setAttribute("id", "form__select__create__department");
        selectTag.setAttribute("required", "");
        inputDepartmentName.setAttribute("id", "form__name__create__department");
        inputDescription.setAttribute("id", "form__create__department__description");
        button.classList.add("form__button");

        labelDepartmentName.setAttribute("for", "name");
        inputDepartmentName.setAttribute("type", "text");
        inputDepartmentName.setAttribute("title", "name");
        inputDepartmentName.setAttribute("name", "name");
        labelDescription.setAttribute("for", "name");
        inputDescription.setAttribute("type", "text");
        inputDescription.setAttribute("title", "description");
        inputDescription.setAttribute("name", "description");
        button.setAttribute("type", "button");

        tagH1.innerText                 = "Create Department";
        labelSelectCompany.innerText    = "Select Company:";
        labelDepartmentName.innerText   = "Department Name: ";
        inputDepartmentName.placeholder = "Type new department here...";
        labelDescription.innerText      = "Department Description:";
        inputDescription.placeholder    = "Type description here...";
        button.innerText                = "Create";

        divTitle.append(tagH1, tagFontAwesome);
        divInput.append(labelSelectCompany, selectTag, labelDepartmentName, inputDepartmentName, labelDescription, inputDescription, button);
        divInput.insertAdjacentHTML("beforeend", tagP);
        form.append(divTitle, divInput);
        sectionCreateDepartment.append(form);

        return sectionCreateDepartment;
    
    }

    static async handleCreateDepartment() {

        const allCompanies               = await Api.listCompanies();
        const labelDepartmentName        = document.querySelector("#form__name__create__department");
        const inputDescription           = document.querySelector("#form__create__department__description");
        const selectTag                  = document.querySelector("#form__select__create__department");
        const allCompanyDepartmentButton = document.querySelector(".form__button");
        let   uuid;

        allCompanies.forEach(async (company) => {
            
            const optionTag = document.createElement("option");
            optionTag.setAttribute("id", "option__create__department");
            optionTag.innerText = await company.name;
            selectTag.append(optionTag);
        
        });

        selectTag.addEventListener("click", async (event) => {
            
            const selectedCompany = event.target.value;

            allCompanies.forEach(async (company) => {

                if(selectedCompany === company.name) {

                    uuid = await company.uuid;

                }
            });
        });

        allCompanyDepartmentButton.addEventListener("click", async () => {
        
            const data = {
                "name": labelDepartmentName.value,
                "description": inputDescription.value,
                "company_uuid": uuid,
            }

            await Api.createDepartment(data);
        
        });
    }

    static async showCreateDepartment() {
        
        const main                   = document.querySelector("main");
        const createDepartmentButton = document.querySelector(".create__department");
        
        createDepartmentButton.addEventListener("click", async () => {
            
                const sectionLogin = Modal.createDepartmentForm();
                main.append(sectionLogin);
                Modal.closeModal();
                await Modal.handleCreateDepartment();
                
                const mainSection = document.querySelectorAll("section");

                if(mainSection.length > 1) {
                
                    mainSection.forEach(elem => {
                    
                        elem.remove();
                    
                });
            }
        });
    }

    static async hireEmployeeForm() {
        
        const sectionHire      = document.createElement("section");
        const form             = document.createElement("form");
        const divTitle         = document.createElement("div");
        const tagH1            = document.createElement("h1");
        const tagFontAwesome   = document.createElement("i");
        const divSelect        = document.createElement("div");
        const labelUser        = document.createElement("label");
        const selectUser       = document.createElement("select");
        const labelDepartment  = document.createElement("label");
        const selectDepartment = document.createElement("select"); 
        const button           = document.createElement("button");
        const tagP = `<p>© 2022 Kenzie Enterprises™ | All Rights Reserved</p>`;
        
        sectionHire.classList.add("form__container", "form__hire");
        form.classList.add("form__modal");
        divTitle.classList.add("form__title__container");
        tagFontAwesome.classList.add("fa-solid", "fa-xmark");
        divSelect.classList.add("form__modal__container");
        selectUser.setAttribute("id", "form__select__user__hire");
        selectDepartment.setAttribute("id", "form__select__department__hire");
        button.classList.add("form__button");

        labelUser.setAttribute("for", "user");
        selectUser.setAttribute("title", "Select User");
        selectUser.setAttribute("required", "");
        labelDepartment.setAttribute("for", "user");
        selectDepartment.setAttribute("title", "Select Department");
        selectDepartment.setAttribute("required", "");
        button.setAttribute("type", "button");

        tagH1.innerText           = "Hire Employee";
        labelUser.innerText       = "Select Employee: ";
        labelDepartment.innerText = "Select Department:";
        button.innerText          = "Hire";

        divTitle.append(tagH1, tagFontAwesome);
        divSelect.append(labelUser, selectUser, labelDepartment, selectDepartment, button);
        divSelect.insertAdjacentHTML("beforeend", tagP);
        form.append(divTitle, divSelect);
        
        sectionHire.append(form);

        return sectionHire;


    }

    static async handleHireEmployee() {
    
        const noDepartmentUsers = await Api.noDepartmentUsers();
        const allDepartments    = await Api.listAllDepartments();
        const formHire          = document.querySelector(".form__hire");
        const selectUserTag     = document.querySelector("#form__select__user__hire");
        const selectDepartment  = document.querySelector("#form__select__department__hire");
        const hireButton        = document.querySelector(".form__button");
        let   userUuid;
        let   departmentUuid;

        console.log(selectUserTag)
        noDepartmentUsers.forEach(async (unemployed) => {

            const optionTag = document.createElement("option");
            optionTag.setAttribute("id", "option__hire__user");
            optionTag.innerText = await unemployed.username;
            selectUserTag.append(optionTag);
           
        
        });

        allDepartments.forEach(async (department) => {
        
            const optionTag = document.createElement("option");
            optionTag.setAttribute("id", "option__select__department__hire");
            optionTag.innerText = await department.name;
            selectDepartment.append(optionTag);
        
        });

        formHire.addEventListener("click", async (event) => {
            
            const selectedUser       = event.target.value;
            const selectedDepartment = event.target.value;

            noDepartmentUsers.forEach(async (user) => {

                if(selectedUser === user.username) {

                    userUuid = await user.uuid;

                }
            });

            allDepartments.forEach(async (department) => {
            
                if(selectedDepartment === department.name) {
                    
                    departmentUuid = await department.uuid;

                }
            })

            if(hireButton === event.target) {
            
                const data = {
                    "user_uuid": userUuid,
                    "department_uuid": departmentUuid,
               }
            
               await Api.hireEmployee(data);

            }
        });
    }

    static async showHireEmployee() {
        
        const main               = document.querySelector("main");
        const hireEmployeeButton = document.querySelectorAll(".hire__employee");

        hireEmployeeButton.forEach(element => {
        
            element.addEventListener("click", async () => {
            
                const sectionHire = await Modal.hireEmployeeForm();
                main.append(sectionHire);
                Modal.closeModal();
                await Modal.handleHireEmployee();
                
                const mainSection = document.querySelectorAll("section");

                if(mainSection.length > 1) {
                
                    mainSection.forEach(elem => {
                    
                        elem.remove();
                    
                    });
                }
            });
        });
    }

    static fireEmployeeForm() {
    
        const sectionFire       = document.createElement("section");
        const form              = document.createElement("form");
        const divTitle          = document.createElement("div");
        const tagH1             = document.createElement("h1");
        const tagFontAwesome    = document.createElement("i");
        const divSelect         = document.createElement("div");
        const labelSelectUser   = document.createElement("label");
        const tagSelect         = document.createElement("select");
        const fireButton        = document.createElement("button");
        const tagP = `<p>© 2022 Kenzie Enterprises™ | All Rights Reserved</p>`;
        
        sectionFire.classList.add("form__container", "form__fire");
        form.classList.add("form__modal");
        divTitle.classList.add("form__title__container");
        tagFontAwesome.classList.add("fa-solid", "fa-xmark");
        divSelect.classList.add("form__modal__container");
        labelSelectUser.setAttribute("for", "select");
        tagSelect.setAttribute("id", "form__select__fire");
        tagSelect.setAttribute("required", "");
        fireButton.classList.add("form__button");
        fireButton.setAttribute("type", "button");
        
        tagH1.innerText           = "Fire Employee";
        labelSelectUser.innerText = "Select Employee to Fire:";
        fireButton.innerText      = "Fire";

        divTitle.append(tagH1, tagFontAwesome);
        divSelect.append(labelSelectUser, tagSelect, fireButton);
        divSelect.insertAdjacentHTML("beforeend", tagP);
        form.append(divTitle, divSelect);
        sectionFire.append(form);
        
        return sectionFire;
    
    }

    static handleFireEmployee() {
    
        

    }

    static showFireEmployee() {
    
        const main               = document.querySelector("main");
        const hireEmployeeButton = document.querySelectorAll(".fire__employee");

        hireEmployeeButton.forEach(element => {
        
            element.addEventListener("click", async () => {
            
                const sectionFire = await Modal.fireEmployeeForm();
                main.append(sectionFire);
                Modal.closeModal();
                await Modal.handleFireEmployee();
                
                const mainSection = document.querySelectorAll("section");

                if(mainSection.length > 1) {
                
                    mainSection.forEach(elem => {
                    
                        elem.remove();
                    
                    });
                }
            });
        });
    
    }

}