declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * {@link TimeToLiveAccessor} extracts the objects time to live used for {@code EXPIRE}.
                     * @author Christoph Strobl
                     * @since 1.7
                     */
                    // @ts-ignore
                    interface TimeToLiveAccessor {
                        /**
                         * @param source must not be {#literal null}.
                         * @return {#literal null} if not configured.
                         */
                        // @ts-ignore
                        getTimeToLive(source: java.lang.Object | any): number
                    }
                }
            }
        }
    }
}
