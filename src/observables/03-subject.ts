import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalId = setInterval(() => subs.next(Math.random()), 1000);
  return () => {
    clearInterval(intervalId);
    console.log("Interval destruido");
  };
});

/*
* 1- Casteo múltiple: Muchas subscripciones van a estar sugetas a este mismo subject o a este mismo observable y va a servir para distribuir la misma infomación a todos los
lugares donde se esté subcrito.
||2- También es un observer
  3 - Puede manejar el next, error y complete
 */

const subject$ = new Subject();
const subcription = intervalo$.subscribe(subject$);

/* const subs1 = intervalo$.subscribe( rnd => console.log('subs1', rnd));
const subs2 = intervalo$.subscribe( rnd => console.log('subs2', rnd));
 */

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  /*  La propiedad next permite insertar información a un observable, cuando la data es producida por el observable en sí mismo, es considerado un "Cold observable".
        Pero cuando la data es producida fuera del observable es llamado "Hot Observable".
     */
  subject$.complete();
  subcription.unsubscribe(); // Cuando se manda a llamar el unsubscribe se ejecuta el return del observable
}, 5500);
