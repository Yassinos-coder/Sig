// THE START OF MADNESS
function AllReload() {
    location.reload(true)
}

// Developped By Yassine Castro aka Yassinos

function LaunchAllOps() {
    calculAll()

}

function calculAll() {
    var vm = parseInt(document.getElementById('1').value)
    document.getElementById('4').innerText = vm
        // Next 
    var Cm = parseInt(document.getElementById('2').value)
    document.getElementById('5').innerText = Cm
        // Next
    rslt = vm - Cm
    document.getElementById('3').innerText = rslt
    document.getElementById('6').innerText = rslt


    // Pe 
    var Pe = parseInt(document.getElementById('7').value)
    var Ps = parseInt(document.getElementById('8').value)
    var Pi = parseInt(document.getElementById('9').value)
    rslt2 = Pe + Ps + Pi
    document.getElementById('12').innerText = rslt2
        // Next 
    var dPe = parseInt(document.getElementById('10').value)
    document.getElementById('13').innerText = dPe
        // Next
    rslt3 = rslt2 - dPe
    document.getElementById('11').innerText = rslt3
    document.getElementById('14').innerText = rslt3

    setInterval(2000)

    // Va  
    document.getElementById('Pe-rslt').innerText = rslt3
    document.getElementById('Cm-rslt').innerText = rslt
    rslt4 = rslt3 + rslt
    document.getElementById('18').innerText = rslt4
        // Next 
    var Cpet = parseInt(document.getElementById('16').value)
    document.getElementById('19').innerText = Cpet
        // Next
    rslt5 = rslt4 - Cpet
    document.getElementById('20').innerText = rslt5
    document.getElementById('17').innerText = rslt5

    setInterval(2000)

    // EBE  
    document.getElementById('Va-rslt').innerText = rslt5
    var Se = parseInt(document.getElementById('22').value)
    rslt6 = rslt5 + Se
    document.getElementById('26').innerText = rslt6
        // Next 
    var It = parseInt(document.getElementById('23').value)
    var Cp = parseInt(document.getElementById('24').value)
    rslt7 = It + Cp
    document.getElementById('27').innerText = rslt7
        // Next
    rslt8 = rslt6 - rslt7
    document.getElementById('28').innerText = rslt8
    document.getElementById('28-tb').innerText = rslt8


    setInterval(2000)
        // R E 
    if (rslt8 < 0) {
        document.getElementById('ebe-rslt-').innerText = rslt8
        document.getElementById('ebe-rslt+').innerText = "0"
        var RcTc = parseInt(document.getElementById('30').value)
        var ebepos = 0
        var Ap = parseInt(document.getElementById('31').value)
        rslt9 = ebepos + RcTc + Ap
        document.getElementById('36').innerText = rslt9
        var Dot = parseInt(document.getElementById('33').value)
        var ebeneg = rslt8
        var Ac = parseInt(document.getElementById('34').value)
        rslt10 = ebeneg + Dot + Ac
        document.getElementById('37').innerText = rslt10
        rslt11 = rslt9 - rslt10
        document.getElementById('38').innerText = rslt11
        document.getElementById('38-tb').innerText = rslt11
    } else {
        document.getElementById('ebe-rslt+').innerText = rslt8
        document.getElementById('ebe-rslt-').innerText = "0"
        var RcTc = parseInt(document.getElementById('30').value)
        var ebepos = rslt8
        var Ap = parseInt(document.getElementById('31').value)
        rslt9 = ebepos + RcTc + Ap
        document.getElementById('36').innerText = rslt9
        var Dot = parseInt(document.getElementById('33').value)
        var Ac = parseInt(document.getElementById('34').value)
        var ebeneg = 0
        rslt10 = ebeneg + Dot + Ac
        document.getElementById('37').innerText = rslt10
        rslt11 = rslt9 - rslt10
        document.getElementById('38').innerText = rslt11
        document.getElementById('38-tb').innerText = rslt11
    }

    setInterval(2000)
        // Rcai
    if (rslt11 < 0) {
        document.getElementById('re-rslt-').innerText = rslt11
        document.getElementById('re-rslt+').innerText = "0"
        var Pf = parseInt(document.getElementById('40').value)
        repos = 0
        rslt12 = repos + Pf
        document.getElementById('46').innerText = rslt12
        var Cf = parseInt(document.getElementById('44').value)
        reneg = rslt11
        rslt13 = reneg + Cf
        document.getElementById('47').innerText = rslt13
        rslt14 = rslt12 - rslt13
        document.getElementById('48').innerText = rslt14
        document.getElementById('48-tb').innerText = rslt14
    } else {
        document.getElementById('re-rslt+').innerText = rslt11
        document.getElementById('re-rslt-').innerText = "0"
        var Pf = parseInt(document.getElementById('40').value)
        repos = rslt11
        rslt12 = repos + Pf
        document.getElementById('46').innerText = rslt12
        var Cf = parseInt(document.getElementById('44').value)
        reneg = 0
        rslt13 = reneg + Cf
        document.getElementById('47').innerText = rslt13
        rslt14 = rslt12 - rslt13
        document.getElementById('48').innerText = rslt14
        document.getElementById('48-tb').innerText = rslt14
    }

    // Resu Excep 
    var resexcep = parseInt(document.getElementById('49').value)
    var chsexcep = parseInt(document.getElementById('50').value)
    rslt15 = resexcep - chsexcep
    document.getElementById('51').innerText = rslt15

    setInterval(2000)

    if (rslt14 < 0) {
        if (rslt15 < 0) {
            var rcai = 0
            var rx = 0
            document.getElementById('rcai-pos').innerText = rcai
            document.getElementById('rx-pos').innerText = rx
            rslt16 = rcai + rx
            document.getElementById('57').innerText = rslt16
                // neg part 
            var rcaineg = rslt14
            var rxneg = rslt15
            document.getElementById('rcai-neg').innerText = rcaineg
            document.getElementById('rx-neg').innerText = rxneg
            var Isb = parseInt(document.getElementById('55').value)
            rslt17 = rcaineg + rxneg + Isb
            rslt18 = rslt16 - rslt17
            document.getElementById('59-tb').innerText = rslt18
            document.getElementById('59').innerText = rslt18
            document.getElementById('58').innerText = rslt17
        } else {
            var rcai = 0
            var rx = rslt15
            document.getElementById('rcai-pos').innerText = rcai
            document.getElementById('rx-pos').innerText = rx
            rslt16 = rcai + rx
            document.getElementById('57').innerText = rslt16
                // neg part 
            var rcaineg = rslt14
            var rxneg = 0
            document.getElementById('rcai-neg').innerText = rcaineg
            document.getElementById('rx-neg').innerText = rxneg
            var Isb = parseInt(document.getElementById('55').value)
            rslt17 = rcaineg + rxneg + Isb
            rslt18 = rslt16 - rslt17
            document.getElementById('59-tb').innerText = rslt18
            document.getElementById('59').innerText = rslt18
            document.getElementById('58').innerText = rslt17
        }

    } else {
        if (rslt15 < 0) {
            var rcai = rslt14
            var rx = 0
            document.getElementById('rcai-pos').innerText = rcai
            document.getElementById('rx-pos').innerText = rx
            rslt16 = rcai + rx
            document.getElementById('57').innerText = rslt16
                // neg part 
            var rcaineg = 0
            var rxneg = rslt15
            document.getElementById('rcai-neg').innerText = rcaineg
            document.getElementById('rx-neg').innerText = rxneg
            var Isb = parseInt(document.getElementById('55').value)
            rslt17 = rcaineg + rxneg + Isb
            rslt18 = rslt16 - rslt17
            document.getElementById('59-tb').innerText = rslt18
            document.getElementById('59').innerText = rslt18
            document.getElementById('58').innerText = rslt17
        } else {
            var rcai = 0
            var rx = rslt15
            document.getElementById('rcai-pos').innerText = rcai
            document.getElementById('rx-pos').innerText = rx
            rslt16 = rcai + rx
            document.getElementById('57').innerText = rslt16
                // neg part 
            var rcaineg = rslt14
            var rxneg = 0
            document.getElementById('rcai-neg').innerText = rcaineg
            document.getElementById('rx-neg').innerText = rxneg
            var Isb = parseInt(document.getElementById('55').value)
            rslt17 = rcaineg + rxneg + Isb
            rslt18 = rslt16 - rslt17
            document.getElementById('59-tb').innerText = rslt18
            document.getElementById('59').innerText = rslt18
            document.getElementById('58').innerText = rslt17
        }
    }

    // Prod Cession 
    var pc = parseInt(document.getElementById('60').value)
    var vnc = parseInt(document.getElementById('61').value)
    rslt19 = pc - vnc
    document.getElementById('62').innerText = rslt19
}