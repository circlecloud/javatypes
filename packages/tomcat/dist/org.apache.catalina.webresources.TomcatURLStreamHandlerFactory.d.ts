declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                // @ts-ignore
                class TomcatURLStreamHandlerFactory extends java.lang.Object implements java.net.URLStreamHandlerFactory {
                    /**
                     * Obtain a reference to the singleton instance. It is recommended that
                     * callers check the value of {@link #isRegistered()} before using the
                     * returned instance.
                     * @return A reference to the singleton instance
                     */
                    // @ts-ignore
                    public static getInstance(): org.apache.catalina.webresources.TomcatURLStreamHandlerFactory
                    /**
                     * Register this factory with the JVM. May be called more than once. The
                     * implementation ensures that registration only occurs once.
                     * @return <code>true</code> if the factory is already registered with the
                     *          JVM or was successfully registered as a result of this call.
                     *          <code>false</code> if the factory was disabled prior to this
                     *          call.
                     */
                    // @ts-ignore
                    public static register(): boolean
                    /**
                     * Prevent this this factory from registering with the JVM. May be called
                     * more than once.
                     * @return <code>true</code> if the factory is already disabled or was
                     *          successfully disabled as a result of this call.
                     *          <code>false</code> if the factory was already registered prior
                     *          to this call.
                     */
                    // @ts-ignore
                    public static disable(): boolean
                    /**
                     * Release references to any user provided factories that have been loaded
                     * using the provided class loader. Called during web application stop to
                     * prevent memory leaks.
                     * @param classLoader The class loader to release
                     */
                    // @ts-ignore
                    public static release(classLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    public isRegistered(): boolean
                    /**
                     * Since the JVM only allows a single call to
                     * {@link URL#setURLStreamHandlerFactory(URLStreamHandlerFactory)} and
                     * Tomcat needs to register a handler, provide a mechanism to allow
                     * applications to register their own handlers.
                     * @param factory The user provided factory to add to the factories Tomcat
                     *                 has already registered
                     */
                    // @ts-ignore
                    public addUserFactory(factory: java.net.URLStreamHandlerFactory): void
                    // @ts-ignore
                    public createURLStreamHandler(protocol: java.lang.String | string): java.net.URLStreamHandler
                }
            }
        }
    }
}
