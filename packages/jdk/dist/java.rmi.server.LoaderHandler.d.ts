declare namespace java {
    namespace rmi {
        namespace server {
            /**
             * <code>LoaderHandler</code> is an interface used internally by the RMI
             * runtime in previous implementation versions.  It should never be accessed
             * by application code.
             * @author Ann Wollrath
             * @since JDK1.1
             * @deprecated no replacement
             */
            // @ts-ignore
            interface LoaderHandler {
                /**
                 * package of system <code>LoaderHandler</code> implementation.
                 */
                // @ts-ignore
                
                /**
                 * Loads a class from the location specified by the
                 * <code>java.rmi.server.codebase</code> property.
                 * @param name the name of the class to load
                 * @return the <code>Class</code> object representing the loaded class
                 * @exception MalformedURLException
                 *             if the system property <b>java.rmi.server.codebase</b>
                 *             contains an invalid URL
                 * @exception ClassNotFoundException
                 *             if a definition for the class could not
                 *             be found at the codebase location.
                 * @since JDK1.1
                 * @deprecated no replacement
                 */
                // @ts-ignore
                loadClass(name: string): java.lang.Class<?>
                /**
                 * Loads a class from a URL.
                 * @param codebase  the URL from which to load the class
                 * @param name      the name of the class to load
                 * @return the <code>Class</code> object representing the loaded class
                 * @exception MalformedURLException
                 *             if the <code>codebase</code> paramater
                 *             contains an invalid URL
                 * @exception ClassNotFoundException
                 *             if a definition for the class could not
                 *             be found at the specified URL
                 * @since JDK1.1
                 * @deprecated no replacement
                 */
                // @ts-ignore
                loadClass(codebase: java.net.URL, name: string): java.lang.Class<?>
                /**
                 * Returns the security context of the given class loader.
                 * @param loader  a class loader from which to get the security context
                 * @return the security context
                 * @since JDK1.1
                 * @deprecated no replacement
                 */
                // @ts-ignore
                getSecurityContext(loader: java.lang.ClassLoader): java.lang.Object
            }
        }
    }
}
