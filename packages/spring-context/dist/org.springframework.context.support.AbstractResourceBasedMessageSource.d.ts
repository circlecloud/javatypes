declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Abstract base class for {@code MessageSource} implementations based on
                 * resource bundle conventions, such as {@link ResourceBundleMessageSource}
                 * and {@link ReloadableResourceBundleMessageSource}. Provides common
                 * configuration methods and corresponding semantic definitions.
                 * @author Juergen Hoeller
                 * @since 4.3
                 * @see ResourceBundleMessageSource
                 * @see ReloadableResourceBundleMessageSource
                 */
                // @ts-ignore
                class AbstractResourceBasedMessageSource extends org.springframework.context.support.AbstractMessageSource {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set a single basename, following the basic ResourceBundle convention
                     * of not specifying file extension or language codes. The resource location
                     * format is up to the specific {@code MessageSource} implementation.
                     * <p>Regular and XMl properties files are supported: e.g. "messages" will find
                     * a "messages.properties", "messages_en.properties" etc arrangement as well
                     * as "messages.xml", "messages_en.xml" etc.
                     * @param basename the single basename
                     * @see #setBasenames
                     * @see org.springframework.core.io.ResourceEditor
                     * @see java.util.ResourceBundle
                     */
                    // @ts-ignore
                    setBasename(basename: string): void
                    /**
                     * Set an array of basenames, each following the basic ResourceBundle convention
                     * of not specifying file extension or language codes. The resource location
                     * format is up to the specific {@code MessageSource} implementation.
                     * <p>Regular and XMl properties files are supported: e.g. "messages" will find
                     * a "messages.properties", "messages_en.properties" etc arrangement as well
                     * as "messages.xml", "messages_en.xml" etc.
                     * <p>The associated resource bundles will be checked sequentially when resolving
                     * a message code. Note that message definitions in a <i>previous</i> resource
                     * bundle will override ones in a later bundle, due to the sequential lookup.
                     * <p>Note: In contrast to {@link #addBasenames}, this replaces existing entries
                     * with the given names and can therefore also be used to reset the configuration.
                     * @param basenames an array of basenames
                     * @see #setBasename
                     * @see java.util.ResourceBundle
                     */
                    // @ts-ignore
                    setBasenames(...basenames: string[]): void
                    /**
                     * Add the specified basenames to the existing basename configuration.
                     * <p>Note: If a given basename already exists, the position of its entry
                     * will remain as in the original set. New entries will be added at the
                     * end of the list, to be searched after existing basenames.
                     * @since 4.3
                     * @see #setBasenames
                     * @see java.util.ResourceBundle
                     */
                    // @ts-ignore
                    addBasenames(...basenames: string[]): void
                    /**
                     * Return this {@code MessageSource}'s basename set, containing entries
                     * in the order of registration.
                     * <p>Calling code may introspect this set as well as add or remove entries.
                     * @since 4.3
                     * @see #addBasenames
                     */
                    // @ts-ignore
                    getBasenameSet(): java.util.Set<java.lang.String>
                    /**
                     * Set the default charset to use for parsing properties files.
                     * Used if no file-specific charset is specified for a file.
                     * <p>The effective default is the {@code java.util.Properties}
                     * default encoding: ISO-8859-1. A {@code null} value indicates
                     * the platform default encoding.
                     * <p>Only applies to classic properties files, not to XML files.
                     * @param defaultEncoding the default charset
                     */
                    // @ts-ignore
                    setDefaultEncoding(defaultEncoding: string): void
                    /**
                     * Return the default charset to use for parsing properties files, if any.
                     * @since 4.3
                     */
                    // @ts-ignore
                    getDefaultEncoding(): java.lang.String
                    /**
                     * Set whether to fall back to the system Locale if no files for a specific
                     * Locale have been found. Default is "true"; if this is turned off, the only
                     * fallback will be the default file (e.g. "messages.properties" for
                     * basename "messages").
                     * <p>Falling back to the system Locale is the default behavior of
                     * {@code java.util.ResourceBundle}. However, this is often not desirable
                     * in an application server environment, where the system Locale is not relevant
                     * to the application at all: set this flag to "false" in such a scenario.
                     * @see #setDefaultLocale
                     */
                    // @ts-ignore
                    setFallbackToSystemLocale(fallbackToSystemLocale: boolean): void
                    /**
                     * Return whether to fall back to the system Locale if no files for a specific
                     * Locale have been found.
                     * @since 4.3
                     * @deprecated as of 5.2.2, in favor of {#link #getDefaultLocale()}
                     */
                    // @ts-ignore
                    isFallbackToSystemLocale(): boolean
                    /**
                     * Specify a default Locale to fall back to, as an alternative to falling back
                     * to the system Locale.
                     * <p>Default is to fall back to the system Locale. You may override this with
                     * a locally specified default Locale here, or enforce no fallback locale at all
                     * through disabling {@link #setFallbackToSystemLocale "fallbackToSystemLocale"}.
                     * @since 5.2.2
                     * @see #setFallbackToSystemLocale
                     * @see #getDefaultLocale()
                     */
                    // @ts-ignore
                    setDefaultLocale(defaultLocale: java.util.Locale): void
                    /**
                     * Determine a default Locale to fall back to: either a locally specified default
                     * Locale or the system Locale, or {@code null} for no fallback locale at all.
                     * @since 5.2.2
                     * @see #setDefaultLocale
                     * @see #setFallbackToSystemLocale
                     * @see Locale#getDefault()
                     */
                    // @ts-ignore
                    getDefaultLocale(): java.util.Locale
                    /**
                     * Set the number of seconds to cache loaded properties files.
                     * <ul>
                     * <li>Default is "-1", indicating to cache forever (matching the default behavior
                     * of {@code java.util.ResourceBundle}). Note that this constant follows Spring
                     * conventions, not {@link java.util.ResourceBundle.Control#getTimeToLive}.
                     * <li>A positive number will cache loaded properties files for the given
                     * number of seconds. This is essentially the interval between refresh checks.
                     * Note that a refresh attempt will first check the last-modified timestamp
                     * of the file before actually reloading it; so if files don't change, this
                     * interval can be set rather low, as refresh attempts will not actually reload.
                     * <li>A value of "0" will check the last-modified timestamp of the file on
                     * every message access. <b>Do not use this in a production environment!</b>
                     * </ul>
                     * <p><b>Note that depending on your ClassLoader, expiration might not work reliably
                     * since the ClassLoader may hold on to a cached version of the bundle file.</b>
                     * Prefer {@link ReloadableResourceBundleMessageSource} over
                     * {@link ResourceBundleMessageSource} in such a scenario, in combination with
                     * a non-classpath location.
                     */
                    // @ts-ignore
                    setCacheSeconds(cacheSeconds: number /*int*/): void
                    /**
                     * Set the number of milliseconds to cache loaded properties files.
                     * Note that it is common to set seconds instead: {@link #setCacheSeconds}.
                     * <ul>
                     * <li>Default is "-1", indicating to cache forever (matching the default behavior
                     * of {@code java.util.ResourceBundle}). Note that this constant follows Spring
                     * conventions, not {@link java.util.ResourceBundle.Control#getTimeToLive}.
                     * <li>A positive number will cache loaded properties files for the given
                     * number of milliseconds. This is essentially the interval between refresh checks.
                     * Note that a refresh attempt will first check the last-modified timestamp
                     * of the file before actually reloading it; so if files don't change, this
                     * interval can be set rather low, as refresh attempts will not actually reload.
                     * <li>A value of "0" will check the last-modified timestamp of the file on
                     * every message access. <b>Do not use this in a production environment!</b>
                     * </ul>
                     * @since 4.3
                     * @see #setCacheSeconds
                     */
                    // @ts-ignore
                    setCacheMillis(cacheMillis: number /*long*/): void
                    /**
                     * Return the number of milliseconds to cache loaded properties files.
                     * @since 4.3
                     */
                    // @ts-ignore
                    getCacheMillis(): long
                }
            }
        }
    }
}
