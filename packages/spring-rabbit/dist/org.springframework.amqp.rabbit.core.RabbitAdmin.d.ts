declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    /**
                     * RabbitMQ implementation of portable AMQP administrative operations for AMQP &gt;= 0.9.1.
                     * @author Mark Pollack
                     * @author Mark Fisher
                     * @author Dave Syer
                     * @author Ed Scriven
                     * @author Gary Russell
                     * @author Artem Bilan
                     */
                    // @ts-ignore
                    class RabbitAdmin extends java.lang.Object {
                        /**
                         * Construct an instance using the provided {@link ConnectionFactory}.
                         * @param connectionFactory the connection factory - must not be null.
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory)
                        /**
                         * Construct an instance using the provided {@link RabbitTemplate}. Use this
                         * constructor when, for example, you want the admin operations to be performed within
                         * the scope of the provided template's {@code invoke()} method.
                         * @param rabbitTemplate the template - must not be null and must have a connection
                         *  factory.
                         * @since 2.0
                         */
                        // @ts-ignore
                        constructor(rabbitTemplate: org.springframework.amqp.rabbit.core.RabbitTemplate)
                        /**
                         * The default exchange name.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_EXCHANGE_NAME: java.lang.String | string
                        /**
                         * Property key for the queue name in the {@link Properties} returned by
                         * {@link #getQueueProperties(String)}.
                         */
                        // @ts-ignore
                        public static readonly QUEUE_NAME: java.lang.Object | any
                        /**
                         * Property key for the message count in the {@link Properties} returned by
                         * {@link #getQueueProperties(String)}.
                         */
                        // @ts-ignore
                        public static readonly QUEUE_MESSAGE_COUNT: java.lang.Object | any
                        /**
                         * Property key for the consumer count in the {@link Properties} returned by
                         * {@link #getQueueProperties(String)}.
                         */
                        // @ts-ignore
                        public static readonly QUEUE_CONSUMER_COUNT: java.lang.Object | any
                        /**
                         * Logger available to subclasses.
                         */
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        public setAutoStartup(autoStartup: boolean): void
                        // @ts-ignore
                        public setApplicationContext(applicationContext: ApplicationContext): void
                        // @ts-ignore
                        public setApplicationEventPublisher(applicationEventPublisher: ApplicationEventPublisher): void
                        // @ts-ignore
                        public setIgnoreDeclarationExceptions(ignoreDeclarationExceptions: boolean): void
                        /**
                         * Set to false to disable declaring collections of {@link Declarable}.
                         * Since the admin has to iterate over all Collection beans, this may
                         * cause undesirable side-effects in some cases. Default true.
                         * @param declareCollections set to false to prevent declarations of collections.
                         * @since 1.7.7
                         * @deprecated - users should use {#link Declarables} beans instead of collections of
                         *  {@link Declarable}.
                         */
                        // @ts-ignore
                        public setDeclareCollections(declareCollections: boolean): void
                        /**
                         * @return the last {#link DeclarationExceptionEvent} that was detected in this admin.
                         * @since 1.6
                         */
                        // @ts-ignore
                        public getLastDeclarationExceptionEvent(): org.springframework.amqp.rabbit.core.DeclarationExceptionEvent
                        /**
                         * Set a task executor to use for async operations. Currently only used
                         * with {@link #purgeQueue(String, boolean)}.
                         * @param taskExecutor the executor to use.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public setTaskExecutor(taskExecutor: TaskExecutor): void
                        // @ts-ignore
                        public getRabbitTemplate(): org.springframework.amqp.rabbit.core.RabbitTemplate
                        // @ts-ignore
                        public declareExchange(exchange: Exchange): void
                        // @ts-ignore
                        public deleteExchange(exchangeName: java.lang.String | string): boolean
                        /**
                         * Declare the given queue.
                         * If the queue doesn't have a value for 'name' property,
                         * the queue name will be generated by Broker and returned from this method.
                         * The declaredName property of the queue will be updated to reflect this value.
                         * @param queue the queue
                         * @return the queue name if successful, null if not successful and
                         *  {#link #setIgnoreDeclarationExceptions(boolean) ignoreDeclarationExceptions} is
                         *  true.
                         */
                        // @ts-ignore
                        public declareQueue(queue: Queue): string
                        /**
                         * Declares a server-named exclusive, autodelete, non-durable queue.
                         * @return the queue or null if an exception occurred and
                         *  {#link #setIgnoreDeclarationExceptions(boolean) ignoreDeclarationExceptions}
                         *  is true.
                         */
                        // @ts-ignore
                        public declareQueue(): Queue
                        // @ts-ignore
                        public deleteQueue(queueName: java.lang.String | string): boolean
                        // @ts-ignore
                        public deleteQueue(queueName: java.lang.String | string, unused: boolean, empty: boolean): void
                        // @ts-ignore
                        public purgeQueue(queueName: java.lang.String | string, noWait: boolean): void
                        // @ts-ignore
                        public purgeQueue(queueName: java.lang.String | string): number /*int*/
                        // @ts-ignore
                        public declareBinding(binding: Binding): void
                        // @ts-ignore
                        public removeBinding(binding: Binding): void
                        /**
                         * Returns 3 properties {@link #QUEUE_NAME}, {@link #QUEUE_MESSAGE_COUNT},
                         * {@link #QUEUE_CONSUMER_COUNT}, or null if the queue doesn't exist.
                         */
                        // @ts-ignore
                        public getQueueProperties(queueName: java.lang.String | string): java.util.Properties
                        /**
                         * Set to true to only declare {@link Declarable} beans that are explicitly configured
                         * to be declared by this admin.
                         * @param explicitDeclarationsOnly true to ignore beans with no admin declaration
                         *  configuration.
                         * @since 2.1.9
                         */
                        // @ts-ignore
                        public setExplicitDeclarationsOnly(explicitDeclarationsOnly: boolean): void
                        /**
                         * Set a retry template for auto declarations. There is a race condition with
                         * auto-delete, exclusive queues in that the queue might still exist for a short time,
                         * preventing the redeclaration. The default retry configuration will try 5 times with
                         * an exponential backOff starting at 1 second a multiplier of 2.0 and a max interval
                         * of 5 seconds. To disable retry, set the argument to {@code null}. Note that this
                         * retry is at the macro level - all declarations will be retried within the scope of
                         * this template. If you supplied a {@link RabbitTemplate} that is configured with a
                         * {@link RetryTemplate}, its template will retry each individual declaration.
                         * @param retryTemplate the retry template.
                         * @since 1.7.8
                         */
                        // @ts-ignore
                        public setRetryTemplate(retryTemplate: RetryTemplate): void
                        // @ts-ignore
                        public setBeanName(name: java.lang.String | string): void
                        // @ts-ignore
                        public getBeanName(): string
                        // @ts-ignore
                        public isAutoStartup(): boolean
                        /**
                         * If {@link #setAutoStartup(boolean) autoStartup} is set to true, registers a callback on the
                         * {@link ConnectionFactory} to declare all exchanges and queues in the enclosing application context. If the
                         * callback fails then it may cause other clients of the connection factory to fail, but since only exchanges,
                         * queues and bindings are declared failure is not expected.
                         * @see InitializingBean#afterPropertiesSet()
                         * @see #initialize()
                         */
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        /**
                         * Declares all the exchanges, queues and bindings in the enclosing application context, if any. It should be safe
                         * (but unnecessary) to call this method more than once.
                         */
                        // @ts-ignore
                        public initialize(): void
                    }
                }
            }
        }
    }
}
