// Copyright (c) Erlimar Silva Campos. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

const LANGS = [
    { lang: "portuguese", phase: "Olá" },
    { lang: "english", phase: "Hello" },
    { lang: "spanish", phase: "Hola" }
]

class HelloComponent extends WebComponent {
    constructor() {
        super()
    }

    static get observedAttributes() { return ["lang"] }

    static get elementName() { return "web-hello" }

    get lang() { return this._lang }

    render(node) {
        let langNode = node.querySelector("#lang")
        let phase = LANGS.filter((l) => l.lang === this.lang).map((m) => m.phase)

        phase = phase.length ? phase[0] : 'Hello' 

        langNode.innerHTML = phase

        return node
    }

    get elementTemplate() {
        return `
        <h1><span id="lang"></span> <span id="inner-container"></span></h1>
        `
    }
}

registerComponent(HelloComponent)
