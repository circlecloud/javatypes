declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * {@link org.springframework.context.MessageSource} implementation that
                 * accesses resource bundles using specified basenames. This class relies
                 * on the underlying JDK's {@link java.util.ResourceBundle} implementation,
                 * in combination with the JDK's standard message parsing provided by
                 * {@link java.text.MessageFormat}.
                 * <p>This MessageSource caches both the accessed ResourceBundle instances and
                 * the generated MessageFormats for each message. It also implements rendering of
                 * no-arg messages without MessageFormat, as supported by the AbstractMessageSource
                 * base class. The caching provided by this MessageSource is significantly faster
                 * than the built-in caching of the {@code java.util.ResourceBundle} class.
                 * <p>The basenames follow {@link java.util.ResourceBundle} conventions: essentially,
                 * a fully-qualified classpath location. If it doesn't contain a package qualifier
                 * (such as {@code org.mypackage}), it will be resolved from the classpath root.
                 * Note that the JDK's standard ResourceBundle treats dots as package separators:
                 * This means that "test.theme" is effectively equivalent to "test/theme".
                 * <p>On the classpath, bundle resources will be read with the locally configured
                 * {@link #setDefaultEncoding encoding}: by default, ISO-8859-1; consider switching
                 * this to UTF-8, or to {@code null} for the platform default encoding. On the JDK 9+
                 * module path where locally provided {@code ResourceBundle.Control} handles are not
                 * supported, this MessageSource always falls back to {@link ResourceBundle#getBundle}
                 * retrieval with the platform default encoding: UTF-8 with a ISO-8859-1 fallback on
                 * JDK 9+ (configurable through the "java.util.PropertyResourceBundle.encoding" system
                 * property). Note that {@link #loadBundle(Reader)}/{@link #loadBundle(InputStream)}
                 * won't be called in this case either, effectively ignoring overrides in subclasses.
                 * Consider implementing a JDK 9 {@code java.util.spi.ResourceBundleProvider} instead.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @see #setBasenames
                 * @see ReloadableResourceBundleMessageSource
                 * @see java.util.ResourceBundle
                 * @see java.text.MessageFormat
                 */
                // @ts-ignore
                class ResourceBundleMessageSource extends org.springframework.context.support.AbstractResourceBasedMessageSource {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the ClassLoader to load resource bundles with.
                     * <p>Default is the containing BeanFactory's
                     * {@link org.springframework.beans.factory.BeanClassLoaderAware bean ClassLoader},
                     * or the default ClassLoader determined by
                     * {@link org.springframework.util.ClassUtils#getDefaultClassLoader()}
                     * if not running within a BeanFactory.
                     */
                    // @ts-ignore
                    setBundleClassLoader(classLoader: java.lang.ClassLoader): void
                    /**
                     * Return the ClassLoader to load resource bundles with.
                     * <p>Default is the containing BeanFactory's bean ClassLoader.
                     * @see #setBundleClassLoader
                     */
                    // @ts-ignore
                    getBundleClassLoader(): java.lang.ClassLoader
                    // @ts-ignore
                    setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    /**
                     * Resolves the given message code as key in the registered resource bundles,
                     * returning the value found in the bundle as-is (without MessageFormat parsing).
                     */
                    // @ts-ignore
                    resolveCodeWithoutArguments(code: string, locale: java.util.Locale): java.lang.String
                    /**
                     * Resolves the given message code as key in the registered resource bundles,
                     * using a cached MessageFormat instance per message code.
                     */
                    // @ts-ignore
                    resolveCode(code: string, locale: java.util.Locale): java.text.MessageFormat
                    /**
                     * Return a ResourceBundle for the given basename and code,
                     * fetching already generated MessageFormats from the cache.
                     * @param basename the basename of the ResourceBundle
                     * @param locale the Locale to find the ResourceBundle for
                     * @return the resulting ResourceBundle, or {#code null} if none
                     *  found for the given basename and Locale
                     */
                    // @ts-ignore
                    getResourceBundle(basename: string, locale: java.util.Locale): java.util.ResourceBundle
                    /**
                     * Obtain the resource bundle for the given basename and Locale.
                     * @param basename the basename to look for
                     * @param locale the Locale to look for
                     * @return the corresponding ResourceBundle
                     * @throws MissingResourceException if no matching bundle could be found
                     * @see java.util.ResourceBundle#getBundle(String, Locale, ClassLoader)
                     * @see #getBundleClassLoader()
                     */
                    // @ts-ignore
                    doGetBundle(basename: string, locale: java.util.Locale): java.util.ResourceBundle
                    /**
                     * Load a property-based resource bundle from the given reader.
                     * <p>This will be called in case of a {@link #setDefaultEncoding "defaultEncoding"},
                     * including {@link ResourceBundleMessageSource}'s default ISO-8859-1 encoding.
                     * Note that this method can only be called with a {@code ResourceBundle.Control}:
                     * When running on the JDK 9+ module path where such control handles are not
                     * supported, any overrides in custom subclasses will effectively get ignored.
                     * <p>The default implementation returns a {@link PropertyResourceBundle}.
                     * @param reader the reader for the target resource
                     * @return the fully loaded bundle
                     * @throws IOException in case of I/O failure
                     * @since 4.2
                     * @see #loadBundle(InputStream)
                     * @see PropertyResourceBundle#PropertyResourceBundle(Reader)
                     */
                    // @ts-ignore
                    loadBundle(reader: java.io.Reader): java.util.ResourceBundle
                    /**
                     * Load a property-based resource bundle from the given input stream,
                     * picking up the default properties encoding on JDK 9+.
                     * <p>This will only be called with {@link #setDefaultEncoding "defaultEncoding"}
                     * set to {@code null}, explicitly enforcing the platform default encoding
                     * (which is UTF-8 with a ISO-8859-1 fallback on JDK 9+ but configurable
                     * through the "java.util.PropertyResourceBundle.encoding" system property).
                     * Note that this method can only be called with a {@code ResourceBundle.Control}:
                     * When running on the JDK 9+ module path where such control handles are not
                     * supported, any overrides in custom subclasses will effectively get ignored.
                     * <p>The default implementation returns a {@link PropertyResourceBundle}.
                     * @param inputStream the input stream for the target resource
                     * @return the fully loaded bundle
                     * @throws IOException in case of I/O failure
                     * @since 5.1
                     * @see #loadBundle(Reader)
                     * @see PropertyResourceBundle#PropertyResourceBundle(InputStream)
                     */
                    // @ts-ignore
                    loadBundle(inputStream: java.io.InputStream): java.util.ResourceBundle
                    /**
                     * Return a MessageFormat for the given bundle and code,
                     * fetching already generated MessageFormats from the cache.
                     * @param bundle the ResourceBundle to work on
                     * @param code the message code to retrieve
                     * @param locale the Locale to use to build the MessageFormat
                     * @return the resulting MessageFormat, or {#code null} if no message
                     *  defined for the given code
                     * @throws MissingResourceException if thrown by the ResourceBundle
                     */
                    // @ts-ignore
                    getMessageFormat(bundle: java.util.ResourceBundle, code: string, locale: java.util.Locale): java.text.MessageFormat
                    /**
                     * Efficiently retrieve the String value for the specified key,
                     * or return {@code null} if not found.
                     * <p>As of 4.2, the default implementation checks {@code containsKey}
                     * before it attempts to call {@code getString} (which would require
                     * catching {@code MissingResourceException} for key not found).
                     * <p>Can be overridden in subclasses.
                     * @param bundle the ResourceBundle to perform the lookup in
                     * @param key the key to look up
                     * @return the associated value, or {#code null} if none
                     * @since 4.2
                     * @see ResourceBundle#getString(String)
                     * @see ResourceBundle#containsKey(String)
                     */
                    // @ts-ignore
                    getStringOrNull(bundle: java.util.ResourceBundle, key: string): java.lang.String
                    /**
                     * Show the configuration of this MessageSource.
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
