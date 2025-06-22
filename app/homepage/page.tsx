

export default function pagInicial() {
  return (
    <div style={{textAlign: 'right', paddingRight:'800px'}}>
        <label>Nome de usuário: </label>
        <input type="text" id="name" name="name"></input> <br/><br/>
        <label>Senha: </label>
        <input type="text" id="pass" name="pass"></input> <br/><br/>
        <input type="submit" value="Submit"></input>

        {/* leitores astutos podem perceber que isso tem cara de gambiarra. na minha opinião, se fica bonito tá bom. */}

    </div>
  );
}