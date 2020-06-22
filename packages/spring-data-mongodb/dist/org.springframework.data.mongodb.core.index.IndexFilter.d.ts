declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * Use {@link IndexFilter} to create the partial filter expression used when creating
                         * <a href="https://docs.mongodb.com/manual/core/index-partial/">Partial Indexes</a>.
                         * @author Christoph Strobl
                         * @since 1.10
                         */
                        // @ts-ignore
                        interface IndexFilter {
                            /**
                             * Get the raw (unmapped) filter expression.
                             * @return 
                             */
                            // @ts-ignore
                            getFilterObject(): Document
                        }
                    }
                }
            }
        }
    }
}
