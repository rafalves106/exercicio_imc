import styles from './Tabela.module.css'

const Masculina = ({ imc }) => {

    const getCategoria = () => {
        if (imc < 18.5) return 'magreza';
        if (imc >= 18.5 && imc < 25) return 'normal';
        if (imc >= 25 && imc < 30) return 'sobrepeso';
        if (imc >= 30 && imc < 40) return 'obesidade';
        if (imc >= 40) return 'obesidadeGrave';
    };

    const categoria = getCategoria();

    return (
        <div className={styles.container}>
        <ul className={styles.tabela}>
            <li>
                <div className={`${styles.tabelaItem} ${categoria === 'magreza' ? styles.highlightCuidado : ''}`}>
                    <img src="../src/assets/imc-m-1.png" alt="Magreza Masculina" />
                    <h2>Abaixo de 18.5</h2>
                    <h1>Magreza</h1>
                    <h3>Grau 0 de Obesidade</h3>
                </div>
                {categoria === 'magreza' && <h3 className={styles.resultadoCuidado}>Seu IMC: {imc}</h3>}
            </li>
            <li>
                <div className={`${styles.tabelaItem} ${categoria === 'normal' ? styles.highlight : ''}`}>
                    <img src="../src/assets/imc-m-2.png" alt="Peso Normal Masculino" />
                    <h2>Entre 18.5 e 24.9</h2>
                    <h1>Normal</h1>
                    <h3>Grau 0 de Obesidade</h3>
                </div>
                {categoria === 'normal' && <h3 className={styles.resultado}>Seu IMC: {imc}</h3>}
            </li>
            <li>
                <div className={`${styles.tabelaItem} ${categoria === 'sobrepeso' ? styles.highlightCuidado : ''}`}>
                    <img src="../src/assets/imc-m-3.png" alt="Sobrepeso Masculino" />
                    <h2>Entre 25.0 e 29.9</h2>
                    <h1>Sobrepeso</h1>
                    <h3>Grau 1 de Obesidade</h3>
                </div>
                {categoria === 'sobrepeso' && <h3 className={styles.resultadoCuidado}>Seu IMC: {imc}</h3>}
            </li>
            <li>
                <div className={`${styles.tabelaItem} ${categoria === 'obesidade' ? styles.highlightAlerta : ''}`}>
                    <img src="../src/assets/imc-m-4.png" alt="Obesidade Masculina" />
                    <h2>Entre 30.0 e 39.9</h2>
                    <h1>Obesidade</h1>
                    <h3>Grau 2 de Obesidade</h3>
                </div>
                {categoria === 'obesidade' && <h3 className={styles.resultadoAlerta}>Seu IMC: {imc}</h3>}
            </li>
            <li>
                <div className={`${styles.tabelaItem} ${categoria === 'obesidadeGrave' ? styles.highlightGrave : ''}`}>
                    <img src="../src/assets/imc-m-5.png" alt="Obesidade Grave Masculina" />
                    <h2>Acima de 40.0</h2>
                    <h1>Obesidade II</h1>
                    <h3>Grau 3 de Obesidade</h3>
                </div>
                {categoria === 'obesidadeGrave' && <h3 className={styles.resultadoGrave}>Seu IMC: {imc}</h3>}
            </li>
        </ul>
    </div>
    )
}

export default Masculina;