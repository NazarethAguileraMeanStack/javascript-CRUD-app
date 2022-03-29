function apply_active_view(str) {
    let view = document.getElementById("link_view_list");
    let edit = document.getElementById("link_view_edit_delete");
    let add = document.getElementById("link_add_user");
    let arr = [view, edit, add];
    
    arr.forEach(item => {
        if (item.id === `link_${str}`) {
            item.classList.add("activeView");
        } else {
            item.classList.remove("activeView")
        }
    }); 

}

function toggle_view_more_details(e) {
    let target = e.path[2].children[1].children[1];
    if (target.classList.contains("hide-content")) {
        target.classList.remove("hide-content");
    } else {
        target.classList.add("hide-content");
    }
}