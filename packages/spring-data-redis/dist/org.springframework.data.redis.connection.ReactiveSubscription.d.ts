declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Subscription for Redis channels using reactive infrastructure. A {@link ReactiveSubscription} allows subscribing to
                     * {@link #subscribe(ByteBuffer...) channels} and {@link #pSubscribe(ByteBuffer...) patterns}. It provides access to the
                     * {@link ChannelMessage} {@link #receive() stream} that emits only messages for channels and patterns registered in
                     * this {@link ReactiveSubscription}.
                     * <p />
                     * A reactive Redis connection can have multiple subscriptions. If two or more subscriptions subscribe to the same
                     * target (channel/pattern) and one unsubscribes, then the other one will no longer receive messages for the target due
                     * to how Redis handled Pub/Sub subscription.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.1
                     */
                    // @ts-ignore
                    interface ReactiveSubscription {
                        /**
                         * Subscribes to the {@code channels} and adds these to the current subscription.
                         * @param channels channel names. Must not be empty.
                         * @return empty {#link Mono} that completes once the channel subscription is registered.
                         */
                        // @ts-ignore
                        subscribe(...channels: java.nio.ByteBuffer[]): object
                        /**
                         * Subscribes to the channel {@code patterns} and adds these to the current subscription.
                         * @param patterns channel patterns. Must not be empty.
                         * @return empty {#link Mono} that completes once the pattern subscription is registered.
                         */
                        // @ts-ignore
                        pSubscribe(...patterns: java.nio.ByteBuffer[]): object
                        /**
                         * Cancels the current subscription for all {@link #getChannels() channels}.
                         * @return empty {#link Mono} that completes once the channel subscriptions are unregistered.
                         */
                        // @ts-ignore
                        unsubscribe(): object
                        /**
                         * Cancels the current subscription for all given channels.
                         * @param channels channel names. Must not be empty.
                         * @return empty {#link Mono} that completes once the channel subscriptions are unregistered.
                         */
                        // @ts-ignore
                        unsubscribe(...channels: java.nio.ByteBuffer[]): object
                        /**
                         * Cancels the subscription for all channels matched by {@link #getPatterns()} patterns}.
                         * @return empty {#link Mono} that completes once the patterns subscriptions are unregistered.
                         */
                        // @ts-ignore
                        pUnsubscribe(): object
                        /**
                         * Cancels the subscription for all channels matching the given patterns.
                         * @param patterns must not be empty.
                         * @return empty {#link Mono} that completes once the patterns subscriptions are unregistered.
                         */
                        // @ts-ignore
                        pUnsubscribe(...patterns: java.nio.ByteBuffer[]): object
                        /**
                         * Returns the (named) channels for this subscription.
                         * @return {#link Set} of named channels.
                         */
                        // @ts-ignore
                        getChannels(): Array<java.nio.ByteBuffer>
                        /**
                         * Returns the channel patters for this subscription.
                         * @return {#link Set} of channel patterns.
                         */
                        // @ts-ignore
                        getPatterns(): Array<java.nio.ByteBuffer>
                        /**
                         * Retrieve the message stream emitting {@link Message messages}. The resulting message stream contains only messages
                         * for subscribed and registered {@link #getChannels() channels} and {@link #getPatterns() patterns}.
                         * <p />
                         * Stream publishing uses {@link reactor.core.publisher.ConnectableFlux} turning the stream into a hot sequence.
                         * Emission is paused if there is no demand. Messages received in that time are buffered. This stream terminates
                         * either if all subscribers unsubscribe or if this {@link Subscription} is {@link #cancel() is terminated}.
                         * @return {#link Flux} emitting the {@link Message} stream.
                         */
                        // @ts-ignore
                        receive(): object
                        /**
                         * Unsubscribe from all {@link #getChannels() channels} and {@link #getPatterns() patterns} and request termination of
                         * all active {@link #receive() message streams}. Active streams will terminate with a
                         * {@link java.util.concurrent.CancellationException}.
                         * @return a {#link Mono} that completes once termination is finished.
                         */
                        // @ts-ignore
                        cancel(): object
                    }
                }
            }
        }
    }
}
