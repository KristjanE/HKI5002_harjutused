function foor() {
  this.tuli = "roheline";
  this.kysiTuli = function() {
    return this.tuli;
  }
  this.muudaTuli = function(uusTuli) {
    this.tuli = uusTuli;
  }
}

function lamp() {
  this.lamp = true;
  this.kasSees = function() {
    return this.lamp;
  }
  this.uusSeisund = function(uusLamp) {
    this.lamp = uusLamp;
  }
  this.seisundTekstina = function() {
    var seisund = this.kasSees() ? 'põleb' : 'ei põle';
    document.getElementById("vastus2").innerHTML =
    "Seisund: " + seisund;
  }
  this.vahetaSeisund = function() {
    this.lamp = !this.kasSees();
    var varv = this.kasSees() ? 'red' : 'white';
    document.getElementById("foorituled").style.background=varv;
    console.log(this.kasSees())
  }
}

function leheAlgus() {
  var f1 = new foor();
  var f2 = new foor();
  lamp1 = new lamp();
  lamp2 = new lamp();
  f1.muudaTuli("kollane");
  f2.muudaTuli("punane");
  document.getElementById("vastus").innerHTML =
  "esimene: " + f1.kysiTuli() +
  ", teine: " + f2.kysiTuli();
}
