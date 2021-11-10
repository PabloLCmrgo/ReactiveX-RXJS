import { of } from "rxjs";
import { endWith, startWith } from "rxjs/operators";



/*
* El operador startWith va a comenzar con una emisión por default
* El operador endWith va a terminar con una emisión por default
 */



const numeros$ = of(1, 2, 3).pipe(startWith('a', 'b', 'c'), endWith('x', 'y', 'z'));

numeros$.subscribe(console.log);