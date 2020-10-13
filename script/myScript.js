function showInfo(data, tabletop) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
    $('.post').append(
    '<div class="article" style="background-image: url( ' +
    data[i].img + '.jpg)">' +
   
    '<div class="card-header">'+data[i].title+'</div>'+
    '<div class="card-body">' +
    '<h4 class="card-text">' + data[i].body + '</4>'+
    '</div> ' + '<div class="meta-info">' + '<img src ="' + data[i].img + '.jpg">'+
    
    '</div>' +
    '</div>');
    }
    }
