class Covid19 {
  constructor(data) {
    this.data = data;
    this.calcIncrementoPorDia.bind(this);
    this.calcFactor.bind(this);
    this.proyeccionRango.bind(this);
    this.getToday.bind(this);
  }

  calcIncrementoPorDia() {
    const infectadosHoy = this.getToday();
    const infectadosAyer = this.getYesterday();
    const incrementoInfectados = infectadosHoy - infectadosAyer;
    return incrementoInfectados;
  }

  calcFactor() {
    const infectadosHoy = this.getToday();
    const infectadosAyer = this.getYesterday();
    const factorInfectados = infectadosHoy / infectadosAyer;
    return factorInfectados;
  }

  getToday() {
    const infectadosHoy = this.data[this.data.length - 1].Cases;
    return infectadosHoy;
  }

  getYesterday() {
    const infectadosAyer = this.data[this.data.length - 3].Cases;
    return infectadosAyer;
  }

  async proyeccionRango(rangoDeDias = 30) {
    const factor = this.calcFactor();
    const infectadosHoy = this.getToday();
    const proyeccion = [];
    let infectadosProyeccion = infectadosHoy * factor;
    for (let i = 0; i < rangoDeDias; i++) {
      infectadosProyeccion += infectadosHoy * factor;
      proyeccion.push(infectadosProyeccion);
    }
    return proyeccion;
  }
}

module.exports = Covid19;
