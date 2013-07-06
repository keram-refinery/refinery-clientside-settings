(function () {

    'use strict';

    /**
     * @constructor
     * @class refinery.admin.SettingsDialog
     * @extends {refinery.admin.Dialog}
     * @param {Object=} options
     */
    refinery.Object.create({
        objectPrototype: refinery.n('admin.Dialog', {
            title: t('refinery.admin.settings_dialog_title'),
            url: '/refinery/dialogs/settings'
        }, true),

        name: 'SettingsDialog',

        module: 'admin.settings'
    });

}());
