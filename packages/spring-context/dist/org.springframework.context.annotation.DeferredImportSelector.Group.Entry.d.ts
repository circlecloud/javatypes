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
                            constructor(metadata: AnnotationMetadata, importClassName: java.lang.String | string)
                            /**
                             * Return the {@link AnnotationMetadata} of the importing
                             * {@link Configuration} class.
                             */
                            // @ts-ignore
                            public getMetadata(): AnnotationMetadata
                            /**
                             * Return the fully qualified name of the class to import.
                             */
                            // @ts-ignore
                            public getImportClassName(): string
                            // @ts-ignore
                            public equals(other: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
