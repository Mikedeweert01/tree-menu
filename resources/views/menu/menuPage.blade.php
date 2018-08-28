<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
<script src="../js/menuPage.js"></script>
<script>
    function getMenuItems()
    {
        let items = $('#div-menu li');
        let selectbox = $("<select>");
        $(selectbox).attr("id", "SelectBox");
        if($("#"+SelectBox).length){
            return;
        }
        {
            $.each(items, function(key, value) {
                console.log(value);
                let option = $("<option>");
                $(option).html($(value).html());
                $(selectbox).append(option);
            });
            $("#selectTd").append(selectbox);
        }
    }

</script>
<div class="container mt-5">
    <div id="div-menu" style="float: left;">
    </div>
    <div  style="float: right;">
        <table>
            <tr>
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
    getMenuItems();
</script>