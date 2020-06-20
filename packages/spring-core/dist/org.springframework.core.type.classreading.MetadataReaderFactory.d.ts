declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                namespace classreading {
                    /**
                     * Factory interface for {@link MetadataReader} instances.
                     * Allows for caching a MetadataReader per original resource.
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see SimpleMetadataReaderFactory
                     * @see CachingMetadataReaderFactory
                     */
                    // @ts-ignore
                    interface MetadataReaderFactory {
                        /**
                         * Obtain a MetadataReader for the given class name.
                         * @param className the class name (to be resolved to a ".class" file)
                         * @return a holder for the ClassReader instance (never {#code null})
                         * @throws IOException in case of I/O failure
                         */
                        // @ts-ignore
                        getMetadataReader(className: string): org.springframework.core.type.classreading.MetadataReader
                        /**
                         * Obtain a MetadataReader for the given resource.
                         * @param resource the resource (pointing to a ".class" file)
                         * @return a holder for the ClassReader instance (never {#code null})
                         * @throws IOException in case of I/O failure
                         */
                        // @ts-ignore
                        getMetadataReader(resource: org.springframework.core.io.Resource): org.springframework.core.type.classreading.MetadataReader
                    }
                }
            }
        }
    }
}
