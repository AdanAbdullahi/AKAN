//declare array
var maleName= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw" ,"Kofi", "Kwame"];
var femaleName= ["Akosua", "Adwoa", "Abeena", "Akua", "Yaa", "Afua", "Ama"];

//create a function that would be be giving output based on HTML file
    function giveOutput () {
        //declare variable intouts
        var date=parseInt(document.getElementById("date").value);
        var month=parseInt(document.getElementById("month").value);
        var year=parseIn(document.getElementById("year").value);
        // give alert if the input data is not valid
        if (date < 1 || date > 31) {
            alert("invalid input")
            return false;
        } else if (month < 1 || month > 12){
            alert("invalid input")
            return false;
        } else if (year < 0000 || year > 2019){
            alert("invalid input")
            return false;
        }

        //This formula will calculate the day of the week
        
    }