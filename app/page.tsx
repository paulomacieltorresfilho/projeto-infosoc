export default function Home() {
  return (
    <div className="container">
      <section>
        <div className="explicacao-grid">
          <div>
            <h2>Art 1°</h2>
            <p>Esta Lei dispõe sobre o tratamento de dados pessoais, inclusive nos <b>meios digitais</b>, por pessoa natural ou por pessoa jurídica de direito público ou privado, com o objetivo de <b>proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa</b> natural.</p>
          </div>
          <div>
            <h2>Tópico 2</h2>
          </div>
          <div>
            <h2>Tópico 3</h2>
          </div>
          <div>
            <h2>Tópico 4</h2>
          </div>
        </div>
      </section>
      <section>
        <h2>Seus Direitos</h2>
        <div className="direitos-grid">
          <p className="direito-lgpd destaque alinhadoAEsquerda">acesso aos dados</p>
          <p className="direito-lgpd" >confirmação da existência de tratamento</p>
          <p className="direito-lgpd">anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos</p>
          <p className="direito-lgpd destaque alinhadoADireita" >eliminação dos dados</p>
          <p className="direito-lgpd destaque alinhadoAEsquerda" >correção dos dados</p>
          <p className="direito-lgpd">confirmação da existência de tratamento</p>
          <div className="two-column-grid">
            <p className="direito-lgpd">informação das entidades públicas e privadas com as quais o Controlador realizou uso compartilhado de dados</p>
            <p className="direito-lgpd">informação sobre a possibilidade de não fornecer consentimento e sobre consequências da negativa</p>
          </div>
          <p className="direito-lgpd destaque centralizado">revogação do consentimento</p>
        </div>
      </section>

    </div>
  )
}
