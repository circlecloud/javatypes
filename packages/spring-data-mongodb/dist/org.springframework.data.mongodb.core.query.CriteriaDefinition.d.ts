declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        interface CriteriaDefinition {
                            /**
                             * Get {@link Document} representation.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getCriteriaObject(): Document
                            /**
                             * Get the identifying {@literal key}.
                             * @return can be {#literal null}.
                             * @since 1.6
                             */
                            // @ts-ignore
                            getKey(): string
                        }
                    }
                }
            }
        }
    }
}
