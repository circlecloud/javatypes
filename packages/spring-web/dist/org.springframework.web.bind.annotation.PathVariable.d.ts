declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation which indicates that a method parameter should be bound to a URI template
                     * variable. Supported for {@link RequestMapping} annotated handler methods.
                     * <p>If the method parameter is {@link java.util.Map Map&lt;String, String&gt;}
                     * then the map is populated with all path variable names and values.
                     * @author Arjen Poutsma
                     * @author Juergen Hoeller
                     * @since 3.0
                     * @see RequestMapping
                     * @see org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter
                     */
                    // @ts-ignore
                    class PathVariable implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
