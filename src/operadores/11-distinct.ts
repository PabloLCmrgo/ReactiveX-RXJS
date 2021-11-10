import { from, of} from "rxjs";
import { distinct } from "rxjs/operators";

/*
 * El operador Distinct solo deja pasar los valores que no han sido emitidos por el observable.
 * <> =>
 */

const numeros$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numeros$.pipe(distinct()).subscribe(console.log);

// Distinct con objetos

interface personaje {
  nombre: string;
}

const personajes: personaje[] = [
  {
    nombre: "IronMan",
  },
  {
    nombre: "Hulk",
  },
  {
    nombre: "Thor",
  },
  {
    nombre: "Thor",
  },
  {
    nombre: "Thor",
  },
  {
    nombre: "IronMan",
  },
  {
    nombre: "IronMan",
  },
  {
    nombre: "Hulk",
  },
  {
    nombre: "Hulk",
  },
  {
    nombre: "IronMan",
  },
];

from(personajes).pipe(distinct(({nombre}) => nombre)).subscribe(console.log);
