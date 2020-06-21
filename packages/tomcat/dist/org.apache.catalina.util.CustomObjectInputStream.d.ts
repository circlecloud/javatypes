declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * Custom subclass of <code>ObjectInputStream</code> that loads from the
                 * class loader for this web application.  This allows classes defined only
                 * with the web application to be found correctly.
                 * @author Craig R. McClanahan
                 * @author Bip Thelin
                 */
                // @ts-ignore
                class CustomObjectInputStream extends java.io.ObjectInputStream {
                    /**
                     * Construct a new instance of CustomObjectInputStream without any filtering
                     * of deserialized classes.
                     * @param stream The input stream we will read from
                     * @param classLoader The class loader used to instantiate objects
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    constructor(stream: java.io.InputStream, classLoader: java.lang.ClassLoader)
                    /**
                     * Construct a new instance of CustomObjectInputStream with filtering of
                     * deserialized classes.
                     * @param stream The input stream we will read from
                     * @param classLoader The class loader used to instantiate objects
                     * @param log The logger to use to report any issues. It may only be null if
                     *             the filterMode does not require logging
                     * @param allowedClassNamePattern The regular expression to use to filter
                     *                                 deserialized classes. The fully qualified
                     *                                 class name must match this pattern for
                     *                                 deserialization to be allowed if filtering
                     *                                 is enabled.
                     * @param warnOnFailure Should any failures be logged?
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    constructor(stream: java.io.InputStream, classLoader: java.lang.ClassLoader, log: org.apache.juli.logging.Log, allowedClassNamePattern: java.util.regex.Pattern, warnOnFailure: boolean)
                    /**
                     * Load the local class equivalent of the specified stream class
                     * description, by using the class loader assigned to this Context.
                     * @param classDesc Class description from the input stream
                     * @exception ClassNotFoundException if this class cannot be found
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public resolveClass(classDesc: java.io.ObjectStreamClass): java.lang.Class<any>
                    /**
                     * Return a proxy class that implements the interfaces named in a proxy
                     * class descriptor. Do this using the class loader assigned to this
                     * Context.
                     */
                    // @ts-ignore
                    resolveProxyClass(interfaces: java.lang.String[] | string[]): java.lang.Class<any>
                }
            }
        }
    }
}
