function a() {
  var x1 = document.getElementById("a1").value;
  var x2 = document.getElementById("a2").value;
  var x3 = document.getElementById("a3").value;
  var x4 = document.getElementById("a4").value;

  sum = Number(x1) + Number(x2) + Number(x3) + Number(x4);
}

function a1() {
  a();
  var Brex = document.getElementById("B");
  var z1 = document.getElementById("z1");
  Brex = sum * 0.3;
  z1.innerText = Brex;
  document.getElementById("z11").style.display = "block";
  document.getElementById("z22").style.display = "none";
  document.getElementById("z33").style.display = "none";
  document.getElementById("B").style.boxShadow = "2px 2px";
  document.getElementById("S").style.boxShadow = "";
  document.getElementById("A").style.boxShadow = "";
}

function a2() {
  a();
  var Stripe = document.getElementById("S");
  var z2 = document.getElementById("z2");
  Stripe = sum * 2.9;
  z2.innerText = Stripe;
  document.getElementById("z22").style.display = "block";
  document.getElementById("z33").style.display = "none";
  document.getElementById("z11").style.display = "none";
  document.getElementById("S").style.boxShadow = "2px 2px";
  document.getElementById("B").style.boxShadow = "";
  document.getElementById("A").style.boxShadow = "";
}

function a3() {
  a();
  var Amex = document.getElementById("A");
  var z3 = document.getElementById("z3");
  Amex = sum * 1.3;
  z3.innerText = Amex;
  document.getElementById("z33").style.display = "block";
  document.getElementById("z11").style.display = "none";
  document.getElementById("z22").style.display = "none";
  document.getElementById("A").style.boxShadow = "2px 2px";
  document.getElementById("S").style.boxShadow = "";
  document.getElementById("B").style.boxShadow = "";
}

function global() {
  a();

  var uunlimitednl = document.getElementById("y1");
  var lifetime = document.getElementById("y2");
  var m1 = document.getElementById("m1");
  var m2 = document.getElementById("m2");
  var mc = document.getElementById("mc");

  var result1 = (sum * 1.1).toFixed(2);
  var result2 = (sum * 1.2).toFixed(2);

  uunlimitednl.innerText = result1;
  lifetime.innerText = result2;

  m1.setAttribute("value", result1);
  m2.setAttribute("value", result2);
  m1.hidden = false;
  m2.hidden = false;
  mc.hidden = false;
}
