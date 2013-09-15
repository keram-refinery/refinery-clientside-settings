/*jslint maxlen: 140, unused: false */

var dir = __dirname,
    scripts_dir = dir + '/scripts',
    styles_dir = dir + '/styles',
    // images_dir = dir + '/images',
    // tests_dir = dir + '/test',
    build_dir = '../refinerycms-settings/app/assets',
    grunt = {
        'watch' : [{
            'admin_js' : {
                'files': [scripts_dir + '/admin/{,*/}*.js'],
                'tasks': [
                    'closureCompiler:refinerycms-settings_admin_js',
                    'concat:refinerycms-settings_admin_js',
                    'copy:refinerycms-settings_js'
                ]
            },
            'styles' : {
                'files': [styles_dir + '/{,*/}*.css', styles_dir + '/{,*/}*.css.scss'],
                'tasks': ['assetUrl:refinerycms-settings_styles', 'copy:refinerycms-settings_styles']
            }
        }],
        'closureCompiler': [{
            'admin_js' : {
                'options': {
                    'checkModified': true,
                    'compilerOpts': {
                        'compilation_level': 'ADVANCED_OPTIMIZATIONS',
                        'warning_level': 'verbose',
                        'externs': [
                            'externs/jquery-1.9.js',
                            'externs/custom.js',
                            'externs/refinery.js',
                            'externs/refinery_object.js',
                            'externs/refinery-admin.js'
                        ],
                        'language_in': 'ECMASCRIPT5_STRICT',
                        'summary_detail_level': 3,
                        'output_wrapper': '"(function(window, $){%output%}(window, jQuery));"'
                    }
                },
                'src': [
                    'scripts/admin/new_setting_form.js',
                    'scripts/admin/dialogs/*.js'
                ],
                'dest': '.tmp/assets/javascripts/settings.min.js'
            }
        }],
        'concat': [{
            'admin_js' : {
                'src': [
                    'scripts/admin/new_setting_form.js',
                    'scripts/admin/dialogs/*.js'
                ],
                'dest': '.tmp/assets/javascripts/settings.all.js'
            }
        }],
        'copy': [{
            'js': {
                'files': [{
                    'expand': true,
                    'dot': true,
                    'cwd': dir + '/.tmp/assets/javascripts/',
                    'dest': build_dir + '/javascripts/refinery/admin/settings/',
                    'src': [
                        '**'
                    ]
                }]
            }
        }, {
            'styles': {
                'files': [{
                    'expand': true,
                    'dot': true,
                    'cwd': dir + '/.tmp/assets/stylesheets/',
                    'dest': build_dir + '/stylesheets/refinery/admin/settings/',
                    'src': [
                        '**'
                    ]
                }]
            }
        }, {
            'i18n': {
                'files': [{
                    'expand': true,
                    'dot': true,
                    'cwd': dir + '/i18n/',
                    'dest': build_dir + '/javascripts/refinery/i18n/admin/settings/',
                    'src': [
                        '**'
                    ]
                }]
            }
        }]
    };

exports.grunt = grunt;
