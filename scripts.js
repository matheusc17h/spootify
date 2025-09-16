document.addEventListener('DOMContentLoaded' , () => {

    const artistsData = [
{name: 'Veigh' , image: './assets/veigh.jpg'} ,
{name: 'Hariel' , image: './assets/hariel.jpg'} , 
{name: 'Orochi' , image: './assets/orochi.jpg'} , 
{name: 'Kayblack' , image: './assets/kayblack.jpg'}



];

  const albumsData = [
{name: 'Evom' , artist: 'Veigh' , image: './assets/albumveigh.jpg'} ,
{name: 'Mundão Girou' ,  artist: 'Hariel' , image: './assets/albumhariel.jpg'} , 
{name: 'Celebridade' ,  artist: 'Orochi' , image: './assets/albumorochi.jpg'} , 
{name: 'Contradições' , artist: 'Kayblack' , image: './assets/albumkayblack.jpg'} , 


];

const artistsGrid = document.querySelector('.artists-grid')
const albumsGrid = document.querySelector('.albums-grid')



artistsData.forEach( artist => {
  const artistsCard = document.createElement('div')
  artistsCard.classList.add('artists-card')


  artistsCard.innerHTML = `
  
  <img src=${artist.image} alt= Imagem do ${artistsCard.name}>
  <div>
  <h3>${artist.name}</h3>
  <p>artista</p>
   </div>
  `

  artistsGrid.appendChild(artistsCard)



})

albumsData.forEach( album => {
  const albumCard = document.createElement('div')
  albumCard.classList.add('album-card')


 albumCard.innerHTML = `
  
  <img src=${album.image} alt= Imagem do ${album.name}>
   <div>
  <h3>${album.name}</h3>
  <p>${album.artist}</p>
  </div>
  `

  albumsGrid.appendChild(albumCard)



})


})














