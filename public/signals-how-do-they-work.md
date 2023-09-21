# Angular signals: how do they work ??? 

<img src="angular.svg" height="90vh" alt="logo angular"/>


<img src="icp-magnets.webp" alt="Insane Clown Possee">



## Introduction

- Benjamin Legrand
- onepoint
- 15 ans dans le dev
- angular enjoyer


### La réactivité

- fait de réagir


### à l'ancienne, impératif

- je recois une donnée, je mets à jour manuellement tout les endroits qui en dépendent
- tousse tousse jQuery


### Bref historique

- signals in computer science
~
existe depuis aussi longtemps que l'informatique
mention de knockout.js



## Le passé
- comment on faisait avant ?


### push vs pull

- Promise<Value>


### rxjs

- Observable<Value>


### yes, but

- api, confettis d'opérateurs


### Zone.js

- patch votre code
- microtasks


### Push vs pull table



## Le présent

- Signals API


### Who's got signals already ?

- Solid
- Preact
- Astro
- Qwik
- Marko
- Knockout
- Angular


### RFC
- Avril 2023
- https://github.com/angular/angular/discussions/49685
- découpée en 4


### a Signal, api

```typescript
type Signal<T> = {
  () => T
}
```


### signal(), usage

```typescript
const counter = signal(0);
```


### WritableSignal

```typescript
type WritableSignal<T> = {
  () => T;
  set(t: T): void
}
```


### WritableSignal, usage


### computed()


### effect()


### avantages


### intégration avec angular: Signal-based components

- https://github.com/angular/angular/discussions/49682



## Le futur.


### Statut actuel

- developer preview en v16


### où et quand utiliser signals vs rxjs ?

- why not both ?

### interopérabilité 

- toSignal
- toObservable


### avantages, inconvénients 


### qu'est ce que ca veut dire pour le futur d'angular


### roadmap et librairies à cotê

#### NgRx SignalStore

```
https://github.com/ngrx/platform/discussions/3796
```


### Sources

- [la RFC de base](https://github.com/angular/angular/discussions/49685)
- [AMA sur reddit sur le sujet](https://www.reddit.com/r/Angular2/comments/12t7107/informal_ama_angular_signals_rfc/)
- [Article sur AngularExperts à propos du push/pull](https://angularexperts.io/blog/angular-signals-push-pull)
- [The evolution of signals in javascript](https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob)
- [useSignal is the future of web frameworks](https://www.builder.io/blog/usesignal-is-the-future-of-web-frameworks)
- [Signals in typescript, the Road to Solid v1.7](https://www.youtube.com/watch?v=2fW6JaJHoCE)
- [Signals, what is going on behind the scene](https://itnext.io/signals-whats-going-on-behind-the-scenes-ec858589ea63)


### Merci

