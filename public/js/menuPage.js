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

    if($("#"+newItem).length)
    {
        alert("Deze bestaat al, gebruik een andere naam");
    }
    else
    {
        if(newItem.indexOf('.') != -1){
            alert("Punten worden niet geaccepteerd.");
        }
        else{
            if(!(rootItem))
            {
                let ul = $("#ulMenu");

                ul.append($("<li>").html(newItem).attr("id", newItem));

            }
            else{
                let ul = $("<ul>");

                ul.append($("<li>").html(newItem).attr("id", newItem));

                $("#"+rootItem).append(ul);
            }
        }
    }
}
function deleteItem()
{
    let item = $("#del-item").val();

    if ($("#"+item+" li").length >= 1) {
        alert("Menu item heeft nog subItems. Verwijder deze eerst!");
    }
    else
    {
        $("#"+item).remove();
    }
}