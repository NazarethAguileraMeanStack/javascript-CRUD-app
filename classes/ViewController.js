class ViewController {
    constructor(target) {
        this.targetNode = document.getElementById(target);
    }

    clearView() {
        this.targetNode.innerHTML = "";
    }

    generateListView(users) {
        this.clearView();
        let userInterfaceBuilder = new UserInterfaceBuilder();
        let section = document.createElement("SECTION");
        section.setAttribute("id", "listView");
        section.innerHTML = userInterfaceBuilder.buildUserListReadOnly(users);
        this.targetNode.appendChild(section);
    }

    generateEditAndDeleteView(users) {
        this.clearView();
        let userInterfaceBuilder = new UserInterfaceBuilder();
        let section = document.createElement("SECTION");
        section.setAttribute("id", "listEdit");
        section.innerHTML = userInterfaceBuilder.buildUserListEdit(users);
        this.targetNode.appendChild(section);
    }

    generateNewUserView() {
        this.clearView();
        let userInterfaceBuilder = new UserInterfaceBuilder();
        let section = document.createElement("SECTION");
        section.setAttribute("id", "addUserView");
        section.innerHTML = userInterfaceBuilder.buildNewUserForm();
        this.targetNode.appendChild(section);
    }

    
}