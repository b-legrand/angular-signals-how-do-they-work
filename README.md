# Angular signals : how do they work ???

![](./public/icp-magnets.webp)

## Abstract

```
On était tranquille là à faire de la réactivité avec RxJS dans nos applications angular,

Et voilà que la core team nous sort une nouvelle primitive pour ça : `signal()`.

C'est quoi la réactivité d'abord ? C'est quoi un signal ? 

Est ce que vous devez absolument les utiliser au lieu d'RxJS ? ( spoiler: non )

Bref, comment ça marche les signals en angular ? ( quoi, on dit des signaux ? )
```

## Plan
- le passé,la réactivité

  - push vs pull
  - comment on faisait avant : 
    - Zone.js
    - Observable 
    - détection de changement

- le présent. un signal c'est quoi ? 

  - c'est un getter. générique. fin du talk
  - writable signals
  - computed
  - effect

- le futur, signal-based components
  - où et quand utiliser signals vs rxjs ?
  - avantages, inconvénients
  - qu'est ce que ca veut dire pour le futur d'angular

## Sources

- [la RFC de base](https://github.com/angular/angular/discussions/49685)
- [AMA sur reddit sur le sujet](https://www.reddit.com/r/Angular2/comments/12t7107/informal_ama_angular_signals_rfc/)
- [Article sur AngularExperts à propos du push/pull](https://angularexperts.io/blog/angular-signals-push-pull)
- [The evolution of signals in javascript](https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob)
- [How React isn't reactive and why you should'nt care](https://dev.to/this-is-learning/how-react-isn-t-reactive-and-why-you-shouldn-t-care-152m)
- https://www.builder.io/blog/unified-reactivity-theory
- [Ben Lesh's advice](https://x.com/BenLesh/status/1775207971410039230)

## TODO longer version

- [ ] schéma du graph d'appel à découper
- [ ] watchers
- [ ] partie benlesh | quand utiliser signals vs rxjs
- [ ] partie comment migrer -> model, api composant inchangée, changement dans les templates, dans les tests, control flow
- [ ] ajouter une partie sur la proposition TC39 : https://github.com/tc39/proposal-signals 
