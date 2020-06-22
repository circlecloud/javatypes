declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        namespace Update {
                            /**
                             * Builder for creating {@code $addToSet} modifier.
                             * @author Christoph Strobl
                             * @since 1.5
                             */
                            // @ts-ignore
                            class AddToSetBuilder extends java.lang.Object {
                                // @ts-ignore
                                constructor(key: java.lang.String | string)
                                /**
                                 * Propagates {@code $each} to {@code $addToSet}
                                 * @param values
                                 * @return 
                                 */
                                // @ts-ignore
                                public each(...values: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.query.Update
                                /**
                                 * Propagates {@link #value(Object)} to {@code $addToSet}
                                 * @param values
                                 * @return 
                                 */
                                // @ts-ignore
                                public value(value: java.lang.Object | any): org.springframework.data.mongodb.core.query.Update
                            }
                        }
                    }
                }
            }
        }
    }
}
