export const isCloseBrackets = str => {
  const brackets = {')': '('}
  const openBrackets = Object.values(brackets)
  let stack = []
  str.split('').forEach( el => {
    if (openBrackets.includes(el)) {
      stack.push(el)
    }
    if (brackets[el] && stack[stack.length -1] === brackets[el]) {
      stack.pop()
    }
  })
  return stack.length === 0
}
