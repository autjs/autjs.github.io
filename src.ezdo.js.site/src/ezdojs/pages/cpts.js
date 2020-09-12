import ez from 'ezdo'
import './cpts.css'
import cptlist from './../../data/cptslist'

class Cpts extends ez.Node {
    constructor() {
        super()

        this.addClass('page cpts')
        
        cptlist.forEach(item => {
            let t = new ez.Node('h3')
            t.text = item.name
            t.addClass('ez-cpts-title')
            this.add(t)

            let des = new ez.Node('p')
            des.text = item.des
            des.addClass('ez-cpts-des')
            this.add(des)
            
            let outlink = new ez.Link()
            outlink.addAttr('href', item.outlink)
            outlink.addAttr('target', '_blank')
            outlink.addClass('ez-cpts-outlink')
            outlink.text = '查看详情'
            this.add(outlink)

            let line = new ez.Node()
            line.addClass('ez-cpts-line')
            this.add(line)
        })
        
    }
}

export default Cpts