declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace tld {
                        /**
                         * A TLD Resource Path as defined in JSP 7.3.2.
                         * <p>
                         * This encapsulates references to Tag Library Descriptors that can be located
                         * in different places:
                         * <ul>
                         * <li>As resources within an application</li>
                         * <li>As entries in JAR files included in the application</li>
                         * <li>As resources provided by the container</li>
                         * </ul>
                         * When configuring a mapping from a well-known URI to a TLD, a user is allowed
                         * to specify just the name of a JAR file that implicitly contains a TLD in
                         * <code>META-INF/taglib.tld</code>. Such a mapping must be explicitly converted
                         * to a URL and entryName when using this implementation.
                         */
                        // @ts-ignore
                        class TldResourcePath extends java.lang.Object {
                            /**
                             * Constructor identifying a TLD resource directly.
                             * @param url        the location of the TLD
                             * @param webappPath the web application path, if any, of the TLD
                             */
                            // @ts-ignore
                            constructor(url: java.net.URL, webappPath: java.lang.String | string)
                            /**
                             * Constructor identifying a TLD packaged within a JAR file.
                             * @param url        the location of the JAR
                             * @param webappPath the web application path, if any, of the JAR
                             * @param entryName  the name of the entry in the JAR
                             */
                            // @ts-ignore
                            constructor(url: java.net.URL, webappPath: java.lang.String | string, entryName: java.lang.String | string)
                            /**
                             * Returns the URL of the TLD or of the JAR containing the TLD.
                             * @return the URL of the TLD
                             */
                            // @ts-ignore
                            public getUrl(): java.net.URL
                            /**
                             * Returns the path within the web application, if any, that the resource
                             * returned by {@link #getUrl()} was obtained from.
                             * @return the web application path or #null if the the resource is not
                             *          located within a web application
                             */
                            // @ts-ignore
                            public getWebappPath(): string
                            /**
                             * Returns the name of the JAR entry that contains the TLD.
                             * May be null to indicate the URL refers directly to the TLD itself.
                             * @return the name of the JAR entry that contains the TLD
                             */
                            // @ts-ignore
                            public getEntryName(): string
                            /**
                             * Return the external form of the URL representing this TLD.
                             * This can be used as a canonical location for the TLD itself, for example,
                             * as the systemId to use when parsing its XML.
                             * @return the external form of the URL representing this TLD
                             */
                            // @ts-ignore
                            public toExternalForm(): string
                            /**
                             * Opens a stream to access the TLD.
                             * @return a stream containing the TLD content
                             * @throws IOException if there was a problem opening the stream
                             */
                            // @ts-ignore
                            public openStream(): java.io.InputStream
                            // @ts-ignore
                            public openJar(): org.apache.tomcat.Jar
                            // @ts-ignore
                            public equals(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
