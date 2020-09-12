import ez from 'ezdo'
class Header extends ez.Node {
    constructor() {
        super()

        this.addClass('home-header')

        // this.title = new ez.Node('h3')
        // this.title.text = 'ezdo'
        // this.add(this.title)
        // this.title.addClass('home-header-title')

        this.subTitle = new ez.Node('p')
        this.subTitle.text = '用于构建用户界面的 JavaScript 库'
        this.add(this.subTitle)
        this.subTitle.addClass('home-header-sub-title')
        
    }
}

class Home extends ez.Node {
    constructor() {
        super()

        this.addClass('page')

        this.header = new Header()
        this.add(this.header)
        
        
        this.codeContainer = new ez.Node()
        this.add(this.codeContainer)

        let codes = this.data.code
        this.showCodeBlock(codes[0])
        let covert = new ez.Node()
        covert.text = '将会渲染成如下结构'
        this.codeContainer.add(covert)
        this.showCodeBlock(codes[1])
        // 优势
        
        // <pre><code class="language-js">p { color: red }</code></pre>
    }

    showCodeBlock(codeData) {
        let idata = codeData
        let pre = new ez.Node('pre')
        pre.addClass('ez-code')
        let code = new ez.Node('code')
        code.addClass(idata.type)
        code.text = idata.text
        pre.add(code)
        this.codeContainer.add(pre)
    }

    get data() {
        let _data = {}
        _data.code = [
            {
                type: 'language-js',
                text:
`
        class Ezdo extends ez.Node {
            constructor() {
                super()

                for(let i = 0; i < 10; i++) {
                    let bar = new ez.Node('p')
                    bar.text = 'id-' + i
                    bar.addClass('bar' + i)
                    this.add(bar)
                }
            }
        }
`
            },
            {
                type: 'language-html',
                text:
`
        <div>
            <p class='bar0'>id-0</p>
            <p class='bar1'>id-1</p>
            <p class='bar2'>id-2</p>
            <p class='bar3'>id-3</p>
            <p class='bar4'>id-4</p>
            <p class='bar5'>id-5</p>
            <p class='bar6'>id-6</p>
            <p class='bar7'>id-7</p>
            <p class='bar8'>id-8</p>
            <p class='bar9'>id-9</p>
        </div>
`
            }
        ]
        return _data;
    }
}

export default Home