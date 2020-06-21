declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace support {
                    /**
                     * Subclass of {@link PropertiesPropertySource} that loads a {@link Properties} object
                     * from a given {@link org.springframework.core.io.Resource} or resource location such as
                     * {@code "classpath:/com/myco/foo.properties"} or {@code "file:/path/to/file.xml"}.
                     * <p>Both traditional and XML-based properties file formats are supported; however, in
                     * order for XML processing to take effect, the underlying {@code Resource}'s
                     * {@link org.springframework.core.io.Resource#getFilename() getFilename()} method must
                     * return a non-{@code null} value that ends in {@code ".xml"}.
                     * @author Chris Beams
                     * @author Juergen Hoeller
                     * @since 3.1
                     * @see org.springframework.core.io.Resource
                     * @see org.springframework.core.io.support.EncodedResource
                     */
                    // @ts-ignore
                    class ResourcePropertySource extends org.springframework.core.env.PropertiesPropertySource {
                        /**
                         * Create a PropertySource having the given name based on Properties
                         * loaded from the given encoded resource.
                         */
                        // @ts-ignore
                        constructor(name: java.lang.String | string, resource: org.springframework.core.io.support.EncodedResource)
                        /**
                         * Create a PropertySource based on Properties loaded from the given resource.
                         * The name of the PropertySource will be generated based on the
                         * {@link Resource#getDescription() description} of the given resource.
                         */
                        // @ts-ignore
                        constructor(resource: org.springframework.core.io.support.EncodedResource)
                        /**
                         * Create a PropertySource having the given name based on Properties
                         * loaded from the given encoded resource.
                         */
                        // @ts-ignore
                        constructor(name: java.lang.String | string, resource: org.springframework.core.io.Resource)
                        /**
                         * Create a PropertySource based on Properties loaded from the given resource.
                         * The name of the PropertySource will be generated based on the
                         * {@link Resource#getDescription() description} of the given resource.
                         */
                        // @ts-ignore
                        constructor(resource: org.springframework.core.io.Resource)
                        /**
                         * Create a PropertySource having the given name based on Properties loaded from
                         * the given resource location and using the given class loader to load the
                         * resource (assuming it is prefixed with {@code classpath:}).
                         */
                        // @ts-ignore
                        constructor(name: java.lang.String | string, location: java.lang.String | string, classLoader: java.lang.ClassLoader)
                        /**
                         * Create a PropertySource based on Properties loaded from the given resource
                         * location and use the given class loader to load the resource, assuming it is
                         * prefixed with {@code classpath:}. The name of the PropertySource will be
                         * generated based on the {@link Resource#getDescription() description} of the
                         * resource.
                         */
                        // @ts-ignore
                        constructor(location: java.lang.String | string, classLoader: java.lang.ClassLoader)
                        /**
                         * Create a PropertySource having the given name based on Properties loaded from
                         * the given resource location. The default thread context class loader will be
                         * used to load the resource (assuming the location string is prefixed with
                         * {@code classpath:}.
                         */
                        // @ts-ignore
                        constructor(name: java.lang.String | string, location: java.lang.String | string)
                        /**
                         * Create a PropertySource based on Properties loaded from the given resource
                         * location. The name of the PropertySource will be generated based on the
                         * {@link Resource#getDescription() description} of the resource.
                         */
                        // @ts-ignore
                        constructor(location: java.lang.String | string)
                        /**
                         * Return a potentially adapted variant of this {@link ResourcePropertySource},
                         * overriding the previously given (or derived) name with the specified name.
                         * @since 4.0.4
                         */
                        // @ts-ignore
                        public withName(name: java.lang.String | string): org.springframework.core.io.support.ResourcePropertySource
                        /**
                         * Return a potentially adapted variant of this {@link ResourcePropertySource},
                         * overriding the previously given name (if any) with the original resource name
                         * (equivalent to the name generated by the name-less constructor variants).
                         * @since 4.1
                         */
                        // @ts-ignore
                        public withResourceName(): org.springframework.core.io.support.ResourcePropertySource
                    }
                }
            }
        }
    }
}
