//mc book product
var MacBook = function () {
    this.payment = "1000$";
}

//ipad product
var Ipad = function () {
    this.payment = "500$";
}

//iphone product
var Iphone = function () {
    this.payment = "450$";
}

//factory methot contsructor
function AppleFactory() {
    this.create = function (type) {
        if (type === "MacBook") {
            product = new MacBook();
        }

        else if (type === "Ipad") {
            product = new Ipad();
        }

        else if (type = "Iphone") {
            product = new Iphone();
        }

        product.type = type;

        product.say = function () {
            log.add(this.type + ' : ' + this.payment + '</br >');
        }

        return product;
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
    var products = [];
    var appleFactory = new AppleFactory();

    //add mac book, ipad, iphone product appleFactory constructor.
    products.push(appleFactory.create("MacBook"));
    products.push(appleFactory.create("Ipad"));
    products.push(appleFactory.create("Iphone"));

    for (var i = 0, len = products.length; i < len; i++) {
        products[i].say();
    }

    log.show();
}
run();