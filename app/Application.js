Ext.define('proyekgabutSencha.Application', {
    extend: 'Ext.app.Application',

    name: 'proyekgabutSencha',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        var loggedIn;
        loggedIn = localStorage.getItem("loggedIn"); //ambil session
        
        if (!loggedIn) {
            this.overlay = Ext.Viewport.add({ //menambahan viewport
                xtype: 'login',
                floated: true,
                showAnimation: {
                    type: 'popIn',
                    duration: 250,
                    easing: 'ease-out'
                },
                hideAnimation: {
                    type: 'popOut',
                    duration: 250,
                    easing: 'ease-out'
                },
                width: "100%",
                height: "100%",
                scrollable: true
            });
        }
        this.overlay.show();
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
