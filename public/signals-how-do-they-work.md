# Angular signals: how do they work ???


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



## Le passé


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



## Signals ( le présent )


### Who's got signals already ?

- Solid
- Preact
- Astro
- Qwik
- 


### RFC


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



## Le futur.


### où et quand utiliser signals vs rxjs ?


### avantages, inconvénients 


### qu'est ce que ca veut dire pour le futur d'angular


### roadmap et librairies à cotê



### Sources

- [la RFC de base](https://github.com/angular/angular/discussions/49685)
- [AMA sur reddit sur le sujet](https://www.reddit.com/r/Angular2/comments/12t7107/informal_ama_angular_signals_rfc/)
- [Article sur AngularExperts à propos du push/pull](https://angularexperts.io/blog/angular-signals-push-pull)
- [The evolution of signals in javascript](https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob)
- [useSignal is the future of web frameworks](https://www.builder.io/blog/usesignal-is-the-future-of-web-frameworks)
- [Signals in typescript, the Road to Solid v1.7](https://www.youtube.com/watch?v=2fW6JaJHoCE)
- [Signals, what is going on behind the scene](https://itnext.io/signals-whats-going-on-behind-the-scenes-ec858589ea63)


### Merci

