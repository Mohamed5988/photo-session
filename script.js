/*global $ */

$(function() {
    'use strict';
    // $('.info-content div').hide();
    $('.info-list li').click(function() {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.info-content div').hide();
        $('.' + $(this).data('info')).fadeIn();
    });
});