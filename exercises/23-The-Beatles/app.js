
function sing()
{
    let itbe = "let it be";
    let letra = "";
    for(let i = 1; i <= 4; i++){
        letra+= itbe+", "         
    }
    letra += "words of wisdom, ";
     for(let i = 1; i <= 5; i++){
        letra+= itbe+", "  
    }
    letra += "there will be an answer, ";
              
    
    letra += itbe;
    return letra;
}

//Your code above ^^^

console.log(sing())