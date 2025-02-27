# 📌 ModalJS – Classe para criação de Modais Simples

**ModalJS** é uma classe em JavaScript puro que permite criar e gerenciar **modais interativos** de forma dinâmica e personalizada.

## ✨ Recursos

✅ Criação dinâmica de modais  
✅ Personalização do conteúdo e botões  
✅ Fácil integração com qualquer projeto  

---

## 📥 Instalação



# 📌 **Classe Modal – Explicação e Funcionamento**

A classe `Modal` é uma implementação simples e flexível de um modal (caixa de diálogo) usando JavaScript puro. Ela foi desenvolvida para criar modais dinâmicos com conteúdo customizado e botões personalizáveis. O objetivo é fornecer uma forma prática de adicionar modais interativos e modulares em sua aplicação.

---

## ⚙️ **Visão Geral**
A classe `Modal` permite criar modais com os seguintes recursos:
- **Conteúdo dinâmico**: Você pode inserir qualquer conteúdo HTML dentro do modal.
- **Botões personalizados**: Os botões podem ter ações específicas, como confirmar ou cancelar, com eventos associados.
- **Botão de fechar**: Um botão para fechar o modal é criado automaticamente, mas você pode personalizá-lo.

---

## 🧱 **Estrutura da Classe**
A classe `Modal` possui os seguintes componentes principais:

1. **`dialog`** – O elemento que representa o modal em si. Ele é criado dinamicamente e inserido no DOM.
2. **`div` de conteúdo** – Contém o conteúdo do modal, que pode ser texto, formulários ou qualquer outro conteúdo HTML.
3. **`button` (fechar)** – Um botão para fechar o modal. O texto do botão é definido pela configuração passada ao criar o modal.
4. **Botões adicionais** – Botões personalizados podem ser adicionados com texto e eventos associados.

---

## 🔨 **Métodos Importantes**
A classe `Modal` tem vários métodos essenciais que controlam o comportamento e a aparência do modal. Aqui estão os principais:

### 1. **`constructor(config)`**
O construtor inicializa o modal, recebendo um objeto de configuração que permite personalizar o conteúdo, o texto do botão de fechar e os botões adicionais.

- `config.conteudo`: O conteúdo HTML que será exibido dentro do modal.
- `config.closeText`: O texto exibido no botão de fechar.
- `config.botoes`: Um array de botões personalizados, com texto e funções de callback.

### 2. **`init()`**
Esse método é chamado internamente para montar o modal. Ele adiciona os elementos (conteúdo, botões e o botão de fechar) no DOM e o prepara para exibição.

### 3. **`criarBotao(nome, callback)`**
Cria um botão personalizado com o nome (texto) e a função associada a ele. Esse botão é adicionado ao modal quando configurado.

### 4. **`abrir()`**
Esse método exibe o modal, utilizando a função `showModal()` do elemento `<dialog>`. Ele impede interações com o conteúdo da página até que o modal seja fechado.

### 5. **`fechar()`**
Fecha o modal usando o método `close()`, permitindo que o usuário retorne à interação normal com a página.

---

## 🚀 **Como Funciona?**
- Quando a classe `Modal` é instanciada, ela cria os elementos HTML necessários (o modal, o conteúdo e os botões).
- O conteúdo é inserido dentro do modal, e os botões definidos no `config` são criados e configurados com funções específicas.
- Ao chamar o método `abrir()`, o modal aparece na tela e pode ser fechado com o botão de fechar ou outros botões definidos.
- O método `fechar()` é responsável por ocultar o modal, permitindo que o usuário continue interagindo com a página.

---

## 🧩 **Personalização**
A classe permite diversas formas de personalização:
- **Conteúdo dinâmico**: Você pode inserir HTML qualquer dentro do modal, tornando-o altamente flexível.
- **Botões personalizados**: Você pode criar botões com nomes e funcionalidades específicas, como "Sim", "Não", "Confirmar", entre outros.
- **Estilização**: A classe pode ser facilmente estilizada com CSS, permitindo adaptar o modal ao visual de qualquer aplicação.

---

## 🎯 **Principais Casos de Uso**
Aqui estão algumas situações em que você pode usar a classe `Modal`:

- **Confirmar ações**: Exibir um modal para confirmar ações importantes, como excluir um item.
- **Formulários de login ou registro**: Exibir formulários interativos dentro de um modal, sem a necessidade de recarregar a página.
- **Mensagens e alertas**: Mostrar mensagens de sucesso, erro ou informações importantes para o usuário.
- **Guias e tutoriais**: Exibir dicas ou instruções para novos usuários.

---

## 🔥 **Diferenciais da Classe**
- **Simplicidade**: A classe é leve e fácil de integrar em qualquer projeto JavaScript, sem dependências externas.
- **Flexibilidade**: É possível personalizar tanto o conteúdo quanto os botões e suas funcionalidades.
- **Uso do `<dialog>`**: A classe aproveita o elemento `<dialog>`, que é nativo do HTML5 e oferece uma forma simples de criar modais sem a necessidade de scripts complicados.

---

## 🎯 **Conclusão**
A classe `Modal` é uma maneira eficiente de criar modais personalizados em JavaScript. Ela é fácil de usar, flexível e oferece diversas opções de personalização. Seja para exibir confirmações, mensagens ou formulários, a classe pode ser adaptada a diferentes necessidades, proporcionando uma experiência de usuário agradável e intuitiva.

Agora que você conhece a estrutura e os métodos da classe, pode utilizá-la em seu próprio projeto para criar modais interativos e personalizados com facilidade!
