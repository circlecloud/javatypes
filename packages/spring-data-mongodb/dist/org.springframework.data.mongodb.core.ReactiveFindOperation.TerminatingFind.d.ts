declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveFindOperation {
                        /**
                         * Compose find execution by calling one of the terminating methods.
                         */
                        // @ts-ignore
                        interface TerminatingFind<T> {
                            /**
                             * Get exactly zero or one result.
                             * @return {#link Mono#empty()} if no match found. Never {@literal null}.
                             * @throws org.springframework.dao.IncorrectResultSizeDataAccessException if more than one match found.
                             */
                            // @ts-ignore
                            one(): object
                            /**
                             * Get the first or no result.
                             * @return {#link Mono#empty()} if no match found. Never {@literal null}.
                             */
                            // @ts-ignore
                            first(): object
                            /**
                             * Get all matching elements.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            all(): object
                            /**
                             * Get all matching elements using a {@link com.mongodb.CursorType#TailableAwait tailable cursor}. The stream will
                             * not be completed unless the {@link org.reactivestreams.Subscription} is
                             * {@link org.reactivestreams.Subscription#cancel() canceled}.
                             * <p />
                             * However, the stream may become dead, or invalid, if either the query returns no match or the cursor returns the
                             * document at the "end" of the collection and then the application deletes that document.
                             * <p />
                             * A stream that is no longer in use must be {@link reactor.core.Disposable#dispose()} disposed} otherwise the
                             * streams will linger and exhaust resources. <br/>
                             * <strong>NOTE:</strong> Requires a capped collection.
                             * @return the {#link Flux} emitting converted objects.
                             * @since 2.1
                             */
                            // @ts-ignore
                            tail(): object
                            /**
                             * Get the number of matching elements.
                             * @return {#link Mono} emitting total number of matching elements. Never {@literal null}.
                             */
                            // @ts-ignore
                            count(): object
                            /**
                             * Check for the presence of matching elements.
                             * @return {#link Mono} emitting {@literal true} if at least one matching element exists. Never {@literal null}.
                             */
                            // @ts-ignore
                            exists(): object
                        }
                    }
                }
            }
        }
    }
}
