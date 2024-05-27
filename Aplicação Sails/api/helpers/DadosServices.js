// api/helpers/DadosService.js

module.exports = {

    validarTipoDeDado: function (valor, tipoEsperado) {
      switch (tipoEsperado) {
        case 'texto':
          return typeof valor === 'string';
        case 'número':
          return !isNaN(valor);
        case 'data':
          return !isNaN(Date.parse(valor));
        default:
          return false;
      }
    },
  
    limparDados: function (valor) {
      if (typeof valor === 'string') {
        return valor.trim().replace(/[^\w\s]/gi, '');
      }
      return valor;
    },
  
    formatarDados: function (valor, tipo) {
      if (tipo === 'data') {
        const data = new Date(valor);
        return data.toISOString().split('T')[0];
      }
      // Adicione outras formatações específicas aqui
      return valor;
    },
  
    validarRegrasDeNegocio: function (valor, regras) {
      if (regras.minimo && valor < regras.minimo) {
        throw new Error(`Valor deve ser maior ou igual a ${regras.minimo}`);
      }
      if (regras.maximo && valor > regras.maximo) {
        throw new Error(`Valor deve ser menor ou igual a ${regras.maximo}`);
      }
      // Adicione outras validações de regras de negócio aqui
      return true;
    },
  
    tratarCampo: function (campo, valor, tipoEsperado, regras) {
      try {
        if (!this.validarTipoDeDado(valor, tipoEsperado)) {
          throw new Error(`Tipo de dado inválido para o campo ${campo}`);
        }
        valor = this.limparDados(valor);
        valor = this.formatarDados(valor, tipoEsperado);
        this.validarRegrasDeNegocio(valor, regras);
        return valor;
      } catch (erro) {
        throw new Error(`Erro ao tratar o campo ${campo}: ${erro.message}`);
      }
    }
  
};
  