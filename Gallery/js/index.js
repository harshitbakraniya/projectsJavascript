class PhotoGallery{
  constructor(){
    this.API_KEY = '563492ad6f917000010000015fc1d6aa362148b383dace1c241bd719 ';
    this.GalleryDiv  = document.querySelector('.container-right');
    this.upButton = document.querySelector(".top");
    this.downButton = document.querySelector(".bottom");
    this.totalCollection = document.querySelector(".collec-count");
    this.imgs;
    this.position = 0;
    this.activeButton = true;
    this.eventHandler();
  }

  eventHandler(){
    document.addEventListener('DOMContentLoaded',()=>{
      this.getImg();
    });
    this.upButton.addEventListener('click',()=>{
      this.upButtonHandle();
    })
    this.downButton.addEventListener('click',()=>{
      this.downButtonHandle();
    })
  }

  async getImg(){
    const baseURL = 'https://api.pexels.com/v1/curated';
    const response = await fetch(baseURL,{
      method:'GET',
      headers:{
        Accept:'application/json',
        Authorization:this.API_KEY
      }
    })
    const data = await response.json();
    this.totalCollection.textContent = data.photos.length + " Photos";
    for(let item of data.photos){
      this.setImg(item);        
    }
  }
  
  setImg(item){
    let imgEle = document.createElement("img");
    imgEle.setAttribute("class", "img current-img");
    imgEle.setAttribute("src", item.src.original);

    this.GalleryDiv.append(imgEle);
    this.getAllimgs();
  }

  getAllimgs(){
    this.imgs = document.querySelectorAll('.img');
  }

  upButtonHandle(){
    this.downButton.classList.remove("active");
    this.upButton.classList.add("active");
    this.imgs.forEach((item) => {
      item.classList.remove("current-img");
    });
    this.position--;
    console.log(this.position);
    if (this.position < 0) {
      this.position = this.imgs.length - 1;
    }
    this.imgs[this.position].classList.add("current-img");
  }

  downButtonHandle(){
    console.log(this.imgs.length);
    this.downButton.classList.add("active");
    this.upButton.classList.remove("active");
    this.imgs.forEach((item) => {
      item.classList.remove("current-img");
    });
    this.position++;
    if (this.position  === this.imgs.length - 1) {
      this.position = 0;
    }
    this.imgs[this.position].classList.add("current-img");
  }

  setIntervalImg(){
    setInterval(() => {
      this.imgs.forEach((item) => {
        item.classList.remove("current-img");
      });
      this.position++;
      if (this.position === this.imgs.length - 1) {
        this.position = 0;
      }
      this.imgs[this.position].classList.add("current-img");
    }, 3000);
  }
}

const gallery = new PhotoGallery();
gallery.setIntervalImg();