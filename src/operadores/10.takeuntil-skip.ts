import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

/*
 * takeUntil emite valores hasta que un segundo observable emite su primer valor.
 * El operador skip sirve para saltar u omitir algunas primeras emisiones de un observable
 * <> =>
 */

const boton = document.createElement("button");
boton.innerHTML = "Detener timer";

document.querySelector("body").append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent<PointerEvent>(document, "click").pipe(
  tap(() => console.log("tap antes del skip")),
  skip(1),
  tap(() => console.log("tap después del skip"))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  //El observable counter$ va emitiendo valores pero con el takeUntil se está pendiente de cuando emite el primer valor el observable clickBtn$, es cuando se completa.
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
