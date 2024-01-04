export default class Building {
  _sqft;
  constructor(sqft) {
    this.sqft = sqft;
    if (Object.getPrototypeOf(this) != Building.prototype) {
      if (!this.evacuationWarningMessage)
        throw Error("Class extending Building must override evacuationWarningMessage");
    }
  }
  get sqft() {
    return this._sqft;
  }
  set sqft(sqft) {
    if (typeof sqft != "number")
      throw TypeError("sqft must be a Number");
    this._sqft = sqft;
  }
}
