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
                    interface Cursor<T> extends java.util.Iterator<T>, java.io.Closeable {
                        /**
                         * Get the reference cursor. <br>
                         * <strong>NOTE:</strong> the id might change while iterating items.
                         * @return 
                         */
                        // @ts-ignore
                        getCursorId(): number /*long*/
                        /**
                         * @return Returns true if cursor closed.
                         */
                        // @ts-ignore
                        isClosed(): boolean
                        /**
                         * Opens cursor and returns itself.
                         * @return 
                         */
                        // @ts-ignore
                        open(): org.springframework.data.redis.core.Cursor<T>
                        /**
                         * @return Returns the current position of the cursor.
                         */
                        // @ts-ignore
                        getPosition(): number /*long*/
                    }
                }
            }
        }
    }
}
