import $ from 'jquery'
import './app1.css'

//��ȡ�ĸ���ť
let n = localStorage.getItem('n')

let $output = $('.output')
let $add1 = $('.add1')
let $minus1 = $('.minus1')
let $mul2 = $('.mul2')
let $divide2 = $('.divide2')
$output.text(n||100)
// console.log($output,$add1,$minus1,$mul2,$divide2)
$add1.on('click', (e) => {
    e.preventDefault()
    let n = parseInt($output.text())
    n += 1

    localStorage.setItem('n', n)
    $output.text(n)
    // $output.text(n)
})
$minus1.on('click', (e) => {
    e.preventDefault()
    let n = parseInt($output.text())
    n -=1
    localStorage.setItem("n",n)
    $output.text(n)

})
$mul2.on('click',e=>{
    e.preventDefault()
    let n = parseFloat($output.text())
    n *= 2
    localStorage.setItem('n',n)
    $output.text(n)

})
$divide2.on('click',e=>{
    e.preventDefault()
    let n = parseFloat($output.text())
    n /=2
    localStorage.setItem('n',n)
    $output.text(n)
})
