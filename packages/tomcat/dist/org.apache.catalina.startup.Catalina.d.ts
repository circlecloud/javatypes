declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * Startup/Shutdown shell program for Catalina.  The following command line
                 * options are recognized:
                 * <ul>
                 * <li><b>-config {pathname}</b> - Set the pathname of the configuration file
                 * to be processed.  If a relative path is specified, it will be
                 * interpreted as relative to the directory pathname specified by the
                 * "catalina.base" system property.   [conf/server.xml]</li>
                 * <li><b>-help</b>      - Display usage information.</li>
                 * <li><b>-nonaming</b>  - Disable naming support.</li>
                 * <li><b>configtest</b> - Try to test the config</li>
                 * <li><b>start</b>      - Start an instance of Catalina.</li>
                 * <li><b>stop</b>       - Stop the currently running instance of Catalina.</li>
                 * </ul>
                 * @author Craig R. McClanahan
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class Catalina extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    public static readonly SERVER_XML: java.lang.String | string
                    /**
                     * The shared extensions class loader for this server.
                     */
                    // @ts-ignore
                    parentClassLoader: java.lang.ClassLoader
                    /**
                     * The server component we are starting or stopping.
                     */
                    // @ts-ignore
                    server: org.apache.catalina.Server
                    /**
                     * Use shutdown hook flag.
                     */
                    // @ts-ignore
                    useShutdownHook: boolean
                    /**
                     * Shutdown hook.
                     */
                    // @ts-ignore
                    shutdownHook: java.lang.Thread
                    /**
                     * Is naming enabled ?
                     */
                    // @ts-ignore
                    useNaming: boolean
                    /**
                     * Prevent duplicate loads.
                     */
                    // @ts-ignore
                    loaded: boolean
                    // @ts-ignore
                    public setConfigFile(file: java.lang.String | string): void
                    // @ts-ignore
                    public getConfigFile(): string
                    // @ts-ignore
                    public setUseShutdownHook(useShutdownHook: boolean): void
                    // @ts-ignore
                    public getUseShutdownHook(): boolean
                    /**
                     * Set the shared extensions class loader.
                     * @param parentClassLoader The shared extensions class loader.
                     */
                    // @ts-ignore
                    public setParentClassLoader(parentClassLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    public getParentClassLoader(): java.lang.ClassLoader
                    // @ts-ignore
                    public setServer(server: org.apache.catalina.Server): void
                    // @ts-ignore
                    public getServer(): org.apache.catalina.Server
                    /**
                     * @return <code>true</code> if naming is enabled.
                     */
                    // @ts-ignore
                    public isUseNaming(): boolean
                    /**
                     * Enables or disables naming support.
                     * @param useNaming The new use naming value
                     */
                    // @ts-ignore
                    public setUseNaming(useNaming: boolean): void
                    // @ts-ignore
                    public setAwait(b: boolean): void
                    // @ts-ignore
                    public isAwait(): boolean
                    /**
                     * Process the specified command line arguments.
                     * @param args Command line arguments to process
                     * @return <code>true</code> if we should continue processing
                     */
                    // @ts-ignore
                    arguments(args: java.lang.String[] | string[]): boolean
                    /**
                     * Return a File object representing our configuration file.
                     * @return the main configuration file
                     */
                    // @ts-ignore
                    configFile(): java.io.File
                    /**
                     * Create and configure the Digester we will be using for startup.
                     * @return the main digester to parse server.xml
                     */
                    // @ts-ignore
                    createStartDigester(): org.apache.tomcat.util.digester.Digester
                    /**
                     * Create and configure the Digester we will be using for shutdown.
                     * @return the digester to process the stop operation
                     */
                    // @ts-ignore
                    createStopDigester(): org.apache.tomcat.util.digester.Digester
                    // @ts-ignore
                    public stopServer(): void
                    // @ts-ignore
                    public stopServer(arguments: java.lang.String[] | string[]): void
                    /**
                     * Start a new server instance.
                     */
                    // @ts-ignore
                    public load(): void
                    // @ts-ignore
                    public load(args: java.lang.String[] | string[]): void
                    /**
                     * Start a new server instance.
                     */
                    // @ts-ignore
                    public start(): void
                    /**
                     * Stop an existing server instance.
                     */
                    // @ts-ignore
                    public stop(): void
                    /**
                     * Await and shutdown.
                     */
                    // @ts-ignore
                    public await(): void
                    /**
                     * Print usage information for this application.
                     */
                    // @ts-ignore
                    usage(): void
                    // @ts-ignore
                    initDirs(): void
                    // @ts-ignore
                    initStreams(): void
                    // @ts-ignore
                    initNaming(): void
                    /**
                     * Set the security package access/protection.
                     */
                    // @ts-ignore
                    setSecurityProtection(): void
                }
            }
        }
    }
}
