import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completado [obs]')
};



// const obs$ = Observable.create(); también funcionaría
const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // Forzar un error
    // const a = undefined;
    // a.nombre = 'Fernando';

    subs.complete()

})

obs$.subscribe( observer );

// obs$.subscribe(
//     valor => console.log('next:', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// );