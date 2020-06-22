declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        /**
                         * Internal abstraction used by the framework representing a message listener container. <strong>Not</strong> meant to
                         * be implemented externally.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface MessageListenerContainer {
                            /**
                             * Create a new {@link MessageListenerContainer} given {@link MongoTemplate}.
                             * @param template must not be {#literal null}.
                             * @return a new {#link MessageListenerContainer} using {@link MongoTemplate}.
                             */
                            // @ts-ignore
                            create(template: org.springframework.data.mongodb.core.MongoTemplate): org.springframework.data.mongodb.core.messaging.MessageListenerContainer
                            /**
                             * Register a new {@link SubscriptionRequest} in the container. If the {@link MessageListenerContainer#isRunning() is
                             * already running} the {@link Subscription} will be added and run immediately, otherwise it'll be scheduled and
                             * started once the container is actually {@link MessageListenerContainer#start() started}.
                             * <pre>
                             * <code>
                             * MessageListenerContainer container = ...
                             * MessageListener<ChangeStreamDocument<Document>, Object> messageListener = (message) -> message....
                             * ChangeStreamRequest<Object> request = new ChangeStreamRequest<>(messageListener, () -> "collection-name");
                             * Subscription subscription = container.register(request);
                             * </code>
                             * </pre>
                             * Errors during {@link Message} retrieval lead to {@link Subscription#cancel() cannelation} of the underlying task.
                             * @param request must not be {#literal null}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            register<T>(request: org.springframework.data.mongodb.core.messaging.SubscriptionRequest<T, java.lang.Object | any, any>): org.springframework.data.mongodb.core.messaging.Subscription
                            /**
                             * Register a new {@link SubscriptionRequest} in the container. If the {@link MessageListenerContainer#isRunning() is
                             * already running} the {@link Subscription} will be added and run immediately, otherwise it'll be scheduled and
                             * started once the container is actually {@link MessageListenerContainer#start() started}.
                             * <pre>
                             * <code>
                             * MessageListenerContainer container = ...
                             * MessageListener<ChangeStreamDocument<Document>, Document> messageListener = (message) -> message.getBody().toJson();
                             * ChangeStreamRequest<Document> request = new ChangeStreamRequest<>(messageListener, () -> "collection-name");
                             * Subscription subscription = container.register(request, Document.class);
                             * </code>
                             * </pre>
                             * On {@link MessageListenerContainer#stop()} all {@link Subscription subscriptions} are cancelled prior to shutting
                             * down the container itself.
                             * <p />
                             * Registering the very same {@link SubscriptionRequest} more than once simply returns the already existing
                             * {@link Subscription}.
                             * <p />
                             * Unless a {@link Subscription} is {@link #remove(Subscription) removed} form the container, the {@link Subscription}
                             * is restarted once the container itself is restarted.
                             * <p />
                             * Errors during {@link Message} retrieval lead to {@link Subscription#cancel() cannelation} of the underlying task.
                             * @param request must not be {#literal null}.
                             * @param type the exact target or a more concrete type of the {#link Message#getBody()}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            register<S, T>(request: org.springframework.data.mongodb.core.messaging.SubscriptionRequest<S, any, any>, bodyType: java.lang.Class<T>): org.springframework.data.mongodb.core.messaging.Subscription
                            /**
                             * Register a new {@link SubscriptionRequest} in the container. If the {@link MessageListenerContainer#isRunning() is
                             * already running} the {@link Subscription} will be added and run immediately, otherwise it'll be scheduled and
                             * started once the container is actually {@link MessageListenerContainer#start() started}.
                             * <pre>
                             * <code>
                             * MessageListenerContainer container = ...
                             * MessageListener<ChangeStreamDocument<Document>, Document> messageListener = (message) -> message.getBody().toJson();
                             * ChangeStreamRequest<Document> request = new ChangeStreamRequest<>(messageListener, () -> "collection-name");
                             * Subscription subscription = container.register(request, Document.class);
                             * </code>
                             * </pre>
                             * On {@link MessageListenerContainer#stop()} all {@link Subscription subscriptions} are cancelled prior to shutting
                             * down the container itself.
                             * <p />
                             * Registering the very same {@link SubscriptionRequest} more than once simply returns the already existing
                             * {@link Subscription}.
                             * <p />
                             * Unless a {@link Subscription} is {@link #remove(Subscription) removed} form the container, the {@link Subscription}
                             * is restarted once the container itself is restarted.
                             * <p />
                             * Errors during {@link Message} retrieval are delegated to the given {@link ErrorHandler}.
                             * @param request must not be {#literal null}.
                             * @param type the exact target or a more concrete type of the {#link Message#getBody()}. Must not be {@literal null}.
                             * @param errorHandler the callback to invoke when retrieving the {#link Message} from the data source fails for some
                             *           reason.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            register<S, T>(request: org.springframework.data.mongodb.core.messaging.SubscriptionRequest<S, any, any>, bodyType: java.lang.Class<T>, errorHandler: ErrorHandler): org.springframework.data.mongodb.core.messaging.Subscription
                            /**
                             * Unregister a given {@link Subscription} from the container. This prevents the {@link Subscription} to be restarted
                             * in a potential {@link SmartLifecycle#stop() stop}/{@link SmartLifecycle#start() start} scenario.<br />
                             * An {@link Subscription#isActive() active} {@link Subscription subcription} is {@link Subscription#cancel()
                             * cancelled} prior to removal.
                             * @param subscription must not be {#literal null}.
                             */
                            // @ts-ignore
                            remove(subscription: org.springframework.data.mongodb.core.messaging.Subscription): void
                            /**
                             * Lookup the given {@link SubscriptionRequest} within the container and return the associated {@link Subscription} if
                             * present.
                             * @param request must not be {#literal null}.
                             * @return {#link Optional#empty()} if not set.
                             */
                            // @ts-ignore
                            lookup(request: org.springframework.data.mongodb.core.messaging.SubscriptionRequest<any, any, any>): java.util.Optional<org.springframework.data.mongodb.core.messaging.Subscription>
                        }
                    }
                }
            }
        }
    }
}
