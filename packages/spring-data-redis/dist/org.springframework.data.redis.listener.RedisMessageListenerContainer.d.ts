declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace listener {
                    /**
                     * Container providing asynchronous behaviour for Redis message listeners. Handles the low level details of listening,
                     * converting and message dispatching.
                     * <p>
                     * As oppose to the low level Redis (one connection per subscription), the container uses only one connection that is
                     * 'multiplexed' for all registered listeners, the message dispatch being done through the task executor.
                     * <p>
                     * Note the container uses the connection in a lazy fashion (the connection is used only if at least one listener is
                     * configured).
                     * <p>
                     * Adding and removing listeners at the same time has undefined results. It is strongly recommended to synchronize/order
                     * these methods accordingly.
                     * @author Costin Leau
                     * @author Jennifer Hickey
                     * @author Way Joke
                     * @author Thomas Darimont
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    class RedisMessageListenerContainer extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Logger available to subclasses
                         */
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Default thread name prefix: "RedisListeningContainer-".
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_THREAD_NAME_PREFIX: java.lang.String | string
                        /**
                         * The default recovery interval: 5000 ms = 5 seconds.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_RECOVERY_INTERVAL: number /*long*/
                        /**
                         * The default subscription wait time: 2000 ms = 2 seconds.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_SUBSCRIPTION_REGISTRATION_WAIT_TIME: number /*long*/
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        /**
                         * Creates a default TaskExecutor. Called if no explicit TaskExecutor has been specified.
                         * <p>
                         * The default implementation builds a {@link org.springframework.core.task.SimpleAsyncTaskExecutor} with the
                         * specified bean name (or the class name, if no bean name specified) as thread name prefix.
                         * @see org.springframework.core.task.SimpleAsyncTaskExecutor#SimpleAsyncTaskExecutor(String)
                         */
                        // @ts-ignore
                        createDefaultTaskExecutor(): TaskExecutor
                        // @ts-ignore
                        public destroy(): void
                        // @ts-ignore
                        public isAutoStartup(): boolean
                        // @ts-ignore
                        public stop(callback: java.lang.Runnable): void
                        // @ts-ignore
                        public getPhase(): number /*int*/
                        // @ts-ignore
                        public isRunning(): boolean
                        // @ts-ignore
                        public start(): void
                        // @ts-ignore
                        public stop(): void
                        /**
                         * Process a message received from the provider.
                         * @param message
                         * @param pattern
                         */
                        // @ts-ignore
                        processMessage(listener: org.springframework.data.redis.connection.MessageListener, message: org.springframework.data.redis.connection.Message, pattern: number /*byte*/[]): void
                        /**
                         * Execute the specified listener.
                         * @see #handleListenerException
                         */
                        // @ts-ignore
                        executeListener(listener: org.springframework.data.redis.connection.MessageListener, message: org.springframework.data.redis.connection.Message, pattern: number /*byte*/[]): void
                        /**
                         * Return whether this container is currently active, that is, whether it has been set up but not shut down yet.
                         */
                        // @ts-ignore
                        public isActive(): boolean
                        /**
                         * Handle the given exception that arose during listener execution.
                         * <p>
                         * The default implementation logs the exception at error level. This can be overridden in subclasses.
                         * @param ex the exception to handle
                         */
                        // @ts-ignore
                        handleListenerException(ex: java.lang.Throwable | Error): void
                        /**
                         * Invoke the registered ErrorHandler, if any. Log at error level otherwise.
                         * @param ex the uncaught error that arose during message processing.
                         * @see #setErrorHandler
                         */
                        // @ts-ignore
                        invokeErrorHandler(ex: java.lang.Throwable | Error): void
                        /**
                         * Returns the connectionFactory.
                         * @return Returns the connectionFactory
                         */
                        // @ts-ignore
                        public getConnectionFactory(): org.springframework.data.redis.connection.RedisConnectionFactory
                        /**
                         * @param connectionFactory The connectionFactory to set.
                         */
                        // @ts-ignore
                        public setConnectionFactory(connectionFactory: org.springframework.data.redis.connection.RedisConnectionFactory): void
                        // @ts-ignore
                        public setBeanName(name: java.lang.String | string): void
                        /**
                         * Sets the task executor used for running the message listeners when messages are received. If no task executor is
                         * set, an instance of {@link SimpleAsyncTaskExecutor} will be used by default. The task executor can be adjusted
                         * depending on the work done by the listeners and the number of messages coming in.
                         * @param taskExecutor The taskExecutor to set.
                         */
                        // @ts-ignore
                        public setTaskExecutor(taskExecutor: java.util.concurrent.Executor): void
                        /**
                         * Sets the task execution used for subscribing to Redis channels. By default, if no executor is set, the
                         * {@link #setTaskExecutor(Executor)} will be used. In some cases, this might be undersired as the listening to the
                         * connection is a long running task.
                         * <p>
                         * Note: This implementation uses at most one long running thread (depending on whether there are any listeners
                         * registered or not) and up to two threads during the initial registration.
                         * @param subscriptionExecutor The subscriptionExecutor to set.
                         */
                        // @ts-ignore
                        public setSubscriptionExecutor(subscriptionExecutor: java.util.concurrent.Executor): void
                        /**
                         * Sets the serializer for converting the {@link Topic}s into low-level channels and patterns. By default,
                         * {@link StringRedisSerializer} is used.
                         * @param serializer The serializer to set.
                         */
                        // @ts-ignore
                        public setTopicSerializer(serializer: org.springframework.data.redis.serializer.RedisSerializer<java.lang.String | string>): void
                        /**
                         * Set an ErrorHandler to be invoked in case of any uncaught exceptions thrown while processing a Message. By default
                         * there will be <b>no</b> ErrorHandler so that error-level logging is the only result.
                         */
                        // @ts-ignore
                        public setErrorHandler(errorHandler: ErrorHandler): void
                        /**
                         * Attaches the given listeners (and their topics) to the container.
                         * <p>
                         * Note: it's possible to call this method while the container is running forcing a reinitialization of the container.
                         * Note however that this might cause some messages to be lost (while the container reinitializes) - hence calling
                         * this method at runtime is considered advanced usage.
                         * @param listeners map of message listeners and their associated topics
                         */
                        // @ts-ignore
                        public setMessageListeners(listeners: java.util.Map<any, java.util.Collection<any> | Array<any>>): void
                        /**
                         * Adds a message listener to the (potentially running) container. If the container is running, the listener starts
                         * receiving (matching) messages as soon as possible.
                         * @param listener message listener
                         * @param topics message listener topic
                         */
                        // @ts-ignore
                        public addMessageListener(listener: org.springframework.data.redis.connection.MessageListener, topics: java.util.Collection<any> | Array<any>): void
                        /**
                         * Adds a message listener to the (potentially running) container. If the container is running, the listener starts
                         * receiving (matching) messages as soon as possible.
                         * @param listener message listener
                         * @param topic message topic
                         */
                        // @ts-ignore
                        public addMessageListener(listener: org.springframework.data.redis.connection.MessageListener, topic: org.springframework.data.redis.listener.Topic): void
                        /**
                         * Removes a message listener from the given topics. If the container is running, the listener stops receiving
                         * (matching) messages as soon as possible.
                         * <p>
                         * Note that this method obeys the Redis (p)unsubscribe semantics - meaning an empty/null collection will remove
                         * listener from all channels. Similarly a null listener will unsubscribe all listeners from the given topic.
                         * @param listener message listener
                         * @param topics message listener topics
                         */
                        // @ts-ignore
                        public removeMessageListener(listener: org.springframework.data.redis.connection.MessageListener, topics: java.util.Collection<any> | Array<any>): void
                        /**
                         * Removes a message listener from the from the given topic. If the container is running, the listener stops receiving
                         * (matching) messages as soon as possible.
                         * <p>
                         * Note that this method obeys the Redis (p)unsubscribe semantics - meaning an empty/null collection will remove
                         * listener from all channels. Similarly a null listener will unsubscribe all listeners from the given topic.
                         * @param listener message listener
                         * @param topic message topic
                         */
                        // @ts-ignore
                        public removeMessageListener(listener: org.springframework.data.redis.connection.MessageListener, topic: org.springframework.data.redis.listener.Topic): void
                        /**
                         * Removes the given message listener completely (from all topics). If the container is running, the listener stops
                         * receiving (matching) messages as soon as possible. Similarly a null listener will unsubscribe all listeners from
                         * the given topic.
                         * @param listener message listener
                         */
                        // @ts-ignore
                        public removeMessageListener(listener: org.springframework.data.redis.connection.MessageListener): void
                        /**
                         * Handle subscription task exception. Will attempt to restart the subscription if the Exception is a connection
                         * failure (for example, Redis was restarted).
                         * @param ex Throwable exception
                         */
                        // @ts-ignore
                        handleSubscriptionException(ex: java.lang.Throwable | Error): void
                        /**
                         * Sleep according to the specified recovery interval. Called between recovery attempts.
                         */
                        // @ts-ignore
                        sleepBeforeRecoveryAttempt(): void
                        /**
                         * Specify the interval between recovery attempts, in <b>milliseconds</b>. The default is 5000 ms, that is, 5 seconds.
                         * @see #handleSubscriptionException
                         */
                        // @ts-ignore
                        public setRecoveryInterval(recoveryInterval: number /*long*/): void
                        // @ts-ignore
                        public getMaxSubscriptionRegistrationWaitingTime(): number /*long*/
                        /**
                         * Specify the max time to wait for subscription registrations, in <b>milliseconds</b>. The default is 2000ms, that
                         * is, 2 second.
                         * @param maxSubscriptionRegistrationWaitingTime
                         * @see #DEFAULT_SUBSCRIPTION_REGISTRATION_WAIT_TIME
                         */
                        // @ts-ignore
                        public setMaxSubscriptionRegistrationWaitingTime(maxSubscriptionRegistrationWaitingTime: number /*long*/): void
                    }
                }
            }
        }
    }
}
