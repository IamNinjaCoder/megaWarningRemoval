// ==UserScript==
// @name         Remove MEGA Notifications
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove MEGA notifications and dialog
// @author       IamNinjaCoder
// @match        http://mega.co.nz/*
// @match        http://mega.io/*
// @match        http://mega.is/*
// @match        http://mega.nz/*
// @match        https://mega.co.nz/*
// @match        https://mega.io/*
// @match        https://mega.is/*
// @match        https://mega.nz/*
// @icon         https://mega.nz/favicon.ico?v=3
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeMEGANotifications() {
        // Remove the storage dialog
        const dialog = document.querySelector('.mega-dialog.storage-dialog');
        if (dialog) {
            dialog.remove();
            console.log('MEGA storage dialog removed.');
        }

        // Remove the account full notification
        const notification = document.querySelector('.fm-notification-block.full');
        if (notification) {
            notification.remove();
            console.log('MEGA account full notification removed.');
        }
    }

    // Periodically check and remove the notifications
    setInterval(removeMEGANotifications, 1000);

    // Optionally, run the removal when the window loads
    // window.onload = removeMEGANotifications;
})();
