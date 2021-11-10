import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

/*
 * Permite recibir valores mientras la condición se cumpla
 * <> =>
 */

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    //takeWhile(({y}) => y <= 150) // Si se deja así va a emitir valores que no excedan el 150.
    takeWhile(({y}) => y <= 150, true) // el incluse es un argumento booleano que permite emitir el valor con el cuál se cumple el observable
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
