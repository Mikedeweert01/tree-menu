<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
<script src="../js/menuPage.js"></script>
<script>

    function createSelectBox() {
        // Create a selectbox and put it into the placeholder "#selectId"
        $("#selectTd").html($("<select>", { id: "SelectBox" }));

        // Fill the selectbox with options
        fillSelectbox();
    }

    function fillSelectbox()
    {
        // Grab all the items inside the menu container.
        let items = $('#div-menu li');

        // Loop through all the menu items inside the menu
        $.each(items, function(key, value) {
            console.log(value);
            $("#SelectBox").append(
                $("<option>").html($(value).html())
            );
        });
    }
</script>
<div class="container mt-5">
    <div id="div-menu" style="float: left;">
    </div>
    <div  style="float: right;">
        <table>
            <tr>
                <!-- Empty placeholder for selectbox containing the tree menu items -->
                <td id="selectTd"></td>
                <td><input type="text" id="del-item" placeholder="Delete Item"></td>
            </tr>
            <tr>
                <td><input type="text" id="new-item" placeholder="New Item"></td>

            </tr>
            <tr>
                <td><button onclick="addItem()" class="btn btn-primary" id="add-menu">Add menu</button></td>
                <td><button onclick="deleteItem()" class="btn btn-danger" id="del-menu">Delete menu</button></td>
            </tr>
        </table>
    </div>

    <div  style="float: right;">

    </div>
</div>
<script>
    buildMenu();
    createSelectBox();
</script>