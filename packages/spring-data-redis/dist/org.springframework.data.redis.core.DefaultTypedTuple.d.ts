declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Default implementation of TypedTuple.
                     * @author Costin Leau
                     */
                    // @ts-ignore
                    class DefaultTypedTuple<V> extends java.lang.Object implements org.springframework.data.redis.core.ZSetOperations.TypedTuple<V> {
                        /**
                         * Constructs a new <code>DefaultTypedTuple</code> instance.
                         * @param value can be {#literal null}.
                         * @param score can be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(value: V, score: java.lang.Double | number)
                        // @ts-ignore
                        public getScore(): number
                        // @ts-ignore
                        public getValue(): V
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public equals(obj: java.lang.Object | any): boolean
                        // @ts-ignore
                        public compareTo(o: java.lang.Double | number): number /*int*/
                        // @ts-ignore
                        public compareTo(o: org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>): number /*int*/
                    }
                }
            }
        }
    }
}
