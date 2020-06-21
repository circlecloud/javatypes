declare namespace org {
    namespace springframework {
        namespace ui {
            namespace context {
                namespace support {
                    /**
                     * {@link ThemeSource} implementation that looks up an individual
                     * {@link java.util.ResourceBundle} per theme. The theme name gets
                     * interpreted as ResourceBundle basename, supporting a common
                     * basename prefix for all themes.
                     * @author Jean-Pierre Pawlak
                     * @author Juergen Hoeller
                     * @see #setBasenamePrefix
                     * @see java.util.ResourceBundle
                     * @see org.springframework.context.support.ResourceBundleMessageSource
                     */
                    // @ts-ignore
                    class ResourceBundleThemeSource extends java.lang.Object implements org.springframework.ui.context.HierarchicalThemeSource {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        public setParentThemeSource(parent: org.springframework.ui.context.ThemeSource): void
                        // @ts-ignore
                        public getParentThemeSource(): org.springframework.ui.context.ThemeSource
                        /**
                         * Set the prefix that gets applied to the ResourceBundle basenames,
                         * i.e. the theme names.
                         * E.g.: basenamePrefix="test.", themeName="theme" -> basename="test.theme".
                         * <p>Note that ResourceBundle names are effectively classpath locations: As a
                         * consequence, the JDK's standard ResourceBundle treats dots as package separators.
                         * This means that "test.theme" is effectively equivalent to "test/theme",
                         * just like it is for programmatic {@code java.util.ResourceBundle} usage.
                         * @see java.util.ResourceBundle#getBundle(String)
                         */
                        // @ts-ignore
                        public setBasenamePrefix(basenamePrefix: java.lang.String | string): void
                        /**
                         * Set the default charset to use for parsing resource bundle files.
                         * <p>{@link ResourceBundleMessageSource}'s default is the
                         * {@code java.util.ResourceBundle} default encoding: ISO-8859-1.
                         * @since 4.2
                         * @see ResourceBundleMessageSource#setDefaultEncoding
                         */
                        // @ts-ignore
                        public setDefaultEncoding(defaultEncoding: java.lang.String | string): void
                        /**
                         * Set whether to fall back to the system Locale if no files for a
                         * specific Locale have been found.
                         * <p>{@link ResourceBundleMessageSource}'s default is "true".
                         * @since 4.2
                         * @see ResourceBundleMessageSource#setFallbackToSystemLocale
                         */
                        // @ts-ignore
                        public setFallbackToSystemLocale(fallbackToSystemLocale: boolean): void
                        // @ts-ignore
                        public setBeanClassLoader(beanClassLoader: java.lang.ClassLoader): void
                        /**
                         * This implementation returns a SimpleTheme instance, holding a
                         * ResourceBundle-based MessageSource whose basename corresponds to
                         * the given theme name (prefixed by the configured "basenamePrefix").
                         * <p>SimpleTheme instances are cached per theme name. Use a reloadable
                         * MessageSource if themes should reflect changes to the underlying files.
                         * @see #setBasenamePrefix
                         * @see #createMessageSource
                         */
                        // @ts-ignore
                        public getTheme(themeName: java.lang.String | string): org.springframework.ui.context.Theme
                        /**
                         * Create a MessageSource for the given basename,
                         * to be used as MessageSource for the corresponding theme.
                         * <p>Default implementation creates a ResourceBundleMessageSource.
                         * for the given basename. A subclass could create a specifically
                         * configured ReloadableResourceBundleMessageSource, for example.
                         * @param basename the basename to create a MessageSource for
                         * @return the MessageSource
                         * @see org.springframework.context.support.ResourceBundleMessageSource
                         * @see org.springframework.context.support.ReloadableResourceBundleMessageSource
                         */
                        // @ts-ignore
                        createMessageSource(basename: java.lang.String | string): org.springframework.context.MessageSource
                        /**
                         * Initialize the MessageSource of the given theme with the
                         * one from the corresponding parent of this ThemeSource.
                         * @param theme the Theme to (re-)initialize
                         */
                        // @ts-ignore
                        initParent(theme: org.springframework.ui.context.Theme): void
                    }
                }
            }
        }
    }
}
