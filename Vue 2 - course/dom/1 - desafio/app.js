new Vue({

    el: '#desafio',
    data: {
        nome: "Adriano",
        idade: "24",
        image: "https://embratur.com.br/wp-content/uploads/2022/07/Embratur-Brasil-ultrapassa-marca-de-1-milhao-de-turistas-estrangeiros-recebidos-pela-primeira-vez-desde-2020-1.png"
    },
    methods:{
        multiplicarPor3(){
            return this.idade * 3;
        }
    }

})