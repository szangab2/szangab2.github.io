let data = {
    photo: './pict/house0.jpg',
    title: 'A cseréptetős templom képe',
    description: 'A cseréptetős  templomban kevesen tudnak imádkozni az úrhoz..'
  };
  let data1 = {
    photo: './pict/house1.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
  };
  $('#photo').attr('src', data.photo);
  $('#photo-title').text( data.title);
  $('#photo-description').text(data.description) ;
