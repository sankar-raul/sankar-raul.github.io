function removeIframes() {
    container.style.paddingBottom = "0px";
  var span = Array.from(document.querySelectorAll(".video"));
  span.forEach(function (spans) {
    spans.remove();
  });
}

var load = document.getElementById("load");
function hide() {
    setTimeout(function() {
           load.style.display = "none";
}, 1500);
}
hide();
var error = document.getElementById("error");
    function validateUrl(url) {
    
    if (url.includes("www.youtube.com") || url.includes("youtu.be") || url.includes("youtube.com/shorts")) {
     error.style.display = "none";
    }
    else {
       setTimeout(function() {
           error.style.display = "block";
}, 15);
setTimeout(function() {
           error.style.left = "3px";
}, 105);
setTimeout(function() {
           error.style.left = "0px";
}, 150);

  }
    }
    var container = document.getElementById("container");
  var num = document.getElementById("num");
 var url = document.getElementById("url");
 
 function getVedioId() {
     
     let check1 = "youtu.be";
     let check2 = "www.youtube.com/shorts/";
     let check3 = "://youtube.com/shorts";
     let check4 = "www.youtube.com/watch?v=";
     let check3Vid = "?feature";
     //link for shorts - https://youtube.com/shorts/nBmoDdDeDGE?feature=share3
     var ulink = url.value.trim();
     if (ulink.includes(check1)) {
         let ind = ulink.indexOf(check1);
         
         let substringing = ulink.slice(ind + check1.length + 1, ulink.length);

         return substringing.trim();
     }
     else if (ulink.includes(check2)) {
         let ind = ulink.indexOf(check2);
         //for https://www.youtube.com/shorts/9n3gk5ngHZU
         let substringing = ulink.slice(ind + check2.length, ulink.length);
         return substringing.trim();
     }
     else if (ulink.includes(check4)) {
         // for https://www.youtube.com/watch?v=4tMtXq8XmHw
         let ind = ulink.indexOf(check4);
         let substringing = ulink.slice(ind + check4.length, ulink.length);
         return substringing.trim();
     }
     else if (ulink.includes(check3)) {
         let ind = ulink.indexOf(check3);
         let check3Check = ulink.indexOf(check3Vid);
         let substringing = ulink.slice(ind + check3.length + 1, check3Check);
         return substringing.trim();
     }
     else {
         return "HG5G880t-Tw";
     }
 }

  function repeat1() {
     
      if (num.value > 0) {
      container.style.paddingBottom = "51px";
          
      }
      var link = document.getElementById("url").value.trim();
      validateUrl(link);
      var om = getVedioId();
      
  for (let i = 0; i <= num.value-1; i++) {
        const parentElement = document.getElementById('container');
      const newElement = document.createElement('span');
      
      newElement.innerHTML = '<iframe id="repeat" width="56" height="31" src="https://www.youtube.com/embed/' + om + '?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&disablekb=1&vq=144p" frameborder="0" autoplay></iframe>';
      newElement.classList.add('video');
      newElement.id = "vid";
      parentElement.appendChild(newElement);
      
    
    }}