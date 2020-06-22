declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace support {
                    namespace collections {
                        /**
                         * Redis extension for the {@link List} contract. Supports {@link List}, {@link Queue} and {@link Deque} contracts as
                         * well as their equivalent blocking siblings {@link BlockingDeque} and {@link BlockingDeque}.
                         * @author Costin Leau
                         */
                        // @ts-ignore
                        interface RedisList<E> extends org.springframework.data.redis.support.collections.RedisCollection<E>, java.util.List<E>, java.util.concurrent.BlockingDeque<E> {
                            // @ts-ignore
                            range(begin: number /*long*/, end: number /*long*/): Array<E>
                            // @ts-ignore
                            trim(begin: number /*int*/, end: number /*int*/): org.springframework.data.redis.support.collections.RedisList<E>
                        }
                    }
                }
            }
        }
    }
}
