declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * {@link TimeToLive} marks a single numeric property on aggregate root to be used for setting expirations in Redis. The
                     * annotated property supersedes any other timeout configuration.
                     * <pre>
                     * <code>
                     * &#64;RedisHash
                     * class Person {
                     * &#64;Id String id;
                     * String name;
                     * &#64;TimeToLive Long timeout;
                     * }
                     * </code>
                     * </pre>
                     * @author Christoph Strobl
                     * @since 1.7
                     */
                    // @ts-ignore
                    abstract class TimeToLive implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
