function connexion()
{
    var id = prompt("Donnez votre nom d'utilisateur");
    var mdp = prompt("Entrez votre mot de passse");
    if (id == "admin" && mdp == "admin")
    {
        document.write("Bienvenue:   " + id);
    }
    else
    {
        alert("Accès refusé");
    }
}

function chaine_caractere()
{
    var chaine=prompt("Donnez un mot")
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chiane contient  "+ chaine.length+"   caracteres  " + "<br>");
    document.write("La première lettre est  "+chaine.substr(0,1)+"<br>");
}


function affichage_tableau()
{

document.write("<table border=2 width=30%>");
        for (i=0; i <=5; i++)
        {
            document.write("<tr><td>*</td><td>*</td><td>*</td></tr>")
        }
        document.write("</table>");
    
}

function affichage_tableau2()
{
    var id = prompt("Donnez le nombre de lignes pour le tableau")
    document.write("<table border=2 width=30%>");
            for (i=0; i <=id; i++)
            {
                document.write("<tr><td>"+i+"</td><td>*</td><td>*</td></tr>")
            }
            document.write("</table>");

}

function connexion2()
{
    
    do {
    
        var id = prompt("Donnez votre nom d'utilisateur");
    var mdp = prompt("Entrez votre mot de passse");

    if (id == "admin" && mdp == "admin")
    {
        document.write("Bienvenue:   " + id);
        break;
    }

    else
    
        alert("Accès refusé");
    
    i+= 1;

     } while(i<3);
if (i ==3)
alert("Délai dépassé");

}
function fun_switch()
{
    var color = prompt("entrez une couleur");

    switch(color)
    {
        case "vert": document.body.style.background = "green";;
        break;
        case "VERT": document.body.style.background = "green";;
        break;
        case "blue": document.body.style.background = "blue";;
        break;
        case "Blue": document.body.style.background = "blue";;
        break;

             default:alert("couleur non définie");

    }
}
function facture(){
    var article
    var price
    var quantity
    var res
    var total=0;

    do{
        article = prompt("Votre article")
        price = prompt("Le prix")
        quantity = prompt("La quantité");

        res = Number(price)* Number(quantity);
        total = total + res;

        alert("votre facture : " , total);

        next = prompt("Voulez vous continuer (OUI/STOP) ?")
    }
    while(next != "STOP")

}