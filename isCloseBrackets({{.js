export const isCloseBrackets = str => {
  const brackets = {'(': ')'}
  const closeBrackets = Object.values(brackets)
  let stack = []
  str.split('').forEach( el => {
    if (brackets[el]) {
      stack.push(el)
    }
    if (closeBrackets.includes(el) && stack[stack.length -1] === el) {
      stack.pop()
    }
  })
  return stack.length === 0
}
