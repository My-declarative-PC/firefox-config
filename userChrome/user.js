// Don't show bookmark icons
user_pref("browser.chrome.site_icons", false);

// Hide tabs toolbar
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Hardware video acceleration
user_pref("gfx.webrender.all", true);
user_pref("media.ffmpeg.vaapi.enabled", true);

// DraculaTheme recommendation
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.color-mix.enabled", true);
user_pref("browser.tabs.tabClipWidth", 86);
user_pref("browser.tabs.tabMinWidth", 66);

// Privacy settings
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.partition.network_state.ocsp_cache", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

// Disable Pocket Integration
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.showHome", false);
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);

// Disable all sorts of telemetry
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
