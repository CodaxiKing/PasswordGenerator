import { styles } from './style'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import { useState } from 'react'
import { ModalPassword } from './../../components/model/index'

let charset = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789!@#$%&"

export default function Home (){

    const [size, setSize] = useState(0)
    const [passowordValue, setPasswordValue] = useState<string>('')
    const [modalVisible, setmodalVisible] = useState(false)

    function generatePassword() {
        
        let password1 = "";
        for(let i = 0, n = charset.length; i < size; i++){
            password1 += charset.charAt(Math.floor(Math.random( ) * n))
        }
        setPasswordValue(password1);
        setmodalVisible(true);
    };
    
    
    

    return(
        <View style={styles.container}>
            <Image source={require("./../../assets/logo.png")} style={styles.logo}/>

            <Text style={styles.title}>{size} Caracteres</Text>
            
            <View style={styles.area}>
                <Slider style={{height: 50}}
                    minimumValue={6}
                    maximumValue={20}
                    maximumTrackTintColor='#FF0000'
                    minimumTrackTintColor='#000'
                    thumbTintColor='#392de9'
                    value={size}
                    onValueChange={ (valor) => setSize(Number(valor.toFixed(0))) }
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>Gerar Senha</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType='fade' transparent={true}>
            <ModalPassword password={passowordValue} handleClose={ () => setmodalVisible(false) }/>
            </Modal>

        </View>
        
    )
}