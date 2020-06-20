declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * Abstract base class for {@code Processor} implementations that bridge between
                     * event-listener write APIs and Reactive Streams.
                     * <p>Specifically a base class for writing to the HTTP response body with
                     * Servlet 3.1 non-blocking I/O and Undertow XNIO as well for writing WebSocket
                     * messages through the Java WebSocket API (JSR-356), Jetty, and Undertow.
                     * @author Arjen Poutsma
                     * @author Violeta Georgieva
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     * @param <T> the type of element signaled to the {#link Subscriber}
                     */
                    // @ts-ignore
                    class AbstractListenerWriteProcessor<T> extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Create an instance with the given log prefix.
                         * @since 5.1
                         */
                        // @ts-ignore
                        constructor(logPrefix: string)
                        /**
                         * Special logger for debugging Reactive Streams signals.
                         * @see LogDelegateFactory#getHiddenLog(Class)
                         * @see AbstractListenerReadPublisher#rsReadLogger
                         * @see AbstractListenerWriteFlushProcessor#rsWriteFlushLogger
                         * @see WriteResultPublisher#rsWriteResultLogger
                         */
                        // @ts-ignore
                        readonly rsWriteLogger: Log
                        /**
                         * Get the configured log prefix.
                         * @since 5.1
                         */
                        // @ts-ignore
                        getLogPrefix(): java.lang.String
                        // @ts-ignore
                        onSubscribe(subscription: Subscription): void
                        // @ts-ignore
                        onNext(data: T): void
                        /**
                         * Error signal from the upstream, write Publisher. This is also used by
                         * sub-classes to delegate error notifications from the container.
                         */
                        // @ts-ignore
                        onError(ex: Error): void
                        /**
                         * Completion signal from the upstream, write Publisher. This is also used
                         * by sub-classes to delegate completion notifications from the container.
                         */
                        // @ts-ignore
                        onComplete(): void
                        /**
                         * Invoked when writing is possible, either in the same thread after a check
                         * via {@link #isWritePossible()}, or as a callback from the underlying
                         * container.
                         */
                        // @ts-ignore
                        onWritePossible(): void
                        /**
                         * Invoked during an error or completion callback from the underlying
                         * container to cancel the upstream subscription.
                         */
                        // @ts-ignore
                        cancel(): void
                        // @ts-ignore
                        subscribe(subscriber: object): void
                        /**
                         * Whether the given data item has any content to write.
                         * If false the item is not written.
                         */
                        // @ts-ignore
                        abstract isDataEmpty(data: T): boolean
                        /**
                         * Template method invoked after a data item to write is received via
                         * {@link Subscriber#onNext(Object)}. The default implementation saves the
                         * data item for writing once that is possible.
                         */
                        // @ts-ignore
                        dataReceived(data: T): void
                        /**
                         * Whether writing is possible.
                         */
                        // @ts-ignore
                        abstract isWritePossible(): boolean
                        /**
                         * Write the given item.
                         * <p><strong>Note:</strong> Sub-classes are responsible for releasing any
                         * data buffer associated with the item, once fully written, if pooled
                         * buffers apply to the underlying container.
                         * @param data the item to write
                         * @return {#code true} if the current data item was written completely and
                         *  a new item requested, or {@code false} if it was written partially and
                         *  we'll need more write callbacks before it is fully written
                         */
                        // @ts-ignore
                        abstract write(data: T): boolean
                        /**
                         * Invoked after the current data has been written and before requesting
                         * the next item from the upstream, write Publisher.
                         * <p>The default implementation is a no-op.
                         * @deprecated originally introduced for Undertow to stop write notifications
                         *  when no data is available, but deprecated as of as of 5.0.6 since constant
                         *  switching on every requested item causes a significant slowdown.
                         */
                        // @ts-ignore
                        writingPaused(): void
                        /**
                         * Invoked after onComplete or onError notification.
                         * <p>The default implementation is a no-op.
                         */
                        // @ts-ignore
                        writingComplete(): void
                        /**
                         * Invoked when an I/O error occurs during a write. Sub-classes may choose
                         * to ignore this if they know the underlying API will provide an error
                         * notification in a container thread.
                         * <p>Defaults to no-op.
                         */
                        // @ts-ignore
                        writingFailed(ex: Error): void
                        /**
                         * Invoked after any error (either from the upstream write Publisher, or
                         * from I/O operations to the underlying server) and cancellation
                         * to discard in-flight data that was in
                         * the process of being written when the error took place.
                         * @param data the data to be released
                         * @since 5.0.11
                         */
                        // @ts-ignore
                        abstract discardData(data: T): void
                    }
                }
            }
        }
    }
}
