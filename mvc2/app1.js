import $ from 'jquery'
import './app1.css'

//
//ѧϰeventBus
const eventBus = $(window)

//
let num = localStorage.getItem('n')
console.log(num);
const m = {
    //localstrage初始值
    data: {
        n: num === null ? 10 : parseFloat(localStorage.getItem("n"))
    },
    create() {
    },
    delete() {
    },
    updata(data) {
        console.log(data)
        Object.assign(m.data, data)
        console.log(`更新中·····`)
        eventBus.trigger('m:updated')
        localStorage.setItem("n", m.data.n)
    },
    get() {
        console.log(`事件总线get`)
        eventBus.trigger('m:get')
    }
}
const v = {
    el: null,
    html: `
     <div>
    <div class="output">
      <span id="number">{{n}}</span>
    </div>
    <div class="actions">
      <button id="add1">+1</button>
      <button id="minus1">-1</button>
      <button id="mul2">*2</button>
      <button id="divide2">/2</button>
    </div>
  </div>
    `,
    init(container) {
        v.el = $(container)
    },
    render(n) {
        if (v.el.children.length !== 0) {
            console.log(n)
            // v.el.empt()
            v.el.empty()
            $(v.html.replace(`{{n}}`, n)).appendTo(v.el)
            // console.log(`v.el`);
            // console.log(v.el.empty());

        }


    },
}
//在contarol中初始化内容
const c = {
    //初始化方法
    //事件
    //事件方法
    //再初始化中监听事件触发
    init(container) {
        v.init(container)
        console.log(m.data.n)
        v.render(m.data.n)  //view = render(data)
        c.autoBindEvents()
        eventBus.on('m:updated', () => {
            console.log('监听到update,渲染view')
            //重新渲染view
            v.render(m.data.n)
        })
        eventBus.on('m:get',()=>{
            console.log(`ecentBus GET`)
        })
    },
    events: {
        'click #add1': 'add',
        'click #minus1': 'minus',
        'click #mul2': 'mul',
        'click #divide2': 'div'
    },
    add() {
        m.updata({n: m.data.n + 1})
        m.get()
    },
    minus() {
        m.updata({n: m.data.n - 1})
    },
    mul() {
        m.updata({n: m.data.n * 2})
    },
    div() {
        m.updata({n: m.data.n / 2})
    },
    //表驱动绑定事件
    autoBindEvents() {
        for (let key in c.events) {
            const value = c[c.events[key]] //绑定的事件名
            const spaceIndex = key.indexOf(' ')
            const part1 = key.slice(0, spaceIndex)//获取了click
            const part2 = key.slice(spaceIndex + 1)//绑定的标签名称
            v.el.on(part1, part2, value)

        }
    }


}
export default c