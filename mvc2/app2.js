import $ from 'jquery'
import './app2.css'
//事件总线
let evetnBus = $(window)
let localKey = 'app2.index'
let m = {
    data: {
        index: parseInt(localStorage.getItem(localKey)) || 0
    },
    create() {
    },
    delete() {
    },
    update(data) {
        // console.log(`model中的data`)
        // console.log(data);
        Object.assign(m.data, data)
        //trigger一个事件
        evetnBus.trigger('m:update')
        localStorage.setItem(localKey, m.data.index)
    },
    get() {
    }


}
//view有初始化，模板html，渲染方法
let v = {
    el: null,
    html: (index) => {
        return `<div>
      <ol class="tab-bar">
        <li class="${index === 0 ? 'selected' : ''}" data-index="0"><span>1111</span></li>
        <li class="${index === 1 ? 'selected' : ''}" data-index="1"><span>2222</span></li>
      </ol>
      <ol class="tab-content">
        <li class="${index === 0 ? 'active' : ''}">内容1</li>
        <li class="${index === 1 ? 'active' : ''}">内容2</li>
      </ol>
    </div>`
    },
    init(container) {
        v.el = $(container)
    },
    render(index) {
        // console.log(v.el);
        if (v.el.children.length !== 0) {
            v.el.empty()
            // console.log(`view中的渲染index`);
            // console.log(index)
            $(v.html(index)).appendTo(v.el)
        }
    }
}
//C中初始化中，监听m中的更新事件，当model有更新，则触发view层中的rander，重新渲染页面
let c = {
    init(container) {
        v.init(container)
        v.render(m.data.index)
        c.autoBindEvents()
        //使用表对象编程
        evetnBus.on('m:update', () => {
            //捕捉m的update事件，然后执行view的rander方法
            // console.log(`监听事件重新渲染`)
            v.render(m.data.index)
        })
    },
    events: {
        'click .tab-bar li': 'x'
    },
    x(e) {
        const index = parseInt(e.currentTarget.dataset.index)
        // console.log(`点击触发的更新`)
        m.update({index: index})
    },
    autoBindEvents() {
        for (let key in c.events) {
            const value = c[c.events[key]]
            const spcaeIndex = key.indexOf(' ')//以空格分开
            // 获取空格前和空格后的数据
            const part1 = key.slice(0, spcaeIndex)
            const part2 = key.slice(spcaeIndex + 1)
            // console.log(part1,part2,value)
            v.el.on(part1, part2, value)
        }
    }
}
export default c


// let $tabbar = $('#app2 .tab-bar')
// let $tabContent = $("#app2 .tab-content")
// console.log($tabbar,$tabContent)
// $tabbar.on('click','li',(e)=>{
//    let $li = $(e.currentTarget)
//     //��ÿһ�����һ��clssȻ��ѡ�������ֵܱ�ǩ��ɾ��class
//     $li.addClass('selected').siblings().removeClass('selected')
//     let index = $li.index()
//     $tabContent.children().eq(index).addClass('active').siblings().removeClass('active')
// })
//
// $tabbar.children().eq(0).trigger('click')