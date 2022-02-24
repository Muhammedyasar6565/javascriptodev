function merhaba(){
    let ad,soyad,yas,takım;
    ad=document.getElementById("txtad").value;
    soyad=document.getElementById("txtsoyad").value;
    yas=document.getElementById("txttc").value;
    takım=document.getElementById("lıstetakımlar").selectedIndex;
    document.getElementById("yazı").innerHTML="";
    console.log(takım);
    if(takım==0){
       document.body.style.backgroundColor="red";
       yazı.innerHTML= "DAHA İLERİYE, EN İYİYE"
       document.getElementById("resim").setAttribute("src","hacettepe.jpg")
      
      
      }
   
    else if(takım==1){
       document.body.style.backgroundColor="yellow"
       yazı.innerHTML= "HAYATTA EN HAKİKİ MÜRŞİT İLİMDİR."
       document.getElementById("resim").setAttribute("src","odtu.png")
       
      
       
    }
    else if(takım==2){
       document.body.style.backgroundColor="red";
       yazı.innerHTML= "TARİH TEN GELECEĞE BİLİM KÖPRÜSÜ."
       document.getElementById("resim").setAttribute("src","istanbuluni.jpg")
    }
    else if(takım==3){
       document.body.style.backgroundColor="blue";
       yazı.innerHTML= "#hayalinikeşfet. “Koç Üniversitesi."
       document.getElementById("resim").setAttribute("src","koclogo.png")
      }
       
    
    else if(takım==4){
      document.body.style.backgroundColor="green";
      yazı.innerHTML= "CUMHURİYET BİLİM GÜNEŞİ."
      document.getElementById("resim").setAttribute("src","ankaralogo.jpg")
   }
      
   
    }
    $( document ).ready(function() {

      let $randomnbr = $('.nbr');
      let $timer = 30;
      let $data = 0;
      let index;
      let change;
      let letters = ["Ü", "N", "İ", "V", "e", "R ", "S", "İ","T","E"];
  
      $randomnbr.each(function() {
          change = Math.round( Math.random() * 100 );
          $( this ).attr('data-change', change);
      })
  
      function random() {
          return Math.round( Math.random() * 9 );
      }
  
      function select() {
          return Math.round( Math.random() * $randomnbr.length + 1 );
      }
  
      function value() {
          $('.nbr:nth-child(' + select() + ')').html('' + random() + '');
          $('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
          $data++;
  
          $randomnbr.each(function() {
              if(parseInt($( this ).attr('data-number')) > parseInt($( this ).attr('data-change'))) {
                  index = $('.ltr').index( this );
                  $( this ).html(letters[index]);
                  $( this ).removeClass('nbr');
              }
          })
      }
  
      $it = setInterval(value, $timer);
  
  })