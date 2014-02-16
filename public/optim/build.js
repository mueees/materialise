({
    baseUrl: "../js/libs",
    paths: {
        automat: '../automat',

        /*libs*/
        underscore: "underscore",
        backbone: "backbone",
        async: "async"
    },

    shim:{
        jquery: {
            exports: "jQuery"
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        }
    },
    mainConfigFile: "../automat/main",
    out: "main-built.js"
})