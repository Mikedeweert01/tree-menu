function buildMenu()
{
    let menu = $("#div-menu");

    let ul = $("<ul>").attr("id", "ulMenu");

    // standard menu build

    ul.append($("<li>").html("Home").attr("id", "Home"));
    ul.append($("<li>").html("Contact").attr("id", "Contact"));

    menu.append(ul);
}

function addItem()
{
    let rootItem = $("#root-item").val();
    let newItem = $("#new-item").val();

    //check if item already exists
    if($("#"+newItem).length)
    {
        alert("Deze bestaat al, gebruik een andere naam");
    }
    else
    {
        // check if there are any dots in the new item name
        if(newItem.indexOf('.') != -1){
            alert("Punten worden niet geaccepteerd.");
        }
        else{

            // check if no root is given
            if(!(rootItem))
            {
                let ul = $("#ulMenu");

                ul.append($("<li>").html(newItem).attr("id", newItem));
                fillSelectbox();
            }
            else{
                let ul = $("<ul>");

                ul.append($("<li>").html(newItem).attr("id", newItem));

                $("#"+rootItem).append(ul);
                fillSelectbox();
            }
        }
    }
}
function deleteItem()
{
    let item = $("#del-item").val();

    // check if deleting item exists
    if(!($("#"+item).length)){
        alert("Item bestaat niet");
    }
    else{

        //check if item has subitems
        if ($("#"+item+" li").length >= 1) {
            alert("Menu item heeft nog subItems. Verwijder deze eerst!");
        }
        else
        {
            $("#"+item).remove();
        }
    }
}