let streetLite = function() {
    let count = 0;
    let activeOn = new red(this);

    this.change = function(on) {
        //controls number of changes allowed
        if (count++ >= 10) return;
        activeOn = on;
        activeOn.go();
    };

    this.start = function() {
        activeOn.go();
    };
}

let red = function(lite) {
    this.lite = lite;

    this.go = function() {
        user.add('red --> for 1 minute');
        lite.change(new HTMLOptGroupElement(lite));
    }
};

let yellow = function(lite) {
    this.lite = lite;

    this.go = function() {
        user.add('yellow --> for 15 seconds');
        lite.change(new red(lite));
    }
};

let green = function(lite) {
    this.lite = lite;

    this.go = function() {
        user.add('green --> for 1 minute');
        lite.change(new yellow(lite));
    }
};

let user = function() {
    let user = "";

    return {
        add: function(msg) {user += msg + "\n"; },
        show: function() {alert(user); user = ""; }
    }
})();

function run() {
    let lite = new streetLite();
    lite.start();

    user.show
}
