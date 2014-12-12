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
var dynamicRedenAanvrBeh = '';
var dynamicBtnDagenBevestigen = '';
function vertaalTeksten(taal) {
    var xml = $.ajax({
        url: 'xml/Vertalingen.xml',
        async: false
    }).responseText;

    // Statische teksten wijzigen
    $(xml).find('Vertaling').each(function () {
        if ($(this).attr('isButton') == 1)
            $('.' + $(this).attr('class')).parent().html($(this).find(taal).text());
        else
            $('.' + $(this).attr('class')).html($(this).find(taal).text());
    });

    // Tekst van meldingen wijzigen
    msgGeenHistoriek = $(xml).find('Melding[class="GeenHistoriek"]').find(taal).text();
    msgGeenSaldi = $(xml).find('Melding[class="GeenSaldi"]').find(taal).text();
    msgAlleVeldenInvullen = $(xml).find('Melding[class="AlleVeldenInvullen"]').find(taal).text();
    msgGeenAanvragen = $(xml).find('Melding[class="GeenAanvragen"]').find(taal).text();
    msgGeenRedenAfkeuren = $(xml).find('Melding[class="GeenRedenAfkeuren"]').find(taal).text();

    // Dynamische teksten wijzigen
    dynamicAantUur = $(xml).find('DynamischeTekst[class="AantalUur"]').find(taal).text();
    dynamicDag = $(xml).find('DynamischeTekst[class="Dag"]').find(taal).text();
    dynamicVoormiddag = $(xml).find('DynamischeTekst[class="Voormiddag"]').find(taal).text();
    dynamicNamiddag = $(xml).find('DynamischeTekst[class="Namiddag"]').find(taal).text();
    dynamicVanaf = $(xml).find('DynamischeTekst[class="Vanaf"]').find(taal).text();
    dynamicTot = $(xml).find('DynamischeTekst[class="Tot"]').find(taal).text();
    dynamicAantDagen = $(xml).find('DynamischeTekst[class="AantDagen"]').find(taal).text();
    dynamicDteAanvraag = $(xml).find('DynamischeTekst[class="DteAanvraag"]').find(taal).text();
    dynamicBehandelen = $(xml).find('DynamischeTekst[class="Behandelen"]').find(taal).text();
    dynamicPrestatieCode = $(xml).find('DynamischeTekst[class="PrestatieCode"]').find(taal).text();
    dynamicMinBezetting = $(xml).find('DynamischeTekst[class="MinBezetting"]').find(taal).text();
    dynamicAantAanwezig = $(xml).find('DynamischeTekst[class="AantAanwezig"]').find(taal).text();
    dynamicAantAangevraagd = $(xml).find('DynamischeTekst[class="AantAangevraagd"]').find(taal).text();
    dynamicRedenAanvrBeh = $(xml).find('DynamischeTekst[class="RedenAanvrBeh"]').find(taal).text();
    dynamicBtnDagenBevestigen = $(xml).find('DynamischeTekst[class="btnDagenBevestigen"]').find(taal).text();
}