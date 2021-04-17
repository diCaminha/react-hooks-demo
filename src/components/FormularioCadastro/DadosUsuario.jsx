const { TextField, Button } = require("@material-ui/core");

function DadosUsuario() {
  return (
    <form>
      <TextField id="email" type="email" label="Email" />
      <TextField id="senha" type="password" label="Senha" />
      <Button>Salvar</Button>
    </form>
  );
}

export default DadosUsuario;
