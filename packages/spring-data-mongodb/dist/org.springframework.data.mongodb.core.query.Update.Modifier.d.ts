declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        namespace Update {
                            /**
                             * Marker interface of nested commands.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            interface Modifier {
                                /**
                                 * @return the command to send eg. {#code $push}
                                 */
                                // @ts-ignore
                                getKey(): string
                                /**
                                 * @return value to be sent with command
                                 */
                                // @ts-ignore
                                getValue(): any
                                /**
                                 * @return a safely serialized JSON representation.
                                 * @since 2.0
                                 */
                                // @ts-ignore
                                toJsonString(): string
                            }
                        }
                    }
                }
            }
        }
    }
}
