// Vertalen van de verschillende teksten in de applicatie
var btnConfirm = 'Bevestigen'

function vertaalTekst(taal) {
    vertaalTeksten(taal);

    $('.customDatepicker').datepicker("option", "dayNamesMin", dagenKortHuidig);
    $('.customDatepicker').datepicker("option", "dayNames", dagenHuidig);
    $('.customDatepicker').datepicker("option", "monthNames", maandenHuidig);
    //setDteStyle('.customDatepicker');
}

var msgGeenHistoriek = '';
var msgGeenSaldi = '';
var msgAlleVeldenInvullen = '';
var msgGeenAanvragen = '';
var msgGeenRedenAfkeuren = '';

var dynamicAantUur = '';
var dynamicDag = '';
var dynamicVoormiddag = '';
var dynamicNamiddag = '';
var dynamicVanaf = '';
var dynamicTot = '';
var dynamicAantDagen = '';
var dynamicDteAanvraag = '';
var dynamicBehandelen = '';
var dynamicPrestatieCode = "";
var dynamicMinBezetting = '';
var dynamicAantAanwezig = '';
var dynamicAantAangevraagd = '';
var dynamicBtnDagenBevestigen = '';
function vertaalTeksten(taal) {
     
     var xml = $.ajax({
         url: (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) ? (url + 'xml/TekstenClient.xml') : 'xml/TekstenClient.xml',
        async: false
    }).responseText;

    // Statische teksten wijzigen
     $(xml).find('Vertalingen').find('Vertaling').each(function () {
        if ($(this).attr('isButton') == 1)
            $('.' + $(this).attr('class')).parent().html($(this).find(taal).text());
        else
            $('.' + $(this).attr('class')).html($(this).find(taal).text());
    });

    // Tekst van meldingen wijzigen
    msgGeenHistoriek = $(xml).find('Vertalingen').find('Melding[class="GeenHistoriek"]').find(taal).text();
    msgGeenSaldi = $(xml).find('Vertalingen').find('Melding[class="GeenSaldi"]').find(taal).text();
    msgAlleVeldenInvullen = $(xml).find('Vertalingen').find('Melding[class="AlleVeldenInvullen"]').find(taal).text();
    msgGeenAanvragen = $(xml).find('Vertalingen').find('Melding[class="GeenAanvragen"]').find(taal).text();
    msgGeenRedenAfkeuren = $(xml).find('Vertalingen').find('Melding[class="GeenRedenAfkeuren"]').find(taal).text();

    // Dynamische teksten wijzigen
    dynamicAantUur = $(xml).find('Vertalingen').find('DynamischeTekst[class="AantalUur"]').find(taal).text();
    dynamicDag = $(xml).find('Vertalingen').find('DynamischeTekst[class="Dag"]').find(taal).text();
    dynamicVoormiddag = $(xml).find('Vertalingen').find('DynamischeTekst[class="Voormiddag"]').find(taal).text();
    dynamicNamiddag = $(xml).find('Vertalingen').find('DynamischeTekst[class="Namiddag"]').find(taal).text();
    dynamicVanaf = $(xml).find('Vertalingen').find('DynamischeTekst[class="Vanaf"]').find(taal).text();
    dynamicTot = $(xml).find('Vertalingen').find('DynamischeTekst[class="Tot"]').find(taal).text();
    dynamicAantDagen = $(xml).find('Vertalingen').find('DynamischeTekst[class="AantDagen"]').find(taal).text();
    dynamicDteAanvraag = $(xml).find('Vertalingen').find('DynamischeTekst[class="DteAanvraag"]').find(taal).text();
    dynamicBehandelen = $(xml).find('Vertalingen').find('DynamischeTekst[class="Behandelen"]').find(taal).text();
    dynamicPrestatieCode = $(xml).find('Vertalingen').find('DynamischeTekst[class="PrestatieCode"]').find(taal).text();
    dynamicMinBezetting = $(xml).find('Vertalingen').find('DynamischeTekst[class="MinBezetting"]').find(taal).text();
    dynamicAantAanwezig = $(xml).find('Vertalingen').find('DynamischeTekst[class="AantAanwezig"]').find(taal).text();
    dynamicAantAangevraagd = $(xml).find('Vertalingen').find('DynamischeTekst[class="AantAangevraagd"]').find(taal).text();
    dynamicBtnDagenBevestigen = $(xml).find('Vertalingen').find('DynamischeTekst[class="btnDagenBevestigen"]').find(taal).text();
}