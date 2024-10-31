import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList
} from "@react-navigation/drawer"
import { Feather } from "@expo/vector-icons"
import { Image, Text, TouchableOpacity, View } from "react-native";
import Home from "../screens/Home"
import CreateMatch from "../screens/CreateMatch";
import Teams from "../screens/Teams";

const ScrimLabHorizontal = require("@/assets/images/scrimlab-horizontal.png")
const Exit = require("@/assets/images/exit.png")
const Drawer = createDrawerNavigator()

function CustomDrawerContent(props: any) {
    return (
        // estilo quebrado que funciona kkk
        <View style={{ height: "97%" }}> 
            <Image
                style={{
                    width: "100%",
                    height: 50,
                    objectFit: "cover",
                    marginVertical: 10,
                    marginHorizontal: "auto",
                }}
                source={ScrimLabHorizontal}
            />
  
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
  
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    marginLeft: 15,
                }}
                onPress={() => {
                    props.navigation.navigate('signin');
                    return;
                }}
            >
                <Image style={{ width: 20, height: 20 }} source={Exit} />
                <Text style={{ color: "#fff" }}>Exit</Text>
            </TouchableOpacity>
        </View>
    );
}

function DrawerRoutes() {
    return(
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "#40202C",
                    minWidth: 240,
                    width: "70%"
                },
                drawerActiveBackgroundColor: "rgba(255, 255, 255, 0.1)",
                drawerActiveTintColor: "#fff",
                drawerInactiveTintColor: "#fff",
            }}
        >
            <Drawer.Screen 
                name="homepage" 
                component={Home} 
                options={{
                    title: "Inicio",
                    headerStyle: { backgroundColor: "#8C3243" },
                    headerTintColor: "#fff",
                    drawerIcon: ({color, size}) => <Feather name="home" color={"#8C3243"} size={size} />
                }} 
            />
            <Drawer.Screen 
                name="creatematch"
                component={CreateMatch}
                options={{
                    title: "Criar Partida",
                    headerStyle: { backgroundColor: "#8C3243" },
                    headerTintColor: "#fff",
                    drawerIcon: ({color, size}) => <Feather name="plus-circle" color={"#8C3243"} size={size} />
                }} 
            />
            <Drawer.Screen 
                name="teams"
                component={Teams}
                options={{
                    title: "Times",
                    headerStyle: { backgroundColor: "#8C3243" },
                    headerTintColor: "#FFF",
                    drawerIcon: ({color, size}) => <Feather name="flag" color={"#8C3243"} size={size} />
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerRoutes