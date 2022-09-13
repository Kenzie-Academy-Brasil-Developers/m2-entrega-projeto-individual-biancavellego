import { Api } from "./api.js";
export class Modal {

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
        inputJunior.setAttribute("value", "Junior");
        inputJunior.setAttribute("required", "");
        divInputContainer3.classList.add("form__register__proLevel__container");
        labelMid.setAttribute("for", "text");
        inputMid.setAttribute("type", "radio");
        inputMid.setAttribute("title", "Professional level");
        inputMid.setAttribute("name", "professional_level");
        inputMid.setAttribute("value", "Mid-Level");
        inputMid.setAttribute("required", "");
        divInputContainer4.classList.add("form__register__proLevel__container");
        labelSenior.setAttribute("for", "text");
        inputSenior.setAttribute("type", "radio");
        inputSenior.setAttribute("title", "Professional level");
        inputSenior.setAttribute("name", "professional_level");
        inputSenior.setAttribute("value", "Senior");
        inputSenior.setAttribute("required", "");
        spanErrorMessage.classList.add("form__error__message");
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
        spanErrorMessage.innerText  = "";
        updateDataButton.innerText    = "Update Data";

        divTitle.append(tagH1, tagFontAwesome);

        divRegisterContainer1.append(divRadioContainer1, divRadioContainer2, divRadioContainer3);
        formRegisterContainer2.append(divInputContainer1, divInputContainer2, divInputContainer3, divInputContainer4, spanErrorMessage, updateDataButton);
        
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
        
        const allUsers  = await Api.listAllEmployees();
        const selectTag = document.querySelector("#select__user__update");

        allUsers.forEach(user => {
            
            const optionTag = document.createElement("option");
            optionTag.setAttribute("id", "option__user__update");
            optionTag.innerText = user.username;
            selectTag.append(optionTag);
        
        });

        selectTag.addEventListener("click", async (event) => {
            
            const selectedUser = event.target.value;

            allUsers.forEach((user) => {

                if(selectedUser === user.username) {
                    console.log(user.uuid)
                    
                    const uuid = user.uuid;
                    
                }
            });
        });
    }

    static async handleAdminUserUpdate(uuid) {

        const inputWorkFromHome = document.querySelector("#work__from__home");
        const inputHybrid       = document.querySelector("#hybrid");        
        const inputOnSite       = document.querySelector("#on__site");     
        const inputIntern       = document.querySelector("#intern");
        const inputJunior       = document.querySelector("#junior");
        const inputMidLevel     = document.querySelector("#mid-level");
        const inputSenior       = document.querySelector("#senior");
        const updateDataButton  = document.querySelector(".form__button");
        const spanErrorMessage  = document.querySelector(".error__password");
        let   jobTypeSelected;
        let   proLevelSelected;

        updateDataButton.addEventListener("click", async () => {

            if(inputWorkFromHome.checked) {
            
                jobTypeSelected = "home office";
            
            }else if(inputHybrid.checked) {
            
                jobTypeSelected = "híbrido";
            
            }else if(inputOnSite.checked) {
            
                jobTypeSelected = "presencial";
            
            }else if(inputIntern.checked) {
            
                proLevelSelected = "estagiario";
        
            }else if(inputJunior.checked) {
                
                proLevelSelected = "júnior";

            }else if(inputMidLevel.checked) {
                
                proLevelSelected = "pleno";
            
            }else if(inputSenior.checked) {
            
                proLevelSelected = "sênior";
            
            } else {
            
                spanErrorMessage.innerText = "Please, select an option above.";
            
            }

            const data = {
                "kind_of_work": jobTypeSelected,
                "professional_level": proLevelSelected,
            }

           //REMOVER VALORES DA TAG ADD EVENT LISTENER!!!!!!!! INSERIR FUNÇÕES DENTRO DE UMA NOVA TAG (QUE É O BOTAO UPDATE) COM ADDEVENTLISTENER COM OS VALORES
           //CAPTURADOS E DÊ RETURN EM DATA (BODY) PARA REAPROVEITÁ-LO NA OUTRA FUNÇÃO ACIMA...

            const uuid = await Modal.handleAdminUserUpdateSelect();
            console.log(uuid); //FUNCIONA APENAS AO CLICAR, MAS NÃO GUARDA VALOR ALGUM NA VARIÁVEL...
            await Api.updateEmployeeDataAdmin(data, uuid);

        });
    }

    static showAdminUserUpdate() {
    
        const main             = document.querySelector("main");
        const updateDataButton = document.querySelector(".update__user__button__admin");

        updateDataButton.addEventListener("click", () => {
        
            const sectionUpdateForm = Modal.adminUserUpdateForm();
            main.append(sectionUpdateForm);
            Modal.closeModal();
            Modal.handleAdminUserUpdateSelect();
            Modal.handleAdminUserUpdate();

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
                    await Modal.showDeleteUserAdmin(uuid);
                }
            });
        });
        
    }

    static async showDeleteUserAdmin(uuid) {
        
        const main                 = document.querySelector("main");
        const deleteUserButtonMenu = document.querySelector(".delete__user__button");
        const modalDeleteButton    = document.querySelector(".form__button");

        deleteUserButtonMenu.addEventListener("click", () => {
        
            const sectionUpdateForm = Modal.deleteUserAdminForm();
            main.append(sectionUpdateForm);
            Modal.handleDeleteUserAdmin();
            Modal.closeModal();

            const mainSection = document.querySelectorAll("section");

             if(mainSection.length > 1) {
      
                mainSection.forEach(elem => {
          
                    elem.remove();
          
                });
            }
        });

        modalDeleteButton.addEventListener("click", () => {
        
            Api.deleteUser(uuid);
        
        });
    }

    static 

}