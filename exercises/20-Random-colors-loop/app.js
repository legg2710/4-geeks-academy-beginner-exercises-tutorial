function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(){
    for(let students = 0; students < 10; ++students) {

        var randomnum = Math.floor(Math.random()* (11-1)+1);
        	
        var exampleColor = getColor(randomnum);

             console.log(randomnum+(" ")+exampleColor);
        

    }

}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();
