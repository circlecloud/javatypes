declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                /**
                 * Pre-defined names and prefixes to be used for setting and/or retrieving AMQP
                 * MessageProperties from/to {@link org.springframework.messaging.Message
                 * Message} Headers.
                 * @author Mark Fisher
                 * @author Gary Russell
                 * @since 1.4
                 */
                // @ts-ignore
                class AmqpHeaders extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Prefix used for AMQP related headers in order to distinguish from
                     * user-defined headers and other internal headers (e.g. replyTo).
                     * @see SimpleAmqpHeaderMapper
                     */
                    // @ts-ignore
                    readonly PREFIX: string
                    // @ts-ignore
                    readonly APP_ID: string
                    // @ts-ignore
                    readonly CLUSTER_ID: string
                    // @ts-ignore
                    readonly CONTENT_ENCODING: string
                    // @ts-ignore
                    readonly CONTENT_LENGTH: string
                    // @ts-ignore
                    readonly CONTENT_TYPE: string
                    // @ts-ignore
                    readonly CORRELATION_ID: string
                    // @ts-ignore
                    readonly DELAY: string
                    // @ts-ignore
                    readonly DELIVERY_MODE: string
                    // @ts-ignore
                    readonly DELIVERY_TAG: string
                    // @ts-ignore
                    readonly EXPIRATION: string
                    // @ts-ignore
                    readonly MESSAGE_COUNT: string
                    // @ts-ignore
                    readonly MESSAGE_ID: string
                    // @ts-ignore
                    readonly RECEIVED_DELAY: string
                    // @ts-ignore
                    readonly RECEIVED_DELIVERY_MODE: string
                    // @ts-ignore
                    readonly RECEIVED_EXCHANGE: string
                    // @ts-ignore
                    readonly RECEIVED_ROUTING_KEY: string
                    // @ts-ignore
                    readonly RECEIVED_USER_ID: string
                    // @ts-ignore
                    readonly REDELIVERED: string
                    // @ts-ignore
                    readonly REPLY_TO: string
                    // @ts-ignore
                    readonly TIMESTAMP: string
                    // @ts-ignore
                    readonly TYPE: string
                    // @ts-ignore
                    readonly USER_ID: string
                    // @ts-ignore
                    readonly SPRING_REPLY_CORRELATION: string
                    // @ts-ignore
                    readonly SPRING_REPLY_TO_STACK: string
                    // @ts-ignore
                    readonly PUBLISH_CONFIRM: string
                    // @ts-ignore
                    readonly PUBLISH_CONFIRM_NACK_CAUSE: string
                    // @ts-ignore
                    readonly RETURN_REPLY_CODE: string
                    // @ts-ignore
                    readonly RETURN_REPLY_TEXT: string
                    // @ts-ignore
                    readonly RETURN_EXCHANGE: string
                    // @ts-ignore
                    readonly RETURN_ROUTING_KEY: string
                    // @ts-ignore
                    readonly CHANNEL: string
                    /**
                     * The tag of the listener container consumer that received the message.
                     */
                    // @ts-ignore
                    readonly CONSUMER_TAG: string
                    /**
                     * The queue from which the listener container consumer received the message.
                     */
                    // @ts-ignore
                    readonly CONSUMER_QUEUE: string
                    /**
                     * The received raw message before conversion; this header usually only appears in
                     * an {@link org.springframework.messaging.support.ErrorMessage}.
                     * @since 2.0
                     */
                    // @ts-ignore
                    readonly RAW_MESSAGE: string
                }
            }
        }
    }
}
