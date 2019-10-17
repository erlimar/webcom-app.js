// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.

const WebComponent = require('./web-component')

module.exports = function (c) {
    if (!c || !c.prototype || !(c.prototype instanceof WebComponent)) {
        throw new Error('Your component does not extend WebComponent')
    }

    if(!c.elementName || typeof c.elementName !== 'string') {
        throw new Error('Your component does not define elementName')
    }

    window.customElements.define(c.elementName, c)
}
