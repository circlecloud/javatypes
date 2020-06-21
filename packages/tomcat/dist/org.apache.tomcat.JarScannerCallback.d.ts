declare namespace org {
    namespace apache {
        namespace tomcat {
            /**
             * This interface is implemented by clients of the {@link JarScanner} to enable
             * them to receive notification of a discovered JAR.
             */
            // @ts-ignore
            interface JarScannerCallback {
                /**
                 * A JAR was found and may be accessed for further processing via the
                 * provided URL connection. The caller is responsible for closing the JAR.
                 * @param jar        The JAR to process
                 * @param webappPath The path, if any, to the JAR within the web application
                 * @param isWebapp   Indicates if the JAR was found within a web
                 *                        application. If <code>false</code> the JAR should
                 *                        be treated as being provided by the container
                 * @throws IOException if an I/O error occurs while scanning the JAR
                 */
                // @ts-ignore
                scan(jar: org.apache.tomcat.Jar, webappPath: java.lang.String | string, isWebapp: boolean): void
                /**
                 * A directory was found that is to be treated as an unpacked JAR. The
                 * directory may be accessed for further processing via the provided file.
                 * @param file       The directory containing the unpacked JAR.
                 * @param webappPath The path, if any, to the file within the web
                 *                        application
                 * @param isWebapp   Indicates if the JAR was found within a web
                 *                        application. If <code>false</code> the JAR should
                 *                        be treated as being provided by the container
                 * @throws IOException if an I/O error occurs while scanning the JAR
                 */
                // @ts-ignore
                scan(file: java.io.File, webappPath: java.lang.String | string, isWebapp: boolean): void
                /**
                 * A directory structure was found within the web application at
                 * /WEB-INF/classes that should be handled as an unpacked JAR. Note that all
                 * resource access must be via the ServletContext to ensure that any
                 * additional resources are visible.
                 * @throws IOException if an I/O error occurs while scanning WEB-INF/classes
                 */
                // @ts-ignore
                scanWebInfClasses(): void
            }
        }
    }
}
