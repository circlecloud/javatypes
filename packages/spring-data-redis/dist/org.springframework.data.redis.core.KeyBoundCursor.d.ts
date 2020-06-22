declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * @author Christoph Strobl
                     * @param <T>
                     * @since 1.4
                     */
                    // @ts-ignore
                    abstract class KeyBoundCursor<T> extends org.springframework.data.redis.core.ScanCursor<T> {
                        /**
                         * Crates new {@link ScanCursor}
                         * @param cursorId
                         * @param options Defaulted to {#link ScanOptions#NONE} if nulled.
                         */
                        // @ts-ignore
                        constructor(key: number /*byte*/[], cursorId: number /*long*/, options: org.springframework.data.redis.core.ScanOptions)
                        // @ts-ignore
                        doScan(cursorId: number /*long*/, options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.ScanIteration<T>
                        // @ts-ignore
                        abstract doScan(key: number /*byte*/[], cursorId: number /*long*/, options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.ScanIteration<T>
                        // @ts-ignore
                        public getKey(): number /*byte*/[]
                    }
                }
            }
        }
    }
}
