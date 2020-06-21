declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                /**
                 * Type safe accessor for retried message sending.
                 * @author Gary Russell
                 * @since 2.0.6
                 */
                // @ts-ignore
                class SendRetryContextAccessor extends java.lang.Object {
                    /**
                     * Key for the message we tried to send.
                     */
                    // @ts-ignore
                    public static readonly MESSAGE: java.lang.String | string
                    /**
                     * Key for the Address we tried to send to.
                     */
                    // @ts-ignore
                    public static readonly ADDRESS: java.lang.String | string
                    /**
                     * Retrieve the {@link Message} from the context.
                     * @param context the context.
                     * @return the message.
                     * @see #MESSAGE
                     */
                    // @ts-ignore
                    public static getMessage(context: RetryContext): org.springframework.amqp.core.Message
                    /**
                     * Retrieve the {@link Address} from the context.
                     * @param context the context.
                     * @return the address.
                     * @see #ADDRESS
                     */
                    // @ts-ignore
                    public static getAddress(context: RetryContext): org.springframework.amqp.core.Address
                }
            }
        }
    }
}
