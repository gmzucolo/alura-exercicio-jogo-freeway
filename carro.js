let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3, 5, 3.3, 2.3];
let larguraCarros = [50, 50, 50, 50, 50, 50];
let alturaCarros = [40, 40, 40, 40, 40, 40];

/* function mostraCarro() {
  
  image(imagemCarros[0], xCarros[0], yCarros[0], larguraCarros[0], alturaCarro[0]); 
  image(imagemCarros[1], xCarros[1], yCarros[1], larguraCarros[1], alturaCarros[1]); 
  image(imagemCarros[2], xCarros[2], yCarros[2], larguraCarros[2], alturaCarros[2]); 
}
*/

function mostraCarro() {
  
  for(let i = 0; i < imagemCarros.length; i++) {
    
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarros[i], alturaCarros[i]);
  }  
}

/* function movimentaCarro() {
  
  xCarros[0] -= velocidadeCarros[0];
  xCarros[1] -= velocidadeCarros[1];
  xCarros[2] -= velocidadeCarros[2];
}
*/

function movimentaCarro() {
  
  for(let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];  
  }
}

/* function voltaPosicaoInicialDoCarro() {
  
  if(xCarros[0] < -40) {
    xCarros[0] = 600;
  }
  if(xCarros[1] < -40) {
    xCarros[1] = 600;
  }
  if(xCarros[2] < -40) {
    xCarros[2] = 600;
  }
}
*/

function voltaPosicaoInicialDoCarro() {
  
  for(let i = 0; i < imagemCarros.length; i++) {
    if(passouTodaTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarros) {
 
  return xCarros < -40;  
}