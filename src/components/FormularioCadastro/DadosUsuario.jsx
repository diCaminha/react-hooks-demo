const { TextField, Button } = require("@material-ui/core");

function DadosUsuario({aoEnviar}) {
  return (
    <form
        onSubmit={(event) => {
            event.preventDefault();
            aoEnviar();
        }}
        >
      <TextField id="email" type="email" label="Email" />
      <TextField id="senha" type="password" label="Senha" />
      <Button type="submit">Salvar</Button>
    </form>
  );
}

export default DadosUsuario;
