$('#search').on('keyup', function(){
  const value = $('#search').val().toLowerCase();
  const list = document.querySelector('.livesearch');
  const a = list.getElementsByTagName("a"); 
  for (let i = 0; i < a.length; i++){
    var caption = a[i].getAttribute('data-title').toLowerCase();   
    if (caption.indexOf(value) > -1){
        a[i].style.display = "";
    } else {
        a[i].style.display = "none";
    }
  }  
});