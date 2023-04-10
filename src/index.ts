import { Observable, Observer, Subject } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completado [obs]')
};


const intervalo$ = new Observable<number>( subs => {

   const intervalID = setInterval( 
    () => subs.next( Math.random() ), 3000 
    );

    return () => clearInterval( intervalID );


});

const subject$ = new Subject();
intervalo$.subscribe( subject$ );

const subs1 = subject$.subscribe(rnd => console.log('subs1: ', rnd));
const subs2 = subject$.subscribe(rnd => console.log('subs2: ', rnd));