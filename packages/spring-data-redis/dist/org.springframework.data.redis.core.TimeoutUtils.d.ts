declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Helper class featuring methods for calculating Redis timeouts
                     * @author Jennifer Hickey
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    abstract class TimeoutUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Check if a given Duration can be represented in {@code sec} or requires {@code msec} representation.
                         * @param duration the actual {#link Duration} to inspect. Never {@literal null}.
                         * @return {#literal true} if the {@link Duration} contains millisecond information.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static hasMillis(duration: java.time.Duration): boolean
                        /**
                         * Converts the given timeout to seconds.
                         * <p>
                         * Since a 0 timeout blocks some Redis ops indefinitely, this method will return 1 if the original value is greater
                         * than 0 but is truncated to 0 on conversion.
                         * @param timeout The timeout to convert
                         * @param unit The timeout's unit
                         * @return The converted timeout
                         */
                        // @ts-ignore
                        public static toSeconds(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): number /*long*/
                        /**
                         * Converts the given timeout to milliseconds.
                         * <p>
                         * Since a 0 timeout blocks some Redis ops indefinitely, this method will return 1 if the original value is greater
                         * than 0 but is truncated to 0 on conversion.
                         * @param timeout The timeout to convert
                         * @param unit The timeout's unit
                         * @return The converted timeout
                         */
                        // @ts-ignore
                        public static toMillis(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): number /*long*/
                    }
                }
            }
        }
    }
}
