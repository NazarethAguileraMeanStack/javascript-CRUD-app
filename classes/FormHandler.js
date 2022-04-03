class FormHandler {
    constructor() {

    }

    validate(user) {
        let name = user.Name;
        let username = user.Username;
        let email = user.Email;
        let street = user.Street;
        let suite = user.Suite;
        let city = user.City;
        let zipcode = user.Zipcode;
        let lat = user.Latitude;
        let lng = user.Longtitude;
        let phone = user.Phone;
        let website = user.Website;
        let companyName = user.CompanyName;
        let companyCatchPhrase = user.CatchPhrase;
        let bs = user.BusinessSlogan;

        let values = [name, username, email, street, suite, city,
        zipcode, lat, lng, phone, website, companyName, companyCatchPhrase, bs];

        for (let i = 0; i < values.length; i++) {
            if (values[i] === "") {
                return false;
            }
        }
        
        return true;
    }

    getEditFormValues(e) {
        let form = e.path[1].children[0].children;
        let user = new User();
        user.Name = form[1].children[1].value;
        user.Username = form[2].children[1].value;
        user.Email = form[3].children[1].value;
        user.Street = form[6].children[1].value;
        user.Suite = form[7].children[1].value;
        user.City = form[8].children[1].value;
        user.Zipcode = form[9].children[1].value;
        user.Latitude = form[10].children[1].value;
        user.Longtitude = form[11].children[1].value;
        user.Phone = form[4].children[1].value;
        user.Website = form[5].children[1].value;
        user.CompanyName = form[12].children[1].value;
        user.CatchPhrase = form[13].children[1].value;
        user.BusinessSlogan = form[14].children[1].value;
        
        return user;
    }

    getInputValues() {
        let user = new User();
        user.Name = document.getElementById("Name").value;
        user.Username = document.getElementById("Username").value;
        user.Email = document.getElementById("Email").value;
        user.Street = document.getElementById("Street").value;
        user.Suite = document.getElementById("Suite").value;
        user.City = document.getElementById("City").value;
        user.Zipcode = document.getElementById("Zipcode").value;
        user.Latitude = document.getElementById("Latitude").value;
        user.Longtitude = document.getElementById("Longtitude").value;
        user.Phone = document.getElementById("Phone").value;
        user.Website = document.getElementById("Website").value;
        user.CompanyName = document.getElementById("CompanyName").value;
        user.CatchPhrase = document.getElementById("CatchPhrase").value;
        user.BusinessSlogan = document.getElementById("BusinessSlogan").value;

        return user;
    }
}