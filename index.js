const borda = document.querySelectorAll('.borda');
const btn = document.querySelector('.btn')
const res = document.querySelectorAll('.res')

btn.addEventListener('click', clicou);

function clicou(){
    borda.forEach((inputs, index) => {

        if(inputs.value !== ''){
            inputs.classList.add('borda-certa');
            
        }else if(inputs.value == ''){
            inputs.classList.add('borda-erro');
            res[index].classList.add('mensagem-erro')
            
        }
    });
    
}



