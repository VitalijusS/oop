export class Dog {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.legCount = 4;
        this.hasTail = true;
    }
    lostLeg() {
        if (this.legCount >= 1) {
            this.legCount--;
            return 'Dog lost a leg'
        }
    }
    birthday() {
        this.age++;
        return `${this.name} ${this.age} birthday`;
    }
    hi() {
        return 'sako au!';
    }
    think() {
        return console.log('🦴🍖🦴🍗')
    }
    addNumbers(one, two) {
        return one + two;
    }
    manyBones(count) {
        return `Many bones: ${('🦴').repeat(count)}`
    }
}
