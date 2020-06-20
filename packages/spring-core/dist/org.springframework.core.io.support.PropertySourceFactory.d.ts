declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace support {
                    /**
                     * Strategy interface for creating resource-based {@link PropertySource} wrappers.
                     * @author Juergen Hoeller
                     * @since 4.3
                     * @see DefaultPropertySourceFactory
                     */
                    // @ts-ignore
                    interface PropertySourceFactory {
                        /**
                         * Create a {@link PropertySource} that wraps the given resource.
                         * @param name the name of the property source
                         *  (can be {#code null} in which case the factory implementation
                         *  will have to generate a name based on the given resource)
                         * @param resource the resource (potentially encoded) to wrap
                         * @return the new {#link PropertySource} (never {@code null})
                         * @throws IOException if resource resolution failed
                         */
                        // @ts-ignore
                        createPropertySource(name: string, resource: org.springframework.core.io.support.EncodedResource): org.springframework.core.env.PropertySource<?>
                    }
                }
            }
        }
    }
}
