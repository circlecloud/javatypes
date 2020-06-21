declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * Resolve {@code @ModelAttribute} annotated method arguments and handle
                     * return values from {@code @ModelAttribute} annotated methods.
                     * <p>Model attributes are obtained from the model or created with a default
                     * constructor (and then added to the model). Once created the attribute is
                     * populated via data binding to Servlet request parameters. Validation may be
                     * applied if the argument is annotated with {@code @javax.validation.Valid}.
                     * or Spring's own {@code @org.springframework.validation.annotation.Validated}.
                     * <p>When this handler is created with {@code annotationNotRequired=true}
                     * any non-simple type argument and return value is regarded as a model
                     * attribute with or without the presence of an {@code @ModelAttribute}.
                     * @author Rossen Stoyanchev
                     * @author Juergen Hoeller
                     * @author Sebastien Deleuze
                     * @since 3.1
                     */
                    // @ts-ignore
                    class ModelAttributeMethodProcessor extends java.lang.Object implements org.springframework.web.method.support.HandlerMethodArgumentResolver, org.springframework.web.method.support.HandlerMethodReturnValueHandler {
                        /**
                         * Class constructor.
                         * @param annotationNotRequired if "true", non-simple method arguments and
                         *  return values are considered model attributes with or without a
                         *  {#code @ModelAttribute} annotation
                         */
                        // @ts-ignore
                        constructor(annotationNotRequired: boolean)
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Returns {@code true} if the parameter is annotated with
                         * {@link ModelAttribute} or, if in default resolution mode, for any
                         * method parameter that is not a simple type.
                         */
                        // @ts-ignore
                        public supportsParameter(parameter: MethodParameter): boolean
                        /**
                         * Resolve the argument from the model or if not found instantiate it with
                         * its default if it is available. The model attribute is then populated
                         * with request values via data binding and optionally validated
                         * if {@code @java.validation.Valid} is present on the argument.
                         * @throws BindException if data binding and validation result in an error
                         *  and the next method parameter is not of type {#link Errors}
                         * @throws Exception if WebDataBinder initialization fails
                         */
                        // @ts-ignore
                        public resolveArgument(parameter: MethodParameter, mavContainer: org.springframework.web.method.support.ModelAndViewContainer, webRequest: org.springframework.web.context.request.NativeWebRequest, binderFactory: org.springframework.web.bind.support.WebDataBinderFactory): any
                        /**
                         * Extension point to create the model attribute if not found in the model,
                         * with subsequent parameter binding through bean properties (unless suppressed).
                         * <p>The default implementation typically uses the unique public no-arg constructor
                         * if available but also handles a "primary constructor" approach for data classes:
                         * It understands the JavaBeans {@link ConstructorProperties} annotation as well as
                         * runtime-retained parameter names in the bytecode, associating request parameters
                         * with constructor arguments by name. If no such constructor is found, the default
                         * constructor will be used (even if not public), assuming subsequent bean property
                         * bindings through setter methods.
                         * @param attributeName the name of the attribute (never {#code null})
                         * @param parameter the method parameter declaration
                         * @param binderFactory for creating WebDataBinder instance
                         * @param webRequest the current request
                         * @return the created model attribute (never {#code null})
                         * @throws BindException in case of constructor argument binding failure
                         * @throws Exception in case of constructor invocation failure
                         * @see #constructAttribute(Constructor, String, MethodParameter, WebDataBinderFactory, NativeWebRequest)
                         * @see BeanUtils#findPrimaryConstructor(Class)
                         */
                        // @ts-ignore
                        createAttribute(attributeName: java.lang.String | string, parameter: MethodParameter, binderFactory: org.springframework.web.bind.support.WebDataBinderFactory, webRequest: org.springframework.web.context.request.NativeWebRequest): any
                        /**
                         * Construct a new attribute instance with the given constructor.
                         * <p>Called from
                         * {@link #createAttribute(String, MethodParameter, WebDataBinderFactory, NativeWebRequest)}
                         * after constructor resolution.
                         * @param ctor the constructor to use
                         * @param attributeName the name of the attribute (never {#code null})
                         * @param binderFactory for creating WebDataBinder instance
                         * @param webRequest the current request
                         * @return the created model attribute (never {#code null})
                         * @throws BindException in case of constructor argument binding failure
                         * @throws Exception in case of constructor invocation failure
                         * @since 5.1
                         */
                        // @ts-ignore
                        constructAttribute(ctor: java.lang.reflect.Constructor<any>, attributeName: java.lang.String | string, parameter: MethodParameter, binderFactory: org.springframework.web.bind.support.WebDataBinderFactory, webRequest: org.springframework.web.context.request.NativeWebRequest): any
                        /**
                         * Construct a new attribute instance with the given constructor.
                         * @since 5.0
                         * @deprecated as of 5.1, in favor of
                         *  {#link #constructAttribute(Constructor, String, MethodParameter, WebDataBinderFactory, NativeWebRequest)}
                         */
                        // @ts-ignore
                        constructAttribute(ctor: java.lang.reflect.Constructor<any>, attributeName: java.lang.String | string, binderFactory: org.springframework.web.bind.support.WebDataBinderFactory, webRequest: org.springframework.web.context.request.NativeWebRequest): any
                        /**
                         * Extension point to bind the request to the target object.
                         * @param binder the data binder instance to use for the binding
                         * @param request the current request
                         */
                        // @ts-ignore
                        bindRequestParameters(binder: org.springframework.web.bind.WebDataBinder, request: org.springframework.web.context.request.NativeWebRequest): void
                        /**
                         * Validate the model attribute if applicable.
                         * <p>The default implementation checks for {@code @javax.validation.Valid},
                         * Spring's {@link org.springframework.validation.annotation.Validated},
                         * and custom annotations whose name starts with "Valid".
                         * @param binder the DataBinder to be used
                         * @param parameter the method parameter declaration
                         * @see WebDataBinder#validate(Object...)
                         * @see SmartValidator#validate(Object, Errors, Object...)
                         */
                        // @ts-ignore
                        validateIfApplicable(binder: org.springframework.web.bind.WebDataBinder, parameter: MethodParameter): void
                        /**
                         * Validate the specified candidate value if applicable.
                         * <p>The default implementation checks for {@code @javax.validation.Valid},
                         * Spring's {@link org.springframework.validation.annotation.Validated},
                         * and custom annotations whose name starts with "Valid".
                         * @param binder the DataBinder to be used
                         * @param parameter the method parameter declaration
                         * @param targetType the target type
                         * @param fieldName the name of the field
                         * @param value the candidate value
                         * @since 5.1
                         * @see #validateIfApplicable(WebDataBinder, MethodParameter)
                         * @see SmartValidator#validateValue(Class, String, Object, Errors, Object...)
                         */
                        // @ts-ignore
                        validateValueIfApplicable(binder: org.springframework.web.bind.WebDataBinder, parameter: MethodParameter, targetType: java.lang.Class<any>, fieldName: java.lang.String | string, value: java.lang.Object | any): void
                        /**
                         * Whether to raise a fatal bind exception on validation errors.
                         * <p>The default implementation delegates to {@link #isBindExceptionRequired(MethodParameter)}.
                         * @param binder the data binder used to perform data binding
                         * @param parameter the method parameter declaration
                         * @return {#code true} if the next method parameter is not of type {@link Errors}
                         * @see #isBindExceptionRequired(MethodParameter)
                         */
                        // @ts-ignore
                        isBindExceptionRequired(binder: org.springframework.web.bind.WebDataBinder, parameter: MethodParameter): boolean
                        /**
                         * Whether to raise a fatal bind exception on validation errors.
                         * @param parameter the method parameter declaration
                         * @return {#code true} if the next method parameter is not of type {@link Errors}
                         * @since 5.0
                         */
                        // @ts-ignore
                        isBindExceptionRequired(parameter: MethodParameter): boolean
                        /**
                         * Return {@code true} if there is a method-level {@code @ModelAttribute}
                         * or, in default resolution mode, for any return value type that is not
                         * a simple type.
                         */
                        // @ts-ignore
                        public supportsReturnType(returnType: MethodParameter): boolean
                        /**
                         * Add non-null return values to the {@link ModelAndViewContainer}.
                         */
                        // @ts-ignore
                        public handleReturnValue(returnValue: java.lang.Object | any, returnType: MethodParameter, mavContainer: org.springframework.web.method.support.ModelAndViewContainer, webRequest: org.springframework.web.context.request.NativeWebRequest): void
                    }
                }
            }
        }
    }
}
