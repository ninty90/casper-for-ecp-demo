var x = require("casper").selectXPath;


casper.test.begin('login success test', 1, function(test) {
    casper.start('http://softtest.topnology.com.cn:12824/ecp/Index.jsp', function() {
        this.sendKeys('.FormTable #_JUI_1_ input', 'administrator');
        this.sendKeys('.FormTable #_JUI_2_ input', '111111');
        this.click('.LoginButton');
        this.waitForSelector('.QsDarkBackground', function(){
        	console.log(this);
        	test.pass('login test success');
        })
    }).run(function() {
        test.done();
    });
});


casper.test.begin('login fail test', 1, function(test) {
    casper.start('http://softtest.topnology.com.cn:12824/ecp/Index.jsp', function() {
        this.sendKeys('.FormTable #_JUI_1_ input', 'administrator');
        this.sendKeys('.FormTable #_JUI_2_ input', '01');
        this.click('.LoginButton');
        this.waitForSelector('#ErrorMessage', function(){
        	console.log(this);
        	test.pass('login fail test success');
        })
    }).run(function() {
        test.done();
    });
});




// this.test.assertExists({
//     type: 'xpath',
//     path: '//*[@id="MenuZone"]/div[2]/div[1]/div/div[4]'
// }, 'the element exists');

casper.test.begin('add employe test', 1, function(test) {
    casper.start('http://softtest.topnology.com.cn:12824/ecp/Index.jsp', function() {
        //test.assertExists('#navbar-example');
        this.sendKeys('.FormTable #_JUI_1_ input', 'administrator');
        this.sendKeys('.FormTable #_JUI_2_ input', '111111');
        this.click('.LoginButton');
        this.waitForSelector('.QsDarkBackground', function(){
        	// add employee
        	this.click('#MenuZone > div.JuiLeftTabStrip > div.JuiTabStripTabZoneOuter > div > div:nth-child(4)');
        	this.waitUntilVisible('#MenuZone > div.JuiLeftTabStrip > div.JuiTabStripBodyZone > div:nth-child(4)', function(){
        		console.log('system panel show');
        		this.click('#MenuZone > div.JuiLeftTabStrip > div.JuiTabStripBodyZone > div:nth-child(4) > div > div > div:nth-child(1) > div > div > div > div:nth-child(1) > div.JuiTreeNodeBody.JuiTreeNodeBodyWithLine > div:nth-child(2) > div > div.JuiTreeTextCell.JuiTreeLeafIcon > div');
      			this.waitForSelector('#TabZone > div > div.JuiTabStripBodyZone > iframe:nth-child(2)', function(){
      				console.log('employee iframe show');
      				this.page.switchToChildFrame(2);
      				// to iframe 2
      				this.click('#_JUI_1_ > div.JuiToolBarBody > div.JuiToolBarRight > div:nth-child(1) > div > div.JuiButtonText');
      				this.page.switchToParentFrame();
      				this.waitUntilVisible('body > div.JuiDialog', function(){
      					console.log(this.getElementInfo('body > div.JuiDialog > div.JuiDialogBody').html);
      					//console.log(this.getElementInfo(x('/html/body/div[8]/div[5]')).html);
      					test.pass('employee iframe show success');
      				})
      				
      			});
        	})

        })

    }).run(function() {
        test.done();
    });
});