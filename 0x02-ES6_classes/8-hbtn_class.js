export default class HolbertonClass {
  _size;
  _location;
  constructor (size, location) {
    this.size = size;
    this.location = location;
  }
  get size () {
    return this._size;
  }
  get location () {
    return this._location;
  }
  set size (size) {
    if (typeof size != 'number')
      throw TypeError("Size must be a number");
    this._size = size;
  }
  set location (location) {
    if (typeof location != 'string')
      throw TypeError("Location must be a string");
    this._location = location;
  }
  valueOf() {
    return this.size;
  }
  toString() {
    return this.location;
  }
}
