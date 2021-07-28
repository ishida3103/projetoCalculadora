new Vue({
    el:"#app",
    data:{
        resultado: 0,
        temporario:'',
        valorA:0,
        valorB:0,
        op: ''

    },
    methods:{
        imprime(valor){
            switch(valor){
                case '1':
                    this.temporario += '1'
                    break
                case '2':
                    this.temporario += '2'
                    break
                case '3':
                    this.temporario += '3'
                    break
                case '4':
                    this.temporario += '4'
                    break
                case '5':
                    this.temporario += '5'
                    break
                case '6':
                    this.temporario += '6'
                    break
                case '7':
                    this.temporario += '7'
                    break
                case '8':
                    this.temporario += '8'
                    break
                case '9':
                    this.temporario += '9'
                    break
                case '0':
                    this.temporario += '0'
                    break
                case 'c':
                    this.temporario = ''
                    this.resultado = 0
                    break
                case '+':
                    this.valorA = this.temporario
                    this.op = '+'
                    this.temporario = ''
                    break
                case '-':
                    this.valorA = this.temporario
                    this.op = '-'
                    this.temporario = ''
                    break
                case '*':
                    this.valorA = this.temporario
                    this.op = '*'
                    this.temporario = ''
                    break
                case '/':
                    this.valorA = this.temporario
                    this.op = '/'
                    this.temporario = ''
                    break
                case '.':
                    this.temporario += '.'
                    break                
                case '=':
                    if(this.valorA == 0 && this.valorB == 0){
                        this.resultado = 0
                    }
                    this.valorB = this.temporario
                    this.temporario = ''
                    this.resultado = this.operacao(this.op, this.valorA, this.valorB)
                    break
                
            }
        },
        operacao(op, v1, v2){
            switch(op){
                case '+':
                    if(((v1 + v2) * 10) % 10 == 0){
                        return parseInt(v1) + parseInt(v2)
                    }else{
                        return parseFloat(v1) + parseFloat(v2)
                    }
                    break
                case '-':
                    if(((v1 - v2) * 10) % 10 == 0){
                        return parseInt(v1) - parseInt(v2)
                    }else{
                        return (parseFloat(v1) - parseFloat(v2)).toFixed(3)
                    }
                    break
                case '*':
                    if(((v1 * v2) * 10) % 10 == 0){
                        return parseInt(v1) * parseInt(v2)
                    }else{
                        return (parseFloat(v1) * parseFloat(v2)).toFixed(3)
                    }
                    break
                case '/':
                    if(((v1 / v2) * 10) % 10 == 0){
                        return v1 / v2
                    }else{
                        return (v1 / v2).toFixed(3)
                    }
                    break;
            }
        }
    }
})