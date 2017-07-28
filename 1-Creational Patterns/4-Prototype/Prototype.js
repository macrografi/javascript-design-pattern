//three parameters and say function contructor.
function Applestore(name, model, status) {
    this.name = name;
    this.model = model;
    this.status = status;

    this.say = function () {
        log.add(this.name + " - " + this.model + " - " + this.status);
    }
}

//prototype
function AppleStorePrototype(proto) {
    this.proto = proto;
    //applestore of properties clone.
    this.clone = function () {
        var applestore = new Applestore();

        applestore.name = proto.name;
        applestore.model = proto.model;
        applestore.status = proto.status;

        return applestore;
    }
}

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
    var proto = new Applestore("Iphone", "6s plus", "Sold");
    var prototype = new AppleStorePrototype(proto);

    var applestore = prototype.clone();
    applestore.say();
    
    log.show();
}

run();