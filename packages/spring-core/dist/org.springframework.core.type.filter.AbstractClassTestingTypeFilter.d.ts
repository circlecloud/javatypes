declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                namespace filter {
                    /**
                     * Type filter that exposes a
                     * {@link org.springframework.core.type.ClassMetadata} object
                     * to subclasses, for class testing purposes.
                     * @author Rod Johnson
                     * @author Costin Leau
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see #match(org.springframework.core.type.ClassMetadata)
                     */
                    // @ts-ignore
                    class AbstractClassTestingTypeFilter extends java.lang.Object implements org.springframework.core.type.filter.TypeFilter {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        match(metadataReader: org.springframework.core.type.classreading.MetadataReader, metadataReaderFactory: org.springframework.core.type.classreading.MetadataReaderFactory): boolean
                        /**
                         * Determine a match based on the given ClassMetadata object.
                         * @param metadata the ClassMetadata object
                         * @return whether this filter matches on the specified type
                         */
                        // @ts-ignore
                        abstract match(metadata: org.springframework.core.type.ClassMetadata): boolean
                    }
                }
            }
        }
    }
}
