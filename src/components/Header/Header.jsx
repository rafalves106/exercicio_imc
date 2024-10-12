import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>CALCULADORA IMC</h1>
            <p className={styles.descricao}>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.<br/><br />O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.<br/><br /><span className={styles.descricaoDestaque}>Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela.</span><span className={styles.descricaoImportante}>Importante: siga os exemplos e use pontos como separadores.</span></p>
        </div>
    )
}

export default Header;