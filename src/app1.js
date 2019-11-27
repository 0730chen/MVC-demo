import $ from 'jquery'
import './app1.css'

//��ȡ�ĸ���
let n = localStorage.getItem('n')
let eventBus = $(window)
console.dir(eventBus)


let $output = $('.output')
let $add1 = $('.add1')
let $minus1 = $('.minus1')
let $mul2 = $('.mul2')
let $divide2 = $('.divide2')
$output.text(n || 100)
// console.log($output,$add1,$minus1,$mul2,$divide2)

// $output.on('ccc', e => {
//     console.log(eventBus)
//     eventBus.on('ccc', () => {
//         console.log('haha')
//     })
// })
$add1.on('click', (e) => {
    //加
    eventBus.trigger('ccc')
    e.preventDefault()
    let n = parseInt($output.text())
    n += 1

    localStorage.setItem('n', n)
    $output.text(n)
    // $output.text(n)
})
eventBus.on('ccc',()=>{
    // console.log('抓到了ccc')
})
$minus1.on('click', (e) => {
    // eventBus.trigger('xxx')
    e.preventDefault()
    let n = parseInt($output.text())
    n -= 1
    localStorage.setItem("n", n)
    $output.text(n)

})
eventBus.on('xxx',()=>{
    // console.log('抓到了xxx')
})
$mul2.on('click', e => {
    e.preventDefault()
    let n = parseFloat($output.text())
    n *= 2
    localStorage.setItem('n', n)
    $output.text(n)

})
$divide2.on('click', e => {
    e.preventDefault()
    let n = parseFloat($output.text())
    n /= 2
    localStorage.setItem('n', n)
    $output.text(n)
})
