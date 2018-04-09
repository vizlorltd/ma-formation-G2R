function ajouter() {
  var produit = document.getElementById("prod").value;
  var qte = document.getElementById("qnt").value;
  localStorage.setItem(produit,qte);
  document.getElementById("prod").value="";
  document.getElementById("qnt").value="";
  afficher();
}
function modifier() {
  var produit = document.getElementById("prod").value;
  document.getElementById("qnt").value = localStorage.getItem(produit);
  afficher();
}
function supprimer() {
  var produit = document.getElementById("prod").value;
  localStorage.removeItem(produit);
  document.getElementById("prod").value="";
  afficher();
}
function doClear() {
  localStorage.clear();
  afficher();
}
function afficher() {
  var key = "";
  var paires = "<tr> <td><b> Produit </b></td> <td><b> Quantité </b></td> </tr>\n";
  var i = 0;
  for (i = 0; i<=localStorage.length-1;i++) {
    key = localStorage.key(i);
    paires += "<tr><td>"+key+"</td>\n<td>"+localStorage.getItem(key)+"</td></tr>\n";
  }
  if (paires ==  "<tr> <td><b> Produit </b></td> <td><b> Quantité </b></td> </tr>\n") {
    paires +=  "<tr> <td><i> vide </i></td> <td><i> vide </i></td> </tr>\n"
  }
  document.getElementById("paires").innerHTML = paires;
}
