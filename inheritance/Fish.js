export class Fish {
    constructor(name) {
        this.name = name;
        this.animalType = 'fisg';
        this.finCount = 3;
        this.sound = '';
        this.emoji = '🐟';
        this.emojiCount = 3;

    }
    intro() {
        return `Hello I'm a ${this.animalType} named ${this.name}`;

    }
    voice() {
        return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)}`

    }
}