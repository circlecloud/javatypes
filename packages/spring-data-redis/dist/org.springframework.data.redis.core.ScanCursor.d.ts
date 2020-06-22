declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Redis client agnostic {@link Cursor} implementation continuously loading additional results from Redis server until
                     * reaching its starting point {@code zero}. <br />
                     * <strong>Note:</strong> Please note that the {@link ScanCursor} has to be initialized ({@link #open()} prior to usage.
                     * @author Christoph Strobl
                     * @author Thomas Darimont
                     * @author Duobiao Ou
                     * @author Marl Paluch
                     * @param <T>
                     * @since 1.4
                     */
                    // @ts-ignore
                    abstract class ScanCursor<T> extends java.lang.Object implements org.springframework.data.redis.core.Cursor<T> {
                        /**
                         * Crates new {@link ScanCursor} with {@code id=0} and {@link ScanOptions#NONE}
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Crates new {@link ScanCursor} with {@code id=0}.
                         * @param options
                         */
                        // @ts-ignore
                        constructor(options: org.springframework.data.redis.core.ScanOptions)
                        /**
                         * Crates new {@link ScanCursor} with {@link ScanOptions#NONE}
                         * @param cursorId
                         */
                        // @ts-ignore
                        constructor(cursorId: number /*long*/)
                        /**
                         * Crates new {@link ScanCursor}
                         * @param cursorId
                         * @param options Defaulted to {#link ScanOptions#NONE} if nulled.
                         */
                        // @ts-ignore
                        constructor(cursorId: number /*long*/, options: org.springframework.data.redis.core.ScanOptions)
                        /**
                         * Performs the actual scan command using the native client implementation. The given {@literal options} are never
                         * {@code null}.
                         * @param cursorId
                         * @param options
                         * @return 
                         */
                        // @ts-ignore
                        abstract doScan(cursorId: number /*long*/, options: org.springframework.data.redis.core.ScanOptions): org.springframework.data.redis.core.ScanIteration<T>
                        /**
                         * Initialize the {@link Cursor} prior to usage.
                         */
                        // @ts-ignore
                        public open(): org.springframework.data.redis.core.ScanCursor<T>
                        /**
                         * Customization hook when calling {@link #open()}.
                         * @param cursorId
                         */
                        // @ts-ignore
                        doOpen(cursorId: number /*long*/): void
                        /**
                         * Check whether {@code cursorId} is finished.
                         * @param cursorId the cursor Id
                         * @return {#literal true} if the cursor is considered finished, {@literal false} otherwise.s
                         * @since 2.1
                         */
                        // @ts-ignore
                        isFinished(cursorId: number /*long*/): boolean
                        // @ts-ignore
                        public getCursorId(): number /*long*/
                        // @ts-ignore
                        public hasNext(): boolean
                        // @ts-ignore
                        public next(): T
                        /**
                         * Fetch the next item from the underlying {@link Iterable}.
                         * @param source
                         * @return 
                         */
                        // @ts-ignore
                        moveNext(source: java.util.Iterator<T>): T
                        // @ts-ignore
                        public remove(): void
                        // @ts-ignore
                        public close(): void
                        /**
                         * Customization hook for cleaning up resources on when calling {@link #close()}.
                         */
                        // @ts-ignore
                        doClose(): void
                        // @ts-ignore
                        public isClosed(): boolean
                        // @ts-ignore
                        isReady(): boolean
                        // @ts-ignore
                        isOpen(): boolean
                        // @ts-ignore
                        public getPosition(): number /*long*/
                    }
                }
            }
        }
    }
}
