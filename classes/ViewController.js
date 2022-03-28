class ViewController {
    constructor(target) {
        this.targetNode = document.getElementById(target);
    }

    clearView() {
        this.targetNode.innerHTML = "";
    }

    generateListView(data) {
        this.clearView();
        let userInterfaceBuilder = new UserInterfaceBuilder();
        let section = document.createElement("SECTION");
        section.setAttribute("id", "listView");
        section.innerHTML = userInterfaceBuilder.buildUserListReadOnly(data);
        this.targetNode.appendChild(section);
    }

    generateEditAndDeleteView(data) {
        this.clearView();
        let userInterfaceBuilder = new UserInterfaceBuilder();
        let section = document.createElement("SECTION");
        section.setAttribute("id", "listEdit");
        section.innerHTML = userInterfaceBuilder.buildUserListEdit(data);
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