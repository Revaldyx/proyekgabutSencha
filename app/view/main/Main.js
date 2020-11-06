Ext.define('proyekgabutSencha.view.main.Main', {
    extend: 'Ext.Container',
    layout:'vbox',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'proyekgabutSencha.view.aboutMe.biodata',
        'proyekgabutSencha.view.main.menu',
    ],

    controller: 'main',
    viewModel: 'main',

    items: [
        {
                xtype: 'menus'
        },{
          
                xtype: 'biodata'
        }
    ]
});
