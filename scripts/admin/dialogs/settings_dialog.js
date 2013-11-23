(function (refinery) {

    'use strict';

    /**
     * @constructor
     * @extends {refinery.admin.Dialog}
     * @param {Object=} options
     * @return {refinery.admin.settings.SettingsDialog}
     */
    refinery.Object.create({
        objectPrototype: refinery('admin.Dialog', {
            title: t('refinery.admin.settings_dialog_title'),
            url_path: '/dialogs/settings'
        }, true),

        name: 'SettingsDialog',

        module: 'admin.settings'
    });

}(refinery));
