import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';
import SwitchNavs from './pages/SwitchNavs';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        SwitchNavs
    })
);