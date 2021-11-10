import { from, of} from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

/*
 * El operador distinctUntilChanged solo deja pasar los valores que no cumplan con la condición de ser igual al antecesor
 * <> =>
 */

const numeros$ = of(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numeros$.pipe(distinctUntilChanged()).subscribe(console.log);

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

from(personajes).pipe(distinctUntilChanged((ant, act) => ant.nombre === act.nombre )).subscribe(console.log); // Si el actual es igual al antecesor no lo retorna
