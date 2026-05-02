//Arrays for days and Akan names
const days=["Sunday","Monday","Tuesday","Wednesday",
    "Thursday","Friday","Saturday","Sunday"];

    const maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw",
        "Kofi","Kwame"];

        const femaleNames=["Akwosua","Adwoa","Abenaa",
            "Akua","Yaa","Afua","Ama"];

            //function to get day of the week
            function getDayofWeek(day,month,year) {
                const date=new Date(year,month -1,day);
                return date.getDate();//returns 0-6
            }

            //Function to get Akan name
            function getAkanName(dayIndex,gender){
                if(gender ==="male") {
                    //Your logic for male names goes here
                    }else{
                        //Your logic for female names goes here
                    }
                 }

                 //Function to validate input
                 




    