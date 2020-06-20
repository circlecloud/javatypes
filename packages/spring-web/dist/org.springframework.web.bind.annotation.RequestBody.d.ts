declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation indicating a method parameter should be bound to the body of the web request.
                     * The body of the request is passed through an {@link HttpMessageConverter} to resolve the
                     * method argument depending on the content type of the request. Optionally, automatic
                     * validation can be applied by annotating the argument with {@code @Valid}.
                     * <p>Supported for annotated handler methods.
                     * @author Arjen Poutsma
                     * @since 3.0
                     * @see RequestHeader
                     * @see ResponseBody
                     * @see org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter
                     */
                    // @ts-ignore
                    class RequestBody implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
