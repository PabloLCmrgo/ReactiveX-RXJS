import { fromEvent } from "rxjs";
import { first, map, take, tap } from "rxjs/operators";

/*
 * El operador first se completa con la primera emisión si esta no cuenta con alguna condición en su callback, pero si existe una condición se completa hasta que esta se cumpla.
 * <> =>
 */

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    tap<PointerEvent>(() => console.log("tap")),
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    // take(1), // Toma el primer valor emitido y finaliza el observable,
    //first(), // Otra manera de hacer es con el first, toma el primer valor emitido y finaliza el observable.
    first((event) => event.clientY >= 150) // Cuando tiene una condición se completa cuando se cumple por primera vez la condición
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
