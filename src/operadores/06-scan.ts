import { from, map, reduce, scan } from "rxjs";


const numeros = [1, 2, 3, 4, 5 ];

const totalAcumulador = (acc, cur) => acc + cur;

// Reduce te da la suma total
from( numeros ).pipe(
    reduce( totalAcumulador, 0 )
)
.subscribe( console.log );


// Scan va sumando los números entre si
from( numeros ).pipe(
    scan( totalAcumulador, 0 )
)
.subscribe( console.log );

// Redux
interface User {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
};


const user: User[] = [
    { id: 'Fran', autenticado: false, token: null},
    { id: 'Fran', autenticado: true, token: 'ABC'},
    { id: 'Fran', autenticado: true, token: 'ABC123'},
];

const state$ = from( user ).pipe(
    scan<User>( ( acc , cur ) => {
        return { ...acc, ...cur }
    }, { edad: 33})
);

const id$ = state$.pipe(
    map( state => state.id )
);

id$.subscribe( console.log );