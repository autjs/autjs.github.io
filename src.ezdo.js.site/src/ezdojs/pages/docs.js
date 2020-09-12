import ez from 'ezdo'
import Tree from 'ezdo-tree'

import marked from 'marked'
import axios from 'axios'


class Docs extends ez.Node {
    constructor() {
        super()

        this.addClass('page ez-docs')
        this.tree = new Tree()
        this.tree.addClass('ez-docs-tree')
        this.tree.setSelect(this.select, this)
        this.tree.setData([
            {name:'简介', md: '/docs/001.md', children: null},
            {name:'安装', children: [
                {name:'模板项目', md: '/docs/002.md', children: null},
                {name:'手动安装', md: '/docs/003.md', children: null},
            ]},
            {name:'虚拟节点', md: '/docs/004.md', children: null},
            {name:'事件', md: '/docs/005.md', children: null},
            {name:'列表', md: '/docs/004.md', children: null},
            {name:'批处理', md: '/docs/004.md', children: null},
            {name:'扩展性', md: '/docs/004.md', children: null},
            {name:'自定义组件', md: '/docs/004.md', children: null},
        ])
        this.add(this.tree)

        this.initMarked()

        this.markedContent = new ez.Node() 
        this.add(this.markedContent)
        this.markedContent.addClass('ez-docs-mark-content')
        this.markedContent.html = 'ezdo.js docs.'
    }

    select(data) {
        if(data.md) {
            axios.get(data.md)
            .then(res => {
                this.markedContent.html = marked(res.data)
                setTimeout(() => {
                    Prism.highlightAll(document)
                }, 30);
            })
        }
    }

    initMarked() {
        this.mdRender = new marked.Renderer()
        marked.setOptions({
            renderer: this.mdRender,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            pedantic: false,
            smartLists: true,
            smartypants: false
        })
    }
}

export default Docs