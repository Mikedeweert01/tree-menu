function buildMenu()
{
    let menu = $("#div-menu");

    let ul = $("<ul>");

    ul.append($("<li>").html("item1").attr("id", "item1"))
    ul.append($("<li>").html("item2").attr("id", "item2"))

    menu.append(ul);
}
function addItem()
{

    let parentItem = $("#SelectBox").val();
    let newItem = $("#new-item").val();

    if($("#"+newItem).length)
    {
        alert("Deze bestaat al, gebruik een andere naam");
    }
    else
    {
        let ul = $("<ul>");

        ul.append($("<li>").html(newItem).attr("id", newItem));

        $("#"+parentItem).append(ul);
        fillOption();
    }
}
function deleteItem()
{
    let item = $("#del-item");
    let itemName = item.val();

    if ($("#"+itemName+" li").length >= 1) {
        alert("Menu item heeft nog subItems. Verwijder deze eerst!");
    }
    else
    {
        $("#"+itemName).remove();
    }
}