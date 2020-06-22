declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * {@link IndexFilter} implementation for usage with plain {@link DBObject} as well as {@link CriteriaDefinition} filter
                         * expressions.
                         * @author Christoph Strobl
                         * @since 1.10
                         */
                        // @ts-ignore
                        class PartialIndexFilter extends java.lang.Object implements org.springframework.data.mongodb.core.index.IndexFilter {
                            // @ts-ignore
                            constructor()
                            /**
                             * Create new {@link PartialIndexFilter} for given {@link DBObject filter expression}.
                             * @param where must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static of(where: Document): org.springframework.data.mongodb.core.index.PartialIndexFilter
                            // @ts-ignore
                            public getFilterObject(): Document
                        }
                    }
                }
            }
        }
    }
}
