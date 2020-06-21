declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                /**
                 * Encapsulates information about a handler method consisting of a
                 * {@linkplain #getMethod() method} and a {@linkplain #getBean() bean}.
                 * Provides convenient access to method parameters, the method return value,
                 * method annotations, etc.
                 * <p>The class may be created with a bean instance or with a bean name
                 * (e.g. lazy-init bean, prototype bean). Use {@link #createWithResolvedBean()}
                 * to obtain a {@code HandlerMethod} instance with a bean instance resolved
                 * through the associated {@link BeanFactory}.
                 * @author Arjen Poutsma
                 * @author Rossen Stoyanchev
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 3.1
                 */
                // @ts-ignore
                class HandlerMethod extends java.lang.Object {
                    /**
                     * Create an instance from a bean instance and a method.
                     */
                    // @ts-ignore
                    constructor(bean: java.lang.Object | any, method: java.lang.reflect.Method)
                    /**
                     * Create an instance from a bean instance, method name, and parameter types.
                     * @throws NoSuchMethodException when the method cannot be found
                     */
                    // @ts-ignore
                    constructor(bean: java.lang.Object | any, methodName: java.lang.String | string, ...parameterTypes: java.lang.Class<any>[])
                    /**
                     * Create an instance from a bean name, a method, and a {@code BeanFactory}.
                     * The method {@link #createWithResolvedBean()} may be used later to
                     * re-create the {@code HandlerMethod} with an initialized bean.
                     */
                    // @ts-ignore
                    constructor(beanName: java.lang.String | string, beanFactory: BeanFactory, method: java.lang.reflect.Method)
                    /**
                     * Copy constructor for use in subclasses.
                     */
                    // @ts-ignore
                    constructor(handlerMethod: org.springframework.web.method.HandlerMethod)
                    /**
                     * Logger that is available to subclasses.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Return the bean for this handler method.
                     */
                    // @ts-ignore
                    public getBean(): any
                    /**
                     * Return the method for this handler method.
                     */
                    // @ts-ignore
                    public getMethod(): java.lang.reflect.Method
                    /**
                     * This method returns the type of the handler for this handler method.
                     * <p>Note that if the bean type is a CGLIB-generated class, the original
                     * user-defined class is returned.
                     */
                    // @ts-ignore
                    public getBeanType(): java.lang.Class<any>
                    /**
                     * If the bean method is a bridge method, this method returns the bridged
                     * (user-defined) method. Otherwise it returns the same method as {@link #getMethod()}.
                     */
                    // @ts-ignore
                    getBridgedMethod(): java.lang.reflect.Method
                    /**
                     * Return the method parameters for this handler method.
                     */
                    // @ts-ignore
                    public getMethodParameters(): MethodParameter[]
                    /**
                     * Return the specified response status, if any.
                     * @since 4.3.8
                     * @see ResponseStatus#code()
                     */
                    // @ts-ignore
                    getResponseStatus(): org.springframework.http.HttpStatus
                    /**
                     * Return the associated response status reason, if any.
                     * @since 4.3.8
                     * @see ResponseStatus#reason()
                     */
                    // @ts-ignore
                    getResponseStatusReason(): string
                    /**
                     * Return the HandlerMethod return type.
                     */
                    // @ts-ignore
                    public getReturnType(): MethodParameter
                    /**
                     * Return the actual return value type.
                     */
                    // @ts-ignore
                    public getReturnValueType(returnValue: java.lang.Object | any): MethodParameter
                    /**
                     * Return {@code true} if the method return type is void, {@code false} otherwise.
                     */
                    // @ts-ignore
                    public isVoid(): boolean
                    /**
                     * Return a single annotation on the underlying method traversing its super methods
                     * if no annotation can be found on the given method itself.
                     * <p>Also supports <em>merged</em> composed annotations with attribute
                     * overrides as of Spring Framework 4.2.2.
                     * @param annotationType the type of annotation to introspect the method for
                     * @return the annotation, or {#code null} if none found
                     * @see AnnotatedElementUtils#findMergedAnnotation
                     */
                    // @ts-ignore
                    public getMethodAnnotation<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>): A
                    /**
                     * Return whether the parameter is declared with the given annotation type.
                     * @param annotationType the annotation type to look for
                     * @since 4.3
                     * @see AnnotatedElementUtils#hasAnnotation
                     */
                    // @ts-ignore
                    public hasMethodAnnotation<A extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<A>): boolean
                    /**
                     * Return the HandlerMethod from which this HandlerMethod instance was
                     * resolved via {@link #createWithResolvedBean()}.
                     */
                    // @ts-ignore
                    public getResolvedFromHandlerMethod(): org.springframework.web.method.HandlerMethod
                    /**
                     * If the provided instance contains a bean name rather than an object instance,
                     * the bean name is resolved before a {@link HandlerMethod} is created and returned.
                     */
                    // @ts-ignore
                    public createWithResolvedBean(): org.springframework.web.method.HandlerMethod
                    /**
                     * Return a short representation of this handler method for log message purposes.
                     * @since 4.3
                     */
                    // @ts-ignore
                    public getShortLogMessage(): string
                    // @ts-ignore
                    public equals(other: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    static findProvidedArgument(parameter: MethodParameter, ...providedArgs: java.lang.Object[] | any[]): any
                    // @ts-ignore
                    static formatArgumentError(param: MethodParameter, message: java.lang.String | string): string
                    /**
                     * Assert that the target bean class is an instance of the class where the given
                     * method is declared. In some cases the actual controller instance at request-
                     * processing time may be a JDK dynamic proxy (lazy initialization, prototype
                     * beans, and others). {@code @Controller}'s that require proxying should prefer
                     * class-based proxy mechanisms.
                     */
                    // @ts-ignore
                    assertTargetBean(method: java.lang.reflect.Method, targetBean: java.lang.Object | any, args: java.lang.Object[] | any[]): void
                    // @ts-ignore
                    formatInvokeError(text: java.lang.String | string, args: java.lang.Object[] | any[]): string
                }
            }
        }
    }
}
