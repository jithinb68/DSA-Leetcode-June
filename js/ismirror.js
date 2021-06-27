String.prototype.isMirrorOf = function (char) {
    return this.toString().split("").reverse().join("") === char ? true : false;
};

"abc".isMirrorOf('cbaa');

