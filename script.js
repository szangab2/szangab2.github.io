let data = {
    photo: './pict/house0.jpg',
    title: 'A ház képe',
    description: 'A ház leírásának helye...'
  };
  $('#photo').attr('src', data.photo);
  $('#photo-title').text( data.title);
  $('#photo-description').text(data.description) ;
  