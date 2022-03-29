async function load_view_list() {
    let viewController = new ViewController("view");
   
    // get data
    let data = await get_data_from_api();
   
    // create the view + pass data to the view
    viewController.generateListView(data);
    
    // set up event listeners for view
    init_more_details_button();
    init_search_module();
    init_sort_module();
}

async function load_view_edit_delete() {
    let viewController = new ViewController("view");
    
    // get data
    let data = await get_data_from_api();
    
    // create the view + pass data to the view
    viewController.generateEditAndDeleteView(data);

    // set up event listeners for view
    init_edit_button();
    init_update_button();
    init_delete_button();
    init_search_module();
    init_sort_module();
}

async function load_view_add_user() {
    let viewController = new ViewController("view");

    // create the view
    viewController.generateNewUserView(); 

    // set up event listeners for view
    init_add_new_user_submit_button();
}