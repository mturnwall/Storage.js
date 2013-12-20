/**
 *  Wrapper for the window.localStorage object.
 *  @type {Object}
 *  @property {String} prefix The default prefix to be used if none is provided when
 *                            the object is initialized.
 *  @name LS
 *  @namespace
 *  @author Michael Turnwall
 */
var LS = (function (global) {
    
    var LS = function() {};

    LS.prototype = /** @lends LS */ {
        constructor: LS,
        prefix: 'default_',
        /**
         *  Set a key:value on the window.localStorage object.
         *  The value can be either a String or JSON.
         *  @param   {String} name The key used to identifer the value being written.
         *  @param   {String|JSON} value A value that is written to the window.localStorage object
         */
        set: function (key, value) {
            var convertedValue = (typeof value !== 'function') ? JSON.stringify(value) : value;
            if (this.hasLocalStorage) {
                // console.log(this.prefix + key, JSON.stringify(value));
                this.lc.setItem(this.prefix + '_' + key, convertedValue);
            }
        },
        /**
         *  Retrieve a value from the window.localStorage object
         *  @param   {String} key The identifer for the value needed.
         *  @returns {String|JSON} This value depends on the type of value that was
         *                         initially written
         */
        get: function (key) {
            var value;
            if (this.hasLocalStorage) {
                value = this.lc.getItem(this.prefix + '_'  + key);
                if (value === null)
                    return false;
                return JSON.parse(value);
            }
        },
        /**
         *  Remove a value from the window.localStorage object identified by the key supplied
         *  @param   {String} key The identifer for the value to remove.
         */
        remove: function (key) {
            if (this.hasLocalStorage) {
                this.lc.removeItem(this.prefix + '_'  + key);
            }
        },
        /**
         *  Initialize the object. If localStorage isn't supported
         *  false is returned so that a fallback can be used.
         *  @param   {String} [prefix] A prefix to add to all keys so that a namespace is created.
         *  @returns {Boolean} false is returned if window.localStorage isn't supported
         */
        init: function (prefix) {
            this.hasLocalStorage = false;
            if (typeof prefix !== 'undefined') {
                this.prefix = prefix;
            }
            if (('localStorage' in window) && window.localStorage !== null) {
                this.lc = window.localStorage;
                this.hasLocalStorage = true;
            } else {
                console.warn('This browser does not support localStorage. Be sure to use a fallback');
                return false;
            }
        }
    };
    global.LS = LS;

})(typeof window === 'undefined' ? this : window);
