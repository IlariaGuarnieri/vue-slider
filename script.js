const{createApp}=Vue;

createApp({
  data() {
    return {
      images:[
        'img/01.webp',
        'img/02.webp',
        'img/03.webp',
        'img/04.webp',
        'img/05.webp',
      ],
      counter: 0,
      isPlayerActive: true
    }
  },

  methods:{
    nextPrev(isNext){
      // con operatore ternario se is next è true incremento altrimenti decremento
      isNext ? this.counter++ : this.counter--;

      // controllo validità counter
      if(this.counter === this.images.length){
        this.counter = 0
      }else if (this.counter < 0){
        this.counter = this.images.length -1;
      }
    },

    autoplay(){
      setInterval(() =>{
        if(this.isPlayerActive){
          this.nextPrev(true)
        }
      },1000)
    }
  },

  mounted(){
    this.autoplay()
  }
}).mount('#app')