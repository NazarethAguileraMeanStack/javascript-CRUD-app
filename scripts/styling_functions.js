function apply_active_view(num) {
    let view = document.getElementById("button1");
    let edit = document.getElementById("button2");
    let add = document.getElementById("button3");
    let arr = [view, edit, add];
    
    arr.forEach(item => {
        if (item.id === `button${num}`) {
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