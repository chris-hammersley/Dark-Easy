HTMLElement.prototype.swapClasses = function (dosclasses) {
    var clases = dosclasses.split(/\s*\,\s*/);
    var start = clases[0];
    var exit = clases[1];
    if (this.classList.contains(exit)) {
        this.classList.remove(exit);
        this.classList.add(start);
    } else {
        this.classList.remove(start);
        this.classList.add(exit);
    }
    return this;
};