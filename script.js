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
      counter: 0
      isPlayerActive: true
    }
  },

  methods:{
    nextPrev(isNext){
      
    }
  }
}).mount('#app')