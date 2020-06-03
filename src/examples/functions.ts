// Typed function
function add(a: number, b: number): number {
  return a + b
}

//Optional parameters
function subtract(a: number, b: number, print?: boolean /** we could also use default parameter */): number {
  const result = a - b

  print ? console.log(`The answer is: ${result}`) : null

  return result
}

// Rest parameters
function multiply(...rest: number[]): number {
  return rest.reduce((prev, curr) => {
    return curr * prev
  })
}

// Overloads

function addTwo(a: string, b: string): string
function addTwo(a: number, b: number): number

function addTwo(a: any, b: any) {
  return a + b
}
