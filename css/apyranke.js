let url = "http://localhost/phpmyadmin/sql.php?db=apyranke&token=3d3073a3c6860a28fe0248db27118ac4&goto=db_structure.php&table=kontaktai&pos=0";
let jasonObjektas = {};

function surinktiDuomenis() {
    jasonObjektas.pirmas = $('[id="pirmas"]').select().val();
    jasonObjektas.antras = $('[id="antras"]').select().val();
    jasonObjektas.trecias = $('[id="trecias"]').select().val();
    jasonObjektas.ketvirtas = $('[id="ketvirtas"]').select().val();
    jasonObjektas.penktas = $('[id="penktas"]').select().val();
    jasonObjektas.sestas = $('[id="sestas"]').select().val();
    jasonObjektas.septintas = $('[id="septintas"]').select().val();
    jasonObjektas.astuntas = $('[id="astuntas"]').select().val();
    jasonObjektas.devintas = $('[id="devintas"]').select().val();
    jasonObjektas.desimtas = $('[id="desimtas"]').select().val();
    jasonObjektas.vienuoliktas = $('[id="vienuoliktas"]').select().val();
    jasonObjektas.dvyliktas = $('[id="dvyliktas"]').select().val();
    jasonObjektas.tryliktas = $('[id="tryliktas"]').select().val();
    jasonObjektas.keturioliktas = $('[id="keturioliktas"]').select().val();
    jasonObjektas.penkioliktas = $('[id="penkioliktas"]').select().val();
    jasonObjektas.sesioliktas = $('[id="sesioliktas"]').select().val();
    jasonObjektas.septynioliktas = $('[id="septynioliktas"]').select().val();
    jasonObjektas.astuonioliktas = $('[id="astuonioliktas"]').select().val();
}
function siustiDuomanis() {
    surinktiDuomenis();
    console.log("siunciam: " + JSON.stringify(jasonObjektas));

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

