var video = document.getElementById("video");
var videoTexto = document.getElementById("videoTexto");

function subirArchivo() {
  videoTexto.textContent =
    "Siéntate y relájate. El vídeo se está subiendo.";
}

function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}

function subirVolumen() {
  if (video.volume > 0.9) {
  } else {
    video.volume += 0.1;
  }
}

function bajarVolumen() {
    if (video.volume < 0.001) {
    } else {
      video.volume -= 0.1;
    }
}

video.onloadeddata = function () {
  videoTexto.textContent = "";
};

function handleFileSelect(evt) {
  var files = evt.target.files;
  for (var i = 0, f; (f = files[i]); i++) {
    if (!f.type.match("video.*")) {
      video.src = "";
      videoTexto.textContent = "Vaya, este archivo no es un vídeo :(";
      continue;
    }
    var reader = new FileReader();
    reader.onload = (function (theFile) {
      return function (e) {
        video.src = "";
        videoTexto.textContent ="";
        video.src = e.target.result;
      };
    })(f);
    reader.onloadstart = (function (theFile) {
      return function (e) {
        video.src = "";
        videoTexto.textContent =
          theFile.name +
          "Siéntate y relájate. El vídeo se está subiendo.";
      };
    })(f);
    reader.readAsDataURL(f);
  }
}
