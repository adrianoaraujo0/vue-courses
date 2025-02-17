new Vue({
	el: '#desafio',
	data: {
		trocarEfeito: true,
		aplicarCSS: '',
		aplicarCSS2: '',
		aplicarCSS3: '',
		progress: 0,
		cor: '',
		color: true,
	},
	computed:{
		desafio1(){
			return {
				encolher: this.trocarEfeito,
				destaque: !this.trocarEfeito,
			}
		},
		estilos(){
			return {
                width: "100px",
                height: "100px",
                border: "2px solid black"
			}
		},
		estilo(){
			return {
				height: '100px',
				width: '100px',
				backgroundColor: 'red'
			}
		},
		aplicarProgresso(){
			return {
				height: '20px',
				width: this.progress + 'px',
				backgroundColor: 'blue'
			}
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.trocarEfeito = !this.trocarEfeito;
			}, 1000);
		},
		iniciarProgresso() {
			let interval = setInterval(()=>{
				this.progress += 20;
				if(this.progress == 200){
					clearInterval(interval);
				}
			}, 1000)
		},
		setColor(event){
			var value = event.target.value;
			if(value == "true")this.color = true;
			if(value == "false")this.color = false;
		}
	}
})
