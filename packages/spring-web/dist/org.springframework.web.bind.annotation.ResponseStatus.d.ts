declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Marks a method or exception class with the status {@link #code} and
                     * {@link #reason} that should be returned.
                     * <p>The status code is applied to the HTTP response when the handler
                     * method is invoked and overrides status information set by other means,
                     * like {@code ResponseEntity} or {@code "redirect:"}.
                     * <p><strong>Warning</strong>: when using this annotation on an exception
                     * class, or when setting the {@code reason} attribute of this annotation,
                     * the {@code HttpServletResponse.sendError} method will be used.
                     * <p>With {@code HttpServletResponse.sendError}, the response is considered
                     * complete and should not be written to any further. Furthermore, the Servlet
                     * container will typically write an HTML error page therefore making the
                     * use of a {@code reason} unsuitable for REST APIs. For such cases it is
                     * preferable to use a {@link org.springframework.http.ResponseEntity} as
                     * a return type and avoid the use of {@code @ResponseStatus} altogether.
                     * <p>Note that a controller class may also be annotated with
                     * {@code @ResponseStatus} and is then inherited by all {@code @RequestMapping}
                     * methods.
                     * @author Arjen Poutsma
                     * @author Sam Brannen
                     * @since 3.0
                     * @see org.springframework.web.servlet.mvc.annotation.ResponseStatusExceptionResolver
                     * @see javax.servlet.http.HttpServletResponse#sendError(int, String)
                     */
                    // @ts-ignore
                    class ResponseStatus implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
