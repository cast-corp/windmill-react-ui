import React, { useContext } from 'react'
import { mount } from 'enzyme'
import { WindmillProvider, WindmillContext } from '../WindmillContext'

function TestButton() {
  const { toggleMode } = useContext(WindmillContext)

  return <button onClick={() => toggleMode()}>Click</button>
}

describe('WindmillProvider', () => {
  it('should show value from provider', () => {
    const expected = 'Lorem'
    const wrapper = mount(
      <WindmillProvider value={{ theme: 'Lorem' }}>
        <WindmillContext.Consumer>{(value) => <span>{value.theme}</span>}</WindmillContext.Consumer>
      </WindmillProvider>
    )

    expect(wrapper.find('span').text()).toContain(expected)
  })

  it('should execute the toggleMode method', () => {
    const toggleMode = jest.fn()
    const theme = { test: 'test' } as any
    const wrapper = mount(
      <WindmillContext.Provider value={{ toggleMode, theme }}>
        <TestButton />
      </WindmillContext.Provider>
    )

    const button = wrapper.find('button')

    button.simulate('click')

    expect(toggleMode).toHaveBeenCalledTimes(1)
  })
})
