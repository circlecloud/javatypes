declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace support {
                    /**
                     * SPI for resolving custom arguments for a specific handler method parameter.
                     * Typically implemented to detect special parameter types, resolving
                     * well-known argument values for them.
                     * <p>A typical implementation could look like as follows:
                     * <pre class="code">
                     * public class MySpecialArgumentResolver implements WebArgumentResolver {
                     * public Object resolveArgument(MethodParameter methodParameter, NativeWebRequest webRequest) {
                     * if (methodParameter.getParameterType().equals(MySpecialArg.class)) {
                     * return new MySpecialArg("myValue");
                     * }
                     * return UNRESOLVED;
                     * }
                     * }</pre>
                     * @author Juergen Hoeller
                     * @since 2.5.2
                     * @see org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter#setCustomArgumentResolvers
                     */
                    // @ts-ignore
                    interface WebArgumentResolver {
                        /**
                         * Marker to be returned when the resolver does not know how to
                         * handle the given method parameter.
                         */
                        // @ts-ignore
                        readonly UNRESOLVED: java.lang.Object | any
                        /**
                         * Resolve an argument for the given handler method parameter within the given web request.
                         * @param methodParameter the handler method parameter to resolve
                         * @param webRequest the current web request, allowing access to the native request as well
                         * @return the argument value, or {#code UNRESOLVED} if not resolvable
                         * @throws Exception in case of resolution failure
                         */
                        // @ts-ignore
                        resolveArgument(methodParameter: MethodParameter, webRequest: org.springframework.web.context.request.NativeWebRequest): any
                    }
                }
            }
        }
    }
}
