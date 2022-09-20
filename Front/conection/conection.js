
async function getContent(){
    var id = document.getElementById('codigo').value
    //alert(id)
            
    try {
        const response = await fetch('http://localhost:3333/lista/'+id);
        const data = await response.json();
        show(data)
    }catch (error) {
        console.log(error);

    }
}
//
getContent();

function show(dados){

    console.log(dados)
    let result = ''

    for( ob in dados){
        result = `<li><strong>Id</strong>: ${dados.id}</li><br>
                  <li><strong>Descrição</strong>: ${dados.descrição}</li><br>
                  <li><strong>Código</strong>: ${dados.código}</li><br>
                  <li><strong>Valor R$</strong>: ${dados.valor}</li>`
    }

    document.querySelector('main').innerHTML = result;
}