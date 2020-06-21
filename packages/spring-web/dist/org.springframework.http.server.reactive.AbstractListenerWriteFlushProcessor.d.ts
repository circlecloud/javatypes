declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * An alternative to {@link AbstractListenerWriteProcessor} but instead writing
                     * a {@code Publisher<Publisher<T>>} with flush boundaries enforces after
                     * the completion of each nested Publisher.
                     * @author Arjen Poutsma
                     * @author Violeta Georgieva
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     * @param <T> the type of element signaled to the {#link Subscriber}
                     */
                    // @ts-ignore
                    abstract class AbstractListenerWriteFlushProcessor<T> extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Create an instance with the given log prefix.
                         * @since 5.1
                         */
                        // @ts-ignore
                        constructor(logPrefix: java.lang.String | string)
                        /**
                         * Special logger for debugging Reactive Streams signals.
                         * @see LogDelegateFactory#getHiddenLog(Class)
                         * @see AbstractListenerReadPublisher#rsReadLogger
                         * @see AbstractListenerWriteProcessor#rsWriteLogger
                         * @see WriteResultPublisher#rsWriteResultLogger
                         */
                        // @ts-ignore
                        static readonly rsWriteFlushLogger: Log
                        /**
                         * Create an instance with the given log prefix.
                         * @since 5.1
                         */
                        // @ts-ignore
                        public getLogPrefix(): string
                        // @ts-ignore
                        public onSubscribe(subscription: Subscription): void
                        // @ts-ignore
                        public onNext(publisher: object): void
                        /**
                         * Error signal from the upstream, write Publisher. This is also used by
                         * sub-classes to delegate error notifications from the container.
                         */
                        // @ts-ignore
                        public onError(ex: java.lang.Throwable | Error): void
                        /**
                         * Completion signal from the upstream, write Publisher. This is also used
                         * by sub-classes to delegate completion notifications from the container.
                         */
                        // @ts-ignore
                        public onComplete(): void
                        /**
                         * Invoked when flushing is possible, either in the same thread after a check
                         * via {@link #isWritePossible()}, or as a callback from the underlying
                         * container.
                         */
                        // @ts-ignore
                        onFlushPossible(): void
                        /**
                         * Invoked during an error or completion callback from the underlying
                         * container to cancel the upstream subscription.
                         */
                        // @ts-ignore
                        cancel(): void
                        // @ts-ignore
                        public subscribe(subscriber: object): void
                        /**
                         * Create a new processor for the current flush boundary.
                         */
                        // @ts-ignore
                        abstract createWriteProcessor(): object
                        /**
                         * Whether writing/flushing is possible.
                         */
                        // @ts-ignore
                        abstract isWritePossible(): boolean
                        /**
                         * Flush the output if ready, or otherwise {@link #isFlushPending()} should
                         * return true after.
                         * <p>This is primarily for the Servlet non-blocking I/O API where flush
                         * cannot be called without a readyToWrite check.
                         */
                        // @ts-ignore
                        abstract flush(): void
                        /**
                         * Whether flushing is pending.
                         * <p>This is primarily for the Servlet non-blocking I/O API where flush
                         * cannot be called without a readyToWrite check.
                         */
                        // @ts-ignore
                        abstract isFlushPending(): boolean
                        /**
                         * Invoked when an error happens while flushing. Sub-classes may choose
                         * to ignore this if they know the underlying API will provide an error
                         * notification in a container thread.
                         * <p>Defaults to no-op.
                         */
                        // @ts-ignore
                        flushingFailed(t: java.lang.Throwable | Error): void
                    }
                }
            }
        }
    }
}
