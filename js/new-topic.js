//Esse script permite o usuário acessar a interface do novo tópico através de um clique no botão
let conteudoAntigoDiscussoes = document.querySelector(".discussions__content")
let conteudoNovoDiscussoes = document.querySelector(".discussions__content-new-user-topic");
let botaoNovoTopico = document.querySelector(".discussions__content-new-topic-button")

conteudoNovoDiscussoes.classList.add("hide");

function createNewTopic(){
    conteudoAntigoDiscussoes.classList.add("hide");
    conteudoNovoDiscussoes.classList.remove("hide");
    conteudoNovoDiscussoes.classList.add("discussions__new-topic--active");
}

//O script abaixo permite o usuário "enviar" e editar seu tópico e ser redirecionado para a seção de aguardo.
let conteudoTopicoEnviado = document.querySelector(".discussions__content-send");

conteudoTopicoEnviado.classList.add("hide");

function sendNewTopic() {
    conteudoNovoDiscussoes.classList.add("hide");
    conteudoTopicoEnviado.classList.remove("hide");
    conteudoTopicoEnviado.classList.add("discussions__content-send--active")
}

function createNewTopic2(){
    conteudoAntigoDiscussoes.classList.add("hide");
    conteudoNovoDiscussoes.classList.remove("hide");
    conteudoTopicoEnviado.classList.add("hide");
    conteudoNovoDiscussoes.classList.add("discussions__new-topic--active");
}
