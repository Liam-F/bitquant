// Copyright (c) 2014-2016, New Systems Technology Ltd.
// Copyright (c) 2014-2016, Bitquant Research Laboratories (Asia) Ltd.
// Licensed under the Simplified BSD License

"use strict";

if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

var contract_template = (function () {/*
{{header_text}}

This FACILITY AGREEMENT is dated {{initial_date_string}}

BETWEEN

{{parties_formatted}}

Agreement date: {{agreement_date_string}}

Negotiated and completed at: {{agreement_location}}

For the amount of: {{currency}} {{initial_amount_string}} ({{initial_amount_words}})

Security: {{security}}

Surety: {{surety}}

BACKGROUND

The Lender has agreed to provide the Borrower with an unsecured term
loan facility according to the terms specified in Schedule A.

AGREED TERMS

1. Governing law and jurisdiction
------------------------------
1.1 This Agreement and any dispute or claim arising out of or in connection with it or its subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of Hong Kong.  
1.2 Each party irrevocably agrees that, subject as provided below, the courts of Hong Kong shall have non-exclusive jurisdiction over any dispute or claim that arises out of, or in connection with this Agreement or its subject matter or formation (including non-contractual disputes or claims). Nothing in this clause shall limit the right of the Lender to take proceedings against the Borrower in any other court of competent jurisdiction, nor shall the taking of proceedings in any one or more jurisdictions preclude the taking of proceedings in any other jurisdictions, whether concurrently or not, to the extent permitted by the law of such other jurisdiction.
This Agreement has been entered into on the date stated at the beginning of it.

2. Definitions
-----------
2.1 The following definitions apply in this Agreement:  
  * Business Day: a day other than a Saturday, Sunday or public holiday when banks in Hong Kong are open for business.  
  * Event of Default: any event or circumstance listed in clause 11.  
  * Facility: the term loan facility made available under this Agreement.  
  * HK$: the lawful currency of Hong Kong.  
  * Hong Kong: the Hong Kong Special Administration Region of the People’s Republic of China.  
  * Loan: the principal amount of the loan made or to be made by the Lender to the Borrower under this Agreement or (as the context requires) the principal amount outstanding for the time being of that loan.  
  * Product: the watermelon compression system  
  * XBT Exchange Rate:  the conversion rate between HKD and XBT as quoted by ANXBTC or Bitcashout

3. Interpretation
--------------
3.1 In this Agreement:  
3.1.1 unless the context otherwise requires, words in the singular shall include the plural and in the plural shall include the singular;  
3.1.2 unless the context otherwise requires, a reference to one gender shall include a reference to the other genders;  
3.1.3 a reference to a party shall include that party's successors, permitted assigns and permitted transferees;  
3.1.4 a reference to a statute or statutory provision is a reference to it as amended, extended or re-enacted from time to time;  
3.1.5 a reference to writing  or written includes mail, fax and e-mail;  
3.1.6 unless the context othoerwise requires, a reference to a clause or Schedule is to a clause of, or Schedule to, this Agreement; and  
3.1.7 any words following the terms including, include, in particular, for example  or any similar expression shall be construed as illustrative and shall not limit the sense of the words, description, definition, phrase or term preceding those terms.  
3.2 The Schedules are written in the javascript, and shall form part of this Agreement and shall have effect as if set out in full in the body of this Agreement. Any reference to this Agreement includes the Schedules.  
3.3 In case of any inconsistency between the body of the Agreement and the Schedules, the body of the Agreement shall prevail, in which case the parties may amend the Schedules in good faith to reflect the body of the Agreement. 

4. Facility
--------
4.1 The Lender grants to the Borrower an unsecured Facility in accordance with Schedule A, subject to conditions of this Agreement.

5. Purpose
-------
5.1 The Borrower shall use all money borrowed under this Agreement for the sole purpose of expanding its business.  
5.2 The Lender is not obliged to monitor or verify how any amount advanced under this Agreement is used.

6. Commencement
------------
6.1 This Agreement shall be deemed to have commenced on the date of this Agreement.

7. Interest
--------
7.1 Interest shall accrue and be payable in accordance with Schedule B of this Agreement.  
7.2 If the Borrower fails to make any payment due under this Agreement on the due date for payment, interest shall accrue on the unpaid amount in accordance with Schedule B.  

8. Costs
-----
8.1 The Lender shall bear all costs and expenses (together with any value added tax on them) that the Lender incurs in connection with the negotiation and preservation and enforcement of the Loan and/or this Agreement.  
8.2 The Borrower shall pay any stamp, documentary and other similar duties and taxes (if any) to which this Agreement may be subject, or give rise and shall indemnify the Lender against any losses or liabilities that it may incur as a result of any delay or omission by the Borrower in paying any such duties or taxes.

9. Repayment
---------
9.1 The Borrower shall repay the Loan as specified in the attached Schedule B.  
9.2 All payments made by the Borrower under this Agreement shall be made in full, without set-off, counterclaim or condition, and free and clear of, and without any deduction or withholding.

10. Representations, Warranties and Undertakings
--------------------------------------------
10.1 The Borrower represents, warrants and undertakes to the Lender on the date of this Agreement:  
(a) is a duly incorporated limited liability company validly existing under the laws of its jurisdiction of incorporation;  
(b) has the power to enter into, deliver and perform, and has taken all necessary action to authorise its entry into, delivery and performance of, this Agreement; and  
(c) has obtained all required authorisations to enable it to enter into, exercise its rights and comply with its obligations in this Agreement.  
10.2 The entry into and performance by it of, and the transactions contemplated by, this Agreement, do not and will not contravene or conflict with:
(a) its constitutional documents;  
(b) any agreement or instrument binding on it or its assets or constitute a default or termination event (however described) under any such agreement or instrument; or  
(c) any law or regulation or judicial or official order, applicable to it.  
10.3 The information, in written or electronic format, supplied by, or on its behalf, to the Lender in connection with this Agreement was, at the time it was/will be supplied or at the date it was/will be stated to be given (as the case may be):  
(a) if it was factual information, complete, true and accurate in all material respects;  
(b) if it was a financial projection or forecast, prepared on the basis of recent historical information and on the basis of reasonable assumptions and was fair and made on reasonable grounds; and  
(c) if it was an opinion or intention, made after careful consideration and was fair and made on reasonable grounds; and  
(d) not misleading in any material respect, nor rendered misleading by a failure to disclose other information.

11. Events of Default
-----------------
11.1 Each of the events or circumstances set out in this clause is an Event of Default.  
(i) The Borrower fails to pay any sum payable by it under this Agreement.  
(ii) The Borrower fails (other than by failing to pay), to comply with any provision of this Agreement and (if the Lender considers, acting reasonably, that the default is capable of remedy), such default is not remedied within 7 Business Days of the earlier of:  
(a) the Lender notifying the Borrower of the default and the remedy required;  
(b) the Borrower becoming aware of the default.  
(iii) Any representation, warranty or statement made, repeated or deemed made by the Borrower in, or pursuant to, this Agreement is (or proves to have been) incomplete, untrue, incorrect or misleading when made or deemed made.  
(iv) The Borrower suspends or ceases to carry on (or threatens to suspend or cease to carry on) all or a substantial part of its business.  
(v) The passing of a resolution for the winding up of the Borrower; or the appointment of a receiver, administrator or administrative receiver over the whole or any part of the assets of the Borrower or the making of any arrangement with the creditors of the Borrower for the affairs, business and property of the Borrower to be managed by a supervisor.

12. Amendments, Waivers and Consents and Remedies
---------------------------------------------
12.1 No amendment of this Agreement shall be effective unless it is in writing and signed by, or on behalf of, each party to it (or its authorised representative).  
12.2 A waiver of any right or remedy under this Agreement or by law, or any consent given under this Agreement, is only effective if given in writing by the waiving or consenting party and shall not be deemed a waiver of any other breach or default. It only applies in the circumstances for which it is given and shall not prevent the party giving it from subsequently relying on the relevant provision.  
12.3 A failure or delay by a party to exercise any right or remedy provided under this Agreement or by law shall not constitute a waiver of that or any other right or remedy, prevent or restrict any further exercise of that or any other right or remedy or constitute an election to affirm this Agreement. No election to affirm this Agreement by the Lender shall be effective unless it is in writing. 
12.4 The rights and remedies provided under this Agreement are cumulative and are in addition to, and not exclusive of, any rights and remedies provided by law..  

13. Assignment and transfer
-----------------------
13.1 The Lender may assign any of its rights under this Agreement or transfer all its rights or obligations by novation.  
13.2 The Borrower may not assign any of its rights or transfer any of its rights or obligations under this Agreement.  

14. Counterparts
------------
14.1 This Agreement may be executed in any number of counterparts, each of which when executed shall constitute a duplicate original, but all the counterparts shall together constitute one agreement.  
14.2 No counterpart shall be effective until each party has executed at least one counterpart.  

15. Severance
---------
15.1 If any provision (or part of a provision) of this Agreement is or becomes invalid, illegal or unenforceable, it shall be deemed modified to the minimum extent necessary to make it valid, legal and enforceable. If such modification is not possible, the relevant provision (or part of a provision) shall be deemed deleted. Any modification to or deletion of a provision (or part of a provision) under this clause shall not affect the legality, validity and enforceability of the rest of this Agreement.

16. Notices
-------
16.1 Any notice or other communication given to a party under or in connection with this Agreement shall be:  
(a) in writing;   
(b) delivered by hand, by pre-paid first-class post or other next working day delivery service or sent by fax; and  
(c) sent to:  
{{contact_formatted}} or to any other address or fax number as is notified in writing by one
party to the other from time to time.  
16.2 Any notice or other communication that the Lender gives to the Borrower under or in connection with, this Agreement shall be deemed to have been received:  
(a) if delivered by hand, at the time it is left at the relevant address;  
(b) if posted by pre-paid first-class post or other next working day delivery service, on the second Business Day after posting; and  
(c) if sent by fax or email, when received in legible form.  
16.3 A notice or other communication given on a day that is not a Business Day, or after normal business hours, in the place it is received, shall be deemed to have been received on the next Business Day.  
16.4 Any notice or other communication given to the Lender shall be deemed to have been received only on actual receipt.  


17. Additional provisions
-------------------------
{{additional_provisions}}

*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];



define(["./Parties"], function(parties) {

function Contract_Config(obj) {
    obj.allow_skip_principal = false;
}

function Contract_Text(obj) {
    obj.contract_text = contract_template;
    obj.header_text = (function () {/*
Copyright (c) 2015 Bitquant Research Laboratories (Asia) Ltd.  
Legal text prepared by CryptoLaw (http://crypto-law.com/)

Released under terms of the Simplified BSD License.
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
    obj.additional_provisions = (function () {/*
The lender agrees to abide by the terms of the Code of Money Lending Practice adopted by the Licensed Money Lending Association of Hong Kong, irregardless of whether the lender is a member of that organization.
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
    parties.set(obj);
};

// SCHEDULES

// SCHEDULE A

function Schedule_A(obj) {
    // S.1
    obj.annual_interest_rate = 25.0;
    obj.day_count_convention = "HKMLO";
    obj.compound_per_year = 0;
    // simple interest as required by MLO

    // No penalty interest rate as required by MLO
    obj.late_compound_per_year = 0;
    obj.late_annual_interest_rate = obj.annual_interest_rate;
    obj.late_day_count_convention = "HKMLO";

    obj.initial_date = new_date(2017, 8, 25);
    obj.initial_date_string = obj.initial_date.toDateString();
    obj.interval = [1, "month"];
    obj.currency = 'HKD';
    obj.initial_amount = 10000.0;
    obj.number_payments = 6;
    obj.payment_amount = 2000.0;
    obj.security = "None";
    obj.surety = "None";

    // Required by MLO
    obj.agreement_date = new_date(2017, 8, 25);
    obj.agreement_date_string = obj.agreement_date.toDateString();
    obj.agreement_location = "3/F, Citicorp Centre, 18 Whitfield Road, Tin Hau, Hong Kong";
    obj.initial_amount_string = obj.initial_amount.toString();
    obj.initial_amount_words = to_dollars(obj.initial_amount).toUpperCase();
}

// SCHEDULE C
function Schedule_B(obj) {
    obj.contract_parameters = [
	{
	    name: "annual_interest_rate",
	    display: "Annual percentage rate (%)",
	    type: "number",
	    scenario: true
	},
	{
	    name: "initial_date",
	    display: "Initial loan date",
	    type: "date",
	    scenario: true
	},
	{
	    name: "initial_amount",
	    display: "Initial loan amount",
	    type: "number",
	    scenario: true
	},
	{
	    name: "payment_amount",
	    display: "Monthly payment amount",
	    type: "number",
	    scenario: true
	},
	{ 
	    name: "number_payments",
	    display: "Maximum number of payments",
	    type: "number",
	    scenario: true
	},
	{ 
	    name: "interval",
	    display: "Interval",
	    type: "duration",
	    scenario: false
	},
	
	{ 
	    name: "currency",
	    display: "Currency",
	    type: "currency",
	    scenario: false
	}
    ];

    obj.event_spec = [
	{
	    name: "early_payment",
	    display : "Early Payments",
	    type: "grid",
	    columns: [
		{ name: "on", display: "Date", type : 'date' },
		{ name: "amount", display : "Money", type : "number" }
	    ],
	    unfilled_value : []
	},
	{
	    name: "late_payment",
	    display : "Late payment",
	    type: "grid",
	    columns: [
		{ name: "on", display: "Date", type : 'date' },
		{ name: "amount", display : "Money", type : "number" }
	    ],
	    unfilled_value : []
	}
    ];
    obj.event_spec.push(
	{
	    name: "header",
	    type: "note"
	}
    );
    obj.event_spec.push(
	{
	    name: "terms",
	    type: "note"
	}
    );
    obj.event_spec.push(
	{
	    name: "mlo_summary",
	    type: "note",
	    target: "endnote"
	}
    );
    obj.event_spec.push(
	{
	    name: "lmla_code_summary",
	    type: "note",
	    target: "endnote"
	}
    );
}


Schedule_B.prototype.process_payment = function(i) {
    if (i.event == "Payment") {
	var principal_payment = 0.0;
	var interest_payment = 0.0;
	var total = i.interest_accrued + i.principal;
	i.interest_payment = i.payment * (i.interest_accrued / total)
	i.principal_payment = i.payment * (i.principal / total)
    } else {
	i.principal_payment = 0.0;
	i.interest_payment = 0.0;
    }
    return i;
}

Schedule_B.prototype.payments = function(calc) {
    // S.1
    calc.fund({"on" : this.initial_date,
               "amount" : this.initial_amount,
               "note" : "Initial funding"});

    // S.3
    var payment_function = function(calc, params) {
	var payment = calc.extract_payment(params);

	var principal = calc.principal;
	var late_balance = calc.late_balance;
	var interest_accrued = calc.balance - calc.principal;

	if (payment > calc.balance) {
            payment = calc.balance;
	}
	payment = payment + late_balance;

	var interest_payment = 0.0;
	var principal_payment = 0.0;
	var late_payment = 0.0;
	if (contains(calc.term_sheet.late_payment, params.on)) {
	    late_payment =
		contains(calc.term_sheet.late_payment, params.on).amount;
	    if (late_payment > payment) {
		late_payment = payment;
	    } 
	    payment = payment - late_payment;
	    params.note = "Late payment";
	}
	var total = interest_accrued + principal;

	if (total > 0) {
	    interest_payment = payment * (interest_accrued / total);
	    principal_payment = payment * (principal / total);
	} else {
	    interest_payment = 0.0;
	    principal_payment = 0.0;
	}

	calc.balance = calc.balance - payment;

	calc.principal = calc.principal - principal_payment;

	if (payment < late_balance) {
	    calc.late_balance = calc.late_balance - payment;
	} else {
	    calc.late_balance = 0.0;
	}
	calc.late_balance = calc.late_balance + late_payment; 
	if (payment > 0 || calc.late_balance > 0) {
            return {"event":"Payment",
                    "on":params.on,
                    "payment":payment,
                    "principal":principal,
                    "interest_accrued": interest_accrued,
                    "balance":calc.balance,
		    "late_balance" : calc.late_balance,
                    "note":params.note}
	}
    }

    // S.2
    this.early_payment.forEach(function(i) {
	i.note = "Early payment";
	i.payment_func = payment_function;
        calc.payment(i);
    });
    
    // S.4
    var i;
    for (i=1; i<=this.number_payments; i++) {
	var payment_date = 
	    following_1st_of_month(calc.add_duration(this.initial_date,
						     [i, "months"]));
	
	calc.payment({"on":payment_date,
                      "amount": this.payment_amount,
		      "payment_func" : payment_function});
    }

    // S.5
    var final_payment_date =
	    following_1st_of_month(calc.add_duration(this.initial_date,
						     [i, "months"]));

    calc.payment({"on":final_payment_date,
                  "amount":calc.remaining_balance(),
                  "note":"Required final payment"});
}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i].on >= obj && a[i].on <= obj) {
            return a[i];
        }
    }
    return undefined;
}

function following_1st_of_month(a) {
    if (a.getDate() == 1) {
	return a;
    };
    if (a.getMonth() == 12) {
	return new Date(a.getFullYear() + 1, 0, 1);
    } 
    var retval = new Date(a.getFullYear(), a.getMonth() + 1, 1);
    return retval;
}

function new_date(year, month, day) {
    return new Date(year, month-1, day);
}

function TermSheet() {
    Contract_Config(this);
    Contract_Text(this);
    Schedule_A(this);
    Schedule_B(this);
}

["process_payment", "payments", "getTargetHitDates"].map(function(i) {
    TermSheet.prototype[i] = Schedule_B.prototype[i];
});

return TermSheet;
});

// Required by MLO
function to_dollars(i) {
    var dollars = Math.round(i);
    var cents = Math.round((i - Math.ceil(i)) * 100);
    var retval = toWords(dollars) + " dollars";
    if (cents != 0.0) {
	retval = retval + " " + toWords(cents) + " cents";
    }
    return retval;
}

// Convert numbers to words
// copyright 25th July 2006, by Stephen Chapman http://javascript.about.com
// permission to use this Javascript on your web page is granted
// provided that all of the code (including this copyright notice) is
// used exactly as shown (you can change the numbering system if you wish)

// American Numbering System
var th = ['','thousand','million', 'billion','trillion'];

var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine']; var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen']; var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']; function toWords(s){s = s.toString(); s = s.replace(/[\, ]/g,''); if (s != parseFloat(s)) return 'not a number'; var x = s.indexOf('.'); if (x == -1) x = s.length; if (x > 15) return 'too big'; var n = s.split(''); var str = ''; var sk = 0; for (var i=0; i < x; i++) {if ((x-i)%3==2) {if (n[i] == '1') {str += tn[Number(n[i+1])] + ' '; i++; sk=1;} else if (n[i]!=0) {str += tw[n[i]-2] + ' ';sk=1;}} else if (n[i]!=0) {str += dg[n[i]] +' '; if ((x-i)%3==0) str += 'hundred ';sk=1;} if ((x-i)%3==1) {if (sk) str += th[(x-i-1)/3] + ' ';sk=0;}} if (x != s.length) {var y = s.length; str += 'point '; for (var i=x+1; i<y; i++) str += dg[n[i]] +' cents';} return str.replace(/\s+/g,' ');}
