declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                namespace classreading {
                    /**
                     * Simple facade for accessing class metadata,
                     * as read by an ASM {@link org.springframework.asm.ClassReader}.
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    interface MetadataReader {
                        /**
                         * Return the resource reference for the class file.
                         */
                        // @ts-ignore
                        getResource(): org.springframework.core.io.Resource
                        /**
                         * Read basic class metadata for the underlying class.
                         */
                        // @ts-ignore
                        getClassMetadata(): org.springframework.core.type.ClassMetadata
                        /**
                         * Read full annotation metadata for the underlying class,
                         * including metadata for annotated methods.
                         */
                        // @ts-ignore
                        getAnnotationMetadata(): org.springframework.core.type.AnnotationMetadata
                    }
                }
            }
        }
    }
}
