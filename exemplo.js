const modalLogin = new Modal({
  conteudo: `
    <form id="loginForm">
      <label>Usuário: <input type="text" id="usuario"></label>
      <label>Senha: <input type="password" id="senha"></label>
    </form>
  `,
  closeText: 'Cancelar',
  botoes: [
    {
      nome: 'Entrar',
      callback: () => {
        const usuario = document.querySelector('#usuario').value;
        console.log(`Usuário: ${usuario}`);
        modalLogin.fechar();
      }
    }
  ]
});
modalLogin.abrir()
