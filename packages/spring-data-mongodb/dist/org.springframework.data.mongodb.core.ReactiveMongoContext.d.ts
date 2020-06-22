declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * {@link ReactiveMongoContext} utilizes and enriches the Reactor {@link Context} with information potentially required
                     * for e.g. {@link ClientSession} handling and transactions.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.1
                     * @see Mono#subscriberContext()
                     * @see Context
                     */
                    // @ts-ignore
                    class ReactiveMongoContext extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Gets the {@code Mono<ClientSession>} from Reactor {@link reactor.util.context.Context}. The resulting {@link Mono}
                         * emits the {@link ClientSession} if a session is associated with the current {@link reactor.util.context.Context
                         * subscriber context}. If the context does not contain a session, the resulting {@link Mono} terminates empty (i.e.
                         * without emitting a value).
                         * @return the {#link Mono} emitting the client session if present; otherwise the {@link Mono} terminates empty.
                         */
                        // @ts-ignore
                        public static getSession(): object
                        /**
                         * Sets the {@link ClientSession} into the Reactor {@link reactor.util.context.Context}.
                         * @param context must not be {#literal null}.
                         * @param session must not be {#literal null}.
                         * @return a new {#link Context}.
                         * @see Context#put(Object, Object)
                         */
                        // @ts-ignore
                        public static setSession(context: Context, session: object): Context
                    }
                }
            }
        }
    }
}
