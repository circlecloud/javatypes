declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                /**
                 * Strategy interface for mapping messaging Message headers to an outbound
                 * {@link MessageProperties} (e.g. to configure AMQP properties) or
                 * extracting messaging header values from an inbound {@link MessageProperties}.
                 * @author Mark Fisher
                 * @author Oleg Zhurakousky
                 * @author Stephane Nicoll
                 * @since 1.4
                 */
                // @ts-ignore
                interface AmqpHeaderMapper {
                }
            }
        }
    }
}
