declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace util {
                    /**
                     * {@link MongoClientVersion} holds information about the used mongo-java client and is used to distinguish between
                     * different versions.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    class MongoClientVersion extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * @return {#literal true} if MongoDB Java driver version 3.0 or later is on classpath.
                         * @deprecated since 2.1, which requires MongoDB Java driver 3.8. Returns {#literal true} by default.
                         */
                        // @ts-ignore
                        public static isMongo3Driver(): boolean
                        /**
                         * @return {#literal true} if MongoDB Java driver version 3.4 or later is on classpath.
                         * @since 1.10
                         * @deprecated since 2.1, which requires MongoDB Java driver 3.8. Returns {#literal true} by default.
                         */
                        // @ts-ignore
                        public static isMongo34Driver(): boolean
                        /**
                         * @return {#literal true} if MongoDB Java driver version 3.8 or later is on classpath.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static isMongo38Driver(): boolean
                        /**
                         * @return {#literal true} if the async MongoDB Java driver is on classpath.
                         */
                        // @ts-ignore
                        public static isAsyncClient(): boolean
                        /**
                         * @return {#literal true} if the sync MongoDB Java driver is on classpath.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static isSyncClientPresent(): boolean
                        /**
                         * @return {#literal true} if the reactive MongoDB Java driver is on classpath.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static isReactiveClientPresent(): boolean
                    }
                }
            }
        }
    }
}
