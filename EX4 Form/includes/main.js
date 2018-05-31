function checkAddress() {
    var add, text;
    var addArray = ["Anna Frank 12", "Megadim 10", "Vitkin 9"];
    // Get the value of the input field with id="numb"
    add = document.getElementById("address").value;
    var mess = document.createElement("h4");
    console.log(add);
    for(var i = 0 ; i < 4 ; i++)
    {
        if(add.localeCompare(addArray[i]) == 0)
        {
            return true;
        }
    }
    
    text = "Incorrect Address - Must be - Anna Frank 12,Megadim 10, Vitkin 9";
    document.getElementById("error").innerHTML = text;
    return false;
    
}