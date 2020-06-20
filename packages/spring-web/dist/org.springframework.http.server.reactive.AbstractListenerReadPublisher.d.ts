declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * Abstract base class for {@code Publisher} implementations that bridge between
                     * event-listener read APIs and Reactive Streams.
                     * <p>Specifically a base class for reading from the HTTP request body with
                     * Servlet 3.1 non-blocking I/O and Undertow XNIO as well as handling incoming
                     * WebSocket messages with standard Java WebSocket (JSR-356), Jetty, and
                     * Undertow.
                     * @author Arjen Poutsma
                     * @author Violeta Georgieva
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     * @param <T> the type of element signaled
                     */
                    // @ts-ignore
                    class AbstractListenerReadPublisher<T> extends java.lang.Object {
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
                         * @see AbstractListenerWriteProcessor#rsWriteLogger
                         * @see AbstractListenerWriteFlushProcessor#rsWriteFlushLogger
                         * @see WriteResultPublisher#rsWriteResultLogger
                         */
                        // @ts-ignore
                        rsReadLogger: Log
                        /**
                         * Return the configured log message prefix.
                         * @since 5.1
                         */
                        // @ts-ignore
                        getLogPrefix(): java.lang.String
                        // @ts-ignore
                        subscribe(subscriber: object): void
                        /**
                         * Invoked when reading is possible, either in the same thread after a check
                         * via {@link #checkOnDataAvailable()}, or as a callback from the underlying
                         * container.
                         */
                        // @ts-ignore
                        onDataAvailable(): void
                        /**
                         * Sub-classes can call this method to delegate a contain notification when
                         * all data has been read.
                         */
                        // @ts-ignore
                        onAllDataRead(): void
                        /**
                         * Sub-classes can call this to delegate container error notifications.
                         */
                        // @ts-ignore
                        onError(ex: Error): void
                        /**
                         * Check if data is available and either call {@link #onDataAvailable()}
                         * immediately or schedule a notification.
                         */
                        // @ts-ignore
                        abstract checkOnDataAvailable(): void
                        /**
                         * Read once from the input, if possible.
                         * @return the item that was read; or {#code null}
                         */
                        // @ts-ignore
                        abstract read(): T
                        /**
                         * Invoked when reading is paused due to a lack of demand.
                         * <p><strong>Note:</strong> This method is guaranteed not to compete with
                         * {@link #checkOnDataAvailable()} so it can be used to safely suspend
                         * reading, if the underlying API supports it, i.e. without competing with
                         * an implicit call to resume via {@code checkOnDataAvailable()}.
                         * @since 5.0.2
                         */
                        // @ts-ignore
                        abstract readingPaused(): void
                        /**
                         * Invoked after an I/O read error from the underlying server or after a
                         * cancellation signal from the downstream consumer to allow sub-classes
                         * to discard any current cached data they might have.
                         * @since 5.0.11
                         */
                        // @ts-ignore
                        abstract discardData(): void
                    }
                }
            }
        }
    }
}
