import "react-native-gesture-handler";
import { useFonts } from 'expo-font';
import Routes from "./routes"
import { StatusBar } from "expo-status-bar";

function App() {
    const [fontsLoaded] = useFonts({
        'KronaOne-Regular': require('@/assets/fonts/KronaOne-Regular.ttf'),
    });
    return (
        <>
            <StatusBar style="light" backgroundColor="#FF4654" />   
            <Routes />
        </>
    )
}

export default App