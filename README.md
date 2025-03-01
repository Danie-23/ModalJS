# **ModalJS**  

**ModalJS** é uma classe em JavaScript puro para criar e gerenciar **modais interativos** de forma dinâmica e personalizada.  

![logo modalJS](/logo3_1_65451.png)

## ✨ **Recursos**  
✅ Criação dinâmica de modais  
✅ Conteúdo e botões personalizados  
✅ Fácil integração com qualquer projeto  

---

## ⚙️ **Visão Geral**  
A classe `Modal` permite criar modais personalizados com:  
- **Conteúdo dinâmico** (qualquer HTML).  
- **Botões configuráveis** com ações específicas.  
- **Botão de fechar** automático e personalizável.  

---

## 🧱 **Estrutura da Classe**  
A `Modal` é composta por:  
1. **`dialog`** – Elemento principal do modal.  
2. **Conteúdo** – Área para o HTML inserido.  
3. **Botão de fechar** – Gerado automaticamente.  
4. **Botões personalizados** – Com ações definidas pelo usuário.  

---

## 🔨 **Principais Métodos**  

### `constructor(config)`  
Inicializa o modal com:  
- `config.conteudo` → HTML do modal.  
- `config.closeText` → Texto do botão de fechar.  
- `config.botoes` → Lista de botões personalizados.  

### `init()`  
Monta o modal no DOM, adicionando conteúdo e botões.  

### `criarBotao(nome, callback)`  
Cria botões personalizados e associa eventos.  

### `abrir()`  
Exibe o modal usando `showModal()`, bloqueando interações na página.  

### `fechar()`  
Fecha o modal com `close()`, restaurando a interação da página.  

---

## 🚀 **Como Funciona?**  
1. A classe cria os elementos do modal dinamicamente.  
2. Insere o conteúdo e configura os botões.  
3. `abrir()` exibe o modal; `fechar()` o esconde.  

---

## 🧩 **Personalização**  
- **Conteúdo dinâmico** → Insira qualquer HTML.  
- **Botões customizáveis** → Ações específicas para cada necessidade.  
- **Estilização livre** → Totalmente personalizável via CSS.  

---

## 🎯 **Casos de Uso**  
✔ Confirmação de ações  
✔ Formulários de login/registro  
✔ Alertas e mensagens  
✔ Guias e tutoriais  

---

## 🔥 **Diferenciais**  
✅ **Leve e sem dependências**  
✅ **Flexível e fácil de integrar**  
✅ **Baseado no `<dialog>` do HTML5**  

---

A classe `Modal` é uma solução prática para adicionar modais personalizados a qualquer projeto. Fácil de usar, flexível e eficiente!
