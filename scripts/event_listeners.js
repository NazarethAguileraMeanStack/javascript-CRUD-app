const event_listener_body = document.getElementById("root");
const event_listener_button1 = document.getElementById("button1");
const event_listener_button2 = document.getElementById("button2");
const event_listener_button3 = document.getElementById("button3");

event_listener_body.onload = () => {
    load_view_list();
    apply_active_view(1);
};


event_listener_button1.onclick = () => {
    load_view_list();
    apply_active_view(1);
};


event_listener_button2.onclick = () => {
    load_view_edit_delete();
    apply_active_view(2);
};


event_listener_button3.onclick = () => {
    load_view_add_user();
    apply_active_view(3);
};

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
    let updateButton = document.getElementsByClassName("updateUser");
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
