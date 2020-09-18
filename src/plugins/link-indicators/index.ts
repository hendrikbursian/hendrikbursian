import { gsap } from 'gsap'
import { PluginObject } from 'vue'

const sizeObj = { value: 4, unit: 'px' }
const size = sizeObj.value + sizeObj.unit
const halfSize = sizeObj.value * 0.5 + sizeObj.unit

const LINK_INDICATOR_ATTR = 'link-indicator'

const addLinkIndicator = function (el: HTMLElement, color: string) {
  if (el.hasAttribute(LINK_INDICATOR_ATTR)) return
  el.setAttribute(LINK_INDICATOR_ATTR, '')

  const indicatorEl = document.createElement('div')
  indicatorEl.style.position = 'absolute'
  indicatorEl.style.left = `calc(50% - ${halfSize})`
  indicatorEl.style.bottom = '0px'
  indicatorEl.style.width = size
  indicatorEl.style.height = size
  indicatorEl.style.borderRadius = halfSize
  indicatorEl.style.backgroundColor = color

  el.style.position = 'relative'
  el.style.display = 'inline-block'
  el.appendChild(indicatorEl)

  // prettier-ignore
  const tl = gsap
    .timeline()
    .timeScale(2)
    .pause()
    .addLabel('drop')
    .to(indicatorEl, { duration: 0.6, y: -9, ease: 'power4.inOut' })
    .to(indicatorEl, { duration: 0.6, y: -1, ease: 'power4.in' })
    .set(indicatorEl, { height: 1 })
    .to(indicatorEl, { duration: 1.2, left: '6%', width: '88%', ease: 'power4', })
    .to(indicatorEl, { duration: 2.2, backgroundColor: 'black' })
    .addPause()
    .addLabel('grow')
    .to(indicatorEl, { duration: 1.2, left: '0%', width: '100%', ease: 'back', backgroundColor: color, })
    .to(indicatorEl, { duration: 1.2, left: '6%', width: '88%', ease: 'power4', backgroundColor: 'black', });

  el.onmouseenter = function () {
    if (tl.isActive()) {
      return
    }

    if (!tl.previousLabel()) {
      tl.play('drop')
      return
    }

    tl.play('grow')
  }
}

function iterateLinks(el: HTMLElement, color?: string) {
  const links = el.querySelectorAll('[href]')
  links.forEach((linkEl) =>
    addLinkIndicator(linkEl as HTMLElement, color || 'currentColor')
  )
}

const plugin: PluginObject<unknown> = {
  install(Vue) {
    Vue.directive('link-indicators', {
      bind(el, binding) {
        iterateLinks(el, binding.value)
      },
      componentUpdated(el, binding) {
        // Wait one tick for updated elements and components
        setTimeout(() => iterateLinks(el, binding.value))
      },
    })
  },
}

export default plugin
