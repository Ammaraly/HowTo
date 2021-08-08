;
(function(global, $) {

    // New Greetr object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // Supported languages by Greetr
    var supportedLanguages = ['en', 'es'];

    // Informal greetings
    var greetings = {
        en: "Hello",
        es: "Hola"
    };

    // Formal greetings
    var formalGreetings = {
        en: "Greetings",
        es: "Saludos"
    };

    // User Log messages
    var logMessages = {
        en: "Logged in",
        es: "Inicio session"
    }

    // Methods used by all Greetr objects are defined in the prototype
    Greetr.prototype = {
        fullName: function() {
            return `${this.firstName} ${this.lastName}`;
        },

        validate: function() {
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw "Unsupported Language";
            }
            return true;
        },

        greet: function(formal = false) {
            var msg = formal ? this.formalGreeting() : this.greeting();
            if (console) console.log(msg);
            return this;
        },

        setLang(language) {
            this.language = language;
            this.validate;
            return this;
        },

        greeting: function() {
            return `${greetings[this.language]} ${this.firstName}!`;
        },

        formalGreeting: function() {
            return `${formalGreetings[this.language]}, ${this.fullName()}!`;
        },

        /**
         * Injects a greeting to an HTML element using JQuery selector.
         */
        injectGreeting(selector, formal) {
            if (!$) throw "JQuery not loaded!";
            if (!selector) throw "No selector specified!";
            $(selector).text(formal ? this.formalGreeting() : this.greeting());
            return this;
        }
    };

    /**
     * Actual constructor function for Greetr objects.
     */
    Greetr.init = function(firstName = "John", lastName = "Doe", language = "en") {
        var self = this;

        self.firstName = firstName;
        self.lastName = lastName;
        self.language = language;

        self.validate();
    }

    /**
     * Setting the Greetr object prototype to Greetr prototype so all objects have
     * access the Greetr methods.
     */
    Greetr.init.prototype = Greetr.prototype;

    // Making Greetr and G$ alias globally accessible
    global.Greetr = global.G$ = Greetr;
})(window, jQuery);