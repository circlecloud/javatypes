declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation that binds a method parameter or method return value
                     * to a named model attribute, exposed to a web view. Supported
                     * for controller classes with {@link RequestMapping @RequestMapping}
                     * methods.
                     * <p>Can be used to expose command objects to a web view, using
                     * specific attribute names, through annotating corresponding
                     * parameters of an {@link RequestMapping @RequestMapping} method.
                     * <p>Can also be used to expose reference data to a web view
                     * through annotating accessor methods in a controller class with
                     * {@link RequestMapping @RequestMapping} methods. Such accessor
                     * methods are allowed to have any arguments that
                     * {@link RequestMapping @RequestMapping} methods support, returning
                     * the model attribute value to expose.
                     * <p>Note however that reference data and all other model content is
                     * not available to web views when request processing results in an
                     * {@code Exception} since the exception could be raised at any time
                     * making the content of the model unreliable. For this reason
                     * {@link ExceptionHandler @ExceptionHandler} methods do not provide
                     * access to a {@link Model} argument.
                     * @author Juergen Hoeller
                     * @author Rossen Stoyanchev
                     * @since 2.5
                     */
                    // @ts-ignore
                    abstract class ModelAttribute implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
