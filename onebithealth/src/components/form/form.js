import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList
} from 'react-native';
import ResultIMC from './resultIMC/resultado';
import styles from './style';

export default function Form() {
    // states
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState(null)
    const [imc, setIMC] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [error, setError] = useState(null)

    // FlatList
    const [imcList, setIMCList] = useState([])

    // Função para calcular o IMC
    function imcCalculator() {
        // formata o valor digitado caso tenha virgula
        let heightFormat = height.replace(",", ".")
        let total = (weight / (heightFormat * heightFormat)).toFixed(2)

        // atribui ao state setIMCList um array JSON com as informações do IMC
        setIMCList((arr) => [...arr, { id: new Date().getTime(), imc: total }])
        setIMC(total)
    }

    // Função que verifica se todos os campos estão preenchidos
    function varificationIMC() {
        if (imc == null) {
            setError("campo obrigatório")
            // aciona a API de vibração
            Vibration.vibrate()
        }
    }

    // Função que faz todas as validações
    function validation() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu IMC é: ")
            setTextButton('Calcular novamente')
            setError(null)
        } else {
            varificationIMC()
            setIMC(null)
            setTextButton('Calcular')
            setMessageIMC(null)
        }

    }
    return (
        <View style={styles.formContext}>
            {imc == null ?
                // com o Pressable é possível clicar na tela e fechar o input
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura<Text style={styles.required}>*</Text></Text>
                    <TextInput style={styles.formInput} onChangeText={setHeight} value={height} placeholder='Sua altura. Ex: 1.75' keyboardType='numeric'></TextInput>
                    <Text style={styles.error}>{error}</Text>
                    <Text style={styles.formLabel}>Peso<Text style={styles.required}>*</Text></Text>
                    <TextInput style={styles.formInput} onChangeText={setWeight} value={weight} placeholder='Seu peso. Ex: 68.900' keyboardType='numeric'></TextInput>
                    <Text style={styles.error}>{error}</Text>

                    <TouchableOpacity style={styles.button} onPress={() => validation()}>
                        <Text style={styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
                :
                <View style={styles.exibitionResult}>
                    <ResultIMC messageResultIMC={messageIMC} resultIMC={imc} />
                    <TouchableOpacity style={styles.button} onPress={() => validation()}>
                        <Text style={styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>

                    <FlatList
                        style={styles.listIMC}
                        data={imcList.reverse()}
                        renderItem={({ item }) => {
                            return (
                                <Text style={styles.resultIMCList}>
                                    <Text style={styles.textResultItem}>Resultado IMC = </Text>
                                    {item.imc}
                                </Text>
                            )
                        }}
                        keyExtractor={(item) => {
                            item.id
                        }}
                    />
                </View>
            }
        </View>
    );
}