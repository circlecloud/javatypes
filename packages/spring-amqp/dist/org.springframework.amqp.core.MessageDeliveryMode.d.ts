declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Enumeration for the message delivery mode. Can be persistent or
                 * non persistent. Use the method 'toInt' to get the appropriate value
                 * that is used by the AMQP protocol instead of the ordinal() value when
                 * passing into AMQP APIs.
                 * @author Mark Pollack
                 * @author Gary Russell
                 */
                // @ts-ignore
                class MessageDeliveryMode extends java.lang.Enum<org.springframework.amqp.core.MessageDeliveryMode> {
                    /**
                     * Non persistent.
                     */
                    // @ts-ignore
                    public static readonly NON_PERSISTENT: org.springframework.amqp.core.MessageDeliveryMode
                    /**
                     * Persistent.
                     */
                    // @ts-ignore
                    public static readonly PERSISTENT: org.springframework.amqp.core.MessageDeliveryMode
                    // @ts-ignore
                    public static values(): org.springframework.amqp.core.MessageDeliveryMode[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.springframework.amqp.core.MessageDeliveryMode
                    // @ts-ignore
                    public static toInt(mode: org.springframework.amqp.core.MessageDeliveryMode): number /*int*/
                    // @ts-ignore
                    public static fromInt(modeAsNumber: number /*int*/): org.springframework.amqp.core.MessageDeliveryMode
                }
            }
        }
    }
}
