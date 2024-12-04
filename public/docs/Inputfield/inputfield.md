# InputField

## Descrição
O componente `InputField` é um componente funcional reutilizável do React, projetado para criar um campo de entrada estilizado. Ele suporta vários tipos de entrada e é altamente personalizável através de propriedades.

---

## Propriedades (Props)

| **Propriedade**   | **Tipo**     | **Descrição**                                                                  | **Obrigatório** |
|--------------------|--------------|--------------------------------------------------------------------------------|-----------------|
| `type`            | `string`     | Define o tipo de entrada (ex.: `text`, `password`, `email`, etc.).             | Sim             |
| `name`            | `string`     | Define o atributo `name` do campo de entrada, útil em formulários.             | Sim             |
| `placeholder`     | `string`     | Texto exibido como dica quando o campo está vazio.                            | Não             |
| `value`           | `string`     | O valor atual do campo de entrada.                                             | Sim             |
| `onChange`        | `function`   | Função de callback acionada quando o valor do campo de entrada muda.           | Sim             |

---

## Arquitetura do Componente

O `InputField` é um componente baseado em função, seguindo a filosofia de componentes modulares e reutilizáveis do React. Sua estrutura é simples e direta, utilizando props para manipulação de dados e ações:

- **Camada de Apresentação:** Um campo de entrada estilizado com classes CSS, permitindo fácil adaptação ao design do projeto.
- **Camada de Dados:** A interação com o componente ocorre via props (`value` e `onChange`), garantindo desacoplamento e controle de estado externo.

---

## Licenciamento

Este componente está licenciado sob a **MIT License**. Isso significa que você pode usá-lo, modificá-lo e distribuí-lo livremente, desde que mencione o autor original. Leia o arquivo LICENSE no repositório para mais detalhes.

---

## Modo de Uso

### Importação e Uso

```javascript
import InputField from './InputField';

const App = () => {
  const [username, setUsername] = React.useState("");

  return (
    <form>
      <InputField
        type="text"
        name="username"
        placeholder="Digite seu nome de usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default App;

```	

## Estilização
O componente já vem pré-estilizado com as seguintes classes CSS:
- `w-full`: Faz o campo de entrada ocupar toda a largura do container.
- `p-3`: Adiciona preenchimento interno ao campo.
- `bg-gray`: Define a cor de fundo como cinza.
- `rounded-md`: Arredonda as bordas do campo.
- `my-3`: Adiciona margem vertical.
- `placeholder-black`: Define a cor do texto do placeholder como preto.
- `placeholder:text-lg`: Define o tamanho do texto do placeholder como grande.

## Licenciamento e Contribuições
Licença: O código pode ser distribuído sob a licença escolhida para o projeto.

Contribuições: Para contribuir com melhorias ou correções, faça um fork do repositório e envie um pull request.