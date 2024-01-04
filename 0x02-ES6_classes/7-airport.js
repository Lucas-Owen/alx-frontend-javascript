const util = require("util")

export default class Airport {
  _name;
  _code;
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
  get name() {
    return this._name;
  }
  get code() {
    return this._code;
  }
  set name(name) {
    if (typeof name != "string")
      throw TypeError("Name must be a string")
    this._name = name;
  }
  set code(code) {
    if (typeof code != "string")
      throw TypeError("Code must be a string")
    this._code = code;
  }
  [util.inspect.custom]() {
    return `Airport [${this.code}] { _name: '${this.name}', code: '${this.code}'}`;
  }
}