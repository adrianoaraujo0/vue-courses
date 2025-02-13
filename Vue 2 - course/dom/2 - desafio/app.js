new Vue({
    el: '#desafio',
    data: {
        valor: ''
    }, 
    methods: {
        alerta(){
            alert("Mostrar alertar")
        },
        passarValor(event){
            console.log(event.target.value)
            this.valor = event.target.value 
        }
    }
})