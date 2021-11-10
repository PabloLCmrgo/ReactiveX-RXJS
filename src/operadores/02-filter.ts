import { from, fromEvent, range } from "rxjs";
import { filter, map } from "rxjs/operators";

/*
 */
/* El filter solo recibe y retorna valores numericos
 */

/* range(1, 10)
  .pipe(filter((val) => val % 2 === 1))
  .subscribe(console.log); */

range(20, 30).pipe(
  filter((val, i) => {
    console.log("index", i);
    return val % 2 === 1;
  })
);
/*   .subscribe(console.log); */

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "villano",
    nombre: "jocker",
  },
];

from(personajes)
  .pipe(filter((p) => p.tipo !== "heroe"))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code), //KeyboardEvent, string
  filter((key) => key === "Enter")
);

keyup$.subscribe(console.log);
