function salvarTexto() {
    const texto= document.getElementById('inputTexto').ariaValueMax;

    if(texto.trim() !== '') {
        let textos = JSON.parse(localStorage.getItem('textos')) || [];
        textos.push(texto);
        localStorage.setItem('textos', JSON.stringify(textos));
        document.getElementById('inputTexto').value = '';
        carregarTextos();
    } else {
        alert('O campo não pode ficar em branco');
    }
    
    }

    function carregarTextos() {
        const textos = JSON.parse(localStorage.getItem('textos')) || [];
        const listaTextosDiv = document.getElementById('listaTextos');

        listaTextosDiv.innerHTML = '';

        textos.forEach((texto, index) => {
            const divTexto = document.createElement('div');
            divTexto.classList.add('texto');
            divTexto.innerHTML = `<p>${texto}</p><hr>`;
            listaTextosDiv.appendChild(divTexto);
        });
    }

    window.onload = carregarTextos;
