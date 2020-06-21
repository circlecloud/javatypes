declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    /**
                     * A {@link ConnectionListener} that will declare a single exchange when the
                     * connection is established.
                     * @author Gary Russell
                     * @since 1.5.4
                     */
                    // @ts-ignore
                    class DeclareExchangeConnectionListener extends java.lang.Object implements org.springframework.amqp.rabbit.connection.ConnectionListener {
                        // @ts-ignore
                        constructor(exchange: Exchange, admin: org.springframework.amqp.rabbit.core.RabbitAdmin)
                        // @ts-ignore
                        public onCreate(connection: org.springframework.amqp.rabbit.connection.Connection): void
                        // @ts-ignore
                        public onClose(connection: org.springframework.amqp.rabbit.connection.Connection): void
                    }
                }
            }
        }
    }
}
