export class Pet {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.legsCount = 4;
        this.animalType = '';
        this.sound = '';
        this.emoji = '';
        this.emojiCount = 1;

    }
    intro() {
        return `Hello I'm a ${this.animalType} named ${this.name}`;

    }
    voice() {
        return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)}`

    }
}