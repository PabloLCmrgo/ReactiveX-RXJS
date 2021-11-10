import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

/*
 * distinctUntilKeyChanged solo va a estar pendiente del nombre del campo que se le pase como referencia
 * <> =>
 */

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

from(personajes).pipe(distinctUntilKeyChanged("nombre")).subscribe(console.log); // Si el actual es igual al antecesor no lo retorna
