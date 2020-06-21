declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * <p>Utility class for building class loaders for Catalina.  The factory
                 * method requires the following parameters in order to build a new class
                 * loader (with suitable defaults in all cases):</p>
                 * <ul>
                 * <li>A set of directories containing unpacked classes (and resources)
                 * that should be included in the class loader's
                 * repositories.</li>
                 * <li>A set of directories containing classes and resources in JAR files.
                 * Each readable JAR file discovered in these directories will be
                 * added to the class loader's repositories.</li>
                 * <li><code>ClassLoader</code> instance that should become the parent of
                 * the new class loader.</li>
                 * </ul>
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class ClassLoaderFactory extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Create and return a new class loader, based on the configuration
                     * defaults and the specified directory paths:
                     * @param unpacked Array of pathnames to unpacked directories that should
                     *   be added to the repositories of the class loader, or <code>null</code>
                     *  for no unpacked directories to be considered
                     * @param packed Array of pathnames to directories containing JAR files
                     *   that should be added to the repositories of the class loader,
                     *  or <code>null</code> for no directories of JAR files to be considered
                     * @param parent Parent class loader for the new class loader, or
                     *   <code>null</code> for the system class loader.
                     * @return the new class loader
                     * @exception Exception if an error occurs constructing the class loader
                     */
                    // @ts-ignore
                    public static createClassLoader(unpacked: java.io.File[], packed: java.io.File[], parent: java.lang.ClassLoader): java.lang.ClassLoader
                    /**
                     * Create and return a new class loader, based on the configuration
                     * defaults and the specified directory paths:
                     * @param repositories List of class directories, jar files, jar directories
                     *                      or URLS that should be added to the repositories of
                     *                      the class loader.
                     * @param parent Parent class loader for the new class loader, or
                     *   <code>null</code> for the system class loader.
                     * @return the new class loader
                     * @exception Exception if an error occurs constructing the class loader
                     */
                    // @ts-ignore
                    public static createClassLoader(repositories: java.util.List<org.apache.catalina.startup.ClassLoaderFactory.Repository> | Array<org.apache.catalina.startup.ClassLoaderFactory.Repository>, parent: java.lang.ClassLoader): java.lang.ClassLoader
                }
            }
        }
    }
}
