import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, HomeFilled, Reels, ReelsFilled, Search, SearchFilled, Shop, ShopFilled, ProfileDone, Profile } from './Icons';
import { StyleSheet, Image } from 'react-native';
import HomeScreen from './screens/home';
import ProfileScreen from './screens/profile';


const Tab = createBottomTabNavigator();

function AppScreens() {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#262626',
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <HomeFilled size={26} color={color} />
                        }
                        return <Home size={30} color={color} />
                    },
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerTitle: 'Search',
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <HomeFilled size={26} color={color} />
                        }
                        return <Home size={30} color={color} />
                    }
                }
                }
            />
        </Tab.Navigator >
    )
}

const styles = StyleSheet.create({
    profileAvatar: {
        width: 36,
        height: 36,
        borderRadius: 21,
        borderWidth: 2
    }
});

export default AppScreens;

