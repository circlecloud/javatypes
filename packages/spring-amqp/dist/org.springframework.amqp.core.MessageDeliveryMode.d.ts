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
                    // @ts-ignore
                    values(): org.springframework.amqp.core.MessageDeliveryMode[]
                    // @ts-ignore
                    valueOf(name: string): org.springframework.amqp.core.MessageDeliveryMode
                    // @ts-ignore
                    toInt(mode: org.springframework.amqp.core.MessageDeliveryMode): int
                    // @ts-ignore
                    fromInt(modeAsNumber: number /*int*/): org.springframework.amqp.core.MessageDeliveryMode
                }
            }
        }
    }
}
