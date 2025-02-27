import React from 'react'
import { BottomNavigation, Text } from 'react-native-paper'
import Chat from './(tabs)/index';
import Profile from './(tabs)/profile';
import { BaseRoute } from 'react-native-paper/lib/typescript/components/BottomNavigation/BottomNavigation';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'


export default function Index() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState<BaseRoute[]>([
        { key: 'chat', title: 'Chat', focusedIcon: 'chat-bubble', unfocusedIcon: 'chat-bubble-outline' },
        { key: 'profile', title: 'Profile', focusedIcon: 'person', unfocusedIcon: 'person-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        chat: Chat,
        profile: Profile,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            renderIcon={({ route, focused, color }) => {
                return <MaterialIcons
                    size={28}
                    style={{ color }}
                    name={ focused? route.focusedIcon:route.unfocusedIcon as keyof typeof MaterialIcons['name'] | any}
                />
            }}
        />
    );
}
