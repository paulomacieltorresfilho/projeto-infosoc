export default function Home() {
  return (
    <div className="container">
      <h1>LGPD: Você conhece seus direitos?</h1>
      <div className="content">
        <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank">Link oficial da Lei Geral de Proteção de Dados</a>
        <section>
          <div className="explicacao-grid">
            <div>
              <h2>O que é a LGPD?</h2>
              <p style={{ marginBottom: '16px' }}>
                Esta Lei dispõe sobre o tratamento de dados pessoais, inclusive nos <b>meios digitais</b>, por pessoa natural ou por pessoa jurídica de direito público ou privado, com o objetivo de <b>proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa</b> natural.
              </p>
              <p>
                A lei aplica-se a qualquer operação de tratamento realizada por pessoa natural ou por pessoa jurídica de direito público ou privado, <b>independentemente do meio, do país de sua sede ou do país onde estejam localizados os dados</b>.
              </p>
            </div>
            <div>
              <h2>Dados Sensíveis</h2>
              <p style={{ marginBottom: '16px' }}>
                O dado pessoal é aquele que possibilita a <b>identificação, direta ou indireta</b>, da pessoa.
                Dentre eles, há aqueles que exigem maior atenção no tratamento: aqueles relacionados a <b>crianças e adolescentes</b>; e os “sensíveis”, que são os que <b>revelam origem racial ou étnica</b>, convicções <b>religiosas ou filosóficas</b>, opiniões <b>políticas</b>, filiação sindical, questões genéticas, biométricas e sobre a <b>saúde ou a vida sexual</b> de uma pessoa.</p>
              <p>
                O tratamento dos dados <b>sensíveis</b> depende do <b>consentimento explícito do(a) titular dos dados</b> e para um fim definido. E, sem esse consentimento do(a) titular, a LGPD define que <b>somente será possível, quando a informação for indispensável em situações relacionadas a uma obrigação legal</b>.
              </p>
            </div>
            <div>
              <h2>Deveres dos controladores</h2>
              <p>Os direitos devem ser garantidos durante toda a existência do tratamento dos dados pessoais realizado pelo órgão ou entidade. Para o exercício dos direitos dos(as) titulares, a LGPD prevê um <b>conjunto de ferramentas que aprofundam obrigações de transparência ativa e passiva</b>, e criam meios processuais para <b>mobilizar a Administração Pública</b>.</p>
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
        <section>
          <h2>Relatos Pessoais</h2>
        </section>
        <section>
          <h2>Mini Glossário</h2>
        </section>
      </div>
    </div>
  )
}
