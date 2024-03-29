Ext.define('proyekgabutSencha.view.main.menuuser', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.Menu',
    ],
    layout:'hbox',
    xtype: 'menuuser',
    shadow: true,
    controller: 'main',
    defaults: {
        xtype : 'button',
        cls   : 'demobtn',
    },
    initialize: function () {
        Ext.Viewport.setMenu(this.getMenuCfg('left'), {
            side: 'left',
            reveal: true
        });
    },

    doDestroy: function () {
        Ext.Viewport.removeMenu('left');
        this.callParent();
    },

    getMenuCfg: function (side) {
        return {
            items: [{
                text: 'Menu Baru',
                iconCls: 'x-fa fa-star',
                scope: this,
                items:{
                    text:'tes',
                    handler: function () {
                        Ext.Viewport.hideMenu(side);
                    }
                },
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                }
            }, {
                text: 'Favorit',
                iconCls: 'x-fa fa-heart',
                scope: this,
                handler: function () {
                }
            }, {
                text: 'Resep Baru',
                iconCls: 'x-fa fa-plus',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                   
                }
            }, {
                text: 'Setelan',
                iconCls: 'x-fa fa-gear ',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                   
                }
            }, {
                text: 'Tentang',
                iconCls: 'x-fa fa-info-circle',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                }
            }, {
                text: 'Logout',
                iconCls: 'x-fa fa-sign-out',
                scope: this,
                handler: function () {
                    Ext.Viewport.hideMenu(side);
                }
            }]
        };
    }
});