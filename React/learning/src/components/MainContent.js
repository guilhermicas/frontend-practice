import React from "react";
//import "../css/header.css";

function MainContent() {
  // Se eu quiser pôr uma variavel JS no conteudo basta por a variavel dentro de {} dentro do elemento
  let primeiroNome = "Guilherme";
  let ultimoNome = "Silva";

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
    </main>
  );
}

export default MainContent;
