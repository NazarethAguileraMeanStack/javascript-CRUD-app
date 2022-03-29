

async function get_data_from_api() {
    try {
        let httpClient = new HttpClient();
        httpClient.connectURL("https://jsonplaceholder.typicode.com/users");
        let result = await httpClient.get();
        return JSON.parse(result);
    } catch (error) {
        console.log(`GET REQUEST FAILED: ${error}`);
    }
}

async function post_data_to_api() {
    try {
        let httpClient = new HttpClient();
        let formHandler = new FormHandler();
        let inputValues = formHandler.getInputValues();
        if (formHandler.validate(inputValues)) {
            httpClient.connectURL("https://jsonplaceholder.typicode.com/users");
            let data = await httpClient.post(inputValues);
            console.log(`POST SUCCESSFUL: ${data}`);
            alert("NEW USER POSTED! View more details in the Console");
            return JSON.parse(data);
        } else {
            alert("SUBMIT FAILED! Please ensure all input fields are filled out.");
        }
    } catch (error) {
        console.log(`POST REQUEST FAILED: ${error}`);
    }
}

async function update_api_data_entry(e, id) {
    try {
        let httpClient = new HttpClient();
        let formHandler = new FormHandler();
        let inputValues = formHandler.getEditFormValues(e);
        if (formHandler.validate(inputValues)) {
            httpClient.connectURL(`https://jsonplaceholder.typicode.com/users/${id}`);
            let data = await httpClient.put(inputValues);
            console.log(`PUT SUCCESSFUL: ${data}`);
            alert("UPDATE SUCCESS! View more details in the Console");
            return JSON.parse(data);
        } else {
            alert("UPDATE FAILED! Please ensure all input fields are filled out.");
        }
        
    } catch (error) {
        console.log(`UPDATE REQUEST FAILED: ${error}`);
    }
}

async function delete_api_data_entry(id) {
    try {
        let httpClient = new HttpClient();
        httpClient.connectURL(`https://jsonplaceholder.typicode.com/users/${id}`);
        let data = await httpClient.delete();
        console.log(`DELETE SUCCESSFUL: ${data}`);
        alert("DELETE SUCCESS! View more details in the Console");
        return JSON.parse(data);
    } catch (error) {
        console.log(`DELETE REQUEST FAILED: ${error}`);
    }
}