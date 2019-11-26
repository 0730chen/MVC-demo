import $ from 'jquery'
import './app3.css'
const $square = $("#app3 .square")

console.log($square);
$square.on('click',()=>{
    $square.toggleClass('active')
})