async function quantidadeusuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const resultado = await fetch(url);
    const dados = await resultado.json();
    const nomeredes = Object.keys(dados);
    const quantidadeusuarios = Object.values(dados);


    const infos = [
        {
            x: nomeredes,
            y: quantidadeusuarios,
            type: 'bar'
        }
    ]
}