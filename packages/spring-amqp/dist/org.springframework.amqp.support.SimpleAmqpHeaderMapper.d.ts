declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                /**
                 * Simple implementation of {@link AmqpHeaderMapper}.
                 * <p>This implementation copies AMQP API headers (e.g. appId) to and from
                 * {@link MessageHeaders}.Any used-defined properties will also be copied
                 * from an AMQP Message to a {@link org.springframework.amqp.core.Message
                 * Message}, and any other headers on a Message (beyond the AMQP headers)
                 * will likewise be copied to an AMQP Message. Those other headers will be
                 * copied to the general headers of a {@link MessageProperties} whereas the
                 * AMQP API headers are passed to the appropriate setter methods (e.g.
                 * {@link MessageProperties#setAppId}.
                 * <p>Constants for the AMQP header keys are defined in {@link AmqpHeaders}.
                 * @author Mark Fisher
                 * @author Oleg Zhurakousky
                 * @author Gary Russell
                 * @author Artem Bilan
                 * @author Stephane Nicoll
                 * @since 1.4
                 */
                // @ts-ignore
                class SimpleAmqpHeaderMapper extends <any> implements org.springframework.amqp.support.AmqpHeaderMapper {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    fromHeaders(headers: MessageHeaders, amqpMessageProperties: org.springframework.amqp.core.MessageProperties): void
                    // @ts-ignore
                    toHeaders(amqpMessageProperties: org.springframework.amqp.core.MessageProperties): MessageHeaders
                }
            }
        }
    }
}
