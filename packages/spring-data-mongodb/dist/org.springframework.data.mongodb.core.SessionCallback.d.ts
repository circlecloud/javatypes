declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Callback interface for executing operations within a {@link com.mongodb.session.ClientSession}.
                     * @author Christoph Strobl
                     * @since 2.1
                     * @see com.mongodb.session.ClientSession
                     */
                    // @ts-ignore
                    interface SessionCallback<T> {
                        /**
                         * Execute operations against a MongoDB instance via session bound {@link MongoOperations}. The session is inferred
                         * directly into the operation so that no further interaction is necessary.
                         * <p />
                         * Please note that only Spring Data-specific abstractions like {@link MongoOperations#find(Query, Class)} and others
                         * are enhanced with the {@link com.mongodb.session.ClientSession}. When obtaining plain MongoDB gateway objects like
                         * {@link com.mongodb.client.MongoCollection} or {@link com.mongodb.client.MongoDatabase} via eg.
                         * {@link MongoOperations#getCollection(String)} we leave responsibility for {@link com.mongodb.session.ClientSession}
                         * again up to the caller.
                         * @param operations will never be {#literal null}.
                         * @return can be {#literal null}.
                         */
                        // @ts-ignore
                        doInSession(operations: org.springframework.data.mongodb.core.MongoOperations): T
                    }
                }
            }
        }
    }
}
