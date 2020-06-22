declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * @author Christoph Strobl
                     * @since 1.7
                     */
                    // @ts-ignore
                    class ClusterSlotHashUtil extends java.lang.Object {
                        /**
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @since 2.0
                         */
                        // @ts-ignore
                        public static isSameSlotForAllKeys(keys: java.util.Collection<java.nio.ByteBuffer> | Array<java.nio.ByteBuffer>): boolean
                        /**
                         * @param keys must not be {#literal null}.
                         * @return 
                         * @since 2.0
                         */
                        // @ts-ignore
                        public static isSameSlotForAllKeys(...keys: java.nio.ByteBuffer[]): boolean
                        /**
                         * @param keys must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        public static isSameSlotForAllKeys(...keys: number /*byte*/[][]): boolean
                        /**
                         * Calculate the slot from the given key.
                         * @param key must not be {#literal null} or empty.
                         * @return 
                         */
                        // @ts-ignore
                        public static calculateSlot(key: java.lang.String | string): number /*int*/
                        /**
                         * Calculate the slot from the given key.
                         * @param key must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        public static calculateSlot(key: number /*byte*/[]): number /*int*/
                    }
                }
            }
        }
    }
}
