import Home from "../ezdojs/pages/home"
import Tool from "../ezdojs/pages/tool"
import Docs from "../ezdojs/pages/docs"
import Cpts from "../ezdojs/pages/cpts"
import Help from "../ezdojs/pages/help"

export default [
    {name:'home', node: new Home(), title: '首页'},
    {name:'tool', node: new Tool(), title: '工具'},
    {name:'docs', node: new Docs(), title: '文档'},
    {name:'cpts', node: new Cpts(), title: '组件'},
    {name:'help', node: new Help(), title: '帮助'}
]
