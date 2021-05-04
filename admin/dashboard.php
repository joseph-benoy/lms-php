<?php declare(strict_types=1);
    session_start();
    if(!isset($_SESSION['email'])){
        header('location: error.html');
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#00adb5">
    <title>Admin | Dashboard</title>
    <link rel="stylesheet" href="style/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style/css/dashboard.css">
    <script src="style/bootstrap/jquery.min.js"></script>
    <script src="style/bootstrap/popper.min.js"></script>
    <script src="style/bootstrap/bootstrap.min.js"></script>
    <script src="js/dashboard_ui.js"></script>
    <script src="js/book_details_tab.js"></script>
    <script src="js/search_book.js"></script>
    <script src="js/add_new_book.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <!--mobile nav-->
            <div id="mob_menu">
                <a id="menu-close-icon"><i class="fa fa-times"></i></a>
                <div id="mob_menu_links">
                    <a id ="home_btn_mob" class="side_nav_active"><i class="fa fa-home"></i>Home</a>
                    <a id="books_btn_mob"><i class="fa fa-book"></i>Books</a>
                    <a id="members_btn_mob"><i class="fa fa-users"></i>Members</a>
                    <a id="messages_btn_mob"><i class="fa fa-commenting"></i>Messages</a>
                    <a id="requests_btn_mob"><i class="fa fa-question-circle"></i>Requests</a>
                    <a id="settings_btn_mob"><i class="fa fa-wrench"></i>Settings</a>
                    <a id="profile_btn_mob"><i class="fa fa-user"></i>Profile</a>
                    <a id="logout_btn_mob"><i class="fa fa-sign-out"></i>Log Out</a>  
                </div>             
            </div>
            <div class="col-xl-2" id="mobileNav">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-4" id="mob_nav_icon_col">
                            <a id="navIcon"><i class="fa fa-bars" aria-hidden="true"></i></a>
                        </div>
                        <div class="col-4" id="logo_col_mob">
                            <a href="#" id="logoLink_mob">LYMAS</a>
                        </div>
                        <div class="col-4" id="signout_col_mob">
                            <a href="" id="mob_logOut"><i class="fa fa-sign-out"></i></a>
                        </div>
                    </div>
                </div>

            </div>
            <!--desktop side nav-->
            <div class="col-xl-2" id="sideNav">
                <div id="logo">
                    <a href="#" id="logoLink">LYMAS</a>
                </div>
                <div id="navList">
                    <a id ="home_btn" class="side_nav_active"><i class="fa fa-home"></i>Home</a>
                    <a id="books_btn"><i class="fa fa-book"></i>Books</a>
                    <a id="members_btn"><i class="fa fa-users"></i>Members</a>
                    <a id="messages_btn"><i class="fa fa-commenting"></i>Messages</a>
                    <a id="requests_btn"><i class="fa fa-question-circle"></i>Requests</a>
                    <a id="settings_btn"><i class="fa fa-wrench"></i>Settings</a>
                    <a id="profile_btn"><i class="fa fa-user"></i>Profile</a>
                    <a id="logout_btn"><i class="fa fa-sign-out"></i>Log Out</a>                    
                </div>
            </div>
            <div class="col-xl-10" id="tab_containter">
                <div class="container tab" id="home_tab">
                <!------------------------HOME TAB-------------------------->
                    <h1>Home tab</h1>
                </div>
                <div class="modal" tabindex="-1" role="dialog" id="remove_book_modal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Remove book</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p id="book_removal_message">Are you sure to remove the book?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" id="remove_book_btn">Remove</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" id="book_removal_cancel">Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>

                <!--------------------------Admin profile updation status modal-------------------------->
                <div class="modal" tabindex="-1" role="dialog" id="update_success_modal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Updation successful</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p id="book_removal_message">Admin's profile updated successfully</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal" tabindex="-1" role="dialog" id="update_failure_modal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Updation failure</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p id="book_removal_message">Admin's profile updation failed</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Retry</button>
                        </div>
                        </div>
                    </div>
                </div>

                <!----------------------Update book details----------------------------->
                <div class="modal" tabindex="-1" role="dialog" id="rename_book_modal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Rename book</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="rename_book_input">Book name</label>
                                <input type="text" class="form-control" id="change_book_input"  placeholder="Enter book's name">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="change_book_submit">Rename</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal" tabindex="-1" role="dialog" id="rename_author_modal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Change author</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="rename_author_input">Author's name</label>
                                <input type="text" class="form-control" id="rename_author_input"  placeholder="Enter authors's name">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="change_author_submit">Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal" tabindex="-1" role="dialog" id="rename_publisher_modal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Change publisher</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="rename_publisher_input">Publisher's name</label>
                                <input type="text" class="form-control" id="rename_publisher_input"  placeholder="Enter publishers's name">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="change_publisher_submit">Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal" tabindex="-1" role="dialog" id="change_price_modal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Change price</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="change_price_input">Price</label>
                                <input type="number" class="form-control" id="change_price_input"  placeholder="Enter the price">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="change_price_submit">Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal" tabindex="-1" role="dialog" id="change_category_modal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Change category</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="change_category_input">Category</label>
                                <select class="form-control" id="change_category_input">
                                <option hidden selected >Category</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="change_category_submit">Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal" tabindex="-1" role="dialog" id="change_description_modal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Change description</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="change_description_input">Description</label>
                                <textarea class="form-control" id="change_description_input" rows="3" cols="15"></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="change_description_submit">Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal" tabindex="-1" role="dialog" id="change_stock_modal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Change stock</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="change_stock_input">Stock</label>
                                <input type="number" class="form-control" id="change_stock_input"  placeholder="Enter the stock">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="change_stock_submit">Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal" tabindex="-1" role="dialog" id="error_add_book">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Error!</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Error while add the new book to the library</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Retry</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal" tabindex="-1" role="dialog" id="success_add_book">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Success!</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Successfully added the book to the library</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" id="success_add_book_submit" data-dismiss="modal">Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>
                <!------------------update cover image modal------------------------->
                <div class="modal" tabindex="-1" role="dialog" id="change_cover_modal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Change cover image</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="change_cover_input" accept="image/*">
                                <label class="custom-file-label" for="change_cover_input" id="change_cover_label">Choose file</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="change_cover_submit">Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>
                <!--------------------Each book details container------------->
                <div class="container tab" id="book_details_page">
                    <h2>Book details</h2>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col text-center">
                                <img src="uploads/cover_image/dummy.jpg" class="img-thumbnail" alt="cover_image" id="cover_image_bdp">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <table class="table table-hover">
                                    <tbody>
                                        <tr id="book_name_bdp">
                                            <td><strong>Book</strong></td>
                                            <td id="book_name_value">My book</td>
                                        </tr>
                                        <tr id="author_name_bdp">
                                            <td><strong>Author</strong></td>
                                            <td id="author_name_value">Robert Greene</td>
                                        </tr>
                                        <tr id="publisher_name_bdp">
                                            <td><strong>Publisher</strong></td>
                                            <td  id="publisher_name_value">Thornton</td>
                                        </tr>
                                        <tr id="price_bdp">
                                            <td><strong>Price</strong></td>
                                            <td id="price_value">550</td>
                                        </tr>
                                        <tr id="category_bdp">
                                            <td><strong>Category</strong></td>
                                            <td id="category_value">Horror</td>
                                        </tr>
                                        <tr id="description_bdp">
                                            <td><strong>Description</strong></td>
                                            <td  id="description_value">Stoies about power</td>
                                        </tr>
                                        <tr id="stock_bdp">
                                            <td><strong>Stock</strong></td>
                                            <td id="stock_value">5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <button class="btn btn-primary btn-block">Issue</button>
                            </div>
                            <div class="col-4">
                                <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#remove_book_modal">Remove</button>                            
                            </div>
                            <div class="col-4">
                                <button class="btn btn-primary btn-block" id="back_btn_bdp">Back</button>
                            </div>
                        </div>
                    </div>
                </div>


                <!--Add new book page container-->
                <div class="container tab" id="new_book_page">
                    <h2>Add new book</h2>
                    <form id="add_new_book_form" enctype="multipart/form-data">
                        <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="bookname_input">Book</label>
                            <input type="text" class="form-control" id="bookname_input" placeholder="Book's name"  required>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="author_input">Author</label>
                            <input type="text" class="form-control" id="author_input" placeholder="Author's name" required>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="publisher_input">Publisher</label>
                            <input type="text" class="form-control" id="publisher_input" placeholder="Publisher's name"  required>
                        </div>
                        </div>
                        <div class="form-row">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="customFile_books" accept="image/*" required>
                                <label class="custom-file-label" for="customFile_books" id="file_name_label">Choose a cover image</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-4 mb-3">
                            <label for="price_input">Price</label>
                            <input type="number" class="form-control" id="price_input" placeholder="Price of the book"  required>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="category_select">Category</label>
                                <select class="custom-select" id="category_select">
                                    <option selected hidden>Choose a category</option>
                                </select>
                            </div>
                            <div class="col-md-4 mb-3">
                            <label for="stock_input">Stock</label>
                            <input type="number" class="form-control" id="stock_input" placeholder="Current stock"  required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="book_description_input">Description of the book</label>
                                <textarea class="form-control" id="book_description_input" rows="3" cols="120"></textarea>
                            </div>
                        </div>
                        <button class="btn btn-primary btn-block" id="discard_btn" type="reset">Discard</button>
                    </form>
                    <button class="btn btn-primary btn-block" id="new_book_submit">Submit</button>
                </div>

                <!-----------------------------Books Tab--------------------->
                <div class="container tab" id="books_tab">
                    <div class="row">
                        <div class="container-fluid">
                            <p id="search_box_label">Search</p>
                            <div class="row"><!--search box row-->
                                <div class="col-12" id="search_box">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="search for any book" aria-label="Recipient's username" aria-describedby="basic-addon2" id="search">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="container" id="list_btn_container"><!--list button container-->
                                    <p id="list_by">List by</p>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <select class="custom-select form-select-lg mb-3" aria-label=".form-select-lg example" id="category_select_filter">
                                                <option hidden selected>Category</option>
                                            </select>
                                        </div>
                                        <div class="col-sm-4">
                                            <select class="custom-select form-select-lg mb-3" aria-label=".form-select-lg example" id="author_select_filter">
                                                <option hidden selected>Author</option>
                                            </select>
                                        </div>
                                        <div class="col-sm-2" id="filter_apply_box">
                                            <button class="btn btn-primary btn-block" id="filter_apply_btn">Apply</button>
                                        </div>
                                        <div class="col-sm-2">
                                            <button class="btn btn-primary btn-block" id="list_all_btn">List all</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row"><!---------result table row--------->
                                <div class="col-sm-12">
                                    <h4>Results</h4>
                                    <div id="result_table">Search for some book</div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-primary" id="add_book_btn"><i class="bi bi-file-earmark-plus"></i></button>
                    </div>
                </div>
                <div class="container tab" id="members_tab">
                    <h1>members_tab</h1>
                </div>
                <div class="container tab" id="messages_tab">
                    <h1>messages_tab</h1>
                </div>
                <div class="container tab" id="requests_tab">
                    <h1>requests_tab</h1>
                </div>
                <div class="container tab" id="settings_tab">
                    <h1>settings_tab</h1>
                </div>
                <div class="container-fluid tab" id="profile_tab">
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModalCenter_profile" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenter_profileTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Change password</h5>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-row">
                                      <div class="col-md-12 mb-3">
                                        <label for="current_password">Current password</label>
                                        <input type="password" class="form-control" id="current_password" placeholder="Current password" value="Mark" required>
                                      </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-md-12 mb-3">
                                          <label for="new_password">New password</label>
                                          <input type="password" class="form-control" id="new_password" placeholder="New password" value="Mark" required>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-md-12 mb-3">
                                          <label for="confirm_new_password">Confirm New password</label>
                                          <input type="password" class="form-control" id="confirm_new_password" placeholder="Confirm New password" value="Mark" required>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1">
                                            <label class="form-check-label" for="inlineCheckbox1">Show password</label>
                                          </div>
                                    </div>
                                  </form>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <h2>Profile Settings</h2>
                    <form id="profile_update_form">
                        <div class="form-row" id="admin_avatar_row">
                            <div class="col-md-1 mb-3 text-center">
                                <img src="uploads/profile_pic/avatar.png" alt="admin_avatar" class="img-fluid" id="admin_avatar">
                            </div>
                        </div>
                        <div class="form-row">
                          <div class="col-md-4 mb-3">
                            <label for="firstname_input">First name</label>
                            <input type="text" class="form-control" id="firstname_input" placeholder="First name"  required>
                          </div>
                          <div class="col-md-4 mb-3">
                            <label for="lastname_input">Last name</label>
                            <input type="text" class="form-control" id="lastname_input" placeholder="Last name" required>
                          </div>
                          <div class="col-md-4 mb-3">
                            <label for="email_input">Email</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend2_email">@</span>
                                </div>
                                <input type="Email" class="form-control" id="email_input" placeholder="valid email" aria-describedby="inputGroupPrepend2" required>
                            </div>
                          </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-4 mb-3">
                                <label for="phone_input">Phone</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend2_phone"><i class="bi bi-telephone"></i></span>
                                    </div>
                                    <input type="tel" class="form-control" id="phone_input" placeholder="valid phone number" aria-describedby="inputGroupPrepend2" required>
                                </div>
                              </div>
                            <div class="col-md-4 mb-3">
                                <label for="date_of_birth_input">Date of birth</label>
                                <input type="date" class="form-control" id="date_of_birth_input" required>
                            </div>
                            <div class="col-md-4 mb-3">
                              <label for="house_input">House</label>
                              <input type="text" class="form-control" id="house_input" placeholder="House name/no."  required>
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="col-md-4 mb-3">
                                <label for="street_input">Street</label>
                                <input type="text" class="form-control" id="street_input" placeholder="Street name/no."  required>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="city_input">City</label>
                                <input type="text" class="form-control" id="city_input" placeholder="City name"  required>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="state_input">State</label>
                                <input type="text" class="form-control" id="state_input" placeholder="State name">
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="col-md-4 mb-3">
                                <label for="country_input">Country</label>
                                <input type="text" class="form-control" id="country_input" placeholder="Country name">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="pin_input">PIN</label>
                                <input type="number" class="form-control" id="pin_input" placeholder="PIN number">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="changePasswordBtn">Password</label>
                                <input type="button" class="form-control" data-toggle="modal" data-target="#exampleModalCenter_profile" id="changePasswordBtn" value="Change password">
                            </div>
                          </div>
                        <div class="form-row">
                            <div class="col-12 mb-3">
                                <button class="btn btn-primary btn-block" id="discard_btn_profile" type="reset">Discard</button>
                            </div>
                        </div>
                    </form>   
                    <button class="btn btn-primary btn-block" id="submit_btn_profile">Submit</button>                 
                </div>
                <div class="container tab" id="logout_tab">
                    <h1>Logout_tab</h1>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
