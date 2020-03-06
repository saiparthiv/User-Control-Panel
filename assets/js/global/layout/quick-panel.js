"use strict";

var KTQuickPanel = function() {
    var panel;
    var notificationPanel;
    var logsPanel;
    var settingsPanel;

    var getContentHeight = function() {
        var height;
        var nav = KTUtil.find(panel, '.kt-quick-panel__nav');
        var content = KTUtil.find(panel, '.kt-quick-panel__content');

        height = parseInt(KTUtil.getViewPort().height) - parseInt(KTUtil.actualHeight(nav)) - (2 * parseInt(KTUtil.css(nav, 'padding-top'))) - 10;

        return height;
    }

    var initOffcanvas = function() {
        new KTOffcanvas(panel, {
            overlay: true,
            baseClass: 'kt-quick-panel',
            closeBy: 'kt_quick_panel_close_btn',
            toggleBy: 'kt_quick_panel_toggler_btn'
        });
    }

    var initNotifications = function() {
        KTUtil.scrollInit(notificationPanel, {
            mobileNativeScroll: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                return getContentHeight();
            }
        });
    }

    var initLogs = function() {
        KTUtil.scrollInit(logsPanel, {
            mobileNativeScroll: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                return getContentHeight();
            }
        });
    }

    var initSettings = function() {
        KTUtil.scrollInit(settingsPanel, {
            mobileNativeScroll: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                return getContentHeight();
            }
        });
    }

    var updatePerfectScrollbars = function() {
        $(panel).find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            KTUtil.scrollUpdate(notificationPanel);
            KTUtil.scrollUpdate(logsPanel);
            KTUtil.scrollUpdate(settingsPanel);
        });
    }

    return {
        init: function() {
            panel = KTUtil.get('kt_quick_panel');
            notificationPanel = KTUtil.get('kt_quick_panel_tab_notifications');
            logsPanel = KTUtil.get('kt_quick_panel_tab_logs');
            settingsPanel = KTUtil.get('kt_quick_panel_tab_settings');

            initOffcanvas();
            initNotifications();
            initLogs();
            initSettings();
            updatePerfectScrollbars();
        }
    };
}();

$(document).ready(function() {
    KTQuickPanel.init();
});
