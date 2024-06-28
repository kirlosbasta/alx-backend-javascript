export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const SubClass = this.constructor[Symbol.species];
    return new SubClass();
  }
}
