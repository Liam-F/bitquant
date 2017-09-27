// Copyright (c) 2014, Bitquant Research Laboratories (Asia) Ltd.
// Licensed under the Simplified BSD License
"use strict";


if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define (function() {
    function Notes() {
	this.header = (function () {/*
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
	this.terms = (function () {/*
Loan Terms
----------
The lender has agreed to be bound by the Code of Money Lending Practice issued by the Licensed Money Lending Association of Hong Kong, regardless of whether or not the lender is a member of the LMLA.  A copy of the code may be found at http://www.lmla.com.hk/practice.pdf.  
Schedule A states that the interest rate is {{annual_interest_rate}} percent per year with simple interest.  The initial loan amount is {{currency}} {{initial_loan_amount}}.  As required by Money Lending Ordinance, there will be no penalty interest for late payments (see MLO Section 22(1)(c))  and there will be no compounding of interest (see MLO Section 22(1)(a))  
Schedule B S.1 states that the lender will provide the inital loan
amount on the date stated in the contract.  
Schedule B S.2 states that early payments are allowed (see MLO Section 22(1)(b)).  
Schedule B S.3 states that any payments shall be appropriated to principal and interest in the proportion that the total amount of principal bears to the total amount of the interest as required by the money lending ordinance (see MLO Schedule 2(1))  
Schedule B S.4 The borrower intends make a payment of {{currency}} {{payment_amount}} with an interval of {{interval}} until either the loan is paid off, or {{number_payments}} payments are made at which point the borrower will pay the balance.  The payments will be due on the first of the month.  
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

	this.mlo_summary = (function () {/*
***THE MONEY LENDERS ORDINANCE***

The provisions of the Money Lenders Ordinance summarized below are important for the protection of all the parties to a loan agreement, and should be read carefully. The summary is not part of the law, and reference should be made to the provisions of the Ordinance itself in case of doubt.

Summary of Part III of the Ordinance-Money lenders transactions

Section 18 sets out the requirements relating to loans made by a money lender. Every agreement for a loan must be put into writing and signed by the borrower within 7 days of making the agreement and before the money is lent. A copy of the signed note of the agreement must be given to the borrower, with a copy of this summary, at the time of signing. The signed note must contain full details of the loan, including the terms of repayment, the form of security and the rate of interest. An agreement which does not comply with the requirements will be unenforceable, except where a court is satisfied that it would be unjust not to enforce it.  

Section 19 provides that a money lender must, if requested in writing and on payment of the prescribed fee for expenses, give the original and a copy of a written statement of a borrower's current position under a loan agreement, including how much has been paid, how much is due or will be due, and the rate of interest. The borrower must endorse on the copy of the statement words to the effect that he has received the original of the written statement and return the copy as so endorsed to the money lender. The money lender must retain the copy of the statement so returned during the continuance of the agreement to which that statement relates. If the money lender does not do so he commits an offence. The money lender must also, upon a request in writing, supply a copy of any document relating to the loan or security. But a request cannot be made more than once per month. Interest is not payable for so long as the money lender, without good reason, fails to comply with any request mentioned in this paragraph.

Section 20 provides that the surety, unless he is also the borrower, must within 7 days of making the agreement be given a copy of the signed note of the agreement, a copy of the security instrument (if any) and a statement with details of the total amount payable. The money lender must also give the surety, upon request in writing at any time (but not more than once per month) a signed statement showing details of the total sum paid and remaining to be paid. The security is not enforceable for so long as the money lender, without good reason, fails to comply.

Section 21 provides that a borrower may at any time, on giving written notice, repay a loan together with interest to the date of repayment, and no higher rate of interest may be charged for early repayment. This provision, however, will not apply where the money lender is recognized, or is a member of an association recognized, by the Financial Secretary by notice in the Gazette in force under section 33A(4) of the Ordinance.

Section 22 states that a loan agreement is illegal if it provides for the payment of compound interest, or provides that a loan may not be repaid by instalments. A loan agreement is also illegal if it charges a higher rate of interest on
amounts due but not paid, although it may provide for charging simple interest on that part of the principal and interest outstanding at a rate not exceeding the rate payable apart from any default. The illegal agreement may, however, be
declared legal in whole or in part by a court if the court is satisfied that it would be unjust if the agreement were illegal because it did not comply with this section.

Section 23 declares that a loan agreement with a money lender and any security given for the loan will not be enforceable if the money lender was unlicensed at the time of making the agreement or taking the security. The loan agreement or security may, however, be declared enforceable in whole or in part by a court if the court is satisfied that it would be unjust if the agreement or security were unenforceable by virtue of this section. 

Cap 163A - MONEY LENDERS REGULATIONS 27

Summary of Part IV of the Ordinance-Excessive interest rates
Section 24 fixes the maximum effective rate of interest on any loan at 60% per annum (the "effective rate" is to be calculated in accordance with the Second Schedule to the Ordinance). A loan agreement providing for a higher effective rate will be unenforceable and the lender will be liable to prosecution. This maximum rate may be changed by the Legislative Council but not so as to affect existing agreements. The section does not apply to any loan made to a company which has a paid up share capital of not less than $1000000 or, in respect of any such loan, to any person who makes that loan.

Section 25 provides that where court proceedings are taken to enforce a loan agreement or security for a loan or where a borrower or surety himself applies to a court for relief, the court may look at the terms of the agreement to see whether the terms are grossly unfair or exorbitant (an effective rate of interest exceeding 48% per annum or such other rate as is fixed by the Legislative Council, may be presumed, on that ground alone, to be exorbitant), and, taking into
account all the circumstances, it may alter the terms of the agreement in such a manner as to be fair to all parties. The section does not apply to any loan made to a company which has a paid up share capital of not less than $1000000 or, in respect of any such loan, to any person who makes that loan. 

*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
	this.lmla_code_summary = (function () {/*
***Code of Money Lending Practice***

The lender has agreed to abide by the terms of the Code of Money Lending Practice for the Licensed Money Lending Association.
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
	this.report =(function (payment_schedule,
                                calculator,
                                process_payment,
                                output) {
	    try {
		var append_span = function(info) {
		    output.append(info.join(" - "));
		};
		
		output.html("");
		output.append("<span class='block'>event</span> ");
		output.append("<span class='date-block'>date</span> ");
		output.append("<span class='block'>principal</span> ");
		output.append("<span class='block'>interest</span> ");
		output.append("<span class='block'>balance</span> ");
		output.append("<span class='block'>late balance</span> ");
		output.append("<span class='block'>principal payment</span> ");
		output.append("<span class='block'>interest payment</span> ");
		output.append("<span class='block'>total payment</span> ");
		output.append("<br>");
		
		payment_schedule.forEach(function(i) {
		    process_payment(i);
		    var note = "";
		    if (i.note != undefined) {
			note = i.note;
		    }
		    if (i.event == "Note" ||
			i.event == "Terminate" ||
			i.event == "Action" ) {
			output.append("<span class='block'>" +
				      i.event + "</span> ");
			output.append("<span class='date-block'>" +
				      i.on.toDateString() + "</span> ");
			output.append("<span>" +
				      note + "</span> ");
			output.append("<br>");
		    } else if (i.event ===  "Transfer" ||
			       i.event === "Obligation") {
			var actual = i.actual;
			if (actual === undefined) {
			    actual = i.on;
		    }
			var actor = i.from;
			if (i.to !== undefined) {
			    actor = actor + " -> " + i.to;
			}
			var list = [i.event,
				    i.on.toDateString(),
				    actor];
			if (i.amount !== undefined) {
			    list.push(Number(i.amount).toFixed(2));
			}
			if (i.item  !== undefined) {
			    list.push(i.item);
			}
			if (i.note !== undefined) {
			    list.push(i.note);
		    }
			append_span(list);
			output.append("<br>");
		    } else {
			output.append("<span class='block'>" +
				      i.event + "</span> <span class='date-block'>" +
				      i.on.toDateString() + "</span> <span class='number block'>" +
				      Number(i.principal).toFixed(2) +
				      "</span> <span class='number block'>" +
				      Number(i.interest_accrued).toFixed(2)
				      + "</span> <span class='number block'>" +
				      Number(i.balance).toFixed(2)
				      + "</span> <span class='number block'>" +
				      Number(i.late_balance).toFixed(2)
				      + "</span> <span class='number block'>" +
				      Number(i.principal_payment).toFixed(2)
				      + "</span> <span class='number block'>" +
				      Number(i.interest_payment).toFixed(2)
				      + "</span> <span class='number block'>" +
				      Number(i.interest_payment + 
					     i.principal_payment).toFixed(2)
				      + "</span> <span> " +
				      note + "</span><br>");
		    }
		});
	} catch (err) {
	    output.html(err.message);
	}
    });

    }
    return Notes;
});
