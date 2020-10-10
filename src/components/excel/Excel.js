import {$} from '@core/dom'

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector) // #app
    this.components = options.components || [] // Header, ...
    // передаем массив компонентов из index.js
  }

  getRoot() {
    const $root = $.create('div', 'excel') // #app .excel
    // для каждого элемента массива создаем node-элемент
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
    return $root // возвращаем шаблон node-элементов
  }
  render() {
    this.$el.append(this.getRoot())
    this.components.forEach( component => component.init())
  }
}


