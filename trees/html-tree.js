const htmlTree = {
    name: 'html',
    type: 'tag-internal',
    children: [
        {
            name: 'body',
            type: 'tag-internal',
            children: [
                {
                    name: 'h1',
                    type: 'tag-internal',
                    children: [
                        {
                            type: 'text',
                            content: 'Сообщество',
                        },
                    ],
                },
                {
                    name: 'p',
                    type: 'tag-internal',
                    children: [
                        {
                            type: 'text',
                            content: 'Общение между пользователями Хекслета',
                        },
                    ],
                },
                {
                    name: 'hr',
                    type: 'tag-leaf',
                },
                {
                    name: 'input',
                    type: 'tag-leaf',
                },
                {
                    name: 'div',
                    type: 'tag-internal',
                    className: 'hexlet-community',
                    children: [
                        {
                            name: 'div',
                            type: 'tag-internal',
                            className: 'text-xs-center',
                            children: [],
                        },
                        {
                            name: 'div',
                            type: 'tag-internal',
                            className: 'fa fa-spinner',
                            children: [],
                        },
                    ],
                },
            ],
        },
    ],
};

const filterEmpty = (tree) => {
    const filtered = tree.children
        .map((node) => {
            if (node.type === 'tag-internal') {
                return filterEmpty(node)
            }
            return node
        })
        .filter((node) => {
            const { type } = node
            switch (type) {
                case 'tag-internal': {
                    const { children } = node
                    return children.length > 0
                }
                case 'tag-leaf':
                    return true
                case 'text':
                    const { content } = node
                    return !!content
            }
        })
    return {...tree, children: filtered}
}


const buildClass = (node) => node.className ? ` class=${node.className}` : ''

const buildHtml = (node) => {
    const { type, name } = node
    switch (type) {
        case 'tag-internal': {
            const childrenView = node.children.map(buildHtml).join('')
            return `<${name}${buildClass(node)}>${childrenView}</${name}>`
        }
        case 'tag-leaf': {
            return `<${name}${buildClass(node)}>`
        }
        case 'text':
            return node.content
    }
}

const html = filterEmpty(htmlTree)
console.log(buildHtml(html));