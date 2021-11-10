import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

/*
 */

const numbers = [1, 2, 3, 4, 5];

/* const totalAcumulador = (acc: number, cur: number) => {
  return acc + cur;
}; */

const totalAcumulador = (acc, cur) => acc + cur;

//Reduce -- Emite un solo valor al final del observable
from(numbers).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

//Scan -- Va emitiendo valores conforme vaya recorriendo el observable
from(numbers).pipe(scan(totalAcumulador, 0)).subscribe(console.log);

//Simulación Redux

interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  { id: "fher", autenticado: false, token: null },
  { id: "fher", autenticado: true, token: "ABC" },
  { id: "fher", autenticado: true, token: "ABC123" },
];

const state$ = from(user).pipe(
  scan<Usuario, Usuario>(
    (acc, cur) => {
      return { ...acc, ...cur };
    },
    { edad: 33 }
  )
);

const id$ = state$.pipe(map((state) => state));

id$.subscribe(console.log);
