# Header

## Descrição
O componente `Header` é um cabeçalho reutilizável e estilizado para ser utilizado no topo da interface de usuário. Ele exibe um logotipo centralizado dentro de um contêiner com um fundo de cor `principal`. O componente é simples e focado na exibição do logotipo da aplicação.

## Arquitetura
- **Diretório do componente**: "Header"
- **Arquivo de código**: "header.jsx"
- **Imagem do logotipo**: O logotipo está localizado no diretório `assets` e é importado como `mainLogo`.

## Propriedades
Este componente não aceita propriedades dinâmicas, pois é fixo na exibição de um logotipo específico. 

## Classe CSS
- `w-full`: Faz com que o contêiner ocupe toda a largura disponível.
- `h-[120px]`: Define a altura do cabeçalho como 120px.
- `bg-principal`: Aplica a cor de fundo principal definida no projeto.
- `flex`: Define que o layout do contêiner será flexível, permitindo o alinhamento centralizado.
- `justify-center`: Centraliza o conteúdo horizontalmente dentro do contêiner.
- `items-center`: Alinha o conteúdo verticalmente no centro.
- `p-10`: Aplica um preenchimento de 10 unidades nas bordas internas do contêiner.

### Estilo da Imagem:
- `w-[160px]`: Define a largura da imagem do logotipo como 160px.
- `h-[80px]`: Define a altura da imagem do logotipo como 80px.

## Como Usar
- Para usar o componente `Header`, basta importá-lo no arquivo App.jsx, onde é definido o layout da aplicação. Ele não requer propriedades adicionais.

### Exemplo de Uso

```jsx
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header />
      {/* Outros componentes da página */}
    </div>
  );
};

```

## Licenciamento e Contribuições
Licença: O código pode ser distribuído sob a licença escolhida para o projeto.

Contribuições: Para contribuir com melhorias ou correções, faça um fork do repositório e envie um pull request.