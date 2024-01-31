const prompt = require("prompt-sync")(); 

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A:2,
    B:4,
    C:6,
    D:8
}

const SYMBOLS_VALUES = {
    A:5,
    B:4,
    C:3,
    D:2
}





 const desposit = () =>{
    while(true){
    const depositAmount = prompt("Enter a desposit amount: ")
    const numberDespositAmount = parseFloat(depositAmount)
    
    if(isNaN(numberDespositAmount) || numberDespositAmount <= 0){
        console.log("Invalid desposit number please try again");
    }else{
        return numberDespositAmount;
    }
 }
};
const getNumberOfLines = () =>{
    while(true){
        const lines = prompt("Enter a teh number of lines to bet on (1-3): ")
        const numberOfLines = parseFloat(lines)
        
        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid numbers of lines try again");
        }else{
            return numberOfLines;
        }
     }
}
const getBet = (balence , lines) =>{
    while(true){
        const bet = prompt("Enter the bet per line: ")
        const numberBet = parseFloat(bet)
        
        if(isNaN(numberBet) || numberBet <= 0 || numberBet > (balence/lines)){
            console.log("Invalid bet please try again");
        }else{
            return numberBet;
        }
     }
}

const spin = () =>{
    const symbols = [];
    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for(let i =0 ;i<count;i++){
            symbols.push(symbol);
        }
    }

    const reels =[[],[],[]];
    for(let i  = 0;i<COLS;i++){ 
        reels.push([]);
        const reelSymbols = [...symbols]; 
        for(let j = 0; i<ROWS ;j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex,1);
        }
    }
    return reels
};
 const reels = spin()
 console.log(reels)
let balence= desposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balence,numberOfLines);




