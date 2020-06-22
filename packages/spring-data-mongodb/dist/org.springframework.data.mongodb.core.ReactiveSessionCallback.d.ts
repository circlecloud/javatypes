declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Callback interface for executing operations within a {@link com.mongodb.reactivestreams.client.ClientSession} using
                     * reactive infrastructure.
                     * @author Christoph Strobl
                     * @since 2.1
                     * @see com.mongodb.reactivestreams.client.ClientSession
                     */
                    // @ts-ignore
                    interface ReactiveSessionCallback<T> {
                        /**
                         * Execute operations against a MongoDB instance via session bound {@link ReactiveMongoOperations}. The session is
                         * inferred directly into the operation so that no further interaction is necessary.
                         * <p />
                         * Please note that only Spring Data-specific abstractions like {@link ReactiveMongoOperations#find(Query, Class)} and
                         * others are enhanced with the {@link com.mongodb.session.ClientSession}. When obtaining plain MongoDB gateway
                         * objects like {@link com.mongodb.reactivestreams.client.MongoCollection} or
                         * {@link com.mongodb.reactivestreams.client.MongoDatabase} via eg.
                         * {@link ReactiveMongoOperations#getCollection(String)} we leave responsibility for
                         * {@link com.mongodb.session.ClientSession} again up to the caller.
                         * @param operations will never be {#literal null}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        doInSession(operations: org.springframework.data.mongodb.core.ReactiveMongoOperations): object
                    }
                }
            }
        }
    }
}
