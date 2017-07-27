//my iphone method. This is say model name.
function Iphone(name) {
    this.name = name;

    this.model = function () {
        log.add("Iphone : " + this.name)
    }
}

//my iphone factory method. This is create new iphone.
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

//run function
function run() {
    var applestore = [];
    var iphoneFactory = new IphoneFactory();

    applestore.push(iphoneFactory.create('6s'));
    applestore.push(iphoneFactory.create('6s plus'));
    applestore.push(iphoneFactory.create('5'));

    for (var i = 0, len = applestore.length; i < len; i++) {
        applestore[i].model();
    }

    log.show();

}

run();

