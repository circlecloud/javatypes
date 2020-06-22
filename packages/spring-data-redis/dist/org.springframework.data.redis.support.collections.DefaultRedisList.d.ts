declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace support {
                    namespace collections {
                        /**
                         * Default implementation for {@link RedisList}. Suitable for not just lists, but also queues (FIFO ordering) or stacks
                         * (LIFO ordering) and deques (or double ended queues). Allows the maximum size (or the cap) to be specified to prevent
                         * the list from over growing. Note that all write operations will execute immediately, whether a cap is specified or
                         * not - the list will always accept new items (trimming the tail after each insert in case of capped collections).
                         * @author Costin Leau
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        class DefaultRedisList<E> extends org.springframework.data.redis.support.collections.AbstractRedisCollection<E> implements org.springframework.data.redis.support.collections.RedisList<E> {
                            /**
                             * Constructs a new, uncapped {@link DefaultRedisList} instance.
                             * @param key Redis key of this list.
                             * @param operations {#link RedisOperations} for the value type of this list.
                             */
                            // @ts-ignore
                            constructor(key: java.lang.String | string, operations: org.springframework.data.redis.core.RedisOperations<java.lang.String | string, E>)
                            /**
                             * Constructs a new, uncapped {@link DefaultRedisList} instance.
                             * @param boundOps {#link BoundListOperations} for the value type of this list.
                             */
                            // @ts-ignore
                            constructor(boundOps: org.springframework.data.redis.core.BoundListOperations<java.lang.String | string, E>)
                            /**
                             * Constructs a new {@link DefaultRedisList} instance.
                             * @param boundOps {#link BoundListOperations} for the value type of this list.
                             * @param maxSize
                             */
                            // @ts-ignore
                            constructor(boundOps: org.springframework.data.redis.core.BoundListOperations<java.lang.String | string, E>, maxSize: number /*int*/)
                            /**
                             * Sets the maximum size of the (capped) list. A value of 0 means unlimited.
                             * @param maxSize list maximum size
                             */
                            // @ts-ignore
                            public setMaxSize(maxSize: number /*int*/): void
                            // @ts-ignore
                            public range(start: number /*long*/, end: number /*long*/): Array<E>
                            // @ts-ignore
                            public trim(start: number /*int*/, end: number /*int*/): org.springframework.data.redis.support.collections.RedisList<E>
                            // @ts-ignore
                            public iterator(): java.util.Iterator<E>
                            // @ts-ignore
                            public size(): number /*int*/
                            // @ts-ignore
                            public add(value: E): boolean
                            // @ts-ignore
                            public clear(): void
                            // @ts-ignore
                            public remove(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public add(index: number /*int*/, element: E): void
                            // @ts-ignore
                            public addAll(index: number /*int*/, c: java.util.Collection<any> | Array<any>): boolean
                            // @ts-ignore
                            public get(index: number /*int*/): E
                            // @ts-ignore
                            public indexOf(o: java.lang.Object | any): number /*int*/
                            // @ts-ignore
                            public lastIndexOf(o: java.lang.Object | any): number /*int*/
                            // @ts-ignore
                            public listIterator(): java.util.ListIterator<E>
                            // @ts-ignore
                            public listIterator(index: number /*int*/): java.util.ListIterator<E>
                            // @ts-ignore
                            public remove(index: number /*int*/): E
                            // @ts-ignore
                            public set(index: number /*int*/, e: E): E
                            // @ts-ignore
                            public subList(fromIndex: number /*int*/, toIndex: number /*int*/): Array<E>
                            // @ts-ignore
                            public element(): E
                            // @ts-ignore
                            public offer(e: E): boolean
                            // @ts-ignore
                            public peek(): E
                            // @ts-ignore
                            public poll(): E
                            // @ts-ignore
                            public remove(): E
                            // @ts-ignore
                            public addFirst(e: E): void
                            // @ts-ignore
                            public addLast(e: E): void
                            // @ts-ignore
                            public descendingIterator(): java.util.Iterator<E>
                            // @ts-ignore
                            public getFirst(): E
                            // @ts-ignore
                            public getLast(): E
                            // @ts-ignore
                            public offerFirst(e: E): boolean
                            // @ts-ignore
                            public offerLast(e: E): boolean
                            // @ts-ignore
                            public peekFirst(): E
                            // @ts-ignore
                            public peekLast(): E
                            // @ts-ignore
                            public pollFirst(): E
                            // @ts-ignore
                            public pollLast(): E
                            // @ts-ignore
                            public pop(): E
                            // @ts-ignore
                            public push(e: E): void
                            // @ts-ignore
                            public removeFirst(): E
                            // @ts-ignore
                            public removeFirstOccurrence(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public removeLast(): E
                            // @ts-ignore
                            public removeLastOccurrence(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public drainTo(c: java.util.Collection<any> | Array<any>, maxElements: number /*int*/): number /*int*/
                            // @ts-ignore
                            public drainTo(c: java.util.Collection<any> | Array<any>): number /*int*/
                            // @ts-ignore
                            public offer(e: E, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                            // @ts-ignore
                            public poll(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): E
                            // @ts-ignore
                            public put(e: E): void
                            // @ts-ignore
                            public remainingCapacity(): number /*int*/
                            // @ts-ignore
                            public take(): E
                            // @ts-ignore
                            public offerFirst(e: E, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                            // @ts-ignore
                            public offerLast(e: E, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                            // @ts-ignore
                            public pollFirst(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): E
                            // @ts-ignore
                            public pollLast(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): E
                            // @ts-ignore
                            public putFirst(e: E): void
                            // @ts-ignore
                            public putLast(e: E): void
                            // @ts-ignore
                            public takeFirst(): E
                            // @ts-ignore
                            public takeLast(): E
                            // @ts-ignore
                            public getType(): org.springframework.data.redis.connection.DataType
                        }
                    }
                }
            }
        }
    }
}
