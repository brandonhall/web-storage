# WebStorage.js

Small wrapper for the Web Storage API which provides safe access to localStorage and sessionStorage.

### Features

* Ensures sessionStorage and localStorage is available and working before using it
* Replace Web Storage API methods with a simple API of getters and setters
* Automatically stringify and parse JSON
* Automatically convert boolean strings to proper booleans

### Usage

WebStorage.js consists of two separate namespaces. One is `WebStorage.Local` and 
the other is `WebStorage.Session`. The types of storage are very different and 
you can read about them at [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API).

#### LocalStorage Methods

1. Support check: `WebStorage.Local.enabled()`
2. Set: `WebStorage.Local.set(name, value)`
3. Get: `WebStorage.Local.get(name)`
4. Remove: `WebStorage.Local.remove(name)`

#### SessionStorage Methods

1. Support check: `WebStorage.Session.enabled()`
2. Set: `WebStorage.Session.set(name, value)`
3. Get: `WebStorage.Session.get(name)`
4. Remove: `WebStorage.Session.remove(name)`

### Why does this exist?

We started seeing errors that resulted from localStorage or sessionStorage not 
being available. The browser would be modern but the user may be browsing privately 
in Safari or may have disabled Web Storage on their own. In one case, our users 
would see our welcome tour on each login because localStorage was disabled across 
all company browsers.

### License

The MIT License
