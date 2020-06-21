declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace log4j2 {
                    /**
                     * A Log4j 2 appender that publishes logging events to an AMQP Exchange.
                     * @author Gary Russell
                     * @author Stephen Oakey
                     * @author Artem Bilan
                     * @author Dominique Villard
                     * @author Nicolas Ristock
                     * @author Eugene Gusev
                     * @since 1.6
                     */
                    // @ts-ignore
                    class AmqpAppender extends AbstractAppender {
                        // @ts-ignore
                        constructor(name: java.lang.String | string, filter: Filter, layout: object, ignoreExceptions: boolean, manager: org.springframework.amqp.rabbit.log4j2.AmqpAppender.AmqpManager, eventQueue: java.util.concurrent.BlockingQueue<org.springframework.amqp.rabbit.log4j2.AmqpAppender.Event>)
                        /**
                         * Key name for the application id (if there is one set via the appender config) in the message properties.
                         */
                        // @ts-ignore
                        public static readonly APPLICATION_ID: java.lang.String | string
                        /**
                         * Key name for the logger category name in the message properties.
                         */
                        // @ts-ignore
                        public static readonly CATEGORY_NAME: java.lang.String | string
                        /**
                         * Key name for the logger level name in the message properties.
                         */
                        // @ts-ignore
                        public static readonly CATEGORY_LEVEL: java.lang.String | string
                        /**
                         * Key name for the thread name in the message properties.
                         */
                        // @ts-ignore
                        public static readonly THREAD_NAME: java.lang.String | string
                        // @ts-ignore
                        public static createAppender(configuration: Configuration, name: java.lang.String | string, layout: object, filter: Filter, ignoreExceptions: boolean, uri: java.net.URI, host: java.lang.String | string, port: java.lang.String | string, addresses: java.lang.String | string, user: java.lang.String | string, password: java.lang.String | string, virtualHost: java.lang.String | string, useSsl: boolean, verifyHostname: boolean, sslAlgorithm: java.lang.String | string, sslPropertiesLocation: java.lang.String | string, keyStore: java.lang.String | string, keyStorePassphrase: java.lang.String | string, keyStoreType: java.lang.String | string, trustStore: java.lang.String | string, trustStorePassphrase: java.lang.String | string, trustStoreType: java.lang.String | string, saslConfig: java.lang.String | string, senderPoolSize: number /*int*/, maxSenderRetries: number /*int*/, applicationId: java.lang.String | string, routingKeyPattern: java.lang.String | string, generateId: boolean, deliveryMode: java.lang.String | string, exchange: java.lang.String | string, exchangeType: java.lang.String | string, declareExchange: boolean, durable: boolean, autoDelete: boolean, contentType: java.lang.String | string, contentEncoding: java.lang.String | string, connectionName: java.lang.String | string, clientConnectionProperties: java.lang.String | string, async: boolean, charset: java.lang.String | string, bufferSize: number /*int*/, blockingQueueFactory: object, addMdcAsHeaders: boolean): org.springframework.amqp.rabbit.log4j2.AmqpAppender
                        // @ts-ignore
                        public append(event: LogEvent): void
                        /**
                         * Subclasses may modify the final message before sending.
                         * @param message The message.
                         * @param event The event.
                         * @return The modified message.
                         */
                        // @ts-ignore
                        postProcessMessageBeforeSend(message: Message, event: org.springframework.amqp.rabbit.log4j2.AmqpAppender.Event): Message
                        // @ts-ignore
                        sendEvent(event: org.springframework.amqp.rabbit.log4j2.AmqpAppender.Event, properties: java.util.Map<any, any>): void
                        // @ts-ignore
                        doSend(event: org.springframework.amqp.rabbit.log4j2.AmqpAppender.Event, logEvent: LogEvent, amqpProps: MessageProperties): void
                        // @ts-ignore
                        stop(timeout: number /*long*/, timeUnit: java.util.concurrent.TimeUnit, changeLifeCycleState: boolean): boolean
                        /**
                         * Return the number of events waiting to be sent.
                         * @return the number of events waiting to be sent.
                         */
                        // @ts-ignore
                        public getQueuedEventCount(): number /*int*/
                    }
                }
            }
        }
    }
}
