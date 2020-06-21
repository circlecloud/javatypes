declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace AsyncRabbitTemplate {
                    /**
                     * A {@link RabbitFuture} with a return type of the template's
                     * generic parameter.
                     * @param <C> the type.
                     * @since 1.6
                     */
                    // @ts-ignore
                    class RabbitConverterFuture<C> extends org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitFuture<C> {
                        // @ts-ignore
                        constructor(correlationId: java.lang.String | string, requestMessage: Message)
                        // @ts-ignore
                        public getReturnType(): object
                        // @ts-ignore
                        public setReturnType(returnType: object): void
                    }
                }
            }
        }
    }
}
