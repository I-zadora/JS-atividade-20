/*-------------------Criando avatar com closure------------------------*/

export default function avatar(){
    let eixoX = 50;
    let eixoY = 50;
    let moeda = 5;

    function setForward(){
        eixoY++;
    }
    function setBack(){
        if(eixoY>0){
            eixoY--;
        }
    }
    function setRight(){
        eixoX++;
    }
    function setLeft(){
        if(eixoX>0){
            eixoX--;
        }
    }
    function setCoins(){
        moeda++;
    }

    function getAtributes(){
        return {eixoX, eixoY, moeda}
    }
    return {getAtributes, setForward, setBack, setRight, setLeft, setCoins}
}
const avatar2 = new avatar()
console.log(avatar2.getAtributes());
avatar2.setRight();
avatar2.setRight();
avatar2.setRight();
avatar2.setRight();
avatar2.setCoins();
avatar2.setCoins();
avatar2.setCoins();
avatar2.setCoins();
console.log(avatar2.getAtributes());
