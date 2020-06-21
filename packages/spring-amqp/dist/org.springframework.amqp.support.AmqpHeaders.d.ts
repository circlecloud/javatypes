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
                abstract class AmqpHeaders extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Prefix used for AMQP related headers in order to distinguish from
                     * user-defined headers and other internal headers (e.g. replyTo).
                     * @see SimpleAmqpHeaderMapper
                     */
                    // @ts-ignore
                    public static readonly PREFIX: java.lang.String | string
                    // @ts-ignore
                    public static readonly APP_ID: java.lang.String | string
                    // @ts-ignore
                    public static readonly CLUSTER_ID: java.lang.String | string
                    // @ts-ignore
                    public static readonly CONTENT_ENCODING: java.lang.String | string
                    // @ts-ignore
                    public static readonly CONTENT_LENGTH: java.lang.String | string
                    // @ts-ignore
                    public static readonly CONTENT_TYPE: java.lang.String | string
                    // @ts-ignore
                    public static readonly CORRELATION_ID: java.lang.String | string
                    // @ts-ignore
                    public static readonly DELAY: java.lang.String | string
                    // @ts-ignore
                    public static readonly DELIVERY_MODE: java.lang.String | string
                    // @ts-ignore
                    public static readonly DELIVERY_TAG: java.lang.String | string
                    // @ts-ignore
                    public static readonly EXPIRATION: java.lang.String | string
                    // @ts-ignore
                    public static readonly MESSAGE_COUNT: java.lang.String | string
                    // @ts-ignore
                    public static readonly MESSAGE_ID: java.lang.String | string
                    // @ts-ignore
                    public static readonly RECEIVED_DELAY: java.lang.String | string
                    // @ts-ignore
                    public static readonly RECEIVED_DELIVERY_MODE: java.lang.String | string
                    // @ts-ignore
                    public static readonly RECEIVED_EXCHANGE: java.lang.String | string
                    // @ts-ignore
                    public static readonly RECEIVED_ROUTING_KEY: java.lang.String | string
                    // @ts-ignore
                    public static readonly RECEIVED_USER_ID: java.lang.String | string
                    // @ts-ignore
                    public static readonly REDELIVERED: java.lang.String | string
                    // @ts-ignore
                    public static readonly REPLY_TO: java.lang.String | string
                    // @ts-ignore
                    public static readonly TIMESTAMP: java.lang.String | string
                    // @ts-ignore
                    public static readonly TYPE: java.lang.String | string
                    // @ts-ignore
                    public static readonly USER_ID: java.lang.String | string
                    // @ts-ignore
                    public static readonly SPRING_REPLY_CORRELATION: java.lang.String | string
                    // @ts-ignore
                    public static readonly SPRING_REPLY_TO_STACK: java.lang.String | string
                    // @ts-ignore
                    public static readonly PUBLISH_CONFIRM: java.lang.String | string
                    // @ts-ignore
                    public static readonly PUBLISH_CONFIRM_NACK_CAUSE: java.lang.String | string
                    // @ts-ignore
                    public static readonly RETURN_REPLY_CODE: java.lang.String | string
                    // @ts-ignore
                    public static readonly RETURN_REPLY_TEXT: java.lang.String | string
                    // @ts-ignore
                    public static readonly RETURN_EXCHANGE: java.lang.String | string
                    // @ts-ignore
                    public static readonly RETURN_ROUTING_KEY: java.lang.String | string
                    // @ts-ignore
                    public static readonly CHANNEL: java.lang.String | string
                    /**
                     * The tag of the listener container consumer that received the message.
                     */
                    // @ts-ignore
                    public static readonly CONSUMER_TAG: java.lang.String | string
                    /**
                     * The queue from which the listener container consumer received the message.
                     */
                    // @ts-ignore
                    public static readonly CONSUMER_QUEUE: java.lang.String | string
                    /**
                     * The received raw message before conversion; this header usually only appears in
                     * an {@link org.springframework.messaging.support.ErrorMessage}.
                     * @since 2.0
                     */
                    // @ts-ignore
                    public static readonly RAW_MESSAGE: java.lang.String | string
                }
            }
        }
    }
}
