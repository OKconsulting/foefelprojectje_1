var btnConfirm = 'Bevestigen'

function vertaalTekst(taal) {
    if (taal == 'nl')
        vertaalNl();
    else if (taal == 'fr')
        vertaalFr();
    else if (taal == 'en')
        vertaalEn();

    $('.customDatepicker').datepicker("option", "dayNamesMin", dagenKortHuidig);
    $('.customDatepicker').datepicker("option", "dayNames", dagenHuidig);
    $('.customDatepicker').datepicker("option", "monthNames", maandenHuidig);
    //setDteStyle('.customDatepicker');
}

function vertaalNl() {
    dagenKortHuidig = dagenKortNl;
    dagenHuidig = dagenNl;
    maandenHuidig = maandenNl;

    $.each($('.lblMenuHome'), function (key, label) { label.innerHTML = 'Verlofsaldo'; });
    $.each($('.lblMenuVerlof'), function (key, label) { label.innerHTML = 'Verlof aanvragen'; });
    $.each($('.lblMenuHistoriek'), function (key, label) { label.innerHTML = 'Historiek'; });
    $.each($('.lblMenuInst'), function (key, label) { label.innerHTML = 'Taalkeuze'; });
    $.each($('.lblMenuLogout'), function (key, label) { label.innerHTML = 'Uitloggen'; });

    $('#txaReden')[0].innerHTML = 'Reden van afwezigheid';
    $('#lblDatVan')[0].innerHTML = 'Datum van';
    $('#lblDatTot')[0].innerHTML = 'Datum tot';
    $('#btnDetailDagen')[0].innerHTML = 'Details dagen';
    btnConfirm = 'Bevestigen';

    $('#tblPCodes tbody tr:nth-child(1) th')[0].innerHTML = 'Verlofrecht';
    $('#tblPCodes tbody tr:nth-child(2) th')[0].innerHTML = 'Gebruikt';
    $('#tblPCodes tbody tr:nth-child(3) th')[0].innerHTML = 'Aangevraagd';
    $('#tblPCodes tbody tr:nth-child(4) th')[0].innerHTML = 'Beschikbaar';
    $('#tblPCodes tbody tr:nth-child(5) th')[0].innerHTML = 'Beschikbare uren';
    $('#tblPCodes tbody tr:nth-child(6) th')[0].innerHTML = 'Geldig tot';

    $('#tblHist tbody tr:nth-child(1) th')[0].innerHTML = 'Van';
    $('#tblHist tbody tr:nth-child(2) th')[0].innerHTML = 'Tot en met';
    $('#tblHist tbody tr:nth-child(3) th')[0].innerHTML = 'Aantal dagen';
    $('#tblHist tbody tr:nth-child(4) th')[0].innerHTML = 'Aangevraagd op';
    $('#tblHist tbody tr:nth-child(5) th')[0].innerHTML = 'Status';
    $('#tblHist tbody tr:nth-child(6) th')[0].innerHTML = 'Behandeld door';
}

function vertaalFr() {
    dagenKortHuidig = dagenKortFr;
    dagenHuidig = dagenFr;
    maandenHuidig = maandenFr;

    $.each($('.lblMenuHome'), function (key, label) { label.innerHTML = 'Résumé crédits'; });
    $.each($('.lblMenuVerlof'), function (key, label) { label.innerHTML = 'Demander congé'; });
    $.each($('.lblMenuHistoriek'), function (key, label) { label.innerHTML = 'Histoire'; });
    $.each($('.lblMenuInst'), function (key, label) { label.innerHTML = 'Langue'; });
    $.each($('.lblMenuLogout'), function (key, label) { label.innerHTML = 'Déconnexion'; });

    $('#txaReden')[0].innerHTML = 'Raison Absence';
    $('#lblDatVan')[0].innerHTML = 'De';
    $('#lblDatTot')[0].innerHTML = "Jusqu'au";
    $('#btnDetailDagen')[0].innerHTML = 'Détails du jours';
    btnConfirm = 'Confirmer';

    $('#tblPCodes tbody tr:nth-child(1) th')[0].innerHTML = 'Nombre de jours';
    $('#tblPCodes tbody tr:nth-child(2) th')[0].innerHTML = 'Utilisé';
    $('#tblPCodes tbody tr:nth-child(3) th')[0].innerHTML = 'Demandé';
    $('#tblPCodes tbody tr:nth-child(4) th')[0].innerHTML = 'Disponible';
    $('#tblPCodes tbody tr:nth-child(5) th')[0].innerHTML = 'Heures disponibles';
    $('#tblPCodes tbody tr:nth-child(6) th')[0].innerHTML = "Valable jusqu'à";

    $('#tblHist tbody tr:nth-child(1) th')[0].innerHTML = 'De';
    $('#tblHist tbody tr:nth-child(2) th')[0].innerHTML = "Jusqu'au";
    $('#tblHist tbody tr:nth-child(3) th')[0].innerHTML = 'Nombre de jours';
    $('#tblHist tbody tr:nth-child(4) th')[0].innerHTML = 'Demandé le';
    $('#tblHist tbody tr:nth-child(5) th')[0].innerHTML = 'Statut';
    $('#tblHist tbody tr:nth-child(6) th')[0].innerHTML = 'Traitée par';
}

function vertaalEn() {
    dagenKortHuidig = dagenKortEn;
    dagenHuidig = dagenEn;
    maandenHuidig = maandenEn;

    $.each($('.lblMenuHome'), function (key, label) { label.innerHTML = 'Leave balance'; });
    $.each($('.lblMenuVerlof'), function (key, label) { label.innerHTML = 'Leave requests'; });
    $.each($('.lblMenuHistoriek'), function (key, label) { label.innerHTML = 'History'; });
    $.each($('.lblMenuInst'), function (key, label) { label.innerHTML = 'Language'; });
    $.each($('.lblMenuLogout'), function (key, label) { label.innerHTML = 'Logout'; });

    $('#txaReden')[0].innerHTML = 'Reason for absence';
    $('#lblDatVan')[0].innerHTML = 'From';
    $('#lblDatTot')[0].innerHTML = 'Up to';
    $('#btnDetailDagen')[0].innerHTML = 'Day details';
    btnConfirm = 'Confirm';

    $('#tblPCodes tbody tr:nth-child(1) th')[0].innerHTML = 'Number of days';
    $('#tblPCodes tbody tr:nth-child(2) th')[0].innerHTML = 'Used';
    $('#tblPCodes tbody tr:nth-child(3) th')[0].innerHTML = 'Requested';
    $('#tblPCodes tbody tr:nth-child(4) th')[0].innerHTML = 'Available';
    $('#tblPCodes tbody tr:nth-child(5) th')[0].innerHTML = 'Hours available';
    $('#tblPCodes tbody tr:nth-child(6) th')[0].innerHTML = 'Valid until';

    $('#tblHist tbody tr:nth-child(1) th')[0].innerHTML = 'From';
    $('#tblHist tbody tr:nth-child(2) th')[0].innerHTML = "Up to and including";
    $('#tblHist tbody tr:nth-child(3) th')[0].innerHTML = 'Number of days';
    $('#tblHist tbody tr:nth-child(4) th')[0].innerHTML = 'Requested on';
    $('#tblHist tbody tr:nth-child(5) th')[0].innerHTML = 'Status';
    $('#tblHist tbody tr:nth-child(6) th')[0].innerHTML = 'Treated by';
}