function _submit() {
    let redirectUrl = document.getElementById("redirect-url").value
    redirectUrl = redirectUrl.replace(/https\:\/\//gi, "")
    redirectUrl = redirectUrl.replace(/http\:\/\//gi, "")
    redirectUrl = redirectUrl.replace(/\:\/\//gi, "")
    let result = document.getElementById("result");
    // https://c-miftik-tk.translate.goog/new?_x_tr_sl=en&_x_tr_tl=cs&_x_tr_hl=cs

    let link = redirectUrl.split("/")[0].replace(/\./gi, "-") + ".translate.goog/"+spl(spl(redirectUrl, "/", 1),"?",0) + "?_x_tr_sl=cs&_x_tr_tl=cs&_x_tr_hl=cs&_x_tr_pto=op&" + spl(spl(redirectUrl, "/", 1),"?",1)
    window.open("http://"+link,"_blank")
}

function spl(text, s, c) {
    try {
        return text.split(s)[c]
    } catch (error) {
        return ""
    }
}