import { asyncScheduler, fromEvent } from "rxjs";
import { distinctUntilChanged, pluck, throttleTime } from "rxjs/operators";

/*
 * throttleTime espera a registrar el primer valor para comenzar a emitir valores según el tiempo asignado, va a ignorar los valos que se emitan entre el intervalo de tiempo asignado.
 * <> =>
 */

const click$ = fromEvent<PointerEvent>(document, "click");

click$.pipe(throttleTime(3000)); //.subscribe(console.log);

// Ejemplo2

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");

input$
  .pipe(
    throttleTime(1000, asyncScheduler, {
      leading: true, //Si quiero el primer elemento
      trailing: true, // si quiero el último elemento
    }),
    pluck("target", "value"),
    distinctUntilChanged()
  )
  .subscribe(console.log);
