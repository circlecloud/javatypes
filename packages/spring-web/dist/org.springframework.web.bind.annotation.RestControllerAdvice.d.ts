declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * A convenience annotation that is itself annotated with
                     * {@link ControllerAdvice @ControllerAdvice}
                     * and {@link ResponseBody @ResponseBody}.
                     * <p>Types that carry this annotation are treated as controller advice where
                     * {@link ExceptionHandler @ExceptionHandler} methods assume
                     * {@link ResponseBody @ResponseBody} semantics by default.
                     * <p><b>NOTE:</b> {@code @RestControllerAdvice} is processed if an appropriate
                     * {@code HandlerMapping}-{@code HandlerAdapter} pair is configured such as the
                     * {@code RequestMappingHandlerMapping}-{@code RequestMappingHandlerAdapter} pair
                     * which are the default in the MVC Java config and the MVC namespace.
                     * @author Rossen Stoyanchev
                     * @author Sam Brannen
                     * @since 4.3
                     * @see RestController
                     * @see ControllerAdvice
                     */
                    // @ts-ignore
                    class RestControllerAdvice implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
