/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('proyekgabutSencha.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirmSelected', this);
    },

    onClickButton: function(){
        Ext.Msg.confirm('Logout', 'Apakah anda mau Logout?', 'onConfirm', this); 
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            localStorage.removeItem('loggedIn'); //remove session login
            Ext.getCmp('formlogin').destroy(); //reset form login
            this.overlay = Ext.Viewport.add({  //membuat viewport login
                xtype: 'login',
                floated: true,
                showAnimation: {
                    type: 'popIn',
                    duration: 1000,
                    easing: 'ease-out'
                },
                hideAnimation: {
                    type: 'popOut',
                    duration: 1000,
                    easing: 'ease-out'
                },
                width: "100%",
                height: "100%",
                scrollable: true
            });
            this.overlay.show();
        }
    },
});
