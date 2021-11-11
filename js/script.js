var carousel = new Vue({
    el:"#container",
    data:{
        activeSlide: 0,
            photos:[
            {
                image:'img/01.jpg',
                tile:'Svezia',
                text:'Lorem ipsum dolor sit amet',
            },

            {
                image:'img/02.jpg',
                tile:'Svizzera',
                text:'Lorem ipsum dolor sit amet',
            },

            {
                image:'img/03.jpg',
                tile:'Gran Bretagna',
                text:'Lorem ipsum dolor sit amet',
            },

            {
                image:'img/04.jpg',
                tile:'Germania',
                text:'Lorem ipsum dolor sit amet',
            },

            {
                image:"img/05.jpg",
                tile:'Olanda',
                text:'Lorem ipsum dolor sit amet',
            }
        ],
    },  
        
    methods: {
        nextSlide: function(){
            if(this.activeSlide === this.photos.length - 1){
                this.activeSlide = 0;
            } else {
                this.activeSlide ++;
            }
        }
    }
});
