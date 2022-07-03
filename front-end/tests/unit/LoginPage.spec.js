import { shallowMount } from '@vue/test-utils'
import LoginPage from '@/views/LoginPage'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'TestAgile'
    const wrapper = shallowMount(LoginPage, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
