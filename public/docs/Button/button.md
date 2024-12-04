# Button

## Descrição
O componente Button é um botão reutilizável e estilizado para ser utilizado em interfaces de usuário. Ele aceita propriedades como label, type e onClick, permitindo personalizar o texto, o tipo de botão e o comportamento ao ser clicado.

Este componente é projetado com uma aparência moderna, incluindo um fundo em gradiente e efeitos de hover.

## Arquitetura
- Diretório do componente "Button" e arquivo de código do componente "button.jsx"

## Propriedades

- label (string)
Descrição: Texto que será exibido dentro do botão.
Exemplo: "Clique aqui"
- type (string)
Descrição: Define o tipo do botão. O valor padrão é "button", mas pode ser alterado para outros valores HTML como "submit" ou "reset".
Exemplo: "submit"
- onClick (função)
Descrição: Função de callback que é chamada quando o botão é clicado. A função pode realizar qualquer ação desejada ao ser acionada.

## Classe CSS
min-w-36: Define a largura mínima do botão.
bg-gradient-to-b from-principal to-terciary: Aplica um fundo em gradiente que vai da cor principal para terciary.
rounded-lg: Define bordas arredondadas no botão.
hover:from-terciary hover:to-principal: Aplica a mudança de gradiente nas cores quando o mouse passa sobre o botão.
p-3: Define o preenchimento interno do botão.
flex justify-center: Centraliza o conteúdo dentro do botão.
w-full: Faz com que o botão ocupe toda a largura do contêiner.
text-white: Define a cor do texto como branca.
cursor-pointer: Aplica o estilo de cursor de "ponteiro" para indicar que o botão é clicável.

## Como Usar
- Com o componente pronto, basta fazer a chamada do mesmo no arquivo principal.

## Licenciamento e Contribuições
Licença: O código pode ser distribuído sob a licença escolhida para o projeto.

Contribuições: Para contribuir com melhorias ou correções, faça um fork do repositório e envie um pull request.