declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Spring-specific {@link org.springframework.context.MessageSource} implementation
                 * that accesses resource bundles using specified basenames, participating in the
                 * Spring {@link org.springframework.context.ApplicationContext}'s resource loading.
                 * <p>In contrast to the JDK-based {@link ResourceBundleMessageSource}, this class uses
                 * {@link java.util.Properties} instances as its custom data structure for messages,
                 * loading them via a {@link org.springframework.util.PropertiesPersister} strategy
                 * from Spring {@link Resource} handles. This strategy is not only capable of
                 * reloading files based on timestamp changes, but also of loading properties files
                 * with a specific character encoding. It will detect XML property files as well.
                 * <p>Note that the basenames set as {@link #setBasenames "basenames"} property
                 * are treated in a slightly different fashion than the "basenames" property of
                 * {@link ResourceBundleMessageSource}. It follows the basic ResourceBundle rule of not
                 * specifying file extension or language codes, but can refer to any Spring resource
                 * location (instead of being restricted to classpath resources). With a "classpath:"
                 * prefix, resources can still be loaded from the classpath, but "cacheSeconds" values
                 * other than "-1" (caching forever) might not work reliably in this case.
                 * <p>For a typical web application, message files could be placed in {@code WEB-INF}:
                 * e.g. a "WEB-INF/messages" basename would find a "WEB-INF/messages.properties",
                 * "WEB-INF/messages_en.properties" etc arrangement as well as "WEB-INF/messages.xml",
                 * "WEB-INF/messages_en.xml" etc. Note that message definitions in a <i>previous</i>
                 * resource bundle will override ones in a later bundle, due to sequential lookup.
                 * <p>This MessageSource can easily be used outside of an
                 * {@link org.springframework.context.ApplicationContext}: it will use a
                 * {@link org.springframework.core.io.DefaultResourceLoader} as default,
                 * simply getting overridden with the ApplicationContext's resource loader
                 * if running in a context. It does not have any other specific dependencies.
                 * <p>Thanks to Thomas Achleitner for providing the initial implementation of
                 * this message source!
                 * @author Juergen Hoeller
                 * @see #setCacheSeconds
                 * @see #setBasenames
                 * @see #setDefaultEncoding
                 * @see #setFileEncodings
                 * @see #setPropertiesPersister
                 * @see #setResourceLoader
                 * @see org.springframework.util.DefaultPropertiesPersister
                 * @see org.springframework.core.io.DefaultResourceLoader
                 * @see ResourceBundleMessageSource
                 * @see java.util.ResourceBundle
                 */
                // @ts-ignore
                class ReloadableResourceBundleMessageSource extends org.springframework.context.support.AbstractResourceBasedMessageSource implements org.springframework.context.ResourceLoaderAware {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set per-file charsets to use for parsing properties files.
                     * <p>Only applies to classic properties files, not to XML files.
                     * @param fileEncodings a Properties with filenames as keys and charset
                     *  names as values. Filenames have to match the basename syntax,
                     *  with optional locale-specific components: e.g. "WEB-INF/messages"
                     *  or "WEB-INF/messages_en".
                     * @see #setBasenames
                     * @see org.springframework.util.PropertiesPersister#load
                     */
                    // @ts-ignore
                    setFileEncodings(fileEncodings: java.util.Properties): void
                    /**
                     * Specify whether to allow for concurrent refresh behavior, i.e. one thread
                     * locked in a refresh attempt for a specific cached properties file whereas
                     * other threads keep returning the old properties for the time being, until
                     * the refresh attempt has completed.
                     * <p>Default is "true": this behavior is new as of Spring Framework 4.1,
                     * minimizing contention between threads. If you prefer the old behavior,
                     * i.e. to fully block on refresh, switch this flag to "false".
                     * @since 4.1
                     * @see #setCacheSeconds
                     */
                    // @ts-ignore
                    setConcurrentRefresh(concurrentRefresh: boolean): void
                    /**
                     * Set the PropertiesPersister to use for parsing properties files.
                     * <p>The default is a DefaultPropertiesPersister.
                     * @see org.springframework.util.DefaultPropertiesPersister
                     */
                    // @ts-ignore
                    setPropertiesPersister(propertiesPersister: PropertiesPersister): void
                    /**
                     * Set the ResourceLoader to use for loading bundle properties files.
                     * <p>The default is a DefaultResourceLoader. Will get overridden by the
                     * ApplicationContext if running in a context, as it implements the
                     * ResourceLoaderAware interface. Can be manually overridden when
                     * running outside of an ApplicationContext.
                     * @see org.springframework.core.io.DefaultResourceLoader
                     * @see org.springframework.context.ResourceLoaderAware
                     */
                    // @ts-ignore
                    setResourceLoader(resourceLoader: ResourceLoader): void
                    /**
                     * Resolves the given message code as key in the retrieved bundle files,
                     * returning the value found in the bundle as-is (without MessageFormat parsing).
                     */
                    // @ts-ignore
                    resolveCodeWithoutArguments(code: string, locale: java.util.Locale): java.lang.String
                    /**
                     * Resolves the given message code as key in the retrieved bundle files,
                     * using a cached MessageFormat instance per message code.
                     */
                    // @ts-ignore
                    resolveCode(code: string, locale: java.util.Locale): java.text.MessageFormat
                    /**
                     * Get a PropertiesHolder that contains the actually visible properties
                     * for a Locale, after merging all specified resource bundles.
                     * Either fetches the holder from the cache or freshly loads it.
                     * <p>Only used when caching resource bundle contents forever, i.e.
                     * with cacheSeconds < 0. Therefore, merged properties are always
                     * cached forever.
                     */
                    // @ts-ignore
                    getMergedProperties(locale: java.util.Locale): org.springframework.context.support.ReloadableResourceBundleMessageSource.PropertiesHolder
                    /**
                     * Calculate all filenames for the given bundle basename and Locale.
                     * Will calculate filenames for the given Locale, the system Locale
                     * (if applicable), and the default file.
                     * @param basename the basename of the bundle
                     * @param locale the locale
                     * @return the List of filenames to check
                     * @see #setFallbackToSystemLocale
                     * @see #calculateFilenamesForLocale
                     */
                    // @ts-ignore
                    calculateAllFilenames(basename: string, locale: java.util.Locale): java.util.List<java.lang.String>
                    /**
                     * Calculate the filenames for the given bundle basename and Locale,
                     * appending language code, country code, and variant code.
                     * E.g.: basename "messages", Locale "de_AT_oo" -> "messages_de_AT_OO",
                     * "messages_de_AT", "messages_de".
                     * <p>Follows the rules defined by {@link java.util.Locale#toString()}.
                     * @param basename the basename of the bundle
                     * @param locale the locale
                     * @return the List of filenames to check
                     */
                    // @ts-ignore
                    calculateFilenamesForLocale(basename: string, locale: java.util.Locale): java.util.List<java.lang.String>
                    /**
                     * Get a PropertiesHolder for the given filename, either from the
                     * cache or freshly loaded.
                     * @param filename the bundle filename (basename + Locale)
                     * @return the current PropertiesHolder for the bundle
                     */
                    // @ts-ignore
                    getProperties(filename: string): org.springframework.context.support.ReloadableResourceBundleMessageSource.PropertiesHolder
                    /**
                     * Refresh the PropertiesHolder for the given bundle filename.
                     * The holder can be {@code null} if not cached before, or a timed-out cache entry
                     * (potentially getting re-validated against the current last-modified timestamp).
                     * @param filename the bundle filename (basename + Locale)
                     * @param propHolder the current PropertiesHolder for the bundle
                     */
                    // @ts-ignore
                    refreshProperties(filename: string, propHolder: org.springframework.context.support.ReloadableResourceBundleMessageSource.PropertiesHolder): org.springframework.context.support.ReloadableResourceBundleMessageSource.PropertiesHolder
                    /**
                     * Load the properties from the given resource.
                     * @param resource the resource to load from
                     * @param filename the original bundle filename (basename + Locale)
                     * @return the populated Properties instance
                     * @throws IOException if properties loading failed
                     */
                    // @ts-ignore
                    loadProperties(resource: Resource, filename: string): java.util.Properties
                    /**
                     * Template method for creating a plain new {@link Properties} instance.
                     * The default implementation simply calls {@link Properties#Properties()}.
                     * <p>Allows for returning a custom {@link Properties} extension in subclasses.
                     * Overriding methods should just instantiate a custom {@link Properties} subclass,
                     * with no further initialization or population to be performed at that point.
                     * @return a plain Properties instance
                     * @since 4.2
                     */
                    // @ts-ignore
                    newProperties(): java.util.Properties
                    /**
                     * Clear the resource bundle cache.
                     * Subsequent resolve calls will lead to reloading of the properties files.
                     */
                    // @ts-ignore
                    clearCache(): void
                    /**
                     * Clear the resource bundle caches of this MessageSource and all its ancestors.
                     * @see #clearCache
                     */
                    // @ts-ignore
                    clearCacheIncludingAncestors(): void
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
