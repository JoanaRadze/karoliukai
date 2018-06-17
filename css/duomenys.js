let url = "http://localhost/phpmyadmin/sql.php?db=apyranke&token=3d3073a3c6860a28fe0248db27118ac4&goto=db_structure.php&table=kontaktai&pos=0";
let jasonObjektas = {};

function surinktiDuomenis() {
    jasonObjektas.vardas = $('[name="vardas"]').val();
    jasonObjektas.Gatve = $('[name="gatve"]').val();
    jasonObjektas.namas = $('[name="namas"]').val();
    jasonObjektas.butas = $('[name="butas"]').val();
    jasonObjektas.miestas = $('[name="miestas"]').val();
}
function siustiDuomanis() {
    surinktiDuomenis();
    console.log("Reikalinga: " + JSON.stringify(jasonObjektas));

    $.post(url, jasonObjektas)
        .done(function (data) {
            console.log("Response: " + JSON.stringify(data));
        })
        .fail(function (data) {
            console.log("Klaida: " + JSON.stringify(data))
        })
}
$('[type="submit"]').click(function () {
    siustiDuomanis();
});
uzsakymas = document.getElementById("pirmas");
uzsakymas.addEventListener("click", funkcija);
function funkcija(){
    document.getElementById("uzsakymas").innerHTML += select().value();
}