// Generif function
function genericFuntion<T>(argument: T): T {
  return argument
}

const arrowGeneric = <T, S = string>(argument: T, argument2: S): [T, S] => {
  return [argument, argument2]
}

const arr = arrowGeneric<string | null>('3', 'z')

// Generic function with constrains

function genericFunctionWithConstrains<T extends { firstProperty: string, secondProperty: string }>(obj: T): T {
  return {
    ...obj,
    combined: `${obj.firstProperty} ${obj.secondProperty}`
  }
}

const combinedObj = genericFunctionWithConstrains({ firstProperty: 'first', secondProperty: 'second', thirdProperty: 'third' }) // all good!

// Generic interface
interface GenericStuff<T> {
  one: string
  two: number
  three: T
}

type CustomStuff = GenericStuff<number>
