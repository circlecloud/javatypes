declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * Index definition to span multiple keys.
                         * @author Christoph Strobl
                         * @since 1.5
                         */
                        // @ts-ignore
                        class CompoundIndexDefinition extends org.springframework.data.mongodb.core.index.Index {
                            /**
                             * Creates a new {@link CompoundIndexDefinition} for the given keys.
                             * @param keys must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(keys: Document)
                            // @ts-ignore
                            public getIndexKeys(): Document
                        }
                    }
                }
            }
        }
    }
}
