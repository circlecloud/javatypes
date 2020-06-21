declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * Bootstrap loader for Catalina.  This application constructs a class loader
                 * for use in loading the Catalina internal classes (by accumulating all of the
                 * JAR files found in the "server" directory under "catalina.home"), and
                 * starts the regular execution of the container.  The purpose of this
                 * roundabout approach is to keep the Catalina internal classes (and any
                 * other classes they depend on, such as an XML parser) out of the system
                 * class path and therefore not visible to application level classes.
                 * @author Craig R. McClanahan
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class Bootstrap extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * System property replacement in the given string.
                     * @param str The original string
                     * @return the modified string
                     */
                    // @ts-ignore
                    replace(str: java.lang.String | string): string
                    /**
                     * Initialize daemon.
                     * @throws Exception Fatal initialization error
                     */
                    // @ts-ignore
                    public init(): void
                    /**
                     * Load the Catalina daemon.
                     * @param arguments Initialization arguments
                     * @throws Exception Fatal initialization error
                     */
                    // @ts-ignore
                    public init(arguments: java.lang.String[] | string[]): void
                    /**
                     * Start the Catalina daemon.
                     * @throws Exception Fatal start error
                     */
                    // @ts-ignore
                    public start(): void
                    /**
                     * Stop the Catalina Daemon.
                     * @throws Exception Fatal stop error
                     */
                    // @ts-ignore
                    public stop(): void
                    /**
                     * Stop the standalone server.
                     * @throws Exception Fatal stop error
                     */
                    // @ts-ignore
                    public stopServer(): void
                    /**
                     * Stop the standalone server.
                     * @param arguments Command line arguments
                     * @throws Exception Fatal stop error
                     */
                    // @ts-ignore
                    public stopServer(arguments: java.lang.String[] | string[]): void
                    /**
                     * Set flag.
                     * @param await <code>true</code> if the daemon should block
                     * @throws Exception Reflection error
                     */
                    // @ts-ignore
                    public setAwait(await: boolean): void
                    // @ts-ignore
                    public getAwait(): boolean
                    /**
                     * Destroy the Catalina Daemon.
                     */
                    // @ts-ignore
                    public destroy(): void
                    /**
                     * Main method and entry point when starting Tomcat via the provided
                     * scripts.
                     * @param args Command line arguments to be processed
                     */
                    // @ts-ignore
                    public static main(args: java.lang.String[] | string[]): void
                    /**
                     * Obtain the name of configured home (binary) directory. Note that home and
                     * base may be the same (and are by default).
                     * @return the catalina home
                     */
                    // @ts-ignore
                    public static getCatalinaHome(): string
                    /**
                     * Obtain the name of the configured base (instance) directory. Note that
                     * home and base may be the same (and are by default). If this is not set
                     * the value returned by {@link #getCatalinaHome()} will be used.
                     * @return the catalina base
                     */
                    // @ts-ignore
                    public static getCatalinaBase(): string
                    /**
                     * Obtain the configured home (binary) directory. Note that home and
                     * base may be the same (and are by default).
                     * @return the catalina home as a file
                     */
                    // @ts-ignore
                    public static getCatalinaHomeFile(): java.io.File
                    /**
                     * Obtain the configured base (instance) directory. Note that
                     * home and base may be the same (and are by default). If this is not set
                     * the value returned by {@link #getCatalinaHomeFile()} will be used.
                     * @return the catalina base as a file
                     */
                    // @ts-ignore
                    public static getCatalinaBaseFile(): java.io.File
                    // @ts-ignore
                    static getPaths(value: java.lang.String | string): string[]
                }
            }
        }
    }
}
