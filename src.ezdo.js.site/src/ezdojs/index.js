import ez from 'ezdo'
import './style.css'

import Router from 'ezdo-router'

import Header from './header/'
import navd from './../data/mainnav'


class EzdoSite extends ez.Node {
    constructor() {
        super()

        let router = new Router()
        
        // main nav
        this.nav = new Header(router)
        this.add(this.nav)

        // main content
        this.content = new ez.Node()
        this.add(this.content)
        this.content.addClass('ez-content')
        // router 需要优化一下
        // 可以做成当前node下的需要node都可接收此属性
        
        router.container = this.content
        router.routers = navd

        // 
        router.to('home')
    }
}

export default EzdoSite

