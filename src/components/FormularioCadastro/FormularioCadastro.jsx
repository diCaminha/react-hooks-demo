import React from "react";
import { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(1);

  function proximo() {
    setEtapaAtual(etapaAtual+1);
  }

  function gerarFormularioAtual() {
    switch (etapaAtual) {
      case 0:
        return <DadosUsuario aoEnviar={proximo} />;
      case 1:
        return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />;
    }
  }

  return <>{gerarFormularioAtual(etapaAtual)}</>;
}

export default FormularioCadastro;
