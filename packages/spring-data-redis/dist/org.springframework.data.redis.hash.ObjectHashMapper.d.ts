declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace hash {
                    /**
                     * {@link HashMapper} based on {@link MappingRedisConverter}. Supports nested properties and simple types like
                     * {@link String}.
                     * <pre>
                     * <code>
                     * class Person {
                     * String firstname;
                     * String lastname;
                     * List&lt;String&gt; nicknames;
                     * List&lt;Person&gt; coworkers;
                     * Address address;
                     * }
                     * </code>
                     * </pre>
                     * The above is represented as:
                     * <pre>
                     * <code>
                     * _class=org.example.Person
                     * firstname=rand
                     * lastname=al'thor
                     * coworkers.[0].firstname=mat
                     * coworkers.[0].nicknames.[0]=prince of the ravens
                     * coworkers.[1].firstname=perrin
                     * coworkers.[1].address.city=two rivers
                     * </code>
                     * </pre>
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.8
                     */
                    // @ts-ignore
                    class ObjectHashMapper extends java.lang.Object implements org.springframework.data.redis.hash.HashMapper<java.lang.Object | any, number /*byte*/[], number /*byte*/[]> {
                        /**
                         * Creates new {@link ObjectHashMapper}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates new {@link ObjectHashMapper}.
                         * @param customConversions can be {#literal null}.
                         * @deprecated since 2.0, use {#link #ObjectHashMapper(org.springframework.data.convert.CustomConversions)}.
                         */
                        // @ts-ignore
                        constructor(customConversions: org.springframework.data.redis.core.convert.CustomConversions)
                        /**
                         * Creates new {@link ObjectHashMapper}.
                         * @param customConversions can be {#literal null}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        constructor(customConversions: org.springframework.data.convert.CustomConversions)
                        // @ts-ignore
                        public toHash(source: java.lang.Object | any): java.util.Map<number /*byte*/[], number /*byte*/[]>
                        // @ts-ignore
                        public fromHash(hash: java.util.Map<number /*byte*/[], number /*byte*/[]>): any
                        /**
                         * Convert a {@code hash} (map) to an object and return the casted result.
                         * @param hash
                         * @param type
                         * @param <T>
                         * @return 
                         */
                        // @ts-ignore
                        public fromHash<T>(hash: java.util.Map<number /*byte*/[], number /*byte*/[]>, type: java.lang.Class<T>): T
                    }
                }
            }
        }
    }
}
