import $ from 'jquery'
import './app2.css'
//ѡ������tab barͷ
let $tabbar = $('#app2 .tab-bar')
let $tabContent = $("#app2 .tab-content")
console.log($tabbar,$tabContent)
$tabbar.on('click','li',(e)=>{
   let $li = $(e.currentTarget)
    //��ÿһ�����һ��clssȻ��ѡ�������ֵܱ�ǩ��ɾ��class
    $li.addClass('selected').siblings().removeClass('selected')
    let index = $li.index()
    $tabContent.children().eq(index).addClass('active').siblings().removeClass('active')
})

$tabbar.children().eq(0).trigger('click')