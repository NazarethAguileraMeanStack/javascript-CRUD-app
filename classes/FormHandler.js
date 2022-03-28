class FormHandler {
    constructor() {

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