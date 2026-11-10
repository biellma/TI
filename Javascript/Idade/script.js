function verificar(){

    var anos = window.document.getElementById('ano')
    var sexo = window.document.getElementsByName('sexo')
    var texto = window.document.getElementById('texto')
    var img = window.document.getElementById('imagem')
    
    var ano = Number(anos.value)
    var idade = 2027 - ano
    var genero =''
    
    if (sexo[0].checked){
        genero = 'M'
    } else{
        genero = 'F'
    }

    switch(genero){
        case 'M':
            if(idade > 125 || idade < 1){
                texto.innerText = 'ERRO - Digite uma data válida (De 1915 à 2027)'
                window.alert('ERRO - Digite uma data válida (De 1915 à 2027)')
                img.style.display = 'none'
            } else if(idade <= 2){
                texto.innerText = `Você é um bebê de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'img/bebemenino.webp'
            } else if(idade < 14){
                texto.innerText = `Você é uma criança de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'img/criançaM.avif' 
            } else if(idade < 18){
                texto.innerText = `Você é um adolescente de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'img/AdolescenteH.webp' 
            } else if(idade < 65){
                texto.innerText = `Você é um homem de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'img/Homem.avif'
            } else {
                texto.innerText = `Você é um senhor de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'img/idoso.webp'
            }
        break

        case 'F':
            if(idade > 124 || idade < 1){
                texto.innerText = 'ERRO - Digite uma data válida (De 1915 à 2027)'
                window.alert('ERRO - Digite uma data válida (De 1915 à 2027)')
                img.style.display = 'none'
            } else if(idade <= 2){
                texto.innerText = `Você é uma bebê de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'img/bebemenina.webp' 
            } else if(idade < 14){
                texto.innerText = `Você é uma criança de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'img/criançaF.webp' 
            } else if(idade <18){
                texto.innerText = `Você é uma adolescente de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'img/AdolescenteM.avif' 
            } else if(idade < 65){
                texto.innerText = `Você é uma mulher de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'img/Mulher.jpg' 
            } else {
                texto.innerText = `Você é um senhora de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'img/Idosa.avif'
            }
        break
        }
}