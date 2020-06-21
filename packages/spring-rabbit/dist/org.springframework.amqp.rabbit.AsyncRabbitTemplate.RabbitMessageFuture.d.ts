declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace AsyncRabbitTemplate {
                    /**
                     * A {@link RabbitFuture} with a return type of {@link Message}.
                     * @since 1.6
                     */
                    // @ts-ignore
                    class RabbitMessageFuture extends org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitFuture<Message> {
                        // @ts-ignore
                        constructor(correlationId: java.lang.String | string, requestMessage: Message)
                    }
                }
            }
        }
    }
}
