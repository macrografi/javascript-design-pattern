var SingletonFactory = (function () {

    var instance;

    function createInstance() {
        var object = new Object("I'm instance");
        return object;
    }

    return {
        getInstance: function () {
            
            if (!instance) {
                instance = createInstance;
            }

            return instance;
        }
    }
})();

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
    var instance1 = SingletonFactory.getInstance();
    var instance2 = SingletonFactory.getInstance();

    log.add("Same instance ?" + (instance1 === instance2));
    log.show();
}
run();