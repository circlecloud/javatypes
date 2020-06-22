declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                /**
                 * {@link FallbackExceptionTranslationStrategy} returns {@link RedisSystemException} for unknown {@link Exception}s.
                 * @author Christoph Strobl
                 * @author Thomas Darimont
                 * @author Mark Paluch
                 * @since 1.4
                 */
                // @ts-ignore
                class FallbackExceptionTranslationStrategy extends org.springframework.data.redis.PassThroughExceptionTranslationStrategy {
                    // @ts-ignore
                    constructor(converter: object)
                    // @ts-ignore
                    public translate(e: java.lang.Exception): DataAccessException
                    /**
                     * Returns a new {@link RedisSystemException} wrapping the given {@link Exception}.
                     * @param e causing exception.
                     * @return the fallback exception.
                     */
                    // @ts-ignore
                    getFallback(e: java.lang.Exception): org.springframework.data.redis.RedisSystemException
                }
            }
        }
    }
}
