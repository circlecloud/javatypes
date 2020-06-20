declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * Assist with initialization of the {@link Model} before controller method
                     * invocation and with updates to it after the invocation.
                     * <p>On initialization the model is populated with attributes temporarily stored
                     * in the session and through the invocation of {@code @ModelAttribute} methods.
                     * <p>On update model attributes are synchronized with the session and also
                     * {@link BindingResult} attributes are added if missing.
                     * @author Rossen Stoyanchev
                     * @since 3.1
                     */
                    // @ts-ignore
                    class ModelFactory extends java.lang.Object {
                        /**
                         * Create a new instance with the given {@code @ModelAttribute} methods.
                         * @param handlerMethods the {#code @ModelAttribute} methods to invoke
                         * @param binderFactory for preparation of {#link BindingResult} attributes
                         * @param attributeHandler for access to session attributes
                         */
                        // @ts-ignore
                        constructor(handlerMethods: Array<org.springframework.web.method.support.InvocableHandlerMethod>, binderFactory: org.springframework.web.bind.support.WebDataBinderFactory, attributeHandler: org.springframework.web.method.annotation.SessionAttributesHandler)
                        /**
                         * Populate the model in the following order:
                         * <ol>
                         * <li>Retrieve "known" session attributes listed as {@code @SessionAttributes}.
                         * <li>Invoke {@code @ModelAttribute} methods
                         * <li>Find {@code @ModelAttribute} method arguments also listed as
                         * {@code @SessionAttributes} and ensure they're present in the model raising
                         * an exception if necessary.
                         * </ol>
                         * @param request the current request
                         * @param container a container with the model to be initialized
                         * @param handlerMethod the method for which the model is initialized
                         * @throws Exception may arise from {#code @ModelAttribute} methods
                         */
                        // @ts-ignore
                        initModel(request: org.springframework.web.context.request.NativeWebRequest, container: org.springframework.web.method.support.ModelAndViewContainer, handlerMethod: org.springframework.web.method.HandlerMethod): void
                        /**
                         * Promote model attributes listed as {@code @SessionAttributes} to the session.
                         * Add {@link BindingResult} attributes where necessary.
                         * @param request the current request
                         * @param container contains the model to update
                         * @throws Exception if creating BindingResult attributes fails
                         */
                        // @ts-ignore
                        updateModel(request: org.springframework.web.context.request.NativeWebRequest, container: org.springframework.web.method.support.ModelAndViewContainer): void
                        /**
                         * Derive the model attribute name for the given method parameter based on
                         * a {@code @ModelAttribute} parameter annotation (if present) or falling
                         * back on parameter type based conventions.
                         * @param parameter a descriptor for the method parameter
                         * @return the derived name
                         * @see Conventions#getVariableNameForParameter(MethodParameter)
                         */
                        // @ts-ignore
                        getNameForParameter(parameter: MethodParameter): java.lang.String
                        /**
                         * Derive the model attribute name for the given return value. Results will be
                         * based on:
                         * <ol>
                         * <li>the method {@code ModelAttribute} annotation value
                         * <li>the declared return type if it is more specific than {@code Object}
                         * <li>the actual return value type
                         * </ol>
                         * @param returnValue the value returned from a method invocation
                         * @param returnType a descriptor for the return type of the method
                         * @return the derived name (never {#code null} or empty String)
                         */
                        // @ts-ignore
                        getNameForReturnValue(returnValue: any, returnType: MethodParameter): java.lang.String
                    }
                }
            }
        }
    }
}
