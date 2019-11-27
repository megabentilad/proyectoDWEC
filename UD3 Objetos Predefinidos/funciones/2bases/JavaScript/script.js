function cambiarBase(base) {
    return function (numero) {
        return numero.toString(base);
    };
}