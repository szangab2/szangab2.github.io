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
  let data3 = {
    photo: './pict/house3.jpg',
    title: 'A göcseji ház',
    description: 'Nyilván egy falumúzeumban készült. Nádtetős... Ilyenkor biztosan jó hűvös...'
  };
  let data4 = {
    photo: './pict/house4.jpg',
    title: 'Egy gazdag pasi háza',
    description: 'Hm, jó lenne ide hazaérkezni a munka után... Főleg, ha a hátsó traktusban egy úszómödanszé van, dzsakuzzival és csini lányokkal..A house with pretty girls'
  };
  let data5 = {
    photo: './pict/house5.jpg',
    title: 'A ház nagy könyvtárszobával',
    description: 'Azt képzelem, ebben a házban elsőként a királynőtől adományozott lovagi cím ötlik szemünkbe.. A könyvtárban Shakespeare-kötetek, earl grey-t szolgálnak fel, s időnként felhív a british PM.....'
  };
  let data6 = {
    photo: './pict/house6.jpg',
    title: 'A zöld ház',
    description: 'Azé" kipróbálnám... Gondolom, a garázsban egy Tesla viháncol; a fűtés a Föld hőjéből van; a rezsiszámla meg nulla, hogy megpukkadjon Németh Zsírszalonna Szilárd pubi....'
  };

  let currentPhoto = 0;
let imagesData = [data0,data1, data2,data3, data4,data5,data6];
  let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
  $('#photo-description').text(imagesData[photoNumber].description) ;
  }
  
  loadPhoto(currentPhoto);
  
  $('#right-arrow').click(() => {
      if (currentPhoto<6){
    currentPhoto++;
    $('#headtitle').text('Egy szép ház');
    loadPhoto(currentPhoto);}
    else { $('#headtitle').text('No more pictures');
          }
  })

  $('#left-arrow').click(() => {
      if (currentPhoto>0){
          $('#headtitle').text('Egy szép ház');
    currentPhoto--;
    loadPhoto(currentPhoto);}
    else{ $('#headtitle').text('No more pictures back');
  currentPhoto=0;}
  })
