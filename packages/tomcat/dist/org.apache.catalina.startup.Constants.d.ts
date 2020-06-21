declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * String constants for the startup package.
                 * <br>
                 * Note that some values include a leading '/' and that some do not. This is
                 * intentional based on how the values are used.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class Constants extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly Package: java.lang.String | string
                    // @ts-ignore
                    public static readonly ApplicationContextXml: java.lang.String | string
                    // @ts-ignore
                    public static readonly ApplicationWebXml: java.lang.String | string
                    // @ts-ignore
                    public static readonly TomcatWebXml: java.lang.String | string
                    // @ts-ignore
                    public static readonly DefaultContextXml: java.lang.String | string
                    // @ts-ignore
                    public static readonly DefaultWebXml: java.lang.String | string
                    // @ts-ignore
                    public static readonly HostContextXml: java.lang.String | string
                    // @ts-ignore
                    public static readonly HostWebXml: java.lang.String | string
                    // @ts-ignore
                    public static readonly WarTracker: java.lang.String | string
                    /**
                     * A dummy value used to suppress loading the default web.xml file.
                     * <p>
                     * It is useful when embedding Tomcat, when the default configuration is
                     * done programmatically, e.g. by calling
                     * <code>Tomcat.initWebappDefaults(context)</code>.
                     * @see Tomcat
                     */
                    // @ts-ignore
                    public static readonly NoDefaultWebXml: java.lang.String | string
                }
            }
        }
    }
}
