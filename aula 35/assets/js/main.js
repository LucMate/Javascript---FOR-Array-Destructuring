const elementos = [
  { tag: "p", texto: "Texto padrão para não ficar parecendo pouca coisa"}, //0
  { tag: "div", texto: "Texto padrão para não ficar parecendo pouca coisa"}, //1
  { tag: "footer", texto: "Texto padrão para não ficar parecendo pouca coisa"}, //2
  { tag: "section", texto: "Texto padrão para não ficar parecendo pouca coisa"}, //3
];

const container = document.querySelector('.container');
const div = document.createElement('div');



for (let i = 0; i < elementos.length; i++){
    let {tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);