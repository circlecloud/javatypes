declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * Utility class that attempts to map from a Locale to the corresponding
                 * character set to be used for interpreting input text (or generating
                 * output text) when the Content-Type header does not include one.  You
                 * can customize the behavior of this class by modifying the mapping data
                 * it loads, or by subclassing it (to change the algorithm) and then using
                 * your own version for a particular web application.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class CharsetMapper extends java.lang.Object {
                    /**
                     * Construct a new CharsetMapper using the default properties resource.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new CharsetMapper using the specified properties resource.
                     * @param name Name of a properties resource to be loaded
                     * @exception IllegalArgumentException if the specified properties
                     *   resource could not be loaded for any reason.
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    /**
                     * Default properties resource name.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_RESOURCE: java.lang.String | string
                    /**
                     * Calculate the name of a character set to be assumed, given the specified
                     * Locale and the absence of a character set specified as part of the
                     * content type header.
                     * @param locale The locale for which to calculate a character set
                     * @return the charset name
                     */
                    // @ts-ignore
                    public getCharset(locale: java.util.Locale): string
                    /**
                     * The deployment descriptor can have a
                     * locale-encoding-mapping-list element which describes the
                     * webapp's desired mapping from locale to charset.  This method
                     * gets called when processing the web.xml file for a context
                     * @param locale The locale for a character set
                     * @param charset The charset to be associated with the locale
                     */
                    // @ts-ignore
                    public addCharsetMappingFromDeploymentDescriptor(locale: java.lang.String | string, charset: java.lang.String | string): void
                }
            }
        }
    }
}
