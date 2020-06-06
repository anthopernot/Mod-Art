document.getElementById("viewAll").addEventListener('click',function () {

    let divViewAll = document.getElementById("viewAll");
    let buttonView = document.getElementById("buttonView");
    let pViewText = document.getElementById("viewText");

    let divG = document.createElement("div");
    let divM = document.createElement("div");
    let divS = document.createElement("div");
    let divCol7 = document.createElement("div");
    let divCol5 = document.createElement("div");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let pH4 = document.createElement("p");
    let pH3 = document.createElement("p");

    divG.id = "divCo1";
    divG.className = "media mt-4 shadow-sm p-2";
    divM.className = "media-body";
    divS.className = "row";
    divCol7.className = "col-7";
    divCol5.className = "col-5";
    h3.className = "mt-0";
    h4.className = "mt-0 text-danger";
    pH4.className = "h4 text-danger text-left";
    pH3.className = "h3 text-right text-danger";

    h3.textContent = "Commande #1";
    h4.textContent = "Date : 12/12/2019";
    pH4.textContent = "Prix: ";
    pH3.textContent = "90 €";

    if(pViewText.textContent === "Tout voir"){
        divCol7.appendChild(pH3);
        divCol5.appendChild(pH4);

        divS.appendChild(divCol5);
        divS.appendChild(divCol7);

        divM.appendChild(h3);
        divM.appendChild(h4);
        divM.appendChild(divS);

        divG.appendChild(divM);



        document.getElementById("divCommande").appendChild(divG);
        document.getElementById("divCommande").removeChild(divViewAll);

        buttonView.removeChild(pViewText);
        divViewAll.removeChild(buttonView);

        pViewText.textContent = "Diminuer";
        buttonView.append(pViewText);
        divViewAll.appendChild(buttonView);
        document.getElementById("divCommande").appendChild(divViewAll);

    }else if(pViewText.textContent === "Diminuer"){

        document.getElementById("divCommande").removeChild(document.getElementById("divCo1"));
        pViewText.textContent = "Tout voir";

    }

});