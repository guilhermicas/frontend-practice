import React, { useState } from "react";
//import "../css/header.css";

function MainContent() {
  let [isMorning, setIsMorning] = useState(true);
  // Se eu quiser pôr uma variavel JS no conteudo basta por a variavel dentro de {} dentro do elemento
  let primeiroNome = "Guilherme";
  let ultimoNome = "Silva";

  function handleClick() {
    setIsMorning(!isMorning);
  }

  // Tudo o que esta escrito dentro de {} sera interpretado como javascript
  // Nao e possivel fazer ifs, só operações ternárias
  // É possivel interporlar vars dentro de strings se usarmos backticks(``) para criar a string, e pondo a variavel dentro de ${}, estilo bash scripting
  return (
    <main>
      <p>
        This is the website's my content, my name is{" "}
        {primeiroNome + " " + ultimoNome}
      </p>
      <p>{`${primeiroNome} ${ultimoNome}`}</p>
      <p>{isMorning ? "É de manha agora" : "Not morning ;()"}</p>
      <input type="button" onClick={handleClick} value="dar toggle no bool" />
    </main>
  );
}

export default MainContent;
