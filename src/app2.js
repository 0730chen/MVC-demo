import $ from 'jquery'
import './app2.css'
//选择两个tab bar头
let $tabbar = $('#app2 .tab-bar')
let $tabContent = $("#app2 .tab-content")
console.log($tabbar,$tabContent)
$tabbar.on('click','li',(e)=>{
   let $li = $(e.currentTarget)
    //给每一个添加一个clss然后选择它的兄弟标签，删除class
    $li.addClass('selected').siblings().removeClass('selected')
    let index = $li.index()
    $tabContent.children().eq(index).addClass('active').siblings().removeClass('active')
})

$tabbar.children().eq(0).trigger('click')