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
                 function isValidDate(day,month,year){
                    if(!day||!month||!year)return false;
                    if(day<1||day>31)return false;
                    if(month<1||month>12)return false;
                    return true;
                 }

                 //main function(runs when form is submitted)
                 function handleFormSubmit(event){
                    event.preventdefault();
                 }

                //Get values 
                const day=
                parseInt(document.getElementById("day")).value;
                const month=
                parseInt(document.getElementById("month")).value;
                const year=
                parseInt(document.getElementbyId("year")).value;
                const gender=
                document.getElementById("gender").value;

                //validate
                if(!isValidDate(day,month,year)||!gender){
                    alert("Please enter valid details");
                    return;
                }

                //process
                const dayIndex=getDayofWeek(day,month,year);
                const akanName=getAkanName(dayIndex,gender);

                //output
                document.getElementById("result").innerText=
                'You were born on ${days[dayIndex]}.Your Akan name is ${akanName}.';
            
                //Event listener
                document.getElementById("akanForm").addEventListener("submit",handleFormSubmit);



    