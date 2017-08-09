function Sort(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
};

var SortFactory = (function () {
    var sorts = {};

    return {
        get: function (name, model, price) {
            if (!sorts[name + model]) {
                sorts[name + model] = new Sort(name, model, price);
            }
            return sorts[name + model];
        },

        getCount: function () {
            var count = 0;
            for (var f in sorts) count++;
            return count;
        }
    }
})();

function ProductCollection() {
    var products = {};
    var count = 0;

    return {
        add: function (name, model, price, memory, tag) {
            products[tag] = new Computer(name, model, price, memory, tag);
            count++;
        },

        get: function (tag) {
            return products[tag];
        },

        getCount: function () {
            return count;
        }
    };
}

var Computer = function (name, model, price, memory, tag) {
    this.flyweight = SortFactory.get(name, model, price);
    this.memory = memory;
    this.tag = tag;
    this.getName = function () {
        return this.flyweight.name;
    }
}


var log = (function () {
    var log = "";

    return {
        add: function (msg) {
            log += msg
        },
        show: function () {
            document.write(log);
            log = "";
        }
    }
})();

function run() {
    var products = new ProductCollection();

    products.add("Iphone", "6 Plus", "200$", "5G", "Y755P");
    products.add("Iphone", "6 Plus", "200$", "6G", "X997T");
    products.add("Iphone", "6 Plus", "200$", "2G", "U8U80");
    products.add("Iphone", "6 Plus", "200$", "2G", "NT777");
    products.add("Iphone", "6 Plus", "200$", "2G", "0J88A");
    products.add("Ipad", "Pro", "200$", "4G", "CNU883701");
    products.add("Ipad", "Pro", "200$", "2G", "TXU003283");

    log.add("Products: " + products.getCount() + "</br>" + "Sorts: " + SortFactory.getCount());
    log.show();
}
run();