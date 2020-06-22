declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        /**
                         * Simple {@link Executor} based {@link MessageListenerContainer} implementation for running {@link Task tasks} like
                         * listening to MongoDB <a href="https://docs.mongodb.com/manual/changeStreams/">Change Streams</a> and tailable
                         * cursors.
                         * <p />
                         * This message container creates long-running tasks that are executed on {@link Executor}.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        class DefaultMessageListenerContainer extends java.lang.Object implements org.springframework.data.mongodb.core.messaging.MessageListenerContainer {
                            /**
                             * Create a new {@link DefaultMessageListenerContainer}.
                             * @param template must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(template: org.springframework.data.mongodb.core.MongoTemplate)
                            /**
                             * Create a new {@link DefaultMessageListenerContainer} running {@link Task tasks} via the given
                             * {@literal taskExecutor}.
                             * @param template must not be {#literal null}.
                             * @param taskExecutor must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(template: org.springframework.data.mongodb.core.MongoTemplate, taskExecutor: java.util.concurrent.Executor)
                            /**
                             * Create a new {@link DefaultMessageListenerContainer} running {@link Task tasks} via the given
                             * {@literal taskExecutor} delegating {@link Exception errors} to the given {@link ErrorHandler}.
                             * @param template must not be {#literal null}. Used by the {@link TaskFactory}.
                             * @param taskExecutor must not be {#literal null}.
                             * @param errorHandler the default {#link ErrorHandler} to be used by tasks inside the container. Can be
                             *           {@literal null}.
                             */
                            // @ts-ignore
                            constructor(template: org.springframework.data.mongodb.core.MongoTemplate, taskExecutor: java.util.concurrent.Executor, errorHandler: ErrorHandler)
                            // @ts-ignore
                            public isAutoStartup(): boolean
                            // @ts-ignore
                            public stop(callback: java.lang.Runnable): void
                            // @ts-ignore
                            public start(): void
                            // @ts-ignore
                            public stop(): void
                            // @ts-ignore
                            public isRunning(): boolean
                            // @ts-ignore
                            public getPhase(): number /*int*/
                            // @ts-ignore
                            public register<S, T>(request: org.springframework.data.mongodb.core.messaging.SubscriptionRequest<S, any, any>, bodyType: java.lang.Class<T>): org.springframework.data.mongodb.core.messaging.Subscription
                            // @ts-ignore
                            public register<S, T>(request: org.springframework.data.mongodb.core.messaging.SubscriptionRequest<S, any, any>, bodyType: java.lang.Class<T>, errorHandler: ErrorHandler): org.springframework.data.mongodb.core.messaging.Subscription
                            // @ts-ignore
                            public lookup(request: org.springframework.data.mongodb.core.messaging.SubscriptionRequest<any, any, any>): java.util.Optional<org.springframework.data.mongodb.core.messaging.Subscription>
                            // @ts-ignore
                            public register(request: org.springframework.data.mongodb.core.messaging.SubscriptionRequest<any>, task: org.springframework.data.mongodb.core.messaging.Task): org.springframework.data.mongodb.core.messaging.Subscription
                            // @ts-ignore
                            public remove(subscription: org.springframework.data.mongodb.core.messaging.Subscription): void
                        }
                    }
                }
            }
        }
    }
}
