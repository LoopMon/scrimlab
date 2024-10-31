import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import DrawerRoutes from "./drawer.routes";

const Stack = createNativeStackNavigator()

function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="signin" component={SignIn} />
            <Stack.Screen name="signup" component={SignUp} />
            <Stack.Screen name="home" component={DrawerRoutes} />
        </Stack.Navigator>
    )
}

export default StackRoutes