
const Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home'
};
const test = {
    text: 'Lista de usuarios',
    link: '/Registro',
    icon: 'icon-grid',
    submenu: [
        {
            text: 'Lista',
            link: '/Registro'
        }
    ]
};


const headingMain = {
    text: 'Main Navigation',
    heading: true
};



export const menu = [
    headingMain,
    Home,
    test
];
