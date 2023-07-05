import { fromEvent, map, tap } from "rxjs";


const texto = document.createElement('div');
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet maximus ultrices. Proin risus tortor, bibendum sed mi ac, maximus laoreet magna. Donec condimentum magna eu mi condimentum lobortis. Vivamus nec velit est. Phasellus sit amet dolor magna. Pellentesque lacus nisl, sagittis et leo vel, tincidunt lacinia mauris. Proin ac varius neque, sed dignissim eros. Nulla bibendum a mi nec mattis.
<br/><br/>
Etiam id rutrum lectus. Nunc nec ultricies est. Nam nunc diam, lobortis eget massa a, imperdiet tincidunt orci. Morbi nisi libero, tristique in justo id, aliquam scelerisque risus. Morbi quis dictum enim, et iaculis nibh. Suspendisse faucibus, arcu id aliquam sagittis, dolor diam consectetur tortor, eget consectetur augue arcu in turpis. Phasellus tincidunt neque non erat ultricies, eu suscipit orci porttitor. Sed feugiat sapien et fermentum pretium. Integer dignissim diam lacus, quis faucibus tellus auctor vitae. Nullam maximus magna id sapien fermentum, et rhoncus nisi tempor.
<br/><br/>
Nullam faucibus sollicitudin massa, vitae feugiat mauris faucibus ac. Phasellus condimentum rutrum erat quis pretium. Integer elit nisi, interdum in nisl eu, aliquet consequat mi. Aenean vehicula vel metus sed convallis. Vestibulum tempor tincidunt scelerisque. Sed in leo id risus varius gravida. Pellentesque blandit velit eu diam rhoncus fringilla. Morbi auctor eros dui, ac vulputate felis scelerisque sed. Praesent ornare aliquet porttitor. Curabitur lacinia lacus eu eros tincidunt, eget accumsan risus porta. Nullam dignissim rhoncus neque, ac ultrices elit euismod non. Nulla semper sem a maximus aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus eget est ac hendrerit. Praesent fermentum dolor sit amet efficitur mattis. Aenean at porttitor velit.
<br/><br/>
Integer ut eleifend mi. Duis et ligula ut metus interdum vehicula ac nec nisl. Suspendisse rutrum arcu vel neque venenatis semper. Mauris aliquet ligula in erat vulputate, consectetur suscipit ligula lobortis. Vivamus tempor risus ac lorem porta, vel lacinia enim pharetra. Nullam cursus ipsum molestie, maximus dui congue, luctus turpis. Donec et mattis enim. Cras tincidunt semper finibus. Nunc fermentum tempor ex nec ultrices. Aenean sodales, est in ultricies posuere, elit magna egestas nisi, id egestas nisi felis ut libero. Mauris dolor libero, hendrerit at aliquet vitae, volutpat posuere mauris. Suspendisse eleifend interdum urna eu fringilla. Nullam ultrices sit amet mi sed pharetra. Etiam dui sapien, volutpat ac consectetur nec, vestibulum eu dolor. Vivamus sem urna, luctus et fringilla ut, dictum ac urna.
<br/><br/>
Donec ut imperdiet urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut odio urna, ultricies varius dui et, tempus consectetur sapien. Cras placerat mauris nec leo ornare fermentum. Curabitur ac enim justo. Aliquam ut nisl massa. Donec non dapibus leo, sed lacinia sem. Nunc tincidunt eget leo quis congue. Donec non hendrerit urna. Cras viverra mattis hendrerit. Fusce varius metus et nulla commodo, quis ornare risus pulvinar. Morbi et ante elementum, tristique elit sed, luctus velit. Sed at eros sed lorem hendrerit pulvinar. Mauris bibendum libero eu rutrum sollicitudin.
`;

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append( progressBar );


// Función que haga el cálculo
const calcularPorcentajeScroll = (event) => {
   const {
        scrollTop,
        scrollHeight,
        clientHeight
   } = event.target.documentElement;

   return ( scrollTop / (scrollHeight - clientHeight)) * 100
   
};

// Streams
const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    map( calcularPorcentajeScroll ),
    tap(console.log)
);

progress$.subscribe(porcentaje =>{
    progressBar.style.width = `${porcentaje}%`;
});