declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation that indicates a method return value should be bound to the web
                     * response body. Supported for annotated handler methods.
                     * <p>As of version 4.0 this annotation can also be added on the type level in
                     * which case it is inherited and does not need to be added on the method level.
                     * @author Arjen Poutsma
                     * @since 3.0
                     * @see RequestBody
                     * @see RestController
                     */
                    // @ts-ignore
                    class ResponseBody implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
