import { of, from } from "rxjs";

/*
 * of = Toma argumentos y genera una secuencia.
 * form = crea un observable a partir de un array, promise, iterable, observable.
 */

const observer = {
  next: (val) => console.log("next:", val),
  complete: () => console.log("completado"),
};

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();

/* for (let id of miIterable) {
  console.log(id);
} */

from(miIterable).subscribe(observer);

//const source$ = from([1,2,3,4,5]);
//const source$ = of(...[1,2,3,4,5]); // Cuando se utiliza el operador spread se emite lo mismo que el from
// fetch es una promesa que sirve como método para hacer una petición a un http
const source$ = from(fetch("https://api.github.com/users/klerith"));

/* source$.subscribe(async (resp) => {
  console.log(resp);
  const dataResp = await resp.json();
  console.log(dataResp);
}); */

//source$.subscribe(observer);
