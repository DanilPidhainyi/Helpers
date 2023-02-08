export const isCloseBrackets = str => {
  const brackets = {')': '('}
  const openBrackets = Object.values(brackets)
  let stack = []
  str.split('').forEach( el => {
    if (openBrackets.includes(el)) {
      stack.push(el)
    }
    if (brackets[el]) {
      if (stack[stack.length -1] === brackets[el]) {
        stack.pop()
      } else {
        stack.push(el)
      }
    }
  })
  return stack.length === 0
}
