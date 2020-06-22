declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        namespace Update {
                            /**
                             * @author Christoph Strobl
                             * @since 1.7
                             */
                            // @ts-ignore
                            class BitwiseOperatorBuilder extends java.lang.Object {
                                /**
                                 * Creates a new {@link BitwiseOperatorBuilder}.
                                 * @param reference must not be {#literal null}
                                 * @param key must not be {#literal null}
                                 */
                                // @ts-ignore
                                constructor(reference: org.springframework.data.mongodb.core.query.Update, key: java.lang.String | string)
                                /**
                                 * Updates to the result of a bitwise and operation between the current value and the given one.
                                 * @param value
                                 * @return 
                                 */
                                // @ts-ignore
                                public and(value: number /*long*/): org.springframework.data.mongodb.core.query.Update
                                /**
                                 * Updates to the result of a bitwise or operation between the current value and the given one.
                                 * @param value
                                 * @return 
                                 */
                                // @ts-ignore
                                public or(value: number /*long*/): org.springframework.data.mongodb.core.query.Update
                                /**
                                 * Updates to the result of a bitwise xor operation between the current value and the given one.
                                 * @param value
                                 * @return 
                                 */
                                // @ts-ignore
                                public xor(value: number /*long*/): org.springframework.data.mongodb.core.query.Update
                            }
                        }
                    }
                }
            }
        }
    }
}
