(function(global, $) {
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    var supportedLanguages = ['en', 'es'];

    var greetings = {
        en: "Hello",
        es: "Hola"
    };

    var formalGreetings = {
        en: "Greetings",
        es: "Saludos"
    };

    var logMessages = {
        en: "Logged in",
        es: "Inicio session"
    }

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
        }
    };

    Greetr.init = function(firstName = "John", lastName = "Doe", language = "en") {
        var self = this;
        self.firstName = firstName;
        self.lastName = lastName;
        self.language = language;
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;
})(window, jQuery);