import styles from './Resultado.module.css'

const Resultado = ({ imc }) => {
    let descricao;
    let recomendacao;

    if (imc < 18.5) {
        descricao = "Descrição: Baixo peso em relação à altura. Pode estar associado a deficiências nutricionais e outros problemas de saúde.";
        recomendacao = "Recomendação: Aumentar a ingestão calórica com orientação nutricional e realizar acompanhamento médico.";
    } else if (imc >= 18.5 && imc < 25) {
        descricao = "Descrição: Peso considerado saudável para a altura. Está associado a menor risco de problemas relacionados ao peso.";
        recomendacao = "Recomendação: Manter o estilo de vida saudável, com alimentação balanceada e prática regular de atividades físicas.";
    } else if (imc >= 25 && imc < 30) {
        descricao = "Descrição: Peso ligeiramente elevado em relação à altura. Pode aumentar o risco de doenças cardíacas, diabetes e outras condições de saúde.";
        recomendacao = "Recomendação: Considerar mudanças na dieta e aumento de atividades físicas para controle do peso.";
    } else if (imc >= 30 && imc < 40) {
        descricao = "Descrição: Excesso de peso significativo em relação à altura. Está associado a um risco elevado de desenvolver doenças crônicas, como hipertensão e diabetes.";
        recomendacao = "Recomendação: Procurar orientação médica e nutricional para implementação de um plano de perda de peso.";
    } else {
        descricao = "Descrição: Condição severa de excesso de peso. Aumenta drasticamente o risco de complicações graves de saúde, como doenças cardiovasculares e respiratórias.";
        recomendacao = "Recomendação: Necessidade urgente de acompanhamento médico especializado para tratamento de obesidade e prevenção de complicações.";
    }

    return (
        <div className={styles.resultado}>
            <h2 className={styles.titulo}>Sobre seu resultado:</h2>
            <p className={styles.descricao}>{descricao}<br /><br />{recomendacao}</p>
        </div>
    );
}

export default Resultado;