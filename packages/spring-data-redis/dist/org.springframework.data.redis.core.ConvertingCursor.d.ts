declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * {@link ConvertingCursor} wraps a given cursor and applies given {@link Converter} to items prior to returning them.
                     * This allows to easily perform required conversion whereas the underlying implementation may still work with its
                     * native types.
                     * @author Christoph Strobl
                     * @param <S>
                     * @param <T>
                     * @since 1.4
                     */
                    // @ts-ignore
                    class ConvertingCursor<S, T> extends java.lang.Object implements org.springframework.data.redis.core.Cursor<T> {
                        /**
                         * @param cursor Cursor must not be {#literal null}.
                         * @param converter Converter must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(cursor: org.springframework.data.redis.core.Cursor<S>, converter: object)
                        // @ts-ignore
                        public hasNext(): boolean
                        // @ts-ignore
                        public next(): T
                        // @ts-ignore
                        public remove(): void
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public getCursorId(): number /*long*/
                        // @ts-ignore
                        public isClosed(): boolean
                        // @ts-ignore
                        public open(): org.springframework.data.redis.core.Cursor<T>
                        // @ts-ignore
                        public getPosition(): number /*long*/
                    }
                }
            }
        }
    }
}
