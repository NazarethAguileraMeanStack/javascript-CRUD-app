class UserInterfaceBuilder {
    constructor() {

    }

    createHeading(text) {
        return `<h2>${text}</h2>`;
    }

    createButton(className, text, isSubmitType) {
        if (isSubmitType) {
            return `<button class="${className}" type="submit">${text}</button>`;
        } else {
            return `<button class="${className}">${text}</button>`;
        }
    }

    createDisplayUserPersonalInfo(name, username, email, phone, website) {
        return `
        <div class="user-personal-info">
            <p>${name}</p>
            <p>@${username} || ${email} || Phone: ${phone}</p>
            <p>Website: <a href="#">${website}</a></p>
        </div>`;
    }

    createDisplayUserAddress(street, suite, city, zipcode, latitude, longtitude) {
        return `
        <div class="user-address">
            <h3>Address</h3>
            <p>${street}, ${suite}</p>
            <p>${city}, ${zipcode}</p>
            <p>lat: ${latitude} lgn: ${longtitude}</p>
        </div>`;
    }

    createDisplayUserCompanyInfo(cName, cCatchPhrase, cBusinessSlogan) {
        return `
        <div class="user-company-info">
            <h3>Company Info</h3>
            <p><u>${cName}</u></p>
            <p>catch phrase: ${cCatchPhrase}</p>
            <p>Slogan: <em>"${cBusinessSlogan}"</em></p>
        </div>`;
    }



    createListItemReadOnly(user) {
        let userInfo = this.createDisplayUserPersonalInfo(user.name, user.username, user.email, user.phone, user.website);
        let address = user.address;
        let geo = user.address.geo;
        let userAddress = this.createDisplayUserAddress(address.street, address.suite, address.city, address.zipcode, geo.lat, geo.lng);
        let company = user.company;
        let userCompany = this.createDisplayUserCompanyInfo(company.name, company.catchPhrase, company.bs);
        let moreDetailsButton = this.createButton("moreDetails-btn", "View Details");
        
        return `
        <li class="list-item">
            <p>${user.id}</p>
            <div class="user-info-summary">
                ${userInfo}
                <div class="more-info hide-content">
                    ${userAddress}
                    ${userCompany}
                </div>
            </div>
            <div class="btn-controls">
                ${moreDetailsButton}
            </div>
        </li>`;
    }

    createListItemEdit(user) {
        let editButton = this.createButton("edit-btn", "Edit");
        let deleteButton = this.createButton("delete-btn", "Delete");
        let userInfo = this.createDisplayUserPersonalInfo(user.name, user.username, user.email, user.phone, user.website);
        let editForm = this.createEditForm(user);

        return `
        <li class="list-item">
            <p>${user.id}</p>
            <div class="user-info-summary">
                ${userInfo}
                <div class="edit-form hide-content">
                    ${editForm}
                </div>
            </div>
            <div class="btn-controls">
                ${editButton}
                ${deleteButton}
            </div>
        </li>`;
    }

    createEditForm(user) {
        let submitButton = this.createButton("update-btn", "Update", false);

        let name = this.createFormItem("Name", "text", user.name);
        let username = this.createFormItem("Username", "text", user.username);
        let email = this.createFormItem("Email", "email", user.email);
        let phone = this.createFormItem("Phone", "text", user.phone);
        let website = this.createFormItem("Website","text", user.website);
        let street = this.createFormItem("Street", "text", user.address.street);
        let suite = this.createFormItem("Suite", "text", user.address.suite);
        let city = this.createFormItem("City", "text", user.address.city);
        let zipcode = this.createFormItem("Zipcode", "text", user.address.zipcode);
        let geo = user.address.geo;
        let latitude = this.createFormItem("Latitude", "text", geo.lat);
        let longtitude = this.createFormItem("Longtitude", "text", geo.lng);
        let company = user.company;
        let companyName = this.createFormItem("CompanyName", "text", company.name);
        let catchPhrase = this.createFormItem("CatchPhrase", "text", company.catchPhrase);
        let bs = this.createFormItem("BusinessSlogan", "text", company.bs);
        let userInfo = [name, username, email, phone, website, street, suite, city,
        zipcode, latitude, longtitude, companyName, catchPhrase, bs];
        let editForm = this.createFormGroup("Edit User Form", userInfo);
        
        return `
        <form>
            ${editForm}
            ${submitButton}
        </form>
        `;
    }

    createList(data, isEditable) {
        let content = "";
        data.forEach(item => {
            if (isEditable) {
                content += this.createListItemEdit(item);
            } else {
                content += this.createListItemReadOnly(item);
            }
        });

        return `
        <ul>
            ${content}
        </ul>`;
    }



    createFormItem(name, type = "text", val = "") {
        return `
        <div class="form-item">
            <label for="${name}">${name}: </label>
            <input id="${name}" type="${type}" value="${val}" required>
        </div>
        `;

    }

    createFormGroup(text, array_of_inputs) {
        let legend = `<legend>${text}</legend>`;
        let content = "";
        array_of_inputs.forEach(item => content += item);
        
        return `
        <fieldset>
        ${legend}
        ${content}
        </fieldset>`;
    }

    createSortModule() {
        let id = `<label><input id="sort-module-id" type="radio" name="sort" checked>I.D.</label>`;
        let name = `<label><input id="sort-module-name" type="radio" name="sort">Name</label>`;

        return `
        <div id="sort-module">
            <span>Sort By:</span>
            ${id}    
            ${name}
        </div>`;
    }

    createSearchAndSortContainerModule() {
        let search = this.createSearchInput();
        let sort = this.createSortModule();

        return `
        <div id="search-sort-module">
            ${search}
            ${sort}
        </div>`;
    }

    createSearchInput() {
        let input = `<input id="search-input" type="text" placeholder="Search Name, Username, Phone, Email..."></input>`;

        return `
        ${input}
        `;
    }

    buildNewUserForm() {
        let heading = this.createHeading("Add New User Form");
        let submitButton = this.createButton("addUserSubmit", "Submit", true);

        let name = this.createFormItem("Name");
        let username = this.createFormItem("Username");
        let email = this.createFormItem("Email", "email");
        let phone = this.createFormItem("Phone");
        let website = this.createFormItem("Website");
        let personal_info = [name, username, email, phone, website];
        let personal_fieldset = this.createFormGroup("User Personal Info", personal_info);

        let street = this.createFormItem("Street");
        let suite = this.createFormItem("Suite");
        let city = this.createFormItem("City");
        let zipcode = this.createFormItem("Zipcode");
        let latitude = this.createFormItem("Latitude");
        let longtitude = this.createFormItem("Longtitude");
        let user_address = [street, suite, city, zipcode, latitude, longtitude];
        let address_fieldset = this.createFormGroup("User Address", user_address);

        let companyName = this.createFormItem("CompanyName");
        let catchPhrase = this.createFormItem("CatchPhrase");
        let bs = this.createFormItem("BusinessSlogan");
        let user_company = [companyName, catchPhrase, bs];
        let company_fielset = this.createFormGroup("User Company", user_company);

        return `
        ${heading}
        <form id="addUserForm">
            ${personal_fieldset}
            ${address_fieldset}
            ${company_fielset}
            ${submitButton}
        </form>`;
    }

    buildUserListReadOnly(data) {
        let heading = this.createHeading("List of Users");
        let searchAndSortModule = this.createSearchAndSortContainerModule();
        let list = this.createList(data, false);


        return `
        ${heading}
        ${searchAndSortModule}
        ${list}
        `;
    }

    buildUserListEdit(data) {
        let heading = this.createHeading("Edit/Delete Users");
        let searchAndSortModule = this.createSearchAndSortContainerModule();
        let list = this.createList(data, true);

        return `
        ${heading}
        ${searchAndSortModule}
        ${list}
        `;
    }


}