//fantasia, ação, drama, aventura, fatos reais, comédia

//Procurando Nemo, LIVRE, fantasia, ação
//Mãos Talentosas,  LIVRE, drama, fatos reais
//Bob Esponja, LIVRE, fantasia, comédia

//Depois da chuva, 10, drama

//Impossible, 14, drama, ação
//Sob Pressão,  16, drama, fatos rais
//Os Farofeiros,  18, comédia, fantasia 
//O Menino que Descobriu o Vento, 10, aventura, fatos reais
//Preson Break, 16, aventura, ação
//Todas as Flores, 18, drama, fantasia
//Sinais, 16, fantasia, ação

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de Filmes");
  createSpan("Sua idade:");
  campoIdade = createInput();
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?")
   
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade,gostaDeFantasia, gostaDeAventura );
  fill(color(76, 0 , 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width/2, height/2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "Impossible";
    } else{
      if( idade >= 12){
        if(gostaDeFantasia || gostaDeAventura){
          return "Aranha Verso";
        }else{
           return "Ladrões de Bicicleta";
        }
       
      }else{
      if(gostaDeFantasia){
        return "O menino que descobriu o vento";
      }else{
        return "Depois da Chuva"
      }
        }
        
    }
  } else {
    if(gostaDeFantasia){
      return "Procurando Nemo";
    }else{
      return "o feitiço do tempo"
    }
    
  }
}