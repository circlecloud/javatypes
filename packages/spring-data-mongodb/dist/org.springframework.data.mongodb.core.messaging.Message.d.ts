declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        /**
                         * General message abstraction for any type of Event / Message published by MongoDB server to the client. This might be
                         * <a href="https://docs.mongodb.com/manual/reference/change-events/">Change Stream Events</a>, or
                         * {@link org.bson.Document Documents} published by a
                         * <a href="https://docs.mongodb.com/manual/core/tailable-cursors/">tailable cursor</a>. The original message received
                         * is preserved in the raw parameter. Additional information about the origin of the {@link Message} is contained in
                         * {@link MessageProperties}. <br />
                         * For convenience the {@link #getBody()} of the message gets lazily converted into the target domain type if necessary
                         * using the mapping infrastructure.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @see MessageProperties
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface Message<S, T> {
                            /**
                             * The raw message source as emitted by the origin.
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            getRaw(): S
                            /**
                             * The converted message body if available.
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            getBody(): T
                            /**
                             * {@link MessageProperties} containing information about the {@link Message} origin and other metadata.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getProperties(): org.springframework.data.mongodb.core.messaging.Message.MessageProperties
                        }
                    }
                }
            }
        }
    }
}
