// passo 1//

const personagens = document.querySelectorAll('.personagem')

// passo 2 //

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
       
       if(window.innerWidth < 450) {
        window.scroll({top: 0, behavior: 'smooth'})
       }

        // passo 3 //

        const personagemSelecionado = document.querySelector('.selecionado');
        
        personagemSelecionado.classList.remove('selecionado');
        
        personagem.classList.add('selecionado');


        //Objetivo 2//
        const imagemPersonagemGrande = document.querySelector('.personagem-grande')
        console.log(imagemPersonagemGrande);

        //passo2//
        const idPersonagem = personagem.attributes.id.value

        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        //passo3// 

        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //4//

        const descricaoPersonagem = document.getElementById('descricao-personagem');

        descricaoPersonagem.innerText = personagem.getAttribute('data-description');


        
    })
})