
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
        },
        {
            text: 'Cuentas y servicios',
            link: '/Accounts'
        },
        {
            text: 'Usuarios',
            link: '/user'
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
