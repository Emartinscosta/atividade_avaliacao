class Calculadora {
    constructor(valorAnteriorTexto, valorActualTexto) {
        this.valorAnteriorTexto = valorAnteriorTexto;
        this.valorActualTexto = valorActualTexto;
        this.borrarTodo();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.operacion = undefined;
        this.actualizarDisplay();
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.actualizarDisplay();
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return;
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.actualizarDisplay();
    }

    seleccionarOperacion(operacion) {
        if (this.valorActual === '') return;
        if (this.valorAnterior !== '') {
            this.calcular();
        }
        this.operacion = operacion;
        this.valorAnterior = this.valorActual;
        this.valorActual = '';
        this.actualizarDisplay();
    }

    calcular() {
        let resultado;
        const anterior = parseFloat(this.valorAnterior);
        const actual = parseFloat(this.valorActual);
        if (isNaN(anterior) || isNaN(actual)) return;
        switch (this.operacion) {
            case '+':
                resultado = anterior + actual;
                break;
            case '-':
                resultado = anterior - actual;
                break;
            case '×':
                resultado = anterior * actual;
                break;
            case '÷':
                resultado = anterior / actual;
                break;
            default:
                return;
        }
        this.valorActual = resultado;
        this.operacion = undefined;
        this.valorAnterior = '';
        this.actualizarDisplay();
    }

    actualizarDisplay() {
        this.valorActualTexto.innerText = this.valorActual;
        this.valorAnteriorTexto.innerText = this.valorAnterior;
    }
}

const valorAnteriorTexto = document.querySelector('#valor-anterior');
const valorActualTexto = document.querySelector('#valor-actual');
const calculadora = new Calculadora(valorAnteriorTexto, valorActualTexto);

function borrarTodo() {
    calculadora.borrarTodo();
}

function borrar() {
    calculadora.borrar();
}

function agregarNumero(numero) {
    calculadora.agregarNumero(numero);
}

function seleccionarOperacion(operacion) {
    calculadora.seleccionarOperacion(operacion);
}

function calcular() {
    calculadora.calcular();
}

function agregarPunto() {
    agregarNumero('.');
}
