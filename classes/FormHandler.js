class FormHandler {
    constructor() {

    }

    validate(obj_values) {
        let name = obj_values.name;
        let username = obj_values.username;
        let email = obj_values.email;
        let street = obj_values.address.street;
        let suite = obj_values.address.suite;
        let city = obj_values.address.city;
        let zipcode = obj_values.address.zipcode;
        let lat = obj_values.address.geo.lat;
        let lng = obj_values.address.geo.lng;
        let phone = obj_values.phone;
        let website = obj_values.website;
        let companyName = obj_values.company.name;
        let companyCatchPhrase = obj_values.company.catchPhrase;
        let bs = obj_values.company.bs;

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
        let inputValues = {
            name: form[1].children[1].value,
            username: form[2].children[1].value,
            email: form[3].children[1].value,
            address: {
                street: form[6].children[1].value,
                suite: form[7].children[1].value,
                city: form[8].children[1].value,
                zipcode: form[9].children[1].value,
                geo: {
                    lat: form[10].children[1].value,
                    lng: form[11].children[1].value
                }
            },
            phone: form[4].children[1].value,
            website: form[5].children[1].value,
            company: {
                name: form[12].children[1].value,
                catchPhrase: form[13].children[1].value,
                bs: form[14].children[1].value
            }
        };

        return inputValues;
    }

    getInputValues() {
        let inputValues = {
            name: document.getElementById("Name").value,
            username: document.getElementById("Username").value,
            email: document.getElementById("Email").value,
            address: {
                street: document.getElementById("Street").value,
                suite: document.getElementById("Suite").value,
                city: document.getElementById("City").value,
                zipcode: document.getElementById("Zipcode").value,
                geo: {
                    lat: document.getElementById("Latitude").value,
                    lng: document.getElementById("Longtitude").value
                }
            },
            phone: document.getElementById("Phone").value,
            website: document.getElementById("Website").value,
            company: {
                name: document.getElementById("CompanyName").value,
                catchPhrase: document.getElementById("CatchPhrase").value,
                bs: document.getElementById("BusinessSlogan").value
            }
        };

        return inputValues;
    }
}