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
  $('#photo').attr('src', data1.photo);
  $('#photo-title').text( data1.title);
  $('#photo-description').text(data1.description) ;
