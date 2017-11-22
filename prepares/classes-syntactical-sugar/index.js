/*
* @Author: AlanWang
* @Date:   2017-11-22 13:41:45
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-11-22 14:24:31
*/

class People {
  constructor (opts = {}) {
    this.name = opts.name || 'Alan'
    this._age = opts.age || 24
  }

  get age () {
    return this._age
  }

  set age (number) {
    this._age = number
  }

  say (word) {
    console.log('%s says: %s', this.name, word)
  }

  walk (distance) {
    console.log('%s walks: %d', this.name, distance)
  }
}

class Boy extends People {
  constructor (opts = {}) {
    super(opts)
    this._gender = 'boy'
  }

  get gender () {
    return this._gender
  }
}

let alan = new People({ name: 'Alan', age: 25 })
console.log(alan.age)
alan.age = 24
console.log(alan.age)
alan.say('Hello')

let boy = new Boy()
console.log(boy.gender)
boy.say('Hello!')
boy.walk(12)