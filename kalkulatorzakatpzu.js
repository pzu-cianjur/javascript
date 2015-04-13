<script language="JavaScript" type="text/javascript">
<!--			Zakat Calculator Script			-->


var regex = new Array;
var it;
function clean_it(it){
	regex[0] = /\./ig;
	regex[1] = /\,/ig;
	it = it.replace(regex[0],"");
	it = it.replace(regex[1],"");
	return it;
}

var num; 
var LNum; 
var x; 
var fnum; 
var snums; 
var snumx; 
var snumsr; 
var snumr;
function rubah(num){
	num = String(num);
	LNum = num.length;
	if ( LNum > 3 ) {
		fnum = parseInt(LNum/3); 
		if ( (LNum%3) == 0 ) {
			fnum--;
		}
		regex[2] = /(.+)(\d{3}$)/ig;
		for ( x=1;x<=fnum;x++ ) {
			if ( x == 1 ) {
				snums = num.replace(regex[2],"$2");
				snumx = num.replace(regex[2],"$1");
				snumsr = "." + snums;
			}else{
				snums = snumx.replace(regex[2],"$2");
				snumx = snumx.replace(regex[2],"$1");
				snumsr = "." + snums  + snumsr;
			}
		}
		snumr = snumx + snumsr;
	}else{
		snumr = num;
	}
	return snumr;
	snumr = "";
}

var b;
var toformat;
function formated(b) {
	toformat = document.form1.elements[b].value;
	toformat = clean_it(toformat);
	toformat = parseInt(toformat);
	toformat = rubah(toformat);
	document.form1.elements[b].value = toformat;
}

var gpb;
var lpb;
var hpb;
var ppt_g;
var ppt_l;
var ppt_h;
var ppt;
var hbs;
var hes;
var nishab_p;
var wp;
var bppt;
var bppb;
var gptdzp;
var kpb;
var kpt;
var sp;
var nm;
var bmpt;
var bmpb;
var tz;
function hitungZakat(gpb,lpb,hpb,hbs,hes,kpb) {

	// Cari Penghasilan pertahun
	if (document.form1.elements[gpb].value) {
		ppt_g = document.form1.elements[gpb].value;
		ppt_g = clean_it(ppt_g);
		ppt_g = parseInt(ppt_g);
	}
	
	if (document.form1.elements[lpb].value) {
		ppt_l = document.form1.elements[lpb].value;
		ppt_l = clean_it(ppt_l);
		ppt_l = parseInt(ppt_l);
	}
	
	if (document.form1.elements[hpb].value) {
		ppt_h = document.form1.elements[hpb].value;
		ppt_h = clean_it(ppt_h);
		ppt_h = parseInt(ppt_h);
	}
	
	ppt = ((ppt_g+ppt_l)-ppt_h)*12;
	
	// Zakat Profesi
	hbs = document.form1.elements[hbs].value;
	hbs = clean_it(hbs);
	hbs = parseInt(hbs);
	nishab_p = hbs*552*12;
	
	if ( nishab_p < ppt ) { 
		wp = 'Ya';
		bppt = Math.round(ppt*0.025);
		bppb = Math.round(bppt/12);
	}else{
		wp = 'Tidak';
		bppt = 0;
		bppb = 0;
	}
	
	//Zakat Maal
	gptdzp = ppt-bppt;
	
	kpb = document.form1.elements[kpb].value;
	kpb = clean_it(kpb);
	kpb = parseInt(kpb);
	
	kpt = kpb*12;
	
	sp = gptdzp-kpt;
	
	hes = document.form1.elements[hes].value;
	hes = clean_it(hes);
	hes = parseInt(hes);
	nm = hes*85;
	
	if ( nm < sp ) {
		wm = 'Ya';
		bmpt = Math.round(sp*0.025);
		bmpb = Math.round(bmpt/12);
	}else{
		wm = 'Tidak';
		bmpt = 0;
		bmpb = 0;
	}
		
	tz = bmpb+bppb;
	
	// Print It
	ppt = rubah(ppt);
	document.form1.ppt.value = ppt;
	document.form1.ppt_hidden.value = ppt;
	
	nishab_p = rubah(nishab_p);
	document.form1.np.value = nishab_p;
	
	document.form1.wp.value = wp;
	
	bppt = rubah(bppt);
	document.form1.bppt.value = bppt;
	bppb = rubah(bppb);
	document.form1.bppb.value = bppb;
	
	gptdzp = rubah(gptdzp);
	document.form1.gptdzp.value = gptdzp;
	
	kpt = rubah(kpt);
	document.form1.kpt.value = kpt;
	
	sp = rubah(sp);
	document.form1.sp.value = sp;
	
	nm = rubah(nm);
	document.form1.nm.value = nm;
	
	document.form1.wm.value = wm;
	
	bmpt = rubah(bmpt);
	document.form1.bmpt.value = bmpt;
	
	bmpb = rubah(bmpb);
	document.form1.bmpb.value = bmpb;
	
	tz = rubah(tz);
	document.form1.tz.value = tz;
	
	
}

</script>

<!--				End of Script					-->
