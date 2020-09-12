import ez from 'ezdo'

class Help extends ez.Node {
    constructor() {
        super()

        this.addClass('page')
        this.addClass('ez-help')
        
        let arr = [
            '您可以选下面的一种联系方式来获得帮助',
            '邮箱：cn.coder@tom.com',
            'QQ群：1050845971',
            '微信/手机：15011021101'
        ]

        arr.forEach(item => {
            let p = new ez.Node('p')
            p.text = item
            this.add(p)
        })
    }
}

export default Help