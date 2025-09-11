import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: '#FFF',
        width: '85%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#000',
        marginBottom: 24,
    },
    innerPassword: {
        backgroundColor: '#0e0e0e',
        width: '90%',
        padding: 14,
        borderRadius: 8,
    },
    text: {
        color: '#FFF',
        textAlign: 'center',
    },
    buttonArea: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
    },
    buttonSave: {
        backgroundColor: '#392DE9',
        padding: 8,
        borderRadius: 8,
    },
    buttonSaveText: {
        color: '#fff',
        fontWeight: 'bold',
    }
})