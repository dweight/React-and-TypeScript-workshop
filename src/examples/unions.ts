// Union types
interface UndecidedObject {
  field: string | number,
  funct(): string | number
}

function doSmtn(a: string | boolean): void {
  console.log(a)
}

// Unions in interfaces

interface D {
  doStuff(): void,
  doAStuff(): void
}

interface E {
  doStuff(): void,
  doBStuff(): void
}

declare function getThingsDone(): D | E

const doneThings = getThingsDone()

doneThings.doStuff() // OK, both interfaces have this method
// doneThings.doAStuff()
// doneThings.doBStuff()  // <- error, doBStuff() is part of only one interface

// Type composed from other types

type basicMessage = {
  message: 'hello'
}

type complexMessage = {
  message: 'This is more complexed',
  explanation: 'Your TS is too hard for me!'
}

type message = basicMessage | complexMessage
