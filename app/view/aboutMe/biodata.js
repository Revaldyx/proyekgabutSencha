Ext.define('proyekgabutSencha.view.aboutMe.biodata', {
    extend: 'Ext.Container',
    xtype: 'biodata',
    scrollable: {
        y: true
    },
    config: {
        items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'About Me',
                },
                html:[
                    "<p><br><center>Biodata Me</center>",
                    "<br>",
                    '<center><img src="resources/img/me.jpg" width="50%" class="rounded-circle" /><center>',
                    '<br>NPM: 173510642',
                    '<br>Nama: Reza Pahlevi',
                    '<br>Kelas: 173510642</p>'
                ].join("")
    }
});