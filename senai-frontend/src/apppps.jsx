import CardCurso from "./CardCurso";

function App() {

  const escola = "SENAI";
  const unidade = "Curitiba";

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Painel do Aluno - {escola}</h1>
      <p>Unidade: <strong>{unidade}</strong></p>
      <hr />

      <h2>Cursos Disponíveis:</h2>
      
      {/* Passo 2: Utilizar o componente e passar as PROPS */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        
        <CardCurso 
          nomeDoCurso="Técnico em Desenvolvimento de Sistemas" 
          cargaHoraria={1200} 
          modalidade="Presencial" 
        />

        <CardCurso 
          nomeDoCurso="Instalação de Redes de Computadores" 
          cargaHoraria={160} 
          modalidade="EAD" 
        />

      </div>
    </div>
  );
}

export default App;
