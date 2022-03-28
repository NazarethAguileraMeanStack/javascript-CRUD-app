class HttpClient {
    constructor() { 

    }

    connectURL(url) {
        this.url = url;
    }

    get() {
        return new Promise((resolve, reject) => {
            let http = new XMLHttpRequest();
            http.open("GET", this.url);
            http.onload = function() {
                if (this.status === 200) {
                    resolve(http.response);
                } else {
                    reject(http.status);
                }
            };
            http.send();
        });
    }
    
    post(data_entry) {
        return new Promise((resolve, reject) => {
            let new_data_entry = JSON.stringify(data_entry);
            let http = new XMLHttpRequest();
            http.open("POST", this.url);
            http.setRequestHeader("Content-type", "application/json");
            http.onload = function() {
                if (this.status >= 200 && this.status <= 300) {
                    resolve(http.response);
                } else {
                    reject(http.status);
                }
            };
            http.send(new_data_entry);
        });
    }

    put(data_entry) {
        return new Promise((resolve, reject) => {
            let new_data_entry = JSON.stringify(data_entry);
            let http = new XMLHttpRequest();
            http.open("PUT", this.url);
            http.setRequestHeader("Content-type", "application/json");
            http.onload = function() {
                if (this.status >= 200 && this.status <= 300) {
                    resolve(http.response);
                } else {
                    reject(http.status);
                }
            };
            http.send(new_data_entry);
        });

    }

    delete() {
        return new Promise((resolve, reject) => {
            let http = new XMLHttpRequest();
            http.open("DELETE", this.url);
            http.onload = function() {
                if (this.status >= 200 && this.status <= 300) {
                    resolve(http.response);
                } else {
                    reject(http.status);
                }
            }
            http.send();
        });
    }
    
}
