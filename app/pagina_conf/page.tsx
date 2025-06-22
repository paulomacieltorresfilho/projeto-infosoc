function BotaoSim() {
    const main = document.getElementById("main");
    return (
        <button style = {{backgroundColor : 'darkgray', borderStyle : 'solid', borderWidth : '2px', paddingLeft : '50px', paddingRight : '50px'}}>
        Sim
        </button>
    );

    function handleClick(){
        {/* a ideia era chamar a função next  da pagina que criaria mais uma caixa. não sei exatamente  como faz :P*/}
    }
}

function BotaoNao() {

    return (
        <button style = {{backgroundColor : 'darkgray', borderStyle : 'solid', borderWidth : '2px', paddingLeft : '50px', paddingRight : '50px'}}>
            Não
        </button>
    );

    function handleClick(){
        
    }
}

function Caixa(texto:string) {
  return (
    <div style = {{textAlign : 'center'}}>
        <p>
            Os termos que você acabou de assinar diz que nós temos permissão de {texto}. Você tem certeza disso?
        </p>
        <BotaoSim/> <BotaoNao/>
    </div>
  );
}


export default function pagina(){
    return (
        <div style = {{textAlign : 'center'}} id = "main">
            <h1>Confirmação:</h1><br/>

        </div>
    );

    function next(){

    }
}