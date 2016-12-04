import Vue from 'vue'
import AwesomeIcon from 'src/components/AwesomeIcon'

function newComponent (component, propsData) {
  const Ctor = Vue.extend(component)
  const vm = new Ctor({ propsData }).$mount()
  return vm.$el
}

describe('AwesomeIcon', () => {
  it('can be created', () => {
    expect(
      newComponent(AwesomeIcon, { name: 'terminal' })
    ).to.exist
  })

  it('is an <i> element', () => {
    expect(
      newComponent(AwesomeIcon, { name: 'terminal' }).nodeName
    ).to.equal('I')
  })

  it('has a correct class', () => {
    expect(
      newComponent(AwesomeIcon, { name: 'terminal' }).getAttribute('class')
    ).to.equal('fa fa-terminal')
  })

  it('has aria-hidden attribute', () => {
    expect(
      newComponent(AwesomeIcon, { name: 'terminal' }).getAttribute('aria-hidden')
    ).to.equal('true')
  })
})
