import fatosHistoricos from '../dados/fatos.js';

function servicoValidaAno(ano) {
    if (isNaN(ano)) {
        return false;
    }
    else {
        if (ano >= 1920 && ano <= 2020) {
            return true;
        }
        else {
            return false;
        }
    }
}


function servicoBuscarFatoPorAno(ano) {
    let fatoSelecionado = fatosHistoricos.find(fato => {
        return Number(fato.Ano) === Number(ano);
    });

    if (!fatoSelecionado) {
        return "Fato não encontrado para este ano";
    }

    return fatoSelecionado.Fato;
}

export { servicoValidaAno, servicoBuscarFatoPorAno };