declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Gateway interface to execute {@link ClientSession} bound operations against MongoDB via a {@link SessionCallback}.
                     * <p />
                     * The very same bound {@link ClientSession} is used for all invocations of {@code execute} on the instance.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.1
                     */
                    // @ts-ignore
                    interface SessionScoped {
                        /**
                         * Executes the given {@link SessionCallback} within the {@link com.mongodb.session.ClientSession}.
                         * <p/>
                         * It is up to the caller to make sure the {@link com.mongodb.session.ClientSession} is {@link ClientSession#close()
                         * closed} when done.
                         * @param action callback object that specifies the MongoDB action the callback action. Must not be {#literal null}.
                         * @param <T> return type.
                         * @return a result object returned by the action. Can be {#literal null}.
                         */
                        // @ts-ignore
                        execute<T>(action: org.springframework.data.mongodb.core.SessionCallback<T>): T
                        /**
                         * Executes the given {@link SessionCallback} within the {@link com.mongodb.session.ClientSession}.
                         * <p/>
                         * It is up to the caller to make sure the {@link com.mongodb.session.ClientSession} is {@link ClientSession#close()
                         * closed} when done.
                         * @param action callback object that specifies the MongoDB action the callback action. Must not be {#literal null}.
                         * @param doFinally callback object that accepts {#link ClientSession} after invoking {@link SessionCallback}. This
                         *           {@link Consumer} is guaranteed to be notified in any case (successful and exceptional outcome of
                         *           {@link SessionCallback}).
                         * @param <T> return type.
                         * @return a result object returned by the action. Can be {#literal null}.
                         */
                        // @ts-ignore
                        execute<T>(action: org.springframework.data.mongodb.core.SessionCallback<T>, doFinally: java.util.function$.Consumer<ClientSession>): T
                    }
                }
            }
        }
    }
}
