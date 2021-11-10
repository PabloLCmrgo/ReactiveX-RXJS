import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

/*
 */
/* range(1, 5)
  .pipe(map<number, number>((val) => val * 10)) //<number, number> Parametro de entrada y de salida
  .subscribe(console.log);
 */

/* range(1, 5)
  .pipe(map<number, string>((val) => (val * 10).toString())) //<number, number> Parametro de entrada y de salida
  .subscribe(console.log); */

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyupCode$ = keyup$.pipe(map((event) => event.code));

const keyupPluck$ = keyup$.pipe(pluck("key")); // Es para extraer una propiedad de un objeto

const keyupPluck2$ = keyup$.pipe(pluck("target", "baseURI")); // Es para extraer una propiedad de un objeto dentro de otro objeto

const keyupMapTo$ = keyup$.pipe(mapTo("Tecla presionada")); // Es para extraer una propiedad de un objeto dentro de otro objeto

keyupCode$.subscribe((code) => console.log("map", code));
keyupPluck$.subscribe((code) => console.log("pluck", code));
keyupPluck2$.subscribe((code) => console.log("pluck", code));
keyupMapTo$.subscribe((code) => console.log("mapTo", code));
