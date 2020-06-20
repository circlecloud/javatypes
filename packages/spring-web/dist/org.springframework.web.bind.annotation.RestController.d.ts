declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * A convenience annotation that is itself annotated with
                     * {@link Controller @Controller} and {@link ResponseBody @ResponseBody}.
                     * <p>
                     * Types that carry this annotation are treated as controllers where
                     * {@link RequestMapping @RequestMapping} methods assume
                     * {@link ResponseBody @ResponseBody} semantics by default.
                     * <p><b>NOTE:</b> {@code @RestController} is processed if an appropriate
                     * {@code HandlerMapping}-{@code HandlerAdapter} pair is configured such as the
                     * {@code RequestMappingHandlerMapping}-{@code RequestMappingHandlerAdapter}
                     * pair which are the default in the MVC Java config and the MVC namespace.
                     * @author Rossen Stoyanchev
                     * @author Sam Brannen
                     * @since 4.0
                     */
                    // @ts-ignore
                    class RestController implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
