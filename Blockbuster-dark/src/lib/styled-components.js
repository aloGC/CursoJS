import { createElement } from './react/index.js'

  const styled = {

}


const elements= [
 'h1',
 'p',
 'div',
 'img',
 'article',
 'span',
 'footer',
 'header',
 'form',
 'input',
 'button',
 'select',
 'section'

]

function buildStyles(strings, dynamicValues, props) {
  let style = strings.slice()
  dynamicValues.forEach((value, index)=>{
    debugger
  style[index] += value (props)
  })

return style.join('')
}

elements.forEach((tag)=>{
styled[tag] = function (strings , ...dynamicValues) {
  
  return function (props, content) {
    const style = buildStyles(strings, dynamicValues,props)
    return createElement(tag, {
      ...props,
      style,
    }, content)
    
   
  }
}
})
  export default styled