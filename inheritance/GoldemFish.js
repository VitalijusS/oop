import { Fish } from "./Fish.js";

export class GoldenFish extends Fish {
    constructor(name) {
        super(name);
        this.animalType = 'golden fish';
        this.sound = 'wisg';
        this.emoji = '🐟';
        this.emojiCount = 3;

    }
}