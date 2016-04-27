

casper.test.begin('login success test', 1, function(test) {
    casper.start('http://softtest.topnology.com.cn:12824/ecp/Index.jsp', function() {
        //test.assertExists('#navbar-example');
        this.sendKeys('.FormTable #_JUI_1_ input', 'administrator');
        this.sendKeys('.FormTable #_JUI_2_ input', '111111');
        this.click('.LoginButton');
        this.waitForSelector('.QsDarkBackground', function(){
        	console.log(this);
        	test.pass('login test success');
        })
        /*
        this.waitUntilVisible('.LoginButton', function() {
        	console.log(this);
            test.pass('login success');
        }); */
    }).run(function() {
        test.done();
    });
});


casper.test.begin('login fail test', 1, function(test) {
    casper.start('http://softtest.topnology.com.cn:12824/ecp/Index.jsp', function() {
        //test.assertExists('#navbar-example');
        this.sendKeys('.FormTable #_JUI_1_ input', 'administrator');
        this.sendKeys('.FormTable #_JUI_2_ input', '01');
        this.click('.LoginButton');
        this.waitForSelector('#ErrorMessage', function(){
        	console.log(this);
        	test.pass('login fail test success');
        })
        /*
        this.waitUntilVisible('.LoginButton', function() {
        	console.log(this);
            test.pass('login success');
        }); */
    }).run(function() {
        test.done();
    });
});