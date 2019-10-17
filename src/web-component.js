// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.

module.exports = class WebComponent extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' })

        this._template = document.createElement('template')
        this._template.innerHTML = this.elementTemplate
        this._templateInner = document.createElement('template')
        this._templateInner.innerHTML = this.innerHTML
    }

    connectedCallback() {
        this.__connected = true
        this._render()
    }

    disconnectedCallback() {
        console.log('WebComponent.disconnectedCallback()')
    }

    attributeChangedCallback(name, oldValue, newValue) {
        let internalName = '_' + name

        if (this[internalName] !== newValue) {
            this[internalName] = newValue

            this.__connected && this._render()
        }
    }

    _render() {
        let node = this._template.content.cloneNode(true)
        let rendered = this.render(node)

        if (!rendered) return

        if (!(rendered instanceof Node)) {
            throw Error('Your rendered object is not a valid HTML Node')
        }

        let innerContainer = rendered.querySelector('#inner-container')

        if(innerContainer) {
            let innerNode = this._templateInner.content.cloneNode(true)

            innerContainer.appendChild(innerNode)
        }

        while (this.shadowRoot.firstChild) {
            this.shadowRoot.firstChild.remove()
        }

        this.shadowRoot.appendChild(rendered)
    }
}