declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace support {
                    /**
                     * Convenient utility methods for loading of {@code java.util.Properties},
                     * performing standard handling of input streams.
                     * <p>For more configurable properties loading, including the option of a
                     * customized encoding, consider using the PropertiesLoaderSupport class.
                     * @author Juergen Hoeller
                     * @author Rob Harrop
                     * @since 2.0
                     * @see PropertiesLoaderSupport
                     */
                    // @ts-ignore
                    class PropertiesLoaderUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Load properties from the given EncodedResource,
                         * potentially defining a specific encoding for the properties file.
                         * @see #fillProperties(java.util.Properties, EncodedResource)
                         */
                        // @ts-ignore
                        loadProperties(resource: org.springframework.core.io.support.EncodedResource): java.util.Properties
                        /**
                         * Fill the given properties from the given EncodedResource,
                         * potentially defining a specific encoding for the properties file.
                         * @param props the Properties instance to load into
                         * @param resource the resource to load from
                         * @throws IOException in case of I/O errors
                         */
                        // @ts-ignore
                        fillProperties(props: java.util.Properties, resource: org.springframework.core.io.support.EncodedResource): void
                        /**
                         * Load properties from the given resource (in ISO-8859-1 encoding).
                         * @param resource the resource to load from
                         * @return the populated Properties instance
                         * @throws IOException if loading failed
                         * @see #fillProperties(java.util.Properties, Resource)
                         */
                        // @ts-ignore
                        loadProperties(resource: org.springframework.core.io.Resource): java.util.Properties
                        /**
                         * Fill the given properties from the given resource (in ISO-8859-1 encoding).
                         * @param props the Properties instance to fill
                         * @param resource the resource to load from
                         * @throws IOException if loading failed
                         */
                        // @ts-ignore
                        fillProperties(props: java.util.Properties, resource: org.springframework.core.io.Resource): void
                        /**
                         * Load all properties from the specified class path resource
                         * (in ISO-8859-1 encoding), using the default class loader.
                         * <p>Merges properties if more than one resource of the same name
                         * found in the class path.
                         * @param resourceName the name of the class path resource
                         * @return the populated Properties instance
                         * @throws IOException if loading failed
                         */
                        // @ts-ignore
                        loadAllProperties(resourceName: string): java.util.Properties
                        /**
                         * Load all properties from the specified class path resource
                         * (in ISO-8859-1 encoding), using the given class loader.
                         * <p>Merges properties if more than one resource of the same name
                         * found in the class path.
                         * @param resourceName the name of the class path resource
                         * @param classLoader the ClassLoader to use for loading
                         *  (or {#code null} to use the default class loader)
                         * @return the populated Properties instance
                         * @throws IOException if loading failed
                         */
                        // @ts-ignore
                        loadAllProperties(resourceName: string, classLoader: java.lang.ClassLoader): java.util.Properties
                    }
                }
            }
        }
    }
}
