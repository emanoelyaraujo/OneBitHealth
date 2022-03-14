import React from 'react';
import { View, Text, TouchableOpacity, Share } from 'react-native';
import styles from './style';

export default function ResultIMC(props) {

    // função faz uma solicitação para a API do React para compartilhar o IMC
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC é: " + props.resultIMC,
        })
    }

    return (
        <View style={styles.result}>
            <Text style={styles.information}>{props.messageResultIMC}</Text>
            <Text style={styles.imc}>{props.resultIMC}</Text>
            <View style={styles.boxShare}>
                <TouchableOpacity onPress={onShare} style={styles.shared}>
                    <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}