declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Class encapsulating a Redis message body and its properties.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    interface Message extends java.io.Serializable {
                        /**
                         * Returns the body (or the payload) of the message.
                         * @return message body. Never {#literal null}.
                         */
                        // @ts-ignore
                        getBody(): number /*byte*/[]
                        /**
                         * Returns the channel associated with the message.
                         * @return message channel. Never {#literal null}.
                         */
                        // @ts-ignore
                        getChannel(): number /*byte*/[]
                    }
                }
            }
        }
    }
}
