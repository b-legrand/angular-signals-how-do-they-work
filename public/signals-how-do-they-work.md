# Angular signals: how do they work ??? 

<img src="angular.svg" height="90vh" alt="logo angular"/>
~
Dans ce talk je vais vous parler des signals, une nouvelle api d'angular


<img src="icp-magnets.webp" alt="Insane Clown Possee">
~
Si vous connaissez ce même, vous êtes sur internet depuis trop longtemps.



## Introduction

- Benjamin Legrand
- 🏢 onepoint
- 🧙‍♂️ 15 ans d'XP
- 🅰️️ Angular enjoyer
- 🎸 musique / ⌨️ claviers
~
Dans ce talk je vais vous parler des signals, une nouvelle api d'angular
Et comment 


### La réactivité

- fait de réagir
- ⚛️ pas React


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
- Ember
- Pikachu


### Who's got signals already ?

- Solid
- Preact
- Astro
- Qwik
- Marko
- Knockout
- Ember
- 🎉 Angular 🎉




### RFC
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
- 


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


### inputs


### outputs



## Le futur.


### Statut actuel

- developer preview en v16


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


#### NgRx SignalStore

https://github.com/ngrx/platform/discussions/3796
```
```
- https://github.com/ngrx/platform/discussions/3796


#### rx-angular

https://github.com/rx-angular/rx-angular/pull/1523


#### NGXS

https://github.com/ngxs/store/discussions/1977



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

