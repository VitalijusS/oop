export class Car {
    constructor(name, model, color, tankSize, fuelConsumption, fuel) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.tankSize = tankSize;
        this.fuelConsumption = fuelConsumption;
        this.fuel = fuel;
        this.isOn = false;
        this.speed = 0;
        this.state = 'stopped';
    }

    turnOn() {
        if (this.isOn === true) {
            return "Car was already on!";
        }
        this.isOn = true;
        return 'Car engine is now on!';
    }
    turnOff() {
        if (this.isOn === false) {
            return "Car was already off!";
        } else if (this.state !== 'stopped') {
            return 'You should stop the car first!'
        }
        this.isOn = false;
        return 'Car engine is now off!';
    }
    startDriving() {
        if (!this.isOn) {
            return 'Need to turn on the engine first';
        }
        if (this.state === 'stopped') {
            this.state = 'startDriving';
            this.fuelConsumption *= 2;
            this.speed = 200;
            return `Picking up the speed and the fuel consumption is ${this.fuelConsumption} leters per 100km`;
        } else if (this.state === 'startDriving' || this.state === 'driving') {
            return "You are already driving";
        }
    }
    drive() {
        if (!this.isOn) {
            return 'Need to turn on the engine first!';
        } else if (this.state === 'stopped') {
            return 'Need to start driving first!';
        } else if (this.state === 'driving') {
            return 'You are already driving';
        } else if (this.state === 'startDriving') {
            this.state = 'driving';
            this.fuelConsumption /= 2;
            return `You are driving and the fuel consumption is ${this.fuelConsumption} leters per 100km`;
        }
    }
    stop() {
        if (this.state === 'driving') {
            this.state = 'stopped';
            return 'Car is now stopped';
        } else if (this.state === 'startDriving') {
            this.state = 'stopped';
            this.fuelConsumption /= 2;
            this.speed = 0;
            return 'Car is now stopped';
        }
        this.speed = 0;
        return 'Car was already stopped';
    }
    fuelLeft() {
        return `There is ${this.fuel} leters of fuel left and you can drive about ${Math.round(this.fuel / this.fuelConsumption * 100)} km.`;
    }
    addFuel(liters) {
        if (this.isOn) {
            return 'Need to turn off the engine first!'
        } else if (!Number.isFinite(liters)) {
            return 'This is not fuel!'
        } else if (liters < 0) {
            return 'Call 911 someone is trying to steal my fuel!';
        } else if (liters === 0) {
            return 'Fuel is too expensive 😢 will have to walk';
        } else if (this.fuel + liters > this.tankSize) {
            const extra = (this.fuel + liters - this.tankSize).toFixed(1);
            this.fuel = this.tankSize;
            return `You spilled ${extra} liters of fuel on the floor because your tank is full`;
        }
        this.fuel += liters;
        return `Now you have ${this.fuel} liters of fuel left.`
    }
}