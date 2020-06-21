declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace file {
                    /**
                     * Abstracts configuration file storage. Allows Tomcat embedding using the regular
                     * configuration style.
                     * This abstraction aims to be very simple and does not cover resource listing,
                     * which is usually used for dynamic deployments that are usually not used when
                     * embedding, as well as resource writing.
                     */
                    // @ts-ignore
                    interface ConfigurationSource {
                        /**
                         * Returns the contents of the main conf/server.xml file.
                         * @return the server.xml as an InputStream
                         * @throws IOException if an error occurs or if the resource does not exist
                         */
                        // @ts-ignore
                        getServerXml(): org.apache.tomcat.util.file.ConfigurationSource.Resource
                        /**
                         * Returns the contents of the shared conf/web.xml file. This usually
                         * contains the declaration of the default and JSP servlets.
                         * @return the web.xml as an InputStream
                         * @throws IOException if an error occurs or if the resource does not exist
                         */
                        // @ts-ignore
                        getSharedWebXml(): org.apache.tomcat.util.file.ConfigurationSource.Resource
                        /**
                         * Get a resource, based on the conf path.
                         * @param name The resource name
                         * @return the resource as an InputStream
                         * @throws IOException if an error occurs or if the resource does not exist
                         */
                        // @ts-ignore
                        getConfResource(name: java.lang.String | string): org.apache.tomcat.util.file.ConfigurationSource.Resource
                        /**
                         * Get a resource, not based on the conf path.
                         * @param name The resource name
                         * @return the resource
                         * @throws IOException if an error occurs or if the resource does not exist
                         */
                        // @ts-ignore
                        getResource(name: java.lang.String | string): org.apache.tomcat.util.file.ConfigurationSource.Resource
                        /**
                         * Get a URI to the given resource. Unlike getResource, this will also
                         * return URIs to locations where no resource exists.
                         * @param name The resource name
                         * @return a URI representing the resource location
                         */
                        // @ts-ignore
                        getURI(name: java.lang.String | string): java.net.URI
                    }
                }
            }
        }
    }
}
