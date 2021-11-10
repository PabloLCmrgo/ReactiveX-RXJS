import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

/*
 */
/*
 */

range(1, 5)
  .pipe(
    tap((x) => {
      console.log("Antes", x);
      return 100;
    }),
    map((val) => val * 10),
    tap({
      next: (valor) => console.log("despues", valor),
      complete: () => console.log("se terminó todo"),
    })
  )
  .subscribe((val) => console.log("subs", val));
