import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

/*
 * El operador take sirve para limitar la cantidad de emisiones que un observable puede tener
 * Después de que termina de emitir los valores señalados manda un complete, cierra el observable
 * Cuando un observable hace una sola emisión se podría usar el take para unsubcribir
 * <> =>
 */

const numeros = of(1, 2, 3, 4, 5);

numeros
  .pipe(
    tap((t) => console.log("tap", t)),
    take(3)
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
