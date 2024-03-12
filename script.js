const{createApp}=Vue;

createApp({
  data(){
    // obbligatorio return che restituisce oggetto
    return{
      nome:'Ugo',
      contatore: 0,
      isEven: false,
      nomeTemp: ''
    }
  },
  methods: {
    // incremento è un nostro metodo(una nostra funzione)
    incremento(){
      this.contatore++
      if(this.contatore %2==0 ){
        this.isEven= true
      }else{
        this.isEven= false
      }
    },
    riscriviNome(){
      this.nome = this.nomeTemp;
    }
  },



  // il contatore parte da 1 perche viene invocata al caricamento
  // se devo lanciare funzioni di default uso mounted()
  mounted() {
    // richiamo incremento con il this
    this.incremento()
  },
}).mount('#app')


