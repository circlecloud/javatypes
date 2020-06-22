declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * {@link ScanIteration} holds the values contained in Redis {@literal Multibulk reply} on exectuting {@literal SCAN}
                     * command.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.4
                     */
                    // @ts-ignore
                    class ScanIteration<T> extends java.lang.Object implements java.lang.Iterable<T> {
                        /**
                         * @param cursorId
                         * @param items
                         */
                        // @ts-ignore
                        constructor(cursorId: number /*long*/, items: java.util.Collection<T> | Array<T>)
                        /**
                         * The cursor id to be used for subsequent requests.
                         * @return 
                         */
                        // @ts-ignore
                        public getCursorId(): number /*long*/
                        /**
                         * Get the items returned.
                         * @return 
                         */
                        // @ts-ignore
                        public getItems(): Array<T>
                        // @ts-ignore
                        public iterator(): java.util.Iterator<T>
                    }
                }
            }
        }
    }
}
