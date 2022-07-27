
/*---------------------------Criando avatar com classe-------------------------*/
export default class Avatar {
    constructor(x, y) {
        this.positionX = x;
        this.positionY = y;
        this.coins = 0;
    }

    get getPosition() {
        return {
            x: this.positionX,
            y: this.positionY,
        };
    }

    get getCoins() {
        return this.coins;
    }

    forward() {
        this.positionY++;
    }

    back() {
        if (this.positionY > 0) {
            this.positionY--;
        }
    }

    right() {
        this.positionX++;
    }

    left() {
        if (this.positionX > 0) {
            this.positionX--;
        }
    }

    Coins() {
        this.coins++;
    }
}
const avatar1 = new Avatar(12, 23);
console.log(avatar1)
avatar1.forward();
avatar1.Coins();
avatar1.Coins();
avatar1.Coins();
avatar1.Coins();
avatar1.left();
avatar1.forward();
avatar1.back();
console.log(avatar1)