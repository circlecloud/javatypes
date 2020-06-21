declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    /**
                     * Application event published when a declaration exception occurs.
                     * @author Gary Russell
                     * @since 1.6
                     */
                    // @ts-ignore
                    class DeclarationExceptionEvent extends org.springframework.amqp.rabbit.core.RabbitAdminEvent {
                        // @ts-ignore
                        constructor(source: java.lang.Object | any, declarable: Declarable, t: java.lang.Throwable | Error)
                        /**
                         * @return the declarable - if null, we were declaring a broker-named queue.
                         */
                        // @ts-ignore
                        public getDeclarable(): Declarable
                        /**
                         * @return the throwable.
                         */
                        // @ts-ignore
                        public getThrowable(): Error
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
