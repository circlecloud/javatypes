declare namespace org {
    namespace apache {
        namespace juli {
            /**
             * Per classloader LogManager implementation.
             * For light debugging, set the system property
             * <code>org.apache.juli.ClassLoaderLogManager.debug=true</code>.
             * Short configuration information will be sent to <code>System.err</code>.
             */
            // @ts-ignore
            class ClassLoaderLogManager extends java.util.logging.LogManager {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static readonly DEBUG_PROPERTY: java.lang.String | string
                /**
                 * Map containing the classloader information, keyed per classloader. A
                 * weak hashmap is used to ensure no classloader reference is leaked from
                 * application redeployment.
                 */
                // @ts-ignore
                readonly classLoaderLoggers: java.util.Map<java.lang.ClassLoader, org.apache.juli.ClassLoaderLogManager.ClassLoaderLogInfo>
                /**
                 * This prefix is used to allow using prefixes for the properties names
                 * of handlers and their subcomponents.
                 */
                // @ts-ignore
                readonly prefix: java.lang.ThreadLocal<java.lang.String | string>
                /**
                 * Determines if the shutdown hook is used to perform any necessary
                 * clean-up such as flushing buffered handlers on JVM shutdown. Defaults to
                 * <code>true</code> but may be set to false if another component ensures
                 * that {@link #shutdown()} is called.
                 */
                // @ts-ignore
                useShutdownHook: boolean
                // @ts-ignore
                public isUseShutdownHook(): boolean
                // @ts-ignore
                public setUseShutdownHook(useShutdownHook: boolean): void
                /**
                 * Add the specified logger to the classloader local configuration.
                 * @param logger The logger to be added
                 */
                // @ts-ignore
                public addLogger(logger: java.util.logging.Logger): boolean
                /**
                 * Get the logger associated with the specified name inside
                 * the classloader local configuration. If this returns null,
                 * and the call originated for Logger.getLogger, a new
                 * logger with the specified name will be instantiated and
                 * added using addLogger.
                 * @param name The name of the logger to retrieve
                 */
                // @ts-ignore
                public getLogger(name: java.lang.String | string): java.util.logging.Logger
                /**
                 * Get an enumeration of the logger names currently defined in the
                 * classloader local configuration.
                 */
                // @ts-ignore
                public getLoggerNames(): java.util.Enumeration<java.lang.String | string>
                /**
                 * Get the value of the specified property in the classloader local
                 * configuration.
                 * @param name The property name
                 */
                // @ts-ignore
                public getProperty(name: java.lang.String | string): string
                // @ts-ignore
                public readConfiguration(): void
                // @ts-ignore
                public readConfiguration(jis: java.io.InputStream): void
                // @ts-ignore
                public reset(): void
                /**
                 * Shuts down the logging system.
                 */
                // @ts-ignore
                public shutdown(): void
                /**
                 * Retrieve the configuration associated with the specified classloader. If
                 * it does not exist, it will be created.
                 * @param classLoader The classloader for which we will retrieve or build the
                 *                     configuration
                 * @return the log configuration
                 */
                // @ts-ignore
                getClassLoaderInfo(classLoader: java.lang.ClassLoader): org.apache.juli.ClassLoaderLogManager.ClassLoaderLogInfo
                /**
                 * Read configuration for the specified classloader.
                 * @param classLoader The classloader
                 * @throws IOException Error reading configuration
                 */
                // @ts-ignore
                readConfiguration(classLoader: java.lang.ClassLoader): void
                /**
                 * Load specified configuration.
                 * @param is InputStream to the properties file
                 * @param classLoader for which the configuration will be loaded
                 * @throws IOException If something wrong happens during loading
                 */
                // @ts-ignore
                readConfiguration(jis: java.io.InputStream, classLoader: java.lang.ClassLoader): void
                /**
                 * Set parent child relationship between the two specified loggers.
                 * @param logger The logger
                 * @param parent The parent logger
                 */
                // @ts-ignore
                static doSetParentLogger(logger: java.util.logging.Logger, parent: java.util.logging.Logger): void
                /**
                 * System property replacement in the given string.
                 * @param str The original string
                 * @return the modified string
                 */
                // @ts-ignore
                replace(str: java.lang.String | string): string
            }
        }
    }
}
