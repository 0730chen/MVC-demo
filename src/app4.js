import $ from 'jquery'
import './app4.css'
//ѡ������
let $circle = $("#app4 .circle")
$circle.on('mouseenter',()=>{
    $circle.addClass('active')
}).on('mouseleave',()=>{
    $circle.removeClass('active')
})