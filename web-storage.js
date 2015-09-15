/**
 * Web Storage 0.2 | https://github.com/brandonhall/web-storage
 * Copyright (c) Brandon Hall <b@brandonhall.me> | The MIT License
 */
  
;(function(window) {
  
  window.WebStorage = {

    /**
     * LocalStorage Handling
     */
    Local: {

      /**
       * Set localStorage key/value pair
       * @param name
       * @param value
       */
      set: function (name, value) {
        if (name === undefined || value === undefined) {
          throw new Error('name or value missing from WebStorage.Local.set');
        }

        if (!this._localStorageTest()) {
          return;
        }

        localStorage.setItem(name, JSON.stringify(value));
      },

      /**
       * Get localStorage value
       * @param name
       */
      get: function (name) {
        if (name === undefined) {
          throw new Error('name missing from WebStorage.Local.get');
        }

        if (!this._localStorageTest()) {
          return;
        }

        var val = localStorage.getItem(name);
        
        try {
          return JSON.parse(val);
        }
        catch(e) {
          return val;
        }
      },

      /**
       * Remove localStorage item
       * @param name
       */
      remove: function (name) {
        if (name === undefined) {
          throw new Error('name missing from WebStorage.Local.remove');
        }

        if (this._localStorageTest()) {
          localStorage.removeItem(name);
        }
      },

      /**
       * Check to see if localStorage is enabled
       * @returns {*|boolean}
       */
      enabled: function () {
        return this._localStorageTest();
      },

      /**
       * Ensure localStorage is available and working
       * @returns {boolean}
       * @private
       */
      _localStorageTest: function () {
        var lsTest = '4GIwa24sFzOI';
        try {
          localStorage.setItem(lsTest, lsTest);
          localStorage.removeItem(lsTest);
          return true;
        }
        catch (e) {
          return false;
        }
      }
    },

    /**
     * SessionStorage Handling
     */
    Session: {
      /**
       * Set sessionStorage key/value pair
       * @param name
       * @param value
       */
      set: function (name, value) {
        if (name === undefined || value === undefined) {
          throw new Error('name or value missing from WebStorage.Session.set');
        }

        if (!this._sessionStorageTest()) {
          return;
        }

        sessionStorage.setItem(name, JSON.stringify(value));
      },

      /**
       * Get sessionStorage value
       * @param name
       */
      get: function (name) {
        if (name === undefined) {
          throw new Error('name missing from WebStorage.Local.get');
        }

        if (!this._sessionStorageTest()) {
          return;
        }

        var val = sessionStorage.getItem(name);

        try {
          return JSON.parse(val);
        }
        catch(e) {
          return val;
        }
      },

      /**
       * Remove sessionStorage item
       * @param name
       */
      remove: function (name) {
        if (name === undefined) {
          throw new Error('name missing from WebStorage.Session.remove');
        }

        if (this._sessionStorageTest()) {
          sessionStorage.removeItem(name);
        }
      },

      /**
       * Check to see if sessionStorage is enabled
       * @returns {*|boolean}
       */
      enabled: function () {
        return this._sessionStorageTest();
      },

      /**
       * Ensure sessionStorage is available and working
       * @returns {boolean}
       * @private
       */
      _sessionStorageTest: function () {
        var ssTest = 'aMq0Tn8vse6W';
        try {
          sessionStorage.setItem(ssTest, ssTest);
          sessionStorage.removeItem(ssTest);
          return true;
        }
        catch (e) {
          return false;
        }
      }
    }
  }
  
})(window, undefined);
  
