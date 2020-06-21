declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Instances of this interface support a single listener being
                     * registered for publisher confirms with multiple channels,
                     * by adding context to the callbacks.
                     * @author Gary Russell
                     * @since 1.0.1
                     */
                    // @ts-ignore
                    interface PublisherCallbackChannel {
                        /**
                         * Header used to determine which listener to invoke for a returned message.
                         */
                        // @ts-ignore
                        readonly RETURN_LISTENER_CORRELATION_KEY: java.lang.String | string
                        /**
                         * Header used to locate a pending confirm to which to attach a returned message.
                         */
                        // @ts-ignore
                        readonly RETURNED_MESSAGE_CORRELATION_KEY: java.lang.String | string
                        /**
                         * Adds a {@link Listener}.
                         * @param listener The Listener.
                         */
                        // @ts-ignore
                        addListener(listener: org.springframework.amqp.rabbit.connection.PublisherCallbackChannel.Listener): void
                        /**
                         * Expire (remove) any {@link PendingConfirm}s created before cutoffTime for the
                         * supplied listener and return them to the caller.
                         * @param listener the listener.
                         * @param cutoffTime the time before which expired messages were created.
                         * @return the list of expired confirms.
                         */
                        // @ts-ignore
                        expire(listener: org.springframework.amqp.rabbit.connection.PublisherCallbackChannel.Listener, cutoffTime: number /*long*/): Array<org.springframework.amqp.rabbit.connection.PendingConfirm>
                        /**
                         * Get the {@link PendingConfirm}s count.
                         * @param listener the listener.
                         * @return Count of the pending confirms.
                         */
                        // @ts-ignore
                        getPendingConfirmsCount(listener: org.springframework.amqp.rabbit.connection.PublisherCallbackChannel.Listener): number /*int*/
                        /**
                         * Get the total pending confirms count.
                         * @return the count.
                         * @since 2.1
                         */
                        // @ts-ignore
                        getPendingConfirmsCount(): number /*int*/
                        /**
                         * Adds a pending confirmation to this channel's map.
                         * @param listener The listener.
                         * @param seq The key to the map.
                         * @param pendingConfirm The PendingConfirm object.
                         */
                        // @ts-ignore
                        addPendingConfirm(listener: org.springframework.amqp.rabbit.connection.PublisherCallbackChannel.Listener, seq: number /*long*/, pendingConfirm: org.springframework.amqp.rabbit.connection.PendingConfirm): void
                        /**
                         * Use this to invoke methods on the underlying rabbit client {@link Channel} that
                         * are not supported by this implementation.
                         * @return The underlying rabbit client {#link Channel}.
                         * @since 1.4.
                         */
                        // @ts-ignore
                        getDelegate(): Channel
                        /**
                         * Set a callback to be invoked after the ack/nack has been handled.
                         * @param callback the callback.
                         * @since 2.1
                         */
                        // @ts-ignore
                        setAfterAckCallback(callback: java.util.function$.Consumer<Channel>): void
                    }
                }
            }
        }
    }
}
