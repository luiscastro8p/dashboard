
export class DataDB {
    static Register = [
    { 
        id:0,
        name:"Luis Castro",
        email:"luisarmando@gmail.com",
        role:"Administrador root",
        status: true,
        prm1:false,
        prm2:false,
        prm3:false,
        prm4:false
    },
    { 
        id:2,
        name:"Jesus Garcia",
        email:"megablastoise@gmail.com",
        role:"Administrador ux",
        status: false,
        prm1:false,
        prm2:false,
        prm3:false,
        prm4:false
    },
    { 
        id:3,
        name:"Francisco Ocaranza",
        email:"charmander@gmail.com",
        role:"Administrador perfomance",
        status: true,
        prm1:false,
        prm2:false,
        prm3:false,
        prm4:false
    },
    { 
        id:4,
        name:"Magaly Peña",
        email:"m.penia@gmail.com",
        role:"Administrador organismo",
        status: false,
        prm1:true,
        prm2:true,
        prm3:true,
        prm4:true
    }
]
    static Account = [
        {
            id:1,
            name:"Jesus Alejandro",
            address:"767 Vicente Guerrero Los Mochis, Sinaloa",
            numAccount:3,
            typecontract:"",
            typeservice:"Agua",
            lastreading:{
                fecha:"19/03/2020",
                cm:350.50
            },
            lastpayment:{
                fecha:"19/03/2020",
                cm:350.50
            },
            onBoarding:"Facebook",
            detail:{
                name:"Jesus Alejandro",
                numAccount:3,
                reading:
                [
                    {
                        fecha:"2/03/20",
                        cm:30000
                    },
                    {
                        fecha:"8/03/20",
                        cm:50000
                    },
                    {
                        fecha:"12/03/20",
                        cm:60000
                    },
                    {
                        fecha:"18/03/20",
                        cm:40000
                    },
                    {
                        fecha:"20/03/20",
                        cm:25000
                    }
                ],
                pagos:
                [
                    {
                        fecha:"2/03/20",
                        price:650.30,
                        cm:30000
                    },
                    {
                        fecha:"8/03/20",
                        price:850.30,
                        cm:50000
                    },
                    {
                        fecha:"12/03/20",
                        price:750.30,
                        cm:60000
                    },
                    {
                        fecha:"18/03/20",
                        price:6550.30,
                        cm:40000
                    },
                    {
                        fecha:"20/03/20",
                        price:1550.30,
                        cm:25000
                    }
                ]
            
            }
        },
        {
            id:2,
            name:"Juan Carrillo",
            address:"28 de Junio 884 Los Mochis, Sinaloa",
            numAccount:559,
            typecontract:"",
            typeservice:"Agua",
            lastreading:{
                fecha:"22/03/2020",
                cm:450.50
            },
            lastpayment:{
                fecha:"10/03/2020",
                cm:3050.50
            },
            onBoarding:"Correo electronico",
            detail:{
                name:"Juan Carrillo",
                numAccount:559,
                reading:
                [
                    {
                        fecha:"2/03/20",
                        cm:35060
                    },
                    {
                        fecha:"8/03/20",
                        cm:54670
                    },
                    {
                        fecha:"12/03/20",
                        cm:61230
                    },
                    {
                        fecha:"18/03/20",
                        cm:423423
                    },
                    {
                        fecha:"20/03/20",
                        cm:254444
                    }
                ],
                pagos:
                [
                    {
                        fecha:"2/03/20",
                        price:1650.30,
                        cm:334343
                    },
                    {
                        fecha:"8/03/20",
                        price:4850.30,
                        cm:534344
                    },
                    {
                        fecha:"12/03/20",
                        price:750.30,
                        cm:634344
                    },
                    {
                        fecha:"18/03/20",
                        price:550.30,
                        cm:423420
                    },
                    {
                        fecha:"20/03/20",
                        price:6550.30,
                        cm:253434
                    }
                ]
            
            }
        },
        {
            id:2,
            name:"Pedrito Kamelo",
            address:"Adolfo Lopez Mateos 202 pte Los Mochis, Sinaloa",
            numAccount:124,
            typecontract:"",
            typeservice:"Agua",
            lastreading:{
                fecha:"23/03/2020",
                cm:850.50
            },
            lastpayment:{
                fecha:"10/03/2020",
                cm:3050.50
            },
            onBoarding:"Correo electronico",
            detail:{
                name:"Pedrito Kamelo",
                numAccount:124,
                reading:
                [
                    {
                        fecha:"2/03/20",
                        cm:35060
                    },
                    {
                        fecha:"8/03/20",
                        cm:54670
                    },
                    {
                        fecha:"12/03/20",
                        cm:61230
                    },
                    {
                        fecha:"18/03/20",
                        cm:423423
                    },
                    {
                        fecha:"20/03/20",
                        cm:254444
                    }
                ],
                pagos:
                [
                    {
                        fecha:"2/03/20",
                        price:1650.30,
                        cm:334343
                    },
                    {
                        fecha:"8/03/20",
                        price:4850.30,
                        cm:534344
                    },
                    {
                        fecha:"12/03/20",
                        price:750.30,
                        cm:634344
                    },
                    {
                        fecha:"18/03/20",
                        price:550.30,
                        cm:423420
                    },
                    {
                        fecha:"20/03/20",
                        price:6550.30,
                        cm:253434
                    }
                ]
            
            }
        }
    ]

    static Notification = [
        {
            id:1, 
            name:"Jose Maria",
            job:"Gerente",
            phone:8188080,
            notify:"Cuando sea una fuga"
        },
        {
            id:2,              
            name:"Jose Ocaranza",
            job:"Intendente",
            phone:6684845044,
            notify:"Cuando el bot no pueda responder"
        },
        {
            id:3,
            name:"Luis Vega",
            job:"Supervisor",
            phone:6688659524,
            notify:"Cuando sea una fuga"
        },
        {
            id:4,
            name:"Jesus Garcia",
            job:"Empleado",
            phone:6683542554,
            notify:"Cuando el bot no pueda responder"
        },

    ]
    
    static onboarding = [
        {
            id:1,
            name:"Example",
            sms:"mensaje cualquiera",
            alcance:20
        },
        {
            id:2,
            name:"Ejemplo",
            sms:"mensaje cualquiera",
            alcance:20
        },
        {
            id:3,
            name:"Ejemplo en chino",
            sms:"mensaje cualquiera",
            alcance:20
        },
        {
            id:4,
            name:"Ejemplo en Japon",
            sms:"mensaje cualquiera",
            alcance:20
        },
        {
            id:5,
            name:"Easy ",
            sms:"mensaje cualquiera",
            alcance:20
        }
    ]
}
