var wa_production_report_suite = 'nciod-nciofficeofthedirector';
var wa_dev_report_suite = 'nciod-nciofficeofthedirector-dev';
var wa_channel = 'OD - Provocative Questions';
var wa_search_function_name = 'Provocative Questions - Search';
var wa_production_url_match = 'provocativequestions.nci.nih.gov';
var wa_dev_url_match = 'provocativequestionsqa.nci.nih.gov';
var wa_production_linkInternalFilters = 'javascript:,provocativequestions.nci.nih.gov';
var wa_dev_linkInternalFilters = 'javascript:,provocativequestionsqa.nci.nih.gov';

if (document.URL.indexOf(wa_production_url_match) != -1)
    // production 
    var s_account=wa_production_report_suite;
else 
    // non-production
    var s_account=wa_dev_report_suite;

var pageNameOverride = location.hostname.toLowerCase() + location.pathname.toLowerCase();

