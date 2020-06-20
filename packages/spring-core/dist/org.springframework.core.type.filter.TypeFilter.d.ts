declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                namespace filter {
                    /**
                     * Base interface for type filters using a
                     * {@link org.springframework.core.type.classreading.MetadataReader}.
                     * @author Costin Leau
                     * @author Juergen Hoeller
                     * @author Mark Fisher
                     * @since 2.5
                     */
                    // @ts-ignore
                    interface TypeFilter {
                        /**
                         * Determine whether this filter matches for the class described by
                         * the given metadata.
                         * @param metadataReader the metadata reader for the target class
                         * @param metadataReaderFactory a factory for obtaining metadata readers
                         *  for other classes (such as superclasses and interfaces)
                         * @return whether this filter matches
                         * @throws IOException in case of I/O failure when reading metadata
                         */
                        // @ts-ignore
                        match(metadataReader: org.springframework.core.type.classreading.MetadataReader, metadataReaderFactory: org.springframework.core.type.classreading.MetadataReaderFactory): boolean
                    }
                }
            }
        }
    }
}
