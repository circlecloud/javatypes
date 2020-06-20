declare namespace java {
    namespace util {
        namespace ResourceBundle {
            /**
             * <code>ResourceBundle.Control</code> defines a set of callback methods
             * that are invoked by the {@link ResourceBundle#getBundle(String,
             * Locale, ClassLoader, Control) ResourceBundle.getBundle} factory
             * methods during the bundle loading process. In other words, a
             * <code>ResourceBundle.Control</code> collaborates with the factory
             * methods for loading resource bundles. The default implementation of
             * the callback methods provides the information necessary for the
             * factory methods to perform the <a
             * href="./ResourceBundle.html#default_behavior">default behavior</a>.
             * <p>In addition to the callback methods, the {@link
             * #toBundleName(String, Locale) toBundleName} and {@link
             * #toResourceName(String, String) toResourceName} methods are defined
             * primarily for convenience in implementing the callback
             * methods. However, the <code>toBundleName</code> method could be
             * overridden to provide different conventions in the organization and
             * packaging of localized resources.  The <code>toResourceName</code>
             * method is <code>final</code> to avoid use of wrong resource and class
             * name separators.
             * <p>Two factory methods, {@link #getControl(List)} and {@link
             * #getNoFallbackControl(List)}, provide
             * <code>ResourceBundle.Control</code> instances that implement common
             * variations of the default bundle loading process.
             * <p>The formats returned by the {@link Control#getFormats(String)
             * getFormats} method and candidate locales returned by the {@link
             * ResourceBundle.Control#getCandidateLocales(String, Locale)
             * getCandidateLocales} method must be consistent in all
             * <code>ResourceBundle.getBundle</code> invocations for the same base
             * bundle. Otherwise, the <code>ResourceBundle.getBundle</code> methods
             * may return unintended bundles. For example, if only
             * <code>"java.class"</code> is returned by the <code>getFormats</code>
             * method for the first call to <code>ResourceBundle.getBundle</code>
             * and only <code>"java.properties"</code> for the second call, then the
             * second call will return the class-based one that has been cached
             * during the first call.
             * <p>A <code>ResourceBundle.Control</code> instance must be thread-safe
             * if it's simultaneously used by multiple threads.
             * <code>ResourceBundle.getBundle</code> does not synchronize to call
             * the <code>ResourceBundle.Control</code> methods. The default
             * implementations of the methods are thread-safe.
             * <p>Applications can specify <code>ResourceBundle.Control</code>
             * instances returned by the <code>getControl</code> factory methods or
             * created from a subclass of <code>ResourceBundle.Control</code> to
             * customize the bundle loading process. The following are examples of
             * changing the default bundle loading process.
             * <p><b>Example 1</b>
             * <p>The following code lets <code>ResourceBundle.getBundle</code> look
             * up only properties-based resources.
             * <pre>
             * import java.util.*;
             * import static java.util.ResourceBundle.Control.*;
             * ...
             * ResourceBundle bundle =
             * ResourceBundle.getBundle("MyResources", new Locale("fr", "CH"),
             * ResourceBundle.Control.getControl(FORMAT_PROPERTIES));
             * </pre>
             * Given the resource bundles in the <a
             * href="./ResourceBundle.html#default_behavior_example">example</a> in
             * the <code>ResourceBundle.getBundle</code> description, this
             * <code>ResourceBundle.getBundle</code> call loads
             * <code>MyResources_fr_CH.properties</code> whose parent is
             * <code>MyResources_fr.properties</code> whose parent is
             * <code>MyResources.properties</code>. (<code>MyResources_fr_CH.properties</code>
             * is not hidden, but <code>MyResources_fr_CH.class</code> is.)
             * <p><b>Example 2</b>
             * <p>The following is an example of loading XML-based bundles
             * using {@link Properties#loadFromXML(java.io.InputStream)
             * Properties.loadFromXML}.
             * <pre>
             * ResourceBundle rb = ResourceBundle.getBundle("Messages",
             * new ResourceBundle.Control() {
             * public List&lt;String&gt; getFormats(String baseName) {
             * if (baseName == null)
             * throw new NullPointerException();
             * return Arrays.asList("xml");
             * }
             * public ResourceBundle newBundle(String baseName,
             * Locale locale,
             * String format,
             * ClassLoader loader,
             * boolean reload)
             * throws IllegalAccessException,
             * InstantiationException,
             * IOException {
             * if (baseName == null || locale == null
             * || format == null || loader == null)
             * throw new NullPointerException();
             * ResourceBundle bundle = null;
             * if (format.equals("xml")) {
             * String bundleName = toBundleName(baseName, locale);
             * String resourceName = toResourceName(bundleName, format);
             * InputStream stream = null;
             * if (reload) {
             * URL url = loader.getResource(resourceName);
             * if (url != null) {
             * URLConnection connection = url.openConnection();
             * if (connection != null) {
             * // Disable caches to get fresh data for
             * // reloading.
             * connection.setUseCaches(false);
             * stream = connection.getInputStream();
             * }
             * }
             * } else {
             * stream = loader.getResourceAsStream(resourceName);
             * }
             * if (stream != null) {
             * BufferedInputStream bis = new BufferedInputStream(stream);
             * bundle = new XMLResourceBundle(bis);
             * bis.close();
             * }
             * }
             * return bundle;
             * }
             * });
             * ...
             * private static class XMLResourceBundle extends ResourceBundle {
             * private Properties props;
             * XMLResourceBundle(InputStream stream) throws IOException {
             * props = new Properties();
             * props.loadFromXML(stream);
             * }
             * protected Object handleGetObject(String key) {
             * return props.getProperty(key);
             * }
             * public Enumeration&lt;String&gt; getKeys() {
             * ...
             * }
             * }
             * </pre>
             * @since 1.6
             */
            // @ts-ignore
            class Control extends java.lang.Object {
                /**
                 * Sole constructor. (For invocation by subclass constructors,
                 * typically implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * The default format <code>List</code>, which contains the strings
                 * <code>"java.class"</code> and <code>"java.properties"</code>, in
                 * this order. This <code>List</code> is {@linkplain
                 * Collections#unmodifiableList(List) unmodifiable}.
                 * @see #getFormats(String)
                 */
                // @ts-ignore
                readonly FORMAT_DEFAULT: Array<java.lang.String>
                /**
                 * The class-only format <code>List</code> containing
                 * <code>"java.class"</code>. This <code>List</code> is {@linkplain
                 * Collections#unmodifiableList(List) unmodifiable}.
                 * @see #getFormats(String)
                 */
                // @ts-ignore
                readonly FORMAT_CLASS: Array<java.lang.String>
                /**
                 * The properties-only format <code>List</code> containing
                 * <code>"java.properties"</code>. This <code>List</code> is
                 * {@linkplain Collections#unmodifiableList(List) unmodifiable}.
                 * @see #getFormats(String)
                 */
                // @ts-ignore
                readonly FORMAT_PROPERTIES: Array<java.lang.String>
                /**
                 * The time-to-live constant for not caching loaded resource bundle
                 * instances.
                 * @see #getTimeToLive(String, Locale)
                 */
                // @ts-ignore
                readonly TTL_DONT_CACHE: number /*long*/
                /**
                 * The time-to-live constant for disabling the expiration control
                 * for loaded resource bundle instances in the cache.
                 * @see #getTimeToLive(String, Locale)
                 */
                // @ts-ignore
                readonly TTL_NO_EXPIRATION_CONTROL: number /*long*/
                /**
                 * Returns a <code>ResourceBundle.Control</code> in which the {@link
                 * #getFormats(String) getFormats} method returns the specified
                 * <code>formats</code>. The <code>formats</code> must be equal to
                 * one of {@link Control#FORMAT_PROPERTIES}, {@link
                 * Control#FORMAT_CLASS} or {@link
                 * Control#FORMAT_DEFAULT}. <code>ResourceBundle.Control</code>
                 * instances returned by this method are singletons and thread-safe.
                 * <p>Specifying {@link Control#FORMAT_DEFAULT} is equivalent to
                 * instantiating the <code>ResourceBundle.Control</code> class,
                 * except that this method returns a singleton.
                 * @param formats
                 *         the formats to be returned by the
                 *         <code>ResourceBundle.Control.getFormats</code> method
                 * @return a <code>ResourceBundle.Control</code> supporting the
                 *         specified <code>formats</code>
                 * @exception NullPointerException
                 *         if <code>formats</code> is <code>null</code>
                 * @exception IllegalArgumentException
                 *         if <code>formats</code> is unknown
                 */
                // @ts-ignore
                getControl(formats: Array<java.lang.String>): java.util.ResourceBundle.Control
                /**
                 * Returns a <code>ResourceBundle.Control</code> in which the {@link
                 * #getFormats(String) getFormats} method returns the specified
                 * <code>formats</code> and the {@link
                 * Control#getFallbackLocale(String, Locale) getFallbackLocale}
                 * method returns <code>null</code>. The <code>formats</code> must
                 * be equal to one of {@link Control#FORMAT_PROPERTIES}, {@link
                 * Control#FORMAT_CLASS} or {@link Control#FORMAT_DEFAULT}.
                 * <code>ResourceBundle.Control</code> instances returned by this
                 * method are singletons and thread-safe.
                 * @param formats
                 *         the formats to be returned by the
                 *         <code>ResourceBundle.Control.getFormats</code> method
                 * @return a <code>ResourceBundle.Control</code> supporting the
                 *         specified <code>formats</code> with no fallback
                 *         <code>Locale</code> support
                 * @exception NullPointerException
                 *         if <code>formats</code> is <code>null</code>
                 * @exception IllegalArgumentException
                 *         if <code>formats</code> is unknown
                 */
                // @ts-ignore
                getNoFallbackControl(formats: Array<java.lang.String>): java.util.ResourceBundle.Control
                /**
                 * Returns a <code>List</code> of <code>String</code>s containing
                 * formats to be used to load resource bundles for the given
                 * <code>baseName</code>. The <code>ResourceBundle.getBundle</code>
                 * factory method tries to load resource bundles with formats in the
                 * order specified by the list. The list returned by this method
                 * must have at least one <code>String</code>. The predefined
                 * formats are <code>"java.class"</code> for class-based resource
                 * bundles and <code>"java.properties"</code> for {@linkplain
                 * PropertyResourceBundle properties-based} ones. Strings starting
                 * with <code>"java."</code> are reserved for future extensions and
                 * must not be used by application-defined formats.
                 * <p>It is not a requirement to return an immutable (unmodifiable)
                 * <code>List</code>.  However, the returned <code>List</code> must
                 * not be mutated after it has been returned by
                 * <code>getFormats</code>.
                 * <p>The default implementation returns {@link #FORMAT_DEFAULT} so
                 * that the <code>ResourceBundle.getBundle</code> factory method
                 * looks up first class-based resource bundles, then
                 * properties-based ones.
                 * @param baseName
                 *         the base name of the resource bundle, a fully qualified class
                 *         name
                 * @return a <code>List</code> of <code>String</code>s containing
                 *         formats for loading resource bundles.
                 * @exception NullPointerException
                 *         if <code>baseName</code> is null
                 * @see #FORMAT_DEFAULT
                 * @see #FORMAT_CLASS
                 * @see #FORMAT_PROPERTIES
                 */
                // @ts-ignore
                getFormats(baseName: string): java.util.List<java.lang.String>
                /**
                 * Returns a <code>List</code> of <code>Locale</code>s as candidate
                 * locales for <code>baseName</code> and <code>locale</code>. This
                 * method is called by the <code>ResourceBundle.getBundle</code>
                 * factory method each time the factory method tries finding a
                 * resource bundle for a target <code>Locale</code>.
                 * <p>The sequence of the candidate locales also corresponds to the
                 * runtime resource lookup path (also known as the <I>parent
                 * chain</I>), if the corresponding resource bundles for the
                 * candidate locales exist and their parents are not defined by
                 * loaded resource bundles themselves.  The last element of the list
                 * must be a {@linkplain Locale#ROOT root locale} if it is desired to
                 * have the base bundle as the terminal of the parent chain.
                 * <p>If the given locale is equal to <code>Locale.ROOT</code> (the
                 * root locale), a <code>List</code> containing only the root
                 * <code>Locale</code> must be returned. In this case, the
                 * <code>ResourceBundle.getBundle</code> factory method loads only
                 * the base bundle as the resulting resource bundle.
                 * <p>It is not a requirement to return an immutable (unmodifiable)
                 * <code>List</code>. However, the returned <code>List</code> must not
                 * be mutated after it has been returned by
                 * <code>getCandidateLocales</code>.
                 * <p>The default implementation returns a <code>List</code> containing
                 * <code>Locale</code>s using the rules described below.  In the
                 * description below, <em>L</em>, <em>S</em>, <em>C</em> and <em>V</em>
                 * respectively represent non-empty language, script, country, and
                 * variant.  For example, [<em>L</em>, <em>C</em>] represents a
                 * <code>Locale</code> that has non-empty values only for language and
                 * country.  The form <em>L</em>("xx") represents the (non-empty)
                 * language value is "xx".  For all cases, <code>Locale</code>s whose
                 * final component values are empty strings are omitted.
                 * <ol><li>For an input <code>Locale</code> with an empty script value,
                 * append candidate <code>Locale</code>s by omitting the final component
                 * one by one as below:
                 * <ul>
                 * <li> [<em>L</em>, <em>C</em>, <em>V</em>] </li>
                 * <li> [<em>L</em>, <em>C</em>] </li>
                 * <li> [<em>L</em>] </li>
                 * <li> <code>Locale.ROOT</code> </li>
                 * </ul></li>
                 * <li>For an input <code>Locale</code> with a non-empty script value,
                 * append candidate <code>Locale</code>s by omitting the final component
                 * up to language, then append candidates generated from the
                 * <code>Locale</code> with country and variant restored:
                 * <ul>
                 * <li> [<em>L</em>, <em>S</em>, <em>C</em>, <em>V</em>]</li>
                 * <li> [<em>L</em>, <em>S</em>, <em>C</em>]</li>
                 * <li> [<em>L</em>, <em>S</em>]</li>
                 * <li> [<em>L</em>, <em>C</em>, <em>V</em>]</li>
                 * <li> [<em>L</em>, <em>C</em>]</li>
                 * <li> [<em>L</em>]</li>
                 * <li> <code>Locale.ROOT</code></li>
                 * </ul></li>
                 * <li>For an input <code>Locale</code> with a variant value consisting
                 * of multiple subtags separated by underscore, generate candidate
                 * <code>Locale</code>s by omitting the variant subtags one by one, then
                 * insert them after every occurrence of <code> Locale</code>s with the
                 * full variant value in the original list.  For example, if the
                 * the variant consists of two subtags <em>V1</em> and <em>V2</em>:
                 * <ul>
                 * <li> [<em>L</em>, <em>S</em>, <em>C</em>, <em>V1</em>, <em>V2</em>]</li>
                 * <li> [<em>L</em>, <em>S</em>, <em>C</em>, <em>V1</em>]</li>
                 * <li> [<em>L</em>, <em>S</em>, <em>C</em>]</li>
                 * <li> [<em>L</em>, <em>S</em>]</li>
                 * <li> [<em>L</em>, <em>C</em>, <em>V1</em>, <em>V2</em>]</li>
                 * <li> [<em>L</em>, <em>C</em>, <em>V1</em>]</li>
                 * <li> [<em>L</em>, <em>C</em>]</li>
                 * <li> [<em>L</em>]</li>
                 * <li> <code>Locale.ROOT</code></li>
                 * </ul></li>
                 * <li>Special cases for Chinese.  When an input <code>Locale</code> has the
                 * language "zh" (Chinese) and an empty script value, either "Hans" (Simplified) or
                 * "Hant" (Traditional) might be supplied, depending on the country.
                 * When the country is "CN" (China) or "SG" (Singapore), "Hans" is supplied.
                 * When the country is "HK" (Hong Kong SAR China), "MO" (Macau SAR China),
                 * or "TW" (Taiwan), "Hant" is supplied.  For all other countries or when the country
                 * is empty, no script is supplied.  For example, for <code>Locale("zh", "CN")
                 * </code>, the candidate list will be:
                 * <ul>
                 * <li> [<em>L</em>("zh"), <em>S</em>("Hans"), <em>C</em>("CN")]</li>
                 * <li> [<em>L</em>("zh"), <em>S</em>("Hans")]</li>
                 * <li> [<em>L</em>("zh"), <em>C</em>("CN")]</li>
                 * <li> [<em>L</em>("zh")]</li>
                 * <li> <code>Locale.ROOT</code></li>
                 * </ul>
                 * For <code>Locale("zh", "TW")</code>, the candidate list will be:
                 * <ul>
                 * <li> [<em>L</em>("zh"), <em>S</em>("Hant"), <em>C</em>("TW")]</li>
                 * <li> [<em>L</em>("zh"), <em>S</em>("Hant")]</li>
                 * <li> [<em>L</em>("zh"), <em>C</em>("TW")]</li>
                 * <li> [<em>L</em>("zh")]</li>
                 * <li> <code>Locale.ROOT</code></li>
                 * </ul></li>
                 * <li>Special cases for Norwegian.  Both <code>Locale("no", "NO",
                 * "NY")</code> and <code>Locale("nn", "NO")</code> represent Norwegian
                 * Nynorsk.  When a locale's language is "nn", the standard candidate
                 * list is generated up to [<em>L</em>("nn")], and then the following
                 * candidates are added:
                 * <ul><li> [<em>L</em>("no"), <em>C</em>("NO"), <em>V</em>("NY")]</li>
                 * <li> [<em>L</em>("no"), <em>C</em>("NO")]</li>
                 * <li> [<em>L</em>("no")]</li>
                 * <li> <code>Locale.ROOT</code></li>
                 * </ul>
                 * If the locale is exactly <code>Locale("no", "NO", "NY")</code>, it is first
                 * converted to <code>Locale("nn", "NO")</code> and then the above procedure is
                 * followed.
                 * <p>Also, Java treats the language "no" as a synonym of Norwegian
                 * Bokm&#xE5;l "nb".  Except for the single case <code>Locale("no",
                 * "NO", "NY")</code> (handled above), when an input <code>Locale</code>
                 * has language "no" or "nb", candidate <code>Locale</code>s with
                 * language code "no" and "nb" are interleaved, first using the
                 * requested language, then using its synonym. For example,
                 * <code>Locale("nb", "NO", "POSIX")</code> generates the following
                 * candidate list:
                 * <ul>
                 * <li> [<em>L</em>("nb"), <em>C</em>("NO"), <em>V</em>("POSIX")]</li>
                 * <li> [<em>L</em>("no"), <em>C</em>("NO"), <em>V</em>("POSIX")]</li>
                 * <li> [<em>L</em>("nb"), <em>C</em>("NO")]</li>
                 * <li> [<em>L</em>("no"), <em>C</em>("NO")]</li>
                 * <li> [<em>L</em>("nb")]</li>
                 * <li> [<em>L</em>("no")]</li>
                 * <li> <code>Locale.ROOT</code></li>
                 * </ul>
                 * <code>Locale("no", "NO", "POSIX")</code> would generate the same list
                 * except that locales with "no" would appear before the corresponding
                 * locales with "nb".</li>
                 * </ol>
                 * <p>The default implementation uses an {@link ArrayList} that
                 * overriding implementations may modify before returning it to the
                 * caller. However, a subclass must not modify it after it has
                 * been returned by <code>getCandidateLocales</code>.
                 * <p>For example, if the given <code>baseName</code> is "Messages"
                 * and the given <code>locale</code> is
                 * <code>Locale("ja",&nbsp;"",&nbsp;"XX")</code>, then a
                 * <code>List</code> of <code>Locale</code>s:
                 * <pre>
                 * Locale("ja", "", "XX")
                 * Locale("ja")
                 * Locale.ROOT
                 * </pre>
                 * is returned. And if the resource bundles for the "ja" and
                 * "" <code>Locale</code>s are found, then the runtime resource
                 * lookup path (parent chain) is:
                 * <pre>{@code
                 * Messages_ja -> Messages
                 * }</pre>
                 * @param baseName
                 *         the base name of the resource bundle, a fully
                 *         qualified class name
                 * @param locale
                 *         the locale for which a resource bundle is desired
                 * @return a <code>List</code> of candidate
                 *         <code>Locale</code>s for the given <code>locale</code>
                 * @exception NullPointerException
                 *         if <code>baseName</code> or <code>locale</code> is
                 *         <code>null</code>
                 */
                // @ts-ignore
                getCandidateLocales(baseName: string, locale: java.util.Locale): java.util.List<java.util.Locale>
                /**
                 * Returns a <code>Locale</code> to be used as a fallback locale for
                 * further resource bundle searches by the
                 * <code>ResourceBundle.getBundle</code> factory method. This method
                 * is called from the factory method every time when no resulting
                 * resource bundle has been found for <code>baseName</code> and
                 * <code>locale</code>, where locale is either the parameter for
                 * <code>ResourceBundle.getBundle</code> or the previous fallback
                 * locale returned by this method.
                 * <p>The method returns <code>null</code> if no further fallback
                 * search is desired.
                 * <p>The default implementation returns the {@linkplain
                 * Locale#getDefault() default <code>Locale</code>} if the given
                 * <code>locale</code> isn't the default one.  Otherwise,
                 * <code>null</code> is returned.
                 * @param baseName
                 *         the base name of the resource bundle, a fully
                 *         qualified class name for which
                 *         <code>ResourceBundle.getBundle</code> has been
                 *         unable to find any resource bundles (except for the
                 *         base bundle)
                 * @param locale
                 *         the <code>Locale</code> for which
                 *         <code>ResourceBundle.getBundle</code> has been
                 *         unable to find any resource bundles (except for the
                 *         base bundle)
                 * @return a <code>Locale</code> for the fallback search,
                 *         or <code>null</code> if no further fallback search
                 *         is desired.
                 * @exception NullPointerException
                 *         if <code>baseName</code> or <code>locale</code>
                 *         is <code>null</code>
                 */
                // @ts-ignore
                getFallbackLocale(baseName: string, locale: java.util.Locale): java.util.Locale
                /**
                 * Instantiates a resource bundle for the given bundle name of the
                 * given format and locale, using the given class loader if
                 * necessary. This method returns <code>null</code> if there is no
                 * resource bundle available for the given parameters. If a resource
                 * bundle can't be instantiated due to an unexpected error, the
                 * error must be reported by throwing an <code>Error</code> or
                 * <code>Exception</code> rather than simply returning
                 * <code>null</code>.
                 * <p>If the <code>reload</code> flag is <code>true</code>, it
                 * indicates that this method is being called because the previously
                 * loaded resource bundle has expired.
                 * <p>The default implementation instantiates a
                 * <code>ResourceBundle</code> as follows.
                 * <ul>
                 * <li>The bundle name is obtained by calling {@link
                 * #toBundleName(String, Locale) toBundleName(baseName,
                 * locale)}.</li>
                 * <li>If <code>format</code> is <code>"java.class"</code>, the
                 * {@link Class} specified by the bundle name is loaded by calling
                 * {@link ClassLoader#loadClass(String)}. Then, a
                 * <code>ResourceBundle</code> is instantiated by calling {@link
                 * Class#newInstance()}.  Note that the <code>reload</code> flag is
                 * ignored for loading class-based resource bundles in this default
                 * implementation.</li>
                 * <li>If <code>format</code> is <code>"java.properties"</code>,
                 * {@link #toResourceName(String, String) toResourceName(bundlename,
                 * "properties")} is called to get the resource name.
                 * If <code>reload</code> is <code>true</code>, {@link
                 * ClassLoader#getResource(String) load.getResource} is called
                 * to get a {@link URL} for creating a {@link
                 * URLConnection}. This <code>URLConnection</code> is used to
                 * {@linkplain URLConnection#setUseCaches(boolean) disable the
                 * caches} of the underlying resource loading layers,
                 * and to {@linkplain URLConnection#getInputStream() get an
                 * <code>InputStream</code>}.
                 * Otherwise, {@link ClassLoader#getResourceAsStream(String)
                 * loader.getResourceAsStream} is called to get an {@link
                 * InputStream}. Then, a {@link
                 * PropertyResourceBundle} is constructed with the
                 * <code>InputStream</code>.</li>
                 * <li>If <code>format</code> is neither <code>"java.class"</code>
                 * nor <code>"java.properties"</code>, an
                 * <code>IllegalArgumentException</code> is thrown.</li>
                 * </ul>
                 * @param baseName
                 *         the base bundle name of the resource bundle, a fully
                 *         qualified class name
                 * @param locale
                 *         the locale for which the resource bundle should be
                 *         instantiated
                 * @param format
                 *         the resource bundle format to be loaded
                 * @param loader
                 *         the <code>ClassLoader</code> to use to load the bundle
                 * @param reload
                 *         the flag to indicate bundle reloading; <code>true</code>
                 *         if reloading an expired resource bundle,
                 *         <code>false</code> otherwise
                 * @return the resource bundle instance,
                 *         or <code>null</code> if none could be found.
                 * @exception NullPointerException
                 *         if <code>bundleName</code>, <code>locale</code>,
                 *         <code>format</code>, or <code>loader</code> is
                 *         <code>null</code>, or if <code>null</code> is returned by
                 *         {#link #toBundleName(String, Locale) toBundleName}
                 * @exception IllegalArgumentException
                 *         if <code>format</code> is unknown, or if the resource
                 *         found for the given parameters contains malformed data.
                 * @exception ClassCastException
                 *         if the loaded class cannot be cast to <code>ResourceBundle</code>
                 * @exception IllegalAccessException
                 *         if the class or its nullary constructor is not
                 *         accessible.
                 * @exception InstantiationException
                 *         if the instantiation of a class fails for some other
                 *         reason.
                 * @exception ExceptionInInitializerError
                 *         if the initialization provoked by this method fails.
                 * @exception SecurityException
                 *         If a security manager is present and creation of new
                 *         instances is denied. See {#link Class#newInstance()}
                 *         for details.
                 * @exception IOException
                 *         if an error occurred when reading resources using
                 *         any I/O operations
                 */
                // @ts-ignore
                newBundle(baseName: string, locale: java.util.Locale, format: string, loader: java.lang.ClassLoader, reload: boolean): java.util.ResourceBundle
                /**
                 * Returns the time-to-live (TTL) value for resource bundles that
                 * are loaded under this
                 * <code>ResourceBundle.Control</code>. Positive time-to-live values
                 * specify the number of milliseconds a bundle can remain in the
                 * cache without being validated against the source data from which
                 * it was constructed. The value 0 indicates that a bundle must be
                 * validated each time it is retrieved from the cache. {@link
                 * #TTL_DONT_CACHE} specifies that loaded resource bundles are not
                 * put in the cache. {@link #TTL_NO_EXPIRATION_CONTROL} specifies
                 * that loaded resource bundles are put in the cache with no
                 * expiration control.
                 * <p>The expiration affects only the bundle loading process by the
                 * <code>ResourceBundle.getBundle</code> factory method.  That is,
                 * if the factory method finds a resource bundle in the cache that
                 * has expired, the factory method calls the {@link
                 * #needsReload(String, Locale, String, ClassLoader, ResourceBundle,
                 * long) needsReload} method to determine whether the resource
                 * bundle needs to be reloaded. If <code>needsReload</code> returns
                 * <code>true</code>, the cached resource bundle instance is removed
                 * from the cache. Otherwise, the instance stays in the cache,
                 * updated with the new TTL value returned by this method.
                 * <p>All cached resource bundles are subject to removal from the
                 * cache due to memory constraints of the runtime environment.
                 * Returning a large positive value doesn't mean to lock loaded
                 * resource bundles in the cache.
                 * <p>The default implementation returns {@link #TTL_NO_EXPIRATION_CONTROL}.
                 * @param baseName
                 *         the base name of the resource bundle for which the
                 *         expiration value is specified.
                 * @param locale
                 *         the locale of the resource bundle for which the
                 *         expiration value is specified.
                 * @return the time (0 or a positive millisecond offset from the
                 *         cached time) to get loaded bundles expired in the cache,
                 *         {#link #TTL_NO_EXPIRATION_CONTROL} to disable the
                 *         expiration control, or {@link #TTL_DONT_CACHE} to disable
                 *         caching.
                 * @exception NullPointerException
                 *         if <code>baseName</code> or <code>locale</code> is
                 *         <code>null</code>
                 */
                // @ts-ignore
                getTimeToLive(baseName: string, locale: java.util.Locale): long
                /**
                 * Determines if the expired <code>bundle</code> in the cache needs
                 * to be reloaded based on the loading time given by
                 * <code>loadTime</code> or some other criteria. The method returns
                 * <code>true</code> if reloading is required; <code>false</code>
                 * otherwise. <code>loadTime</code> is a millisecond offset since
                 * the <a href="Calendar.html#Epoch"> <code>Calendar</code>
                 * Epoch</a>.
                 * The calling <code>ResourceBundle.getBundle</code> factory method
                 * calls this method on the <code>ResourceBundle.Control</code>
                 * instance used for its current invocation, not on the instance
                 * used in the invocation that originally loaded the resource
                 * bundle.
                 * <p>The default implementation compares <code>loadTime</code> and
                 * the last modified time of the source data of the resource
                 * bundle. If it's determined that the source data has been modified
                 * since <code>loadTime</code>, <code>true</code> is
                 * returned. Otherwise, <code>false</code> is returned. This
                 * implementation assumes that the given <code>format</code> is the
                 * same string as its file suffix if it's not one of the default
                 * formats, <code>"java.class"</code> or
                 * <code>"java.properties"</code>.
                 * @param baseName
                 *         the base bundle name of the resource bundle, a
                 *         fully qualified class name
                 * @param locale
                 *         the locale for which the resource bundle
                 *         should be instantiated
                 * @param format
                 *         the resource bundle format to be loaded
                 * @param loader
                 *         the <code>ClassLoader</code> to use to load the bundle
                 * @param bundle
                 *         the resource bundle instance that has been expired
                 *         in the cache
                 * @param loadTime
                 *         the time when <code>bundle</code> was loaded and put
                 *         in the cache
                 * @return <code>true</code> if the expired bundle needs to be
                 *         reloaded; <code>false</code> otherwise.
                 * @exception NullPointerException
                 *         if <code>baseName</code>, <code>locale</code>,
                 *         <code>format</code>, <code>loader</code>, or
                 *         <code>bundle</code> is <code>null</code>
                 */
                // @ts-ignore
                needsReload(baseName: string, locale: java.util.Locale, format: string, loader: java.lang.ClassLoader, bundle: java.util.ResourceBundle, loadTime: number /*long*/): boolean
                /**
                 * Converts the given <code>baseName</code> and <code>locale</code>
                 * to the bundle name. This method is called from the default
                 * implementation of the {@link #newBundle(String, Locale, String,
                 * ClassLoader, boolean) newBundle} and {@link #needsReload(String,
                 * Locale, String, ClassLoader, ResourceBundle, long) needsReload}
                 * methods.
                 * <p>This implementation returns the following value:
                 * <pre>
                 * baseName + "_" + language + "_" + script + "_" + country + "_" + variant
                 * </pre>
                 * where <code>language</code>, <code>script</code>, <code>country</code>,
                 * and <code>variant</code> are the language, script, country, and variant
                 * values of <code>locale</code>, respectively. Final component values that
                 * are empty Strings are omitted along with the preceding '_'.  When the
                 * script is empty, the script value is omitted along with the preceding '_'.
                 * If all of the values are empty strings, then <code>baseName</code>
                 * is returned.
                 * <p>For example, if <code>baseName</code> is
                 * <code>"baseName"</code> and <code>locale</code> is
                 * <code>Locale("ja",&nbsp;"",&nbsp;"XX")</code>, then
                 * <code>"baseName_ja_&thinsp;_XX"</code> is returned. If the given
                 * locale is <code>Locale("en")</code>, then
                 * <code>"baseName_en"</code> is returned.
                 * <p>Overriding this method allows applications to use different
                 * conventions in the organization and packaging of localized
                 * resources.
                 * @param baseName
                 *         the base name of the resource bundle, a fully
                 *         qualified class name
                 * @param locale
                 *         the locale for which a resource bundle should be
                 *         loaded
                 * @return the bundle name for the resource bundle
                 * @exception NullPointerException
                 *         if <code>baseName</code> or <code>locale</code>
                 *         is <code>null</code>
                 */
                // @ts-ignore
                toBundleName(baseName: string, locale: java.util.Locale): java.lang.String
                /**
                 * Converts the given <code>bundleName</code> to the form required
                 * by the {@link ClassLoader#getResource ClassLoader.getResource}
                 * method by replacing all occurrences of <code>'.'</code> in
                 * <code>bundleName</code> with <code>'/'</code> and appending a
                 * <code>'.'</code> and the given file <code>suffix</code>. For
                 * example, if <code>bundleName</code> is
                 * <code>"foo.bar.MyResources_ja_JP"</code> and <code>suffix</code>
                 * is <code>"properties"</code>, then
                 * <code>"foo/bar/MyResources_ja_JP.properties"</code> is returned.
                 * @param bundleName
                 *         the bundle name
                 * @param suffix
                 *         the file type suffix
                 * @return the converted resource name
                 * @exception NullPointerException
                 *          if <code>bundleName</code> or <code>suffix</code>
                 *          is <code>null</code>
                 */
                // @ts-ignore
                toResourceName(bundleName: string, suffix: string): java.lang.String
            }
        }
    }
}
