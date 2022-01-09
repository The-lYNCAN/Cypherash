import { Component } from "react";
import styles from '../../styles/index/hero.module.scss'


class Particle{
    constructor(x, y, ctx){
        this.x = x
        this.y = y
        this.size = Math.random() * 5
        this.baseX = this.x
        this.baseY = this.y
        this.density = this.size * 1
        this.ctx = ctx
        this.opacity = Math.random() * 0.45
    }
    draw(){
        this.ctx.fillStyle = "white"
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        this.ctx.globalAlpha = this.opacity
        this.ctx.closePath()
        this.ctx.fill()
    }

    update(e){
        let widt = e.clientX / 1
        let mouseX = e.clientX / 5
        let mouseY = e.clientY
        let sub = (this.baseX - widt) 
        const DX = Math.pow(widt - this.baseX, 2)
        // this.x = DX
        // this.x = this.baseX -  Math.sqrt(DX)/5
        if(sub > 0){
            this.x = this.baseX -  Math.sqrt(DX)*this.density/20
        }else{
            this.x = this.baseX +  Math.sqrt(DX)*this.density/20

        }
        let heigh = e.clientY / 1
        // let mouseX = e.clientX / 5
        // let mouseY = e.clientY
        let subHeight = (this.baseY - heigh) 
        const DY = Math.pow(heigh - this.baseY, 2)
        // this.x = DX
        // this.x = this.baseX -  Math.sqrt(DX)/5
        if(subHeight > 0){
            this.y = this.baseY -  Math.sqrt(DY)*this.density/20
        }else{
            this.y = this.baseY +  Math.sqrt(DY)*this.density/20

        }
        // console.log(sub);
        // this.x = (this.baseX - mouseX) * this.size/5
        // this.x = (widt - this.baseX) * this.size/5
    }


}



class Hero extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount(){
        const canva = document.getElementById("hcanva")
        const ctx = canva.getContext("2d")
        canva.width = window.innerWidth
        canva.height = window.innerHeight
        let particleArray = []
        ctx.fillStyle = "white"
        ctx.font = "30px Verdana"
        ctx.fillText("Cypherash", 0, 30)
        for (let i=0;i<4000;i++){
            let x = Math.random() * canva.width
            var num = Math.floor(Math.random()*canva.width+100) - 100; // this will get a number between 1 and 99;
            num *= Math.round(Math.random()) ? 1 : -1;
            // var pos = canva.height,
            //     neg = 1,
            //     result;

            // result = Math.floor(Math.random() * (pos + neg)) - neg;
            // result = result < 0 ? result : result + 1;
            let y = Math.random() * canva.height
            var numY = Math.floor(Math.random()*canva.height+100) - 100; // this will get a number between 1 and 99;
            numY *= Math.round(Math.random()) ? 1 : -1;
            // var posH = canva.height,
            //     negH = 1,
            //     resultH;

            // resultH = Math.floor(Math.random() * (posH + negH)) - neg;
            // resultH = result < 0 ? resultH : resultH + 1;

            var widx = (Math.random() - 0.5) * canva.width * 4
            var heighy = (Math.random() - 0.5) * canva.height * 2 * 5






            particleArray.push(new Particle(widx, heighy, ctx))
            // particleArray.push(new Particle(x, y, ctx))
        }
        particleArray.forEach(partic => {
            partic.draw()
        })
        window.addEventListener("mousemove", (e) => {
            ctx.clearRect(0, 0, canva.width, canva.height)
            particleArray.forEach(part => {
                part.draw()
                part.update(e)
            })
        })

    }
    render(){
        return (
            <div className={styles.container}>
                <canvas id="hcanva"></canvas>
            </div>
        )
    }
}

export default Hero