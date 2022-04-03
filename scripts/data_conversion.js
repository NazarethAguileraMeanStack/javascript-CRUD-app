function convert_API_data_to_User_Class(data) {
    let users = new Array();
    data.forEach(item => {
        let user = new User(item);
        users.push(user);
    });

    return users;
}