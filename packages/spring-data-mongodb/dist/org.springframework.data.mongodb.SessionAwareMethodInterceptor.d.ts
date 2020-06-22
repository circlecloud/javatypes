declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                /**
                 * {@link MethodInterceptor} implementation looking up and invoking an alternative target method having
                 * {@link ClientSession} as its first argument. This allows seamless integration with the existing code base.
                 * <p />
                 * The {@link MethodInterceptor} is aware of methods on {@code MongoCollection} that my return new instances of itself
                 * like (eg. {@link com.mongodb.reactivestreams.client.MongoCollection#withWriteConcern(WriteConcern)} and decorate them
                 * if not already proxied.
                 * @param <D> Type of the actual Mongo Database.
                 * @param <C> Type of the actual Mongo Collection.
                 * @author Christoph Strobl
                 * @author Mark Paluch
                 * @since 2.1
                 */
                // @ts-ignore
                class SessionAwareMethodInterceptor<D, C> extends java.lang.Object {
                    /**
                     * Create a new SessionAwareMethodInterceptor for given target.
                     * @param session the {#link ClientSession} to be used on invocation.
                     * @param target the original target object.
                     * @param databaseType the MongoDB database type
                     * @param databaseDecorator a {#link ClientSessionOperator} used to create the proxy for an imperative / reactive
                     *           {@code MongoDatabase}.
                     * @param collectionType the MongoDB collection type.
                     * @param collectionDecorator a {#link ClientSessionOperator} used to create the proxy for an imperative / reactive
                     *           {@code MongoCollection}.
                     * @param <T> target object type.
                     */
                    // @ts-ignore
                    constructor(session: ClientSession, target: T, sessionType: java.lang.Class<any>, databaseType: java.lang.Class<D>, databaseDecorator: org.springframework.data.mongodb.SessionAwareMethodInterceptor.ClientSessionOperator<D>, collectionType: java.lang.Class<C>, collectionDecorator: org.springframework.data.mongodb.SessionAwareMethodInterceptor.ClientSessionOperator<C>)
                    // @ts-ignore
                    public invoke(methodInvocation: MethodInvocation): any
                    // @ts-ignore
                    decorate(target: java.lang.Object | any): any
                }
            }
        }
    }
}
