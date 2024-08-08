// DraculaTheme recommendation
user_pref("browser.tabs.tabClipWidth", 86);
user_pref("browser.tabs.tabMinWidth", 66);

// Enables the userChrome.css and userContent.css files.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Allows the theme's SVG icons to be coloured properly.
user_pref("svg.context-properties.content.enabled", true);

// Allows colours used in the theme to be mixed with others.
user_pref("layout.css.color-mix.enabled", true);

// Allows theme to use different colours for light/dark mode.
user_pref("layout.css.light-dark.enabled", true);

// Enables the CSS :has() selector, required for hide tabs toolbar tweak.
user_pref("layout.css.has-selector.enabled", true);

// Integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// Integrated unit convertor at urlbar
user_pref("browser.urlbar.unitConversion.enabled", true);

// Trim  URL
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.trimURLs", true);

// GTK rounded corners
user_pref("widget.gtk.rounded-bottom-corners.enabled", true);

// Who is bogus? (fixes Sidebery tab dragging on Linux)
user_pref("widget.gtk.ignore-bogus-leave-notify", 1);
