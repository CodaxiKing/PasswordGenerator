import { View, TouchableOpacity, Text, Pressable } from "react-native";
import { styles } from './styles'

export function ModalPassword() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>ALOOOOO</Text>

                <Pressable style={styles.innerPassword}>
                    <Text style={styles.text}>1234567890</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button}>
                        <Text >Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}