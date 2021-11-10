import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, pluck } from "rxjs/operators";

/*
 * debounceTime emite información cada periodo determinado de tiempo, si el observable emite 2 valores entre el intervalo ignora el primero y muestra el segudo.
 * <> =>
 */

const click$ = fromEvent<PointerEvent>(document, "click");

click$.pipe(debounceTime(3000)); //.subscribe(console.log);

// Ejemplo2

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");

input$
  .pipe(debounceTime(1000), pluck("target", "value"), distinctUntilChanged())
  .subscribe(console.log);
