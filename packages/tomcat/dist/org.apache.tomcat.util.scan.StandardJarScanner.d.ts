declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace scan {
                    /**
                     * The default {@link JarScanner} implementation scans the WEB-INF/lib directory
                     * followed by the provided classloader and then works up the classloader
                     * hierarchy. This implementation is sufficient to meet the requirements of the
                     * Servlet 3.0 specification as well as to provide a number of Tomcat specific
                     * extensions. The extensions are:
                     * <ul>
                     * <li>Scanning the classloader hierarchy (enabled by default)</li>
                     * <li>Testing all files to see if they are JARs (disabled by default)</li>
                     * <li>Testing all directories to see if they are exploded JARs
                     * (disabled by default)</li>
                     * </ul>
                     * All of the extensions may be controlled via configuration.
                     */
                    // @ts-ignore
                    class StandardJarScanner extends java.lang.Object implements org.apache.tomcat.JarScanner {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public isScanClassPath(): boolean
                        // @ts-ignore
                        public setScanClassPath(scanClassPath: boolean): void
                        // @ts-ignore
                        public isScanManifest(): boolean
                        // @ts-ignore
                        public setScanManifest(scanManifest: boolean): void
                        // @ts-ignore
                        public isScanAllFiles(): boolean
                        // @ts-ignore
                        public setScanAllFiles(scanAllFiles: boolean): void
                        // @ts-ignore
                        public isScanAllDirectories(): boolean
                        // @ts-ignore
                        public setScanAllDirectories(scanAllDirectories: boolean): void
                        // @ts-ignore
                        public isScanBootstrapClassPath(): boolean
                        // @ts-ignore
                        public setScanBootstrapClassPath(scanBootstrapClassPath: boolean): void
                        // @ts-ignore
                        public getJarScanFilter(): org.apache.tomcat.JarScanFilter
                        // @ts-ignore
                        public setJarScanFilter(jarScanFilter: org.apache.tomcat.JarScanFilter): void
                        /**
                         * Scan the provided ServletContext and class loader for JAR files. Each JAR
                         * file found will be passed to the callback handler to be processed.
                         * @param scanType      The type of JAR scan to perform. This is passed to
                         *                           the filter which uses it to determine how to
                         *                           filter the results
                         * @param context       The ServletContext - used to locate and access
                         *                       WEB-INF/lib
                         * @param callback      The handler to process any JARs found
                         */
                        // @ts-ignore
                        public scan(scanType: org.apache.tomcat.JarScanType, context: javax.servlet.ServletContext, callback: org.apache.tomcat.JarScannerCallback): void
                        // @ts-ignore
                        doScanClassPath(scanType: org.apache.tomcat.JarScanType, context: javax.servlet.ServletContext, callback: org.apache.tomcat.JarScannerCallback, processedURLs: java.util.Set<java.net.URL> | Array<java.net.URL>): void
                        // @ts-ignore
                        processURLs(scanType: org.apache.tomcat.JarScanType, callback: org.apache.tomcat.JarScannerCallback, processedURLs: java.util.Set<java.net.URL> | Array<java.net.URL>, isWebapp: boolean, classPathUrlsToProcess: java.util.Deque<java.net.URL>): void
                        // @ts-ignore
                        addClassPath(classPathUrlsToProcess: java.util.Deque<java.net.URL>): void
                        // @ts-ignore
                        process(scanType: org.apache.tomcat.JarScanType, callback: org.apache.tomcat.JarScannerCallback, url: java.net.URL, webappPath: java.lang.String | string, isWebapp: boolean, classPathUrlsToProcess: java.util.Deque<java.net.URL>): void
                    }
                }
            }
        }
    }
}
