declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                namespace DeferredImportSelector {
                    namespace Group {
                        /**
                         * An entry that holds the {@link AnnotationMetadata} of the importing
                         * {@link Configuration} class and the class name to import.
                         */
                        // @ts-ignore
                        class Entry extends java.lang.Object {
                            // @ts-ignore
                            constructor(metadata: AnnotationMetadata, importClassName: string)
                            /**
                             * Return the {@link AnnotationMetadata} of the importing
                             * {@link Configuration} class.
                             */
                            // @ts-ignore
                            getMetadata(): AnnotationMetadata
                            /**
                             * Return the fully qualified name of the class to import.
                             */
                            // @ts-ignore
                            getImportClassName(): java.lang.String
                            // @ts-ignore
                            equals(other: any): boolean
                            // @ts-ignore
                            hashCode(): int
                            // @ts-ignore
                            toString(): java.lang.String
                        }
                    }
                }
            }
        }
    }
}
