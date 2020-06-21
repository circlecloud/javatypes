declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace compat {
                    /**
                     * This is the base implementation class for JRE compatibility and provides an
                     * implementation based on Java 8. Sub-classes may extend this class and provide
                     * alternative implementations for later JRE versions
                     */
                    // @ts-ignore
                    class JreCompat extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static getInstance(): org.apache.tomcat.util.compat.JreCompat
                        // @ts-ignore
                        public static isJre9Available(): boolean
                        /**
                         * Test if the provided exception is an instance of
                         * java.lang.reflect.InaccessibleObjectException.
                         * @param t The exception to test
                         * @return {#code true} if the exception is an instance of
                         *          InaccessibleObjectException, otherwise {@code false}
                         */
                        // @ts-ignore
                        public isInstanceOfInaccessibleObjectException(t: java.lang.Throwable | Error): boolean
                        /**
                         * Set the application protocols the server will accept for ALPN
                         * @param sslParameters The SSL parameters for a connection
                         * @param protocols     The application protocols to be allowed for that
                         *                       connection
                         */
                        // @ts-ignore
                        public setApplicationProtocols(sslParameters: javax.net.ssl.SSLParameters, protocols: java.lang.String[] | string[]): void
                        /**
                         * Get the application protocol that has been negotiated for connection
                         * associated with the given SSLEngine.
                         * @param sslEngine The SSLEngine for which to obtain the negotiated
                         *                   protocol
                         * @return The name of the negotiated protocol
                         */
                        // @ts-ignore
                        public getApplicationProtocol(sslEngine: javax.net.ssl.SSLEngine): string
                        /**
                         * Disables caching for JAR URL connections. For Java 8 and earlier, this also disables
                         * caching for ALL URL connections.
                         * @throws IOException If a dummy JAR URLConnection can not be created
                         */
                        // @ts-ignore
                        public disableCachingForJarUrlConnections(): void
                        /**
                         * Obtains the URLs for all the JARs on the module path when the JVM starts
                         * and adds them to the provided Deque.
                         * @param classPathUrlsToProcess    The Deque to which the modules should be
                         *                                   added
                         */
                        // @ts-ignore
                        public addBootModulePath(classPathUrlsToProcess: java.util.Deque<java.net.URL>): void
                        /**
                         * Creates a new JarFile instance. When running on Java 9 and later, the
                         * JarFile will be multi-release JAR aware. While this isn't strictly
                         * required to be in this package, it is provided as a convenience method.
                         * @param s The JAR file to open
                         * @return A JarFile instance based on the provided path
                         * @throws IOException  If an I/O error occurs creating the JarFile instance
                         */
                        // @ts-ignore
                        public jarFileNewInstance(s: java.lang.String | string): java.util.jar.JarFile
                        /**
                         * Creates a new JarFile instance. When running on Java 9 and later, the
                         * JarFile will be multi-release JAR aware.
                         * @param f The JAR file to open
                         * @return A JarFile instance based on the provided file
                         * @throws IOException  If an I/O error occurs creating the JarFile instance
                         */
                        // @ts-ignore
                        public jarFileNewInstance(f: java.io.File): java.util.jar.JarFile
                        /**
                         * Is this JarFile a multi-release JAR file.
                         * @param jarFile   The JarFile to test
                         * @return {#code true} If it is a multi-release JAR file and is configured
                         *          to behave as such.
                         */
                        // @ts-ignore
                        public jarFileIsMultiRelease(jarFile: java.util.jar.JarFile): boolean
                        // @ts-ignore
                        public jarFileRuntimeMajorVersion(): number /*int*/
                    }
                }
            }
        }
    }
}
