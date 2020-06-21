declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    namespace RabbitTemplate {
                        /**
                         * Adds {@link #toString()} to the {@link DefaultConsumer}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        abstract class TemplateConsumer extends DefaultConsumer {
                            // @ts-ignore
                            constructor(channel: Channel)
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
