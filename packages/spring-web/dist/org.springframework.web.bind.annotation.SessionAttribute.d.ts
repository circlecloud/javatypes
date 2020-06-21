declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation to bind a method parameter to a session attribute.
                     * <p>The main motivation is to provide convenient access to existing, permanent
                     * session attributes (e.g. user authentication object) with an optional/required
                     * check and a cast to the target method parameter type.
                     * <p>For use cases that require adding or removing session attributes consider
                     * injecting {@code org.springframework.web.context.request.WebRequest} or
                     * {@code javax.servlet.http.HttpSession} into the controller method.
                     * <p>For temporary storage of model attributes in the session as part of the
                     * workflow for a controller, consider using {@link SessionAttributes} instead.
                     * @author Rossen Stoyanchev
                     * @since 4.3
                     * @see RequestMapping
                     * @see SessionAttributes
                     * @see RequestAttribute
                     */
                    // @ts-ignore
                    abstract class SessionAttribute implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
