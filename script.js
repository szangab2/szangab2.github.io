let data = {
    photo: './pict/house0.jpg',
    title: 'A cseréptetős templom képe',
    description: 'A cseréptetős  templomban kevesen tudnak imádkozni az úrhoz..'
  };
  let data1 = {
    photo: './pict/house1.jpg',
    title: 'A sziklára épült szürke ház',
    description: 'Ez a ház nekem úgy tűnik fel, mintha erős belövések után lennénk... After heavy artillery fire..'
  }; 
  let currentPhoto = 0;
let imagesData = [data,data1];
  let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
  $('#photo-description').text(imagesData[photoNumber].description) ;
  }
  
  loadPhoto(currentPhoto);
  
  $('#right-arrow').click(() => {
    currentPhoto++;
    loadPhoto(currentPhoto);
  })

  $('#left-arrow').click(() => {
    currentPhoto--;
    loadPhoto(currentPhoto);
  })
