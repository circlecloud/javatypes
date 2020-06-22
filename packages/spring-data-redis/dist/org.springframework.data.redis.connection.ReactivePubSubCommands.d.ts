declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Redis <a href="https://redis.io/commands/#pubsub">Pub/Sub</a> commands executed using reactive infrastructure.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.1
                     */
                    // @ts-ignore
                    interface ReactivePubSubCommands {
                        /**
                         * Creates a subscription for this connection. Connections can have multiple {@link ReactiveSubscription}s.
                         * @return the subscription.
                         */
                        // @ts-ignore
                        createSubscription(): object
                        /**
                         * Publishes the given {@code message} to the given {@code channel}.
                         * @param channel the channel to publish to. Must not be {#literal null}.
                         * @param message message to publish. Must not be {#literal null}.
                         * @return the number of clients that received the message.
                         * @see <a href="https://redis.io/commands/publish">Redis Documentation: PUBLISH</a>
                         */
                        // @ts-ignore
                        publish(channel: java.nio.ByteBuffer, message: java.nio.ByteBuffer): object
                        /**
                         * Publishes the given messages to the {@link ChannelMessage#getChannel() appropriate channels}.
                         * @param messageStream the messages to publish to. Must not be {#literal null}.
                         * @return the number of clients that received the message.
                         * @see <a href="https://redis.io/commands/publish">Redis Documentation: PUBLISH</a>
                         */
                        // @ts-ignore
                        publish(messageStream: object): object
                        /**
                         * Subscribes the connection to the given {@code channels}. Once subscribed, a connection enters listening mode and
                         * can only subscribe to other channels or unsubscribe. No other commands are accepted until the connection is
                         * unsubscribed.
                         * <p />
                         * Note that cancellation of the {@link Flux} will unsubscribe from {@code channels}.
                         * @param channels channel names, must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/subscribe">Redis Documentation: SUBSCRIBE</a>
                         */
                        // @ts-ignore
                        subscribe(...channels: java.nio.ByteBuffer[]): object
                        /**
                         * Subscribes the connection to all channels matching the given {@code patterns}. Once subscribed, a connection enters
                         * listening mode and can only subscribe to other channels or unsubscribe. No other commands are accepted until the
                         * connection is unsubscribed.
                         * <p />
                         * Note that cancellation of the {@link Flux} will unsubscribe from {@code patterns}.
                         * @param patterns channel name patterns, must not be {#literal null}.
                         * @see <a href="https://redis.io/commands/psubscribe">Redis Documentation: PSUBSCRIBE</a>
                         */
                        // @ts-ignore
                        pSubscribe(...patterns: java.nio.ByteBuffer[]): object
                    }
                }
            }
        }
    }
}
