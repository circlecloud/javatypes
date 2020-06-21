declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace log4j2 {
                    namespace AmqpAppender {
                        /**
                         * Manager class for the appender.
                         */
                        // @ts-ignore
                        class AmqpManager extends AbstractManager {
                            // @ts-ignore
                            constructor(loggerContext: LoggerContext, name: java.lang.String | string)
                            /**
                             * SaslConfig.
                             * @see RabbitUtils#stringToSaslConfig(String, ConnectionFactory)
                             */
                            // @ts-ignore
                            public saslConfig: java.lang.String | string
                            /**
                             * Create the {@link ConnectionFactory}.
                             * @return a {#link ConnectionFactory}.
                             */
                            // @ts-ignore
                            createRabbitConnectionFactory(): ConnectionFactory
                            /**
                             * Configure the {@link RabbitConnectionFactoryBean}. Sub-classes may override to
                             * customize the configuration of the bean.
                             * @param factoryBean the {#link RabbitConnectionFactoryBean}.
                             */
                            // @ts-ignore
                            configureRabbitConnectionFactory(factoryBean: org.springframework.amqp.rabbit.connection.RabbitConnectionFactoryBean): void
                            // @ts-ignore
                            releaseSub(timeout: number /*long*/, timeUnit: java.util.concurrent.TimeUnit): boolean
                            // @ts-ignore
                            setUpExchangeDeclaration(): void
                        }
                    }
                }
            }
        }
    }
}
