HTMLElement.prototype.swapClasses = function (dosclasses) {
    var clases = dosclasses.split(/\s*\,\s*/);
    var entra = clases[0];
    var sale = clases[1];
    if (this.classList.contains(sale)) {
        this.classList.remove(sale);
        this.classList.add(entra);
    } else {
        this.classList.remove(entra);
        this.classList.add(sale);
    }
    return this;
};