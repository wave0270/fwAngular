'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:ImageLibraryCtrl
 * @description
 * # ImageLibraryCtrl
 * Controller of the ngApp
 */
angular.module('ngApp').controller('ImageLibraryCtrl', ['$rootScope', '$scope', 'user', '$state', function ($rootScope, $scope, user, $state) {
        $scope.fileNavigator = {};
        $scope.fileNavigator.fileList = [{"time": "07:18", "day": "18", "month": "Oct", "size": "4096", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "6", "rights": "drwxr-xr-x", "type": "dir", "name": "doc", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "4096", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "4", "rights": "drwxr-xr-x", "type": "dir", "name": "examples", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "4096", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "9", "rights": "drwxr-xr-x", "type": "dir", "name": "js", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "12288", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "17", "rights": "drwxr-xr-x", "type": "dir", "name": "libraries", "date": "11-04-2015"}, {"time": "12:53", "day": "14", "month": "Oct", "size": "4096", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "43", "rights": "drwxr-xr-x", "type": "dir", "name": "locale", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "4096", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "4", "rights": "drwxr-xr-x", "type": "dir", "name": "setup", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "4096", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "5", "rights": "drwxr-xr-x", "type": "dir", "name": "themes", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "8870", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "db_datadict.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "2788", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "db_export.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "505", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "db_import.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "9297", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "db_operations.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "5269", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "db_printview.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1987", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "db_qbe.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1846", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "db_search.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "872", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "db_sql.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "9465", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "db_structure.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "8277", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "db_tracking.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "15581", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "gis_data_editor.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "728", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "license.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "5081", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "pmd_pdf.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "4560", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "pmd_relation_new.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "9522", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "portrait_hauteur.png", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "2594", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "prefs_forms.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "4004", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "schema_edit.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1734", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "schema_export.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1075", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "server_binlog.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "735", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "server_collations.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "2634", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "server_databases.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "615", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "server_engines.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "698", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "server_export.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "11668", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "server_privileges.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "577", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "server_sql.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1369", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "server_status.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "889", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "server_status_advisor.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "3538", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "server_status_monitor.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1663", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "server_status_queries.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1507", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "server_status_variables.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1625", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "server_user_groups.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1283", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "server_variables.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1039", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "show_config_errors.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "5507", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "sql.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "3474", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_addfield.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "5883", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_change.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "4242", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_chart.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "2650", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_create.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "2880", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_export.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1657", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_find_replace.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1334", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_get_field.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "3452", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_gis_visualization.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "590", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_import.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1205", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_indexes.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "2828", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_move_copy.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "12498", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_operations.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1474", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_printview.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "4650", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_relation.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "13504", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_replace.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "3904", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_row_action.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "2175", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_select.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1014", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_sql.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "4577", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_structure.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "3927", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_tracking.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "5838", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "tbl_zoom_select.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "863", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "themes.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1348", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "transformation_overview.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "3961", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "transformation_wrapper.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "507", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "url.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "6883", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "user_password.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "550", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "version_check.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "8914", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "view_create.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "3613", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "view_operations.php", "date": "11-04-2015"}, {"time": "12:52", "day": "14", "month": "Oct", "size": "1128", "group": "860", "user": "folderdemo@zendelsolutions.com", "number": "1", "rights": "-rw-r--r--", "type": "file", "name": "webapp.php", "date": "11-04-2015"}];
        console.log($scope.fileNavigator.fileList);
        $scope.sizeKb = function (bytes) {
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (bytes == 0)
                return '0 Byte';
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
        };
    }]);