let data0 = {
    photo: './pict/house0.jpg',
    title: 'A cseréptetős templom képe',
    description: 'A cseréptetős  templomban kevesen tudnak imádkozni az úrhoz..'
  };
  let data1 = {
    photo: './pict/house1.jpg',
    title: 'A sziklára épült szürke ház',
    description: 'Ez a ház nekem úgy tűnik fel, mintha erős belövések után lennénk... After heavy artillery fire..'
  }; 
  let data2 = {
    photo: './pict/house2.jpg',
    title: 'A kék tetős ház',
    description: 'Tipikus amerikai családi ház... Ja, figyeld meg, focipálya van a ház mögött... Mint Bőrkészítő Futsal Petikéénél..'
  };



  let currentPhoto = 0;
let imagesData = [data0,data1, data2];
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
