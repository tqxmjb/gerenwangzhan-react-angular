/**
 * Created by liekkas on 15/9/27.
 */
(function (app) {
    'use strict';

    //新疆电信自动拨测router路由设置
    var autoConfig = {
        base : {
            // abstract: true,
            url: '/main',
            title: '二羊个人网站',
            templateUrl: 'main.html',
            controller: 'mainController',
        },
        about : {
            // abstract: true,
            url: '/about',
            title: 'about',
            templateUrl: 'about.html',
            controller: 'aboutController',
        },
        experience : {
            // abstract: true,
            url: '/experience',
            title: 'experience',
            templateUrl: 'experience.html',
            controller: 'experienceController',
        },
        education : {
            // abstract: true,
            url: '/education',
            title: 'education',
            templateUrl: 'education.html',
            controller: 'educationController',
        },
        skills : {
            // abstract: true,
            url: '/skills',
            title: 'skills',
            templateUrl: 'skills.html',
            controller: 'skillsController',
        },
        projects : {
            // abstract: true,
            url: '/projects',
            title: 'projects',
            templateUrl: 'projects.html',
            controller: 'projectsController',
        },
        contact : {
            // abstract: true,
            url: '/contact',
            title: 'contact',
            templateUrl: 'contact.html',
            controller: 'contactsController',
        }
    };
    app.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
        //$locationProvider.html5Mode(true);
        // console.log("config--->");
        $stateProvider
            .state('base',autoConfig.base)
            .state('base.about',autoConfig.about)
            .state('base.experience',autoConfig.experience)
            .state('base.education',autoConfig.education)
            .state('base.skills',autoConfig.skills)
            .state('base.projects',autoConfig.projects)
            .state('base.contact',autoConfig.contact)
        ;
        $urlRouterProvider
            .otherwise('/main/about');
    });

})(angular.module(APP_NAME));