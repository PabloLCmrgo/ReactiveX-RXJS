import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("siguiente [next]:", value),
  error: (error) => console.warn("error [obs]:", error),
  complete: () => console.info("completado [obs]"),
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  // Forzar un error
  // const a  = undefined;
  // a.nombre = 'Pablo';

  subs.complete();

  subs.next("Hola");
  subs.next("Mundo");
});

obs$.subscribe(observer);
/* obs$.subscribe((resp) => {
  console.log(resp);
});
obs$.subscribe(console.log);    *** Ambas expresiones imprimen lo mismo */

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// );
