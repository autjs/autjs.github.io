import ez from 'ezdo'

import navd from './../../data/mainnav'

class Content extends ez.Node {
    constructor(router) {
        super()

        this.router = router
        this.addClass('header-content')

        let logo = new ez.Node('span')
        logo.text = 'Ezdo'
        logo.addClass('logo')
        this.add(logo)

        this.nav = new ez.Node('ul')
        this.nav.addClass('main-menu')
        this.add(this.nav)

        navd.forEach(data => {
            let item = new ez.Node('li')
            item.addClass('main-menu-item')
            item.text = data.title
            item.data = data
            this.nav.add(item)
            item.on('click', this.onSelectMenuItem, this)
        })
    }

    onSelectMenuItem(node) {
        this.router.to(node.data.name)
        setTimeout(() => {
            Prism.highlightAll(document)
        }, 30);
    }

}

export default Content