var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    for(var i = 1; i <= 6; i++){
    if (spinnerPosition === bulletPosition) return ("You're dead!");
    else return ("Keep playing!");
    }
  
};

console.log(fireGun(spinChamber));