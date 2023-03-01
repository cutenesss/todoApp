import { Alert } from "react-native"

export const onAlert = ({ title, message, okFunction }: {
    title: string;
    message?: string;
    okFunction?: () => void
}) => {
    Alert.alert(
        title,
        message,
        [
            {
                text: 'OK',
                onPress: okFunction,
            },
        ]
    )
}