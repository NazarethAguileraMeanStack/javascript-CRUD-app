const event_listener_body = document.getElementById("root");
const event_listener_link_view_list = document.getElementById("link_view_list");
const event_listener_link_view_edit_delete = document.getElementById("link_view_edit_delete");
const event_listener_link_add_user = document.getElementById("link_add_user");

event_listener_body.onload = () => {
    load_view_list();
    apply_active_view("view_list");
};


event_listener_link_view_list.onclick = () => {
    load_view_list();
    apply_active_view("view_list");
};


event_listener_link_view_edit_delete.onclick = () => {
    load_view_edit_delete();
    apply_active_view("view_edit_delete");
};


event_listener_link_add_user.onclick = () => {
    load_view_add_user();
    apply_active_view("add_user");
};


function init_search_module() {
    let search = document.getElementById("search-input");
    search.addEventListener("keyup", function() {
        let searchValue = search.value.toLowerCase();
        let listItems = document.getElementsByClassName("list-item");
        Array.from(listItems).forEach(li => {
            let name = li.children[1].children[0].children[0].innerText.toLowerCase();
            let usernameEmailPhone = li.children[1].children[0].children[1].innerText.toLowerCase();
            if (searchValue === "") {
                li.classList.remove("filter-content");
                return;
            } else {
                if (name.includes(searchValue) || usernameEmailPhone.includes(searchValue)) {
                    li.classList.remove("filter-content");
                } else {
                    li.classList.add("filter-content");
                }
            }
        });
    });
}

function init_sort_module() {
    let sortModule = document.getElementById("sort-module");
    let id = document.getElementById("sort-module-id");
    let name = document.getElementById("sort-module-name");
    let username = document.getElementById("sort-module-username");
    let listItems = document.getElementsByClassName("list-item");
    let list = document.getElementsByTagName("ul")[1];

    sortModule.addEventListener("click", function() {
        if (id.checked) {
            let sortedList = Array.from(listItems).sort((a, b) => {
                let first = parseInt(a.children[0].innerText);
                let second =  parseInt(b.children[0].innerText);
                if(first < second) { return -1; }
                if(first > second) { return 1; }
                return 0;
            });
            list.innerHTML = "";
            sortedList.forEach(element => list.appendChild(element));    
        }

        if (name.checked) {
            let sortedList = Array.from(listItems).sort((a, b) => {
                let first = a.children[1].children[0].children[0].innerText.toLowerCase().split(' ')[1];
                let second =  b.children[1].children[0].children[0].innerText.toLowerCase().split(' ')[1];
                if(first < second) { return -1; }
                if(first > second) { return 1; }
                return 0;
            });
            list.innerHTML = "";
            sortedList.forEach(element => list.appendChild(element));
        }

    });
}

function init_more_details_button() {
    let moreDetails = document.getElementsByClassName("moreDetails-btn");
    Array.from(moreDetails).forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            toggle_view_more_details(e);
        });
    });
}


function init_edit_button() {
    let editFormButton = document.getElementsByClassName("edit-btn");
    Array.from(editFormButton).forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            toggle_view_more_details(e);
        });
    });
}


function init_update_button() {
    let updateButton = document.getElementsByClassName("update-btn");
    Array.from(updateButton).forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            let id = e.path[4].children[0].innerText;
            update_api_data_entry(e, id);
        });
    });
}


function init_delete_button() {
    let deleteButton = document.getElementsByClassName("delete-btn");
    Array.from(deleteButton).forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            let id = e.path[2].children[0].innerText;
            delete_api_data_entry(id);
        });
    });
}


function init_add_new_user_submit_button() {
    let submit = document.getElementsByClassName("addUserSubmit");
    Array.from(submit).forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            post_data_to_api();
        });
    });
}
