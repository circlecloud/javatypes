declare namespace org {
    namespace apache {
        namespace naming {
            /**
             * An internationalization / localization helper class which reduces
             * the bother of handling ResourceBundles and takes care of the
             * common cases of message formating which otherwise require the
             * creation of Object arrays and such.
             * <p>The StringManager operates on a package basis. One StringManager
             * per package can be created and accessed via the getManager method
             * call.
             * <p>The StringManager will look for a ResourceBundle named by
             * the package name given plus the suffix of "LocalStrings". In
             * practice, this means that the localized information will be contained
             * in a LocalStrings.properties file located in the package
             * directory of the classpath.
             * <p>Please see the documentation for java.util.ResourceBundle for
             * more information.
             * @author James Duncan Davidson [duncan#eng.sun.com]
             * @author James Todd [gonzo#eng.sun.com]
             * @author Mel Martinez [mmartinez#g1440.com]
             * @see java.util.ResourceBundle
             */
            // @ts-ignore
            class StringManager extends java.lang.Object {
                /**
                 * Get a string from the underlying resource bundle or return
                 * null if the String is not found.
                 * @param key to desired resource String
                 * @return resource String matching <i>key</i> from underlying
                 *                 bundle or null if not found.
                 * @throws IllegalArgumentException if <i>key</i> is null.
                 */
                // @ts-ignore
                public getString(key: java.lang.String | string): string
                /**
                 * Get a string from the underlying resource bundle and format
                 * it with the given set of arguments.
                 * @param key  The key for the required message
                 * @param args The values to insert into the message
                 * @return The request string formatted with the provided arguments or the
                 *          key if the key was not found.
                 */
                // @ts-ignore
                public getString(key: java.lang.String | string, ...args: java.lang.Object[] | any[]): string
                /**
                 * Get the StringManager for a particular package. If a manager for
                 * a package already exists, it will be reused, else a new
                 * StringManager will be created and returned.
                 * @param packageName The package name
                 * @return The instance associated with the given package
                 */
                // @ts-ignore
                public static getManager(packageName: java.lang.String | string): org.apache.naming.StringManager
                // @ts-ignore
                public static getManager(clazz: java.lang.Class<any>): org.apache.naming.StringManager
            }
        }
    }
}
