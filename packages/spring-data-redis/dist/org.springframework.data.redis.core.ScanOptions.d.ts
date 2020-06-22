declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Options to be used for with {@literal SCAN} commands.
                     * @author Christoph Strobl
                     * @author Thomas Darimont
                     * @author Mark Paluch
                     * @since 1.4
                     */
                    // @ts-ignore
                    class ScanOptions extends java.lang.Object {
                        /**
                         * Constant to apply default {@link ScanOptions} without setting a limit or matching a pattern.
                         */
                        // @ts-ignore
                        public static NONE: org.springframework.data.redis.core.ScanOptions
                        /**
                         * Static factory method that returns a new {@link ScanOptionsBuilder}.
                         * @return 
                         */
                        // @ts-ignore
                        public static scanOptions(): org.springframework.data.redis.core.ScanOptions.ScanOptionsBuilder
                        // @ts-ignore
                        public getCount(): number
                        // @ts-ignore
                        public getPattern(): string
                        // @ts-ignore
                        public toOptionString(): string
                    }
                }
            }
        }
    }
}
