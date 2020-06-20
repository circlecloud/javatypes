declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation that identifies methods which initialize the
                     * {@link org.springframework.web.bind.WebDataBinder} which
                     * will be used for populating command and form object arguments
                     * of annotated handler methods.
                     * <p>Such init-binder methods support all arguments that {@link RequestMapping}
                     * supports, except for command/form objects and corresponding validation result
                     * objects. Init-binder methods must not have a return value; they are usually
                     * declared as {@code void}.
                     * <p>Typical arguments are {@link org.springframework.web.bind.WebDataBinder}
                     * in combination with {@link org.springframework.web.context.request.WebRequest}
                     * or {@link java.util.Locale}, allowing to register context-specific editors.
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see org.springframework.web.bind.WebDataBinder
                     * @see org.springframework.web.context.request.WebRequest
                     */
                    // @ts-ignore
                    class InitBinder implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
