import { combineLatest, fromEvent } from "rxjs";
import { pluck } from "rxjs/operators";


/**
 * combineLatest función que permite agregar observables como argumentos, combinarlos y emitirlos simulateneamente, el combineLatest retorna un observable y comienza a emitir hasta que todos los observables hayan emitidos al menos un valor.
 *
 * Forma 1: Recibiendo un arreglo:

combineLatest( [ keyup$, click$ ] )
    .subscribe( console.log );


* Forma 2: Recibiendo un objeto

combineLatest( { keyup: keyup$, click: click$} )
    .subscribe( console.log );
 */


/* const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

combineLatest({ keyup$, click$ }).subscribe(console.log); */

//Ejercicio2

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@email.com';

input2.placeholder = '***********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

//Helper
const getInputStream = (ele: HTMLElement) => fromEvent<KeyboardEvent>(ele, 'keyup').pipe(pluck('target', 'value'));

combineLatest(getInputStream(input1), getInputStream(input2)).subscribe(console.log);