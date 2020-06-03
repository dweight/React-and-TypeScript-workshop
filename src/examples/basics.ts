// Basic types

// Boolean
const isReady: boolean = true

// Number
const magicNumber: number = 0.04
const bigNumber: bigint = 100n // available from es2020

// String
const sentenceOfTheDay: string = 'you will learn something today'

// Symbol
const importantSymbol: symbol = Symbol('A')

// Array
const listOfsomethingStringy: string[] = ['a', 'b', 'c']
const listWithGenericNotation: Array<string> = ['d', 'e', 'f']

// Tuple
const aRandomTuple: [string, number, boolean] = ['a', 44, true]

// Enum
enum Months {
  Jan, Feb, Mar,
  Apr, May, Jun,
  Jul, Aug, Sep,
  Oct, Nov, Dec,
}

enum MonthsWithRegularIndexes {
  Jan = 1, Feb, Mar, // Now enum indexes are started from 1 (default is 0)
  Apr, May, Jun,
  Jul, Aug, Sep,
  Oct, Nov, Dec,
}

// Any
let regularOldSchoolVarLike: any = 'It can be any type you wish'
regularOldSchoolVarLike = 13 // also good
regularOldSchoolVarLike = {} // no worries

// Void
function func(): void {
  console.log('I\'m returning nothing!')
}

// Null/Undefined
const nullishStuff: null = null // pointless in this case
const undefinishStuff: undefined = undefined // same here

// Never
function funcErr(): never {
  throw new Error('Nasty error!')
}

// Object
const specialObject: object = {}

// Literals
const aLiteralToo = 'I\'m a literal type!'

type hobbies = 'sitting' | 'youtube' | 'walking slowly'

interface Activity {
  name: string,
  duration: 15 | 30 | 45
}
