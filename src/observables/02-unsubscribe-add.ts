import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completado [obs]')
};


const intervalo$ = new Observable<number>( subscriber => {

    let count = 0;

    const intervalo = setInterval( () => {

        count++;
        subscriber.next( count );
        console.log(count);
           
    }, 1000 );

    setTimeout( () => { 
        subscriber.complete() 
    }, 2500 );

    return () => {
        clearInterval( intervalo );
        console.log('Intervalo destruido');
        
    }
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);


setTimeout( () => {
    subs1.unsubscribe()
    subs2.unsubscribe()
    subs3.unsubscribe()

    console.log('Completado timeout');
    
}, 6000 );