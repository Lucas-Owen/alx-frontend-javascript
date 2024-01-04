export default class Currency {
  _code;
  _name;
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
  get code() {
    return this._code;
  }
  get name() {
    return this._name;
  }  
  set code(code) {
    if (typeof code != "string")
      throw TypeError("Code must be a string")
    this._code = code;
  }
  set name(name) {
    if (typeof name != "string")
      throw TypeError("Name must be a string")
    this._name = name;
  }
  displayFullCurrency () {
    return `${this.name} (${this.code})`  
  }
}

