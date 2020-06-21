declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation to bind a method parameter to a request attribute.
                     * <p>The main motivation is to provide convenient access to request attributes
                     * from a controller method with an optional/required check and a cast to the
                     * target method parameter type.
                     * @author Rossen Stoyanchev
                     * @since 4.3
                     * @see RequestMapping
                     * @see SessionAttribute
                     */
                    // @ts-ignore
                    abstract class RequestAttribute implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
