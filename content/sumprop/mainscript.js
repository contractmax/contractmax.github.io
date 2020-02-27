


	var mapNumbers = {
    0 : [2, 1, "ноль"],
    1 : [0, 2, "один", "одна"],
    2 : [1, 2, "два", "две"],
    3 : [1, 1, "три"],
    4 : [1, 1, "четыре"],
    5 : [2, 1, "пять"],
    6 : [2, 1, "шесть"],
    7 : [2, 1, "семь"],
    8 : [2, 1, "восемь"],
    9 : [2, 1, "девять"],
    10 : [2, 1, "десять"],
    11 : [2, 1, "одиннадцать"],
    12 : [2, 1, "двенадцать"],
    13 : [2, 1, "тринадцать"],
    14 : [2, 1, "четырнадцать"],
    15 : [2, 1, "пятнадцать"],
    16 : [2, 1, "шестнадцать"],
    17 : [2, 1, "семнадцать"],
    18 : [2, 1, "восемнадцать"],
    19 : [2, 1, "девятнадцать"],
    20 : [2, 1, "двадцать"],
    30 : [2, 1, "тридцать"],
    40 : [2, 1, "сорок"],
    50 : [2, 1, "пятьдесят"],
    60 : [2, 1, "шестьдесят"],
    70 : [2, 1, "семьдесят"],
    80 : [2, 1, "восемьдесят"],
    90 : [2, 1, "девяносто"],
    100 : [2, 1, "сто"],
    200 : [2, 1, "двести"],
    300 : [2, 1, "триста"],
    400 : [2, 1, "четыреста"],
    500 : [2, 1, "пятьсот"],
    600 : [2, 1, "шестьсот"],
    700 : [2, 1, "семьсот"],
    800 : [2, 1, "восемьсот"],
    900 : [2, 1, "девятьсот"]
};

var mapOrders = [
    { _Gender : true, _arrStates : ["рубль", "рубля", "рублей"] },
    { _Gender : false, _arrStates : ["тысяча", "тысячи", "тысяч"] },
    { _Gender : true, _arrStates : ["миллион", "миллиона", "миллионов"] },
    { _Gender : true, _arrStates : ["миллиард", "миллиарда", "миллиардов"] },
    { _Gender : true, _arrStates : ["триллион", "триллиона", "триллионов"] }
];

var objKop = { _Gender : false, _arrStates : ["копейка", "копейки", "копеек"] };

function Value(dVal, bGender) {
    var xVal = mapNumbers[dVal];
    if (xVal[1] == 1) {
        return xVal[2];
    } else {
        return xVal[2 + (bGender ? 0 : 1)];
    }
}

function From0To999(fValue, oObjDesc, fnAddNum, fnAddDesc)
{
    var nCurrState = 2;
    if (Math.floor(fValue/100) > 0) {
        var fCurr = Math.floor(fValue/100)*100;
        fnAddNum(Value(fCurr, oObjDesc._Gender));
        nCurrState = mapNumbers[fCurr][0];
        fValue -= fCurr;
    }

    if (fValue < 20) {
        if (Math.floor(fValue) > 0) {
            fnAddNum(Value(fValue, oObjDesc._Gender));
            nCurrState = mapNumbers[fValue][0];
        }
    } else {
        var fCurr = Math.floor(fValue/10)*10;
        fnAddNum(Value(fCurr, oObjDesc._Gender));
        nCurrState = mapNumbers[fCurr][0];
        fValue -= fCurr;

        if (Math.floor(fValue) > 0) {
            fnAddNum(Value(fValue, oObjDesc._Gender));
            nCurrState = mapNumbers[fValue][0];
        }
    }

    fnAddDesc(oObjDesc._arrStates[nCurrState]);
}

function FloatToSamplesInWordsRus(fAmount)
{
    var fInt = Math.floor(fAmount + 0.005);
    var fDec = Math.floor(((fAmount - fInt) * 100) + 0.5);

    var arrRet = [];
    var iOrder = 0;
    var arrThousands = [];
    for (; fInt > 0.9999; fInt/=1000) {
        arrThousands.push(Math.floor(fInt % 1000));
    }
    if (arrThousands.length == 0) {
        arrThousands.push(0);
    }

    function PushToRes(strVal) {
        arrRet.push(strVal);
    }

    for (var iSouth = arrThousands.length-1; iSouth >= 0; --iSouth) {
        if (arrThousands[iSouth] == 0) {
            continue;
        }
        From0To999(arrThousands[iSouth], mapOrders[iSouth], PushToRes, PushToRes);
    }

    if (arrThousands[0] == 0) {
        //  Handle zero amount
        if (arrThousands.length == 1) {
            PushToRes(Value(0, mapOrders[0]._Gender));
        }

        var nCurrState = 2;
        PushToRes(mapOrders[0]._arrStates[nCurrState]);
    }

    if (arrRet.length > 0) {
        // Capitalize first letter
        arrRet[0] = arrRet[0].match(/^(.)/)[1].toLocaleUpperCase() + arrRet[0].match(/^.(.*)$/)[1];
    }

    arrRet.push((fDec < 10) ? ("0" + fDec) : ("" + fDec));
    From0To999(fDec, objKop, function() {}, PushToRes);

    return arrRet.join(" ");
}

//////////////////////////////////////////////////////////////////////////////


	
function rubnew(fAmount)
{
    var fInt = Math.floor(fAmount + 0.005);
    var fDec = Math.floor(((fAmount - fInt) * 100) + 0.5);

    var arrRet = [];
    var iOrder = 0;
    var arrThousands = [];
    for (; fInt > 0.9999; fInt/=1000) {
        arrThousands.push(Math.floor(fInt % 1000));
    }
    if (arrThousands.length == 0) {
        arrThousands.push(0);
    }

    function PushToRes(strVal) {
        arrRet.push(strVal);
    }

    for (var iSouth = arrThousands.length-1; iSouth >= 0; --iSouth) {
        if (arrThousands[iSouth] == 0) {
            continue;
        }
        From0To999(arrThousands[iSouth], mapOrders[iSouth], PushToRes, PushToRes);
    }

    if (arrThousands[0] == 0) {
        //  Handle zero amount
        if (arrThousands.length == 1) {
            PushToRes(Value(0, mapOrders[0]._Gender));
        }

        var nCurrState = 2;
        PushToRes(mapOrders[0]._arrStates[nCurrState]);
    }

    if (arrRet.length > 0) {
        // Capitalize first letter
        arrRet[0] = arrRet[0].match(/^(.)/)[1].toLocaleUpperCase() + arrRet[0].match(/^.(.*)$/)[1];
    }

    arrRet.push((fDec < 10) ? ("0" + fDec) : ("" + fDec));
    
	From0To999(fDec, objKop, function() {}, PushToRes);

    arrRet.reverse();
		
	return arrRet[2];
		
	
}

	

	
	// новая функция/////////////////////////////////
	function sumprop(chislo)
	{
	
	if ($('#sel1').val() == "chisloprop") {
	var sumpropmas = [];
	sumpropmas [0] = parseFloat(chislo).toFixed(2).split('.').join(',').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');	
	sumpropmas [1] = rubnew(parseFloat(chislo));
	sumpropmas [2] = "("+ FloatToSamplesInWordsRus(parseFloat(chislo)) + ")";
	return sumpropmas.join(" ");
	}
	
	if ($('#sel1').val() == "notnds") {
	var gsmas = [];
	gsmas [0] = parseFloat(chislo).toFixed(2).split('.').join(',').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');	
	gsmas [1] = rubnew(parseFloat(chislo));
	gsmas [2] = "("+ FloatToSamplesInWordsRus(parseFloat(chislo)) + "), НДС не облагается";
	return gsmas.join(" ");
	}357.50
	
	
	if ($('#sel1').val() == "10") {
	 var sumnds = (chislo / "110")*"10" ;
	 var gsmas = [];
	 gsmas [0] = parseFloat(chislo).toFixed(2).split('.').join(',').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');	
	 gsmas [1] = rubnew(parseFloat(chislo));
	 gsmas [2] = "("+ FloatToSamplesInWordsRus(parseFloat(chislo)) + "), в том числе НДС 10%";
	 gsmas [3] = parseFloat(sumnds).toFixed(2).split('.').join(',').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	 gsmas [4] = rubnew(parseFloat(sumnds));
	 gsmas [5] = "("+ FloatToSamplesInWordsRus(parseFloat(sumnds)) + ")";
     return gsmas.join(" ");	 
	}
	
		
	
	
	if ($('#sel1').val() == "18") {
	 var sumnds = (chislo / "118")*"18" ;
	 var gsmas = [];
	 gsmas [0] = parseFloat(chislo).toFixed(2).split('.').join(',').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');	
	 gsmas [1] = rubnew(parseFloat(chislo));
	 gsmas [2] = "("+ FloatToSamplesInWordsRus(parseFloat(chislo)) + "), в том числе НДС 18%";
	 gsmas [3] = parseFloat(sumnds).toFixed(2).split('.').join(',').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	 gsmas [4] = rubnew(parseFloat(sumnds));
	 gsmas [5] = "("+ FloatToSamplesInWordsRus(parseFloat(sumnds)) + ")";
     return gsmas.join(" ");	 
	}
	
	if ($('#sel1').val() == "20") {
	 var sumnds = (chislo / "120")*"20" ;
	 var gsmas = [];
	 gsmas [0] = parseFloat(chislo).toFixed(2).split('.').join(',').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');	
	 gsmas [1] = rubnew(parseFloat(chislo));
	 gsmas [2] = "("+ FloatToSamplesInWordsRus(parseFloat(chislo)) + "), в том числе НДС 20%";
	 gsmas [3] = parseFloat(sumnds).toFixed(2).split('.').join(',').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	 gsmas [4] = rubnew(parseFloat(sumnds));
	 gsmas [5] = "("+ FloatToSamplesInWordsRus(parseFloat(sumnds)) + ")";
     return gsmas.join(" ");	 
	}
		
	}
	
	
	function procent(chislo, procent)
	{
	
	sumprocent = chislo * (procent / '100').toFixed(2);
		
	var sumpropmas = [];
	sumpropmas [0] = parseFloat(sumprocent).toFixed(2).split('.').join(',').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');	
	sumpropmas [1] = rubnew(parseFloat(sumprocent));
	sumpropmas [2] = "("+ FloatToSamplesInWordsRus(parseFloat(sumprocent)) + ")";
	return sumpropmas.join(" ");
	}
		
		
		
	function fixsumprop(chislo)
	{
		
	chislo = chislo.split(',').join('.');
	chislo = parseFloat(chislo).toFixed(2);	
		
	var sumpropmas = [];
	sumpropmas [0] = parseFloat(chislo).toFixed(2).split('.').join(',').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');	
	sumpropmas [1] = rubnew(parseFloat(chislo));
	sumpropmas [2] = "("+ FloatToSamplesInWordsRus(parseFloat(chislo)) + ")";
	return sumpropmas.join(" ");
	}
		

	
	function globalfun ()
	{
		
		
	//замена точек и двойных запятых
	$('#in1').val($('#in1').val().split('.').join(','));
    $('#in1').val($('#in1').val().split(',,').join(','));
		
    $('#sum1').val($('#sum1').val().split('.').join(','));
    $('#sum1').val($('#sum1').val().split(',,').join(','));
		
	$('#pro1').val($('#pro1').val().split('.').join(','));
    $('#pro1').val($('#pro1').val().split(',,').join(','));	
		
	$('#pro2').val($('#pro2').val().split('.').join(','));
    $('#pro2').val($('#pro2').val().split(',,').join(','));		
		
	$('#pro3').val($('#pro3').val().split('.').join(','));
    $('#pro3').val($('#pro3').val().split(',,').join(','));	


	
	
	//замена пробелов 123   56,36
	$('#in1').val($('#in1').val().split(' ').join(''));
	$('#in1').val($('#in1').val().split('  ').join(''));
	$('#in1').val($('#in1').val().split('   ').join(''));
	$('#in1').val($('#in1').val().split('    ').join(''));

	$('#sum1').val($('#sum1').val().split(' ').join(''));
	$('#sum1').val($('#sum1').val().split('  ').join(''));
	$('#sum1').val($('#sum1').val().split('   ').join(''));
	$('#sum1').val($('#sum1').val().split('    ').join(''));
	
	$('#pro1').val($('#pro1').val().split(' ').join(''));
	$('#pro1').val($('#pro1').val().split('  ').join(''));
	$('#pro1').val($('#pro1').val().split('   ').join(''));
	$('#pro1').val($('#pro1').val().split('    ').join(''));
	
	$('#pro2').val($('#pro2').val().split(' ').join(''));
	$('#pro2').val($('#pro2').val().split('  ').join(''));
	$('#pro2').val($('#pro2').val().split('   ').join(''));
	$('#pro2').val($('#pro2').val().split('    ').join(''));
	
    $('#pro3').val($('#pro3').val().split(' ').join(''));
	$('#pro3').val($('#pro3').val().split('  ').join(''));
	$('#pro3').val($('#pro3').val().split('   ').join(''));
	$('#pro3').val($('#pro3').val().split('    ').join(''));
		

	
	
	
	summanew = $('#in1').val().split(',').join('.');
	summanew = parseFloat(summanew).toFixed(2);
		
	proc1 = $('#pro1').val().split(',').join('.');
	proc1 = parseFloat(proc1).toFixed(2);
	
	proc2 = $('#pro2').val().split(',').join('.');
	proc2 = parseFloat(proc2).toFixed(2);
	
	proc3 = $('#pro3').val().split(',').join('.');
	proc3 = parseFloat(proc3).toFixed(2);
	
	
	
	//сумма прописью
	$('#res3').val( sumprop(summanew));
	
	
	
	
	//проценты
	$('#res4').val(procent(summanew, proc1));
	$('#res5').val(procent(summanew, proc2));
	$('#res6').val(procent(summanew, proc3));
	
	
	
	fixsum1 = $('#sum1').val().split(',').join('.');
	fixsum1 = parseFloat(fixsum1).toFixed(2);
	
	$('#res7').val(fixsumprop(fixsum1));	
		
		
		
		
		
		
		
	// разделям разряды
	$('#in1').val($('#in1').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	$('#pro1').val($('#pro1').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));	
	$('#pro2').val($('#pro2').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));	
	$('#pro3').val($('#pro3').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));	
	$('#sum1').val($('#sum1').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));	
		
		
	}




	
	
	
	
	
	
	
	
	
	



jQuery('Document').ready(function(){
	
	
	
	
	
	

	
	
	
	
	
	
	// начальное значение из стора
	$('#in1').val('0,00');
	$('#pro1').val(localStorage.getItem('pro1'));
	$('#pro2').val(localStorage.getItem('pro2'));
	$('#pro3').val(localStorage.getItem('pro3'));
	$('#sum1').val(localStorage.getItem('sum1'));
	
	if ($('#pro1').val() == "") {
	$('#pro1').val('3');
	}
	
	if ($('#pro2').val() == "") {
	$('#pro2').val('5');
	}
	
	if ($('#pro3').val() == "") {
	$('#pro3').val('10');
	}
	
	if ($('#sum1').val() == "") {
	$('#sum1').val('1000');
	}
	
	
	
	
    globalfun ();	
	
    //при изменении class="inp"
	$('input.inp').on('change keyup input click', globalfun  );
    $('#sel1').on('change keyup input click', globalfun  );
	
	
	// Запись значений в стор
	
	$('input.inp').on('input click', function(){
    
	localStorage.setItem("pro1", $('#pro1').val());
	console.log(localStorage.getItem("pro1"));
		
	localStorage.setItem("pro2", $('#pro2').val());
	console.log(localStorage.getItem("pro2"));	
	
    localStorage.setItem("pro3", $('#pro3').val());
	console.log(localStorage.getItem("pro3"));		
	
	localStorage.setItem("sum1", $('#sum1').val());
	console.log(localStorage.getItem("sum1"));	
		
		
});	
	
	
	
	
	
	
	
//выделить при клике	
$('input.inp').click(function(){
    $(this).select();
});	
	
$('textarea.textsum').click(function(){
    $(this).select();
});		
	
	


}); 	
	


	
	