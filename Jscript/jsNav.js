$(document).ready(function () {
    jQuery.each($('div.show'), function () {
        Initialize(this.id, (this.children)[1].id);
    });
});

function Initialize(divID, spanID) {
    var isExpanded = readCookie(divID);

    if (isExpanded === 'true') {
        isExpanded = true;
    } else if (isExpanded === 'false') {
        $('#' + divID).next('.toggle').hide();
        isExpanded = false;
    } else if (isExpanded === null) {
        $('#' + divID).next('.toggle').hide();
        createCookie(divID, false, 1);
    }

    if (isExpanded) {
        $('#' + spanID).css("background-image", "url(../Images/Navigation/minusSmall.png)");
    } else {
        $('#' + spanID).css("background-image", "url(../Images/Navigation/plusSmall.png)");
    }

    // TODO: Optimize code.
    $('#' + divID + '.show').click(function () {
        isExpanded = !isExpanded;
        $(this).next('.toggle').toggle('fast');
        createCookie(this.id, isExpanded, 1);
        if (isExpanded) {
            $('#' + spanID).css("background-image", "url(../Images/Navigation/minusSmall.png)");
        }
        else {
            $('#' + spanID).css("background-image", "url(../Images/Navigation/plusSmall.png)");
        }
        return false;
    });
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
};

function createCookie(name, value, days) {
    if (days) {
        var date = new Date;
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1E3);
        var expires = "; expires=" + date.toGMTString()
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/"
}

function eraseCookie(name) {
    createCookie(name, "", -1)
};