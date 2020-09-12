import ez from 'ezdo'

class Header extends ez.Node {
    constructor() {
        super()

        this.addClass('ez-temp-header')
        

        let arr = [
            '为了让朋友们更快的了解ezdo，这里也为大家提供了一个小工具'
        ]
        arr.forEach(item => {
            let subTitle = new ez.Node('p')
            subTitle.text = item
            this.add(subTitle)
            subTitle.addClass('ez-temp-header-sub-title')
        })
    }
}

class Tool extends ez.Node {
    constructor() {
        super()

        this.addClass('page')
        
        this.header = new Header()
        this.add(this.header)

        let coder = new ez.Node()
        this.add(coder)

        let arr = [
            'npx create-ezdo-app demo',
            'cd demo && npm install',
            'npm start'
        ]

        arr.forEach(item => {
            let pre = new ez.Node('pre')
            coder.add(pre)
            let code = new ez.Node('code')
            pre.add(code)
            code.text = item
            pre.addClass('ez-code')
            code.addClass('language-shell')
            coder.add(new ez.Node())
        })

        let p = new ez.Node('p')
        p.text = '到此，你就应该看见项目已经启动并打开了一个页面。你可以尝试修改一些代码来熟悉一下'
        p.addClass('ez-tool-p')
        this.add(p)
    }
}

export default Tool