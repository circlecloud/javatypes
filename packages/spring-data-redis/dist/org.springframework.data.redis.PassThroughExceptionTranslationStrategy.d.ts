declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                /**
                 * {@link PassThroughExceptionTranslationStrategy} returns {@literal null} for unknown {@link Exception}s.
                 * @author Christoph Strobl
                 * @author Mark Paluch
                 * @since 1.4
                 */
                // @ts-ignore
                class PassThroughExceptionTranslationStrategy extends java.lang.Object implements org.springframework.data.redis.ExceptionTranslationStrategy {
                    // @ts-ignore
                    constructor(converter: object)
                    // @ts-ignore
                    public translate(e: java.lang.Exception): DataAccessException
                }
            }
        }
    }
}
