function Iphone() {
    this.charger = "";
    this.headphone = "";
    this.case = "";

    this.addProperties = function () {
        this.charger = "Avaiable";
        this.headphone = "Avaiable";
        this.case = "Avaiable";
    }

    this.say = function () {
        log.add("Iphone 6 Plus - " + "Charger : " + this.charger + ", " + "Headphone : " + this.headphone + ", " + "Case : " + this.case);
    }
}

function IphoneFactory() {
    this.stageOne = function () {
        this.iphone = new Iphone();
    }

    this.stageTwo = function () {
        this.iphone.addProperties();
    }

    this.getIphone = function () {
        return this.iphone;
    }
}

function AppleStore() {
    this.constractor = function (builder) {
        builder.stageOne();
        builder.stageTwo();

        return builder.getIphone();
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
        }
    }
})();

function run() {
    var iphoneFactory = new IphoneFactory();
    var appleStore = new AppleStore();
    var iphone = appleStore.constractor(iphoneFactory);

    iphone.say();
    log.show();
}
run();