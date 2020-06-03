// Interface
interface SpecialObject {
  mandatoryField: string,
  mandatoryMethod: () => void
}

// Interface with optional fields
interface OptionalInterface {
  optionalField?: string,
  optionalMethod?: () => void
}

// Readonly Interface
interface Point {
  readonly x: number; // both fields can be assigned a value only when instanciated
  readonly y: number;
}

// Elastic interface
interface Config {
  field?: string;
  function?: () => void;
  [propName: string]: any;
}

// Function interface
interface myFunction {
  (argumentOne: string, argumentTwo: string): string
}

// Indexable interface
interface NumberArray {
  [index: number]: number
}

interface StringArray {
  [index: number]: string
}

// Class interface

interface DateInterface {
  currentDate: Date,
  setTime(date: Date): void
}

class Clock implements DateInterface {
  currentDate: Date = new Date()
  setTime(date: Date) {
    this.currentDate = date
  }
}

// Extending interfaces

interface A {
  prop: string
}

interface B extends A {
  prop2: number
}

interface C extends B {
  prop3: boolean
}

class ABC implements C {
  prop: string
  prop2: number
  prop3: boolean

  constructor(prop: string, prop2: number, prop3: boolean) {
    this.prop = prop
    this.prop2 = prop2
    this.prop3 = prop3
  }
}
