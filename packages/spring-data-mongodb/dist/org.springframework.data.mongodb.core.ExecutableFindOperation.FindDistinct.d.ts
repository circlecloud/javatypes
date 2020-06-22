declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableFindOperation {
                        /**
                         * Distinct Find support.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface FindDistinct {
                            /**
                             * Finds the distinct values for a specified {@literal field} across a single {@link MongoCollection} or view.
                             * @param field name of the field. Must not be {#literal null}.
                             * @return new instance of {#link TerminatingDistinct}.
                             * @throws IllegalArgumentException if field is {#literal null}.
                             */
                            // @ts-ignore
                            distinct(field: java.lang.String | string): org.springframework.data.mongodb.core.ExecutableFindOperation.TerminatingDistinct<java.lang.Object | any>
                        }
                    }
                }
            }
        }
    }
}
