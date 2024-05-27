// api/controllers/FormController.js

module.exports = {

    processarFormulario: async function (req, res) {
      try {
        const { campoTexto, campoNumero, campoData } = req.body;
  
        const textoTratado = await sails.helpers.dadosService.tratarCampo('campoTexto', campoTexto, 'texto', {});
        const numeroTratado = await sails.helpers.dadosService.tratarCampo('campoNumero', campoNumero, 'número', { minimo: 0, maximo: 100 });
        const dataTratada = await sails.helpers.dadosService.tratarCampo('campoData', campoData, 'data', {});
  
        const dadosTratados = {
          campoTexto: textoTratado,
          campoNumero: numeroTratado,
          campoData: dataTratada
        };
  
        // Persistir os dados tratados no banco de dados
        await FormModel.create(dadosTratados);
  
        return res.ok('Dados processados e salvos com sucesso');
      } catch (erro) {
        return res.badRequest(`Erro ao processar formulário: ${erro.message}`);
      }
    }
  
  };