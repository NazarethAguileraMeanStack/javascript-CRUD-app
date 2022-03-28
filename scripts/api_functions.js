

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
        httpClient.connectURL("https://jsonplaceholder.typicode.com/users");
        let data = await httpClient.post(inputValues);
        console.log(`POST SUCCESSFUL: ${data}`);
        return JSON.parse(data);
    } catch (error) {
        console.log(`POST REQUEST FAILED: ${error}`);
    }
}

async function update_api_data_entry(e, id) {
    try {
        let httpClient = new HttpClient();
        let formHandler = new FormHandler();
        let inputValues = formHandler.getEditFormValues(e);
        httpClient.connectURL(`https://jsonplaceholder.typicode.com/users/${id}`);
        let data = await httpClient.put(inputValues);
        console.log(`PUT SUCCESSFUL: ${data}`);
        return JSON.parse(data);
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

    } catch (error) {
        console.log(`DELETE REQUEST FAILED: ${error}`);
    }
}