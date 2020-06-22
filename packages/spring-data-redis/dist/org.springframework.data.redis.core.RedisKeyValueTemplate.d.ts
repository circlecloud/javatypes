declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Redis specific implementation of {@link KeyValueTemplate}.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    class RedisKeyValueTemplate extends KeyValueTemplate {
                        /**
                         * Create new {@link RedisKeyValueTemplate}.
                         * @param adapter must not be {#literal null}.
                         * @param mappingContext must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(adapter: org.springframework.data.redis.core.RedisKeyValueAdapter, mappingContext: org.springframework.data.redis.core.mapping.RedisMappingContext)
                        /**
                         * Obtain the underlying redis specific {@link org.springframework.data.convert.EntityConverter}.
                         * @return never {#literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public getConverter(): org.springframework.data.redis.core.convert.RedisConverter
                        // @ts-ignore
                        public getMappingContext(): org.springframework.data.redis.core.mapping.RedisMappingContext
                        /**
                         * Retrieve entities by resolving their {@literal id}s and converting them into required type. <br />
                         * The callback provides either a single {@literal id} or an {@link Iterable} of {@literal id}s, used for retrieving
                         * the actual domain types and shortcuts manual retrieval and conversion of {@literal id}s via {@link RedisTemplate}.
                         * <pre>
                         * <code>
                         * List&#60;RedisSession&#62; sessions = template.find(new RedisCallback&#60;Set&#60;byte[]&#62;&#62;() {
                         * public Set&#60;byte[]&#60; doInRedis(RedisConnection connection) throws DataAccessException {
                         * return connection
                         * .sMembers("spring:session:sessions:securityContext.authentication.principal.username:user"
                         * .getBytes());
                         * }
                         * }, RedisSession.class);
                         * </code>
                         * <pre>
                         * @param callback provides the to retrieve entity ids. Must not be {#literal null}.
                         * @param type must not be {#literal null}.
                         * @return empty list if not elements found.
                         */
                        // @ts-ignore
                        public find<T>(callback: org.springframework.data.redis.core.RedisCallback<any>, type: java.lang.Class<T>): Array<T>
                        // @ts-ignore
                        public insert<T>(id: java.lang.Object | any, objectToInsert: T): T
                        // @ts-ignore
                        public update<T>(objectToUpdate: T): T
                        // @ts-ignore
                        public update<T>(id: java.lang.Object | any, objectToUpdate: T): T
                        // @ts-ignore
                        doPartialUpdate(update: org.springframework.data.redis.core.PartialUpdate<any>): void
                    }
                }
            }
        }
    }
}
