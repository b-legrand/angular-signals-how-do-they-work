# Angular signals: how do they work ??? 

<img src="angular.svg" height="90vh" alt="logo angular"/>
~
Dans ce talk je vais vous parler des signals, une nouvelle api d'angular


<img src="icp-magnets.webp" alt="Insane Clown Possee">
~
Si vous connaissez ce même, vous êtes sur internet depuis trop longtemps.



## Introduction

- Benjamin Legrand
- 🏢 onepoint<!-- .element: class="fragment" -->
- 🧙‍♂️ 15 ans d'XP<!-- .element: class="fragment" -->
- 🅰️️ Angular enjoyer<!-- .element: class="fragment" -->
- 🎸 musique / ⌨️ claviers<!-- .element: class="fragment" -->
- @benjilegnard<!-- .element: class="fragment" -->
~
Dans ce talk je vais vous parler des signals, une nouvelle api d'angular
Et comment ca va nous changer la vie en tant que devs angular


### La réactivité

- fait de réagir
- ⚛️ pas React<!-- .element: class="fragment" -->
- comment ? quoi?<!-- .element: class="fragment" -->
~


### Bref historique

- signals in computer science
- knockout.js<!-- .element: class="fragment" -->
- solid.js<!-- .element: class="fragment" -->
~
existe depuis aussi longtemps que l'informatique
mention de knockout.js
les bonnes idées sont contagieuses



## Le passé
- comment on faisait avant ?


### à l'ancienne, impératif

- je recois une donnée<!-- .element: class="fragment" -->
- je mets à jour manuellement tout les endroits qui l'affiche<!-- .element: class="fragment" -->
- tousse tousse jQuery<!-- .element: class="fragment" -->
- single source of truth<!-- .element: class="fragment" -->


### double data binding

- je mets ma donnée dans un objet js
- je fait en sorte que le dom se mettre a jour sans que j'ai rien a faire
~
- MVC
- redux state management


### push vs pull

- Promise&lt;Value&gt;
- asynchrone contaminant<!-- .element: class="fragment" -->
- async / await<!-- .element: class="fragment" -->


### rxjs

- Observable&lt;Value&gt;
- yes, but...
~
angular fondamentalement basé sur les observables


#### creation operators

    ajax
    bindCallback
    bindNodeCallback
    defer
    empty
    from
    fromEvent
    fromEventPattern
    generate
    interval
    of
    range
    throwError
    timer
    iif


#### Join Creation Operators

    combineLatest
    concat
    forkJoin
    merge
    partition
    race
    zip


#### Transformation operators

    buffer
    bufferCount
    bufferTime
    bufferToggle
    bufferWhen
    concatMap
    concatMapTo
    exhaust
    exhaustMap
    expand
    groupBy
    map
    mapTo
    mergeMap
    mergeMapTo
    mergeScan
    pairwise
    partition
    pluck
    scan
    switchScan
    switchMap
    switchMapTo
    window
    windowCount
    windowTime
    windowToggle
    windowWhen


#### Filtering Operators

    audit
    auditTime
    debounce
    debounceTime
    distinct
    distinctUntilChanged
    distinctUntilKeyChanged
    elementAt
    filter
    first
    ignoreElements
    last
    sample
    sampleTime
    single
    skip
    skipLast
    skipUntil
    skipWhile
    take
    takeLast
    takeUntil
    takeWhile
    throttle
    throttleTime


### yes, but

- api, confettis d'opérateurs
- marche d'entrée


### Zone.js

- patch votre code
- microtasks
- détection de changement


### détection de changement angular

- basée sur l'arbre de composants
- top - down 
- pas "granulaire"


### Push vs pull table


### producer and consumer

~
- on va avoir le concept dans les observables comme les promesses
- de qui consomme la donnée et qui la produit



## Le présent

- Signals API


### Who's got signals already ?

- Solid
- Preact
- Astro
- Qwik
- Marko
- Knockout
- Ember
- Pikachu
~
- concept existe déjà dans d'autre frameworks
- y'en a un la dedans c'est un pokemon


### Who's got signals already ?

- Solid
- Preact
- Astro
- Qwik
- Marko
- Knockout
- Ember
- 🎉 Angular 🎉
~
- on va adopter un concept qui existe déjà ailleurs
- comment on réconcilie tout ca


### RFC: Request For Comments

- Avril 2023
- https://github.com/angular/angular/discussions/49685
- découpée en 4 :
  - Sub-RFC 1 : [Signals for Angular Reactivity](https://github.com/angular/angular/discussions/49684)
  - Sub-RFC 2 : [Signals API](https://github.com/angular/angular/discussions/49683)
  - Sub-RFC 3 : [Signalhbase components](https://github.com/angular/angular/discussions/49682)


### a Signal, api

```typescript
interface Signal<T> {
  (): T;
  [SIGNAL]: unknown;
}
```
~
- Un signal encapsule une valeur
- c'est du js donc à la fois une fonction et un objet
- le symbol SIGNAL est là pour permettre à angular de savoir qu'on manipule un signal


### signal(), usage

```typescript
const counter = signal(0);

console.log(counter()); // 0
```
~
- factory method pour creer un signal
- 


### un signal c'est un getter

- fin du talk, merci


### WritableSignal

```typescript
interface WritableSignal<T> extends Signal<T> = {
  (): T;
  set(value: T): void;
  update(updateFn: (value: T) => T): void;
  asReadonly(): Signal<T>;
}
```
- set va changer les valueurs, changer complètement, replace l'ancienne
- update va vous permettre de passer une méthode de mise à jour a partir de l'ancienne valeur ( redux reducer, immutable )
- ils avaient aussi mutate dans l'api mais en cours de suppression
- asReadOnly donne une version lecture seule du signal


### WritableSignal, usage

```typescript
// create a writable signal
const counter = signal(0);

// set a new signal value, completely replacing the current one
counter.set(5);

// update signal's value based on the current one
counter.update(currentValue => currentValue + 1);
```
~
- à noter: tout est synchrone
- pas de 


### computed()

```typescript
const counter = signal(0);

// creating a computed signal
const isEven = computed(() => counter() % 2 === 0);

// computed properties are signals themselves
const color = computed(() => isEven() ? 'red' : 'blue');
```
~
- souvent on veut des valeurs dérivées d'autres
- computed est là pour ca
- liste et pagination, offset est dérivée de currentPage et itemsPerPage


### effect()
```typescript
const firstName = signal('John');
const lastName  = signal('Doe');

// This effect logs the first and last names, and will log them again when either (or both) changes. 
effect(() => console.log(firstName(), lastName()));
```
~
Cas d'utilisation:
- synchronizing data between multiple independent models
- triggering network requests
- performing rendering actions



### avantages, primitives de base

- it is just a function
- 


### intégration avec angular: Signal-based components

```typescript
@Component({
  signals: true,
  ...
})
```

- https://github.com/angular/angular/discussions/49682
~
- il va falloir marquer vos composants comme étant "signal base" ( standalone base ? )
- 


### signal-based component
```typescript
@Component({
  signals: true,
  selector: 'temperature-calc',
  template: `
    <p>C: {{ celsius() }}</p>
    <p>F: {{ fahrenheit() }}</p>
  `,
})
export class SimpleCounter {
  celsius = signal(25);

  // The computed only re-evaluates if celsius() changes.
  fahrenheit = computed(() => this.celsius() * 1.8 + 32);
}
```


### oui mais on m'a dit de ne jamais appeler de fonctions dans les templates

- yes, but
~
- sinon ca se ré-exécute à chaque détection de changement
- ca ne s'applique plus dans un composant marqué signal
- les expressions ne se réevalue que quand le signal a changé 
 

### inputs

```typescript
```

### outputs

```typescript
@Component({
  signals: true,
  selector: 'simple-counter',
  template: `
    <button (click)="save()">Save count</button>
    <button (click)="reset()">Reset count</button>
  `,
})
export class SimpleCounter {
  saved = output<number>(); // EventEmitter<number>
  cleared = output<number>({alias: 'reset'});
  
  save() {
    this.saved.emit(123);
  }
  
  reset() {
    this.cleared.emit(456);
  }
}
```

### so long

- @Input()
- @Output()
- 🫡<!-- .element: class="fragment" -->


### goodbye decorators

```typescript
@Component({
  signals: true,
  selector: 'form-field',
  template: `
    <field-icon *ngFor="let icon of icons()"> {{ icon }} </field-icon>
    <div class="focus-outline">
      <input #field>
    </div>
  `
})
export class FormField {
  icons = viewChildren(FieldIcon); // Signal<FieldIcon[]>
  input = viewChild<ElementRef>('field'); // Signal<ElementRef>

  someEventHandler() {
    this.input().nativeElement.focus();
  }
}
```


### so long

- @ViewChild()
- @ContentChild()
- @ViewChildren()
- @ContentChildren()
- 🫡<!-- .element: class="fragment" -->



## Le futur.


### Statut actuel

- developer preview en v16 
- signal, computed et effect() sont présents
- tout le reste n'existe pas 


### où et quand utiliser signals vs rxjs ?

- why not both ?
- component <-> template
~
Pour l'instant tant que tout l'ècosystême n'a pas suivi, c'est le seul intérêt
Permets une réactivité plus fine
evite d'utiliser des subjects, des Observable et des choses asynchrone pour ce qui devrait être synchrone


### interopérabilité 

- toSignal
- toObservable


### avantages, inconvénients 


### qu'est ce que ca veut dire pour le futur d'angular

- plus simple
- plusieurs manières de faire la même chose
~
Ce n'est pas la mort d'rxjs


### Zoneless
- applications sans Zone.js
- ne veut pas dire que Zone.js est abandonné
~
An application would have to fully track its model in signals to completely remove dependency on zone.js.


### roadmap et librairies à cotê

- gestion d'états sont au tacket :
  - [NgRx SignalStore](https://github.com/ngrx/platform/discussions/3796]) 
- [rx-angular](https://github.com/rx-angular/rx-angular/pull/1523)
- [NGXS](https://github.com/ngxs/store/discussions/1977)



## Conclusion

<img src="quoi-on-dit-des-signaux.jpg">


### Sources

- [la RFC de base](https://github.com/angular/angular/discussions/49685)
- [AMA sur reddit sur le sujet](https://www.reddit.com/r/Angular2/comments/12t7107/informal_ama_angular_signals_rfc/)
- [Article sur AngularExperts à propos du push/pull](https://angularexperts.io/blog/angular-signals-push-pull)
- [The evolution of signals in javascript](https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob)
- [useSignal is the future of web frameworks](https://www.builder.io/blog/usesignal-is-the-future-of-web-frameworks)
- [Signals in typescript, the Road to Solid v1.7](https://www.youtube.com/watch?v=2fW6JaJHoCE)
- [Signals, what is going on behind the scene](https://itnext.io/signals-whats-going-on-behind-the-scenes-ec858589ea63)


### Merci

