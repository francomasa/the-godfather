document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHweo = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;
        const logo = document.querySelector('.header__logo');

        if(posicaoAtual < alturaHweo){
            ocultaElementosDoHeader();
            logo.classList.add('hidden');
        }
        else {
            exibeElementosDoHeader();
            logo.classList.remove('hidden');
            
        }
        if(posicaoAtual == 0 ){
            exibeElementosDoHeader();
            logo.classList.remove('hidden');
        }
    })

    //Seção de atrações, programação das abas
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
                const abaAlvo = botao.target.dataset.tabButton;
                const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
                escondeTodasAbas();
                aba.classList.add('shows__list--is-active');
                removeBotaoAtivo();
                botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    //comportamento do header
    function ocultaElementosDoHeader(){
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }

    function exibeElementosDoHeader(){
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }

    //comportamento dos tabs
    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tabs__button--is-active');
        }
    }

    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');
        for(let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('shows__list--is-active');
        }
    }
})