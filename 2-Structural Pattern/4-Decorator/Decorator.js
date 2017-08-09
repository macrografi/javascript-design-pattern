var Product = function (name) {
    this.name = name;
    this.getName = function () {
        log.add("Name : " + this.name + "</br>");
    }
}

var DecoratorProduct = function (product, model, price) {
    this.product = product;
    this.name = product.name;
    this.model = model;
    this.price = price;
    this.getName = function () {
        log.add("Product name : " + this.name + " Model : " + this.model + " Price : " + this.price);
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
    var product = new Product("Iphone");
    product.getName();

    var decoratorProduct = new DecoratorProduct(product, "6S Plus", "400$");
    decoratorProduct.getName();

    log.show();
}

run();