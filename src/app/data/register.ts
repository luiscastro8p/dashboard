
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
            lastreading:200,
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
}
