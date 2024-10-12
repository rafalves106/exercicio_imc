import styles from './Calculadora.module.css'
import React, {useState} from 'react';
import Feminina from '../Tabela/TabelaFeminina';
import Masculina from '../Tabela/TabelaMasculina';
import Resultado from '../Resultado/Resultado';

const Calculadora = () => {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [imc, setImc] = useState(null);
    const [sexo, setSexo] = useState('select');
    const [erro, setErro] = useState("");

    const MAX_PESO = 300;
    const MAX_ALTURA = 2.5;

    const handlePesoChange = (e) => {
        const value = e.target.value;
        if (value === "" || Number(value) <= MAX_PESO) {
            setPeso(value);
            setErro("");
        }
    };

    const handleAlturaChange = (e) => {
        const value = e.target.value;
        if (value === "" || Number(value) <= MAX_ALTURA) {
            setAltura(value);
            setErro("");
        }
    };

    const handleSexoChange = (e) => {
        setSexo(e.target.value);
    }

    const calcularIMC = (e) => {
        e.preventDefault();

        const alturaNum = parseFloat(altura.replace(",", "."));
        const pesoNum = parseFloat(peso.replace(",", "."));

        console.log("Peso:", pesoNum, "Altura:", alturaNum);

        if (alturaNum > 0 && pesoNum > 0) {
            const imc = pesoNum / (alturaNum * alturaNum);
            setImc(imc.toFixed(2));
            setErro("");
        } else {
            setErro("Insira valores válidos.");
            setImc(null);
        }
    };

    const limparForm = (e) => {
        e.preventDefault();
        setPeso('');
        setAltura('');
        setImc(null);
        setSexo('select');
        setErro("");
    }

    const isFormValid = peso && altura && sexo !== 'select';

    return (
        <div>
            <form className={styles.calculadora}>
                <div className={styles.calculadoraItem}>
                    <label htmlFor="altura">Altura: ( ex.: 1,74 )</label>
                    <input value={altura} onChange={handleAlturaChange} id="altura" type="number" placeholder="Metros" max={MAX_ALTURA} step="0.01"/>
                </div>
                <div className={styles.calculadoraItem}>
                    <label htmlFor="peso">Peso: ( ex.: 69,2 )</label>
                    <input id="peso" type="number" value={peso} onChange={handlePesoChange} placeholder="Quilos" max={MAX_PESO} step="0.1"/>
                </div>
                <div className={styles.calculadoraItem}>
                    <label htmlFor="sexo">Sexo:</label>
                    <select id="sexo" value={sexo} onChange={handleSexoChange}>
                        <option value="select">Selecione uma opção</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                </div>
                <div className={styles.calculadoraItem}>
                    <button className={styles.calcular} onClick={calcularIMC} disabled={!isFormValid}>Calcular</button>
                </div>
                <div className={styles.calculadoraItem}>
                    <button className={styles.limpar} onClick={limparForm}>Limpar</button>
                </div>
            </form>

            {imc && (
                <div>
                    {sexo === 'feminino' ? <Feminina imc={parseFloat(imc)} /> : <Masculina imc={parseFloat(imc)} />}
                </div>    
            )}

            {imc && <Resultado imc={parseFloat(imc)} />}
        </div>
    )
}

export default Calculadora;