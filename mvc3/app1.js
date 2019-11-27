import $ from 'jquery'
import './app1.css'
import Vue from 'vue'
//使用面向对象方法再次优化代码
//
//ѧϰeventBus
// const eventBus = $(window)

//
const init = (el)=>{
    const m = {
        get(){
            return parseFloat(localStorage.getItem("n"))
        },
        set(n){
            localStorage.setItem('n',n)
        }
    }

    new Vue({
        el:el,
        data:{n:m.get()},
        methods:{
            add(){
                this.n+=1
            },
            minus(){
                this.n -=1
            },
            mul(){
                this.n *=2
            },
            div(){
                this.n /=2
            },
        },
        watch:{
            n:function (){
                m.set(this.n)
            }
        },
        template:` <div>
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
            
        `
    })
}

export default init