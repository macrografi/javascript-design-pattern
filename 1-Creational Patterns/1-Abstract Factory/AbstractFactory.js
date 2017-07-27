function Iphone(name) {
    this.name = name;

    this.model = function () {
        log.add("Iphone : " + this.name)
    }
}

function IphoneFactory() {
    this.create = function (name) {
        return new Iphone(name);
    }
}

//IIFE - Immediately-Invoked Function Expression
var log = (function () {
    var log = "";
    return {
        add: function (msg) {
            log += msg;
        },
        show: function () {
            document.write(log);
            log = "";
        }
    }
})();

function run() {
    var applestore = [];
    var iphoneFactory = new IphoneFactory();

    applestore.push(iphoneFactory.create('6s'));

    for (var i = 0, len = applestore.length; i < len; i++) {
        applestore[i].model();
    }

    log.show();

}

run();

