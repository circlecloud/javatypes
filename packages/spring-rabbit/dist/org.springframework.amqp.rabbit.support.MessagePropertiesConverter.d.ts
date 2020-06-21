declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace support {
                    /**
                     * Strategy interface for converting between Spring AMQP {@link MessageProperties}
                     * and RabbitMQ BasicProperties.
                     * @author Mark Fisher
                     * @since 1.0
                     */
                    // @ts-ignore
                    interface MessagePropertiesConverter {
                        // @ts-ignore
                        toMessageProperties(source: BasicProperties, envelope: Envelope, charset: java.lang.String | string): MessageProperties
                        // @ts-ignore
                        fromMessageProperties(source: MessageProperties, charset: java.lang.String | string): BasicProperties
                    }
                }
            }
        }
    }
}
