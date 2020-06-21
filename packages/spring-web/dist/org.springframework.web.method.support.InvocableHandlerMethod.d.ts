declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace support {
                    /**
                     * Extension of {@link HandlerMethod} that invokes the underlying method with
                     * argument values resolved from the current HTTP request through a list of
                     * {@link HandlerMethodArgumentResolver}.
                     * @author Rossen Stoyanchev
                     * @author Juergen Hoeller
                     * @since 3.1
                     */
                    // @ts-ignore
                    class InvocableHandlerMethod extends org.springframework.web.method.HandlerMethod {
                        /**
                         * Create an instance from a {@code HandlerMethod}.
                         */
                        // @ts-ignore
                        constructor(handlerMethod: org.springframework.web.method.HandlerMethod)
                        /**
                         * Create an instance from a bean instance and a method.
                         */
                        // @ts-ignore
                        constructor(bean: java.lang.Object | any, method: java.lang.reflect.Method)
                        /**
                         * Construct a new handler method with the given bean instance, method name and parameters.
                         * @param bean the object bean
                         * @param methodName the method name
                         * @param parameterTypes the method parameter types
                         * @throws NoSuchMethodException when the method cannot be found
                         */
                        // @ts-ignore
                        constructor(bean: java.lang.Object | any, methodName: java.lang.String | string, ...parameterTypes: java.lang.Class<any>[])
                        /**
                         * Set the {@link WebDataBinderFactory} to be passed to argument resolvers allowing them to create
                         * a {@link WebDataBinder} for data binding and type conversion purposes.
                         * @param dataBinderFactory the data binder factory.
                         */
                        // @ts-ignore
                        public setDataBinderFactory(dataBinderFactory: org.springframework.web.bind.support.WebDataBinderFactory): void
                        /**
                         * Set {@link HandlerMethodArgumentResolver HandlerMethodArgumentResolvers} to use to use for resolving method argument values.
                         */
                        // @ts-ignore
                        public setHandlerMethodArgumentResolvers(argumentResolvers: org.springframework.web.method.support.HandlerMethodArgumentResolverComposite): void
                        /**
                         * Set the ParameterNameDiscoverer for resolving parameter names when needed
                         * (e.g. default request attribute name).
                         * <p>Default is a {@link org.springframework.core.DefaultParameterNameDiscoverer}.
                         */
                        // @ts-ignore
                        public setParameterNameDiscoverer(parameterNameDiscoverer: ParameterNameDiscoverer): void
                        /**
                         * Invoke the method after resolving its argument values in the context of the given request.
                         * <p>Argument values are commonly resolved through
                         * {@link HandlerMethodArgumentResolver HandlerMethodArgumentResolvers}.
                         * The {@code providedArgs} parameter however may supply argument values to be used directly,
                         * i.e. without argument resolution. Examples of provided argument values include a
                         * {@link WebDataBinder}, a {@link SessionStatus}, or a thrown exception instance.
                         * Provided argument values are checked before argument resolvers.
                         * <p>Delegates to {@link #getMethodArgumentValues} and calls {@link #doInvoke} with the
                         * resolved arguments.
                         * @param request the current request
                         * @param mavContainer the ModelAndViewContainer for this request
                         * @param providedArgs "given" arguments matched by type, not resolved
                         * @return the raw value returned by the invoked method
                         * @throws Exception raised if no suitable argument resolver can be found,
                         *  or if the method raised an exception
                         * @see #getMethodArgumentValues
                         * @see #doInvoke
                         */
                        // @ts-ignore
                        public invokeForRequest(request: org.springframework.web.context.request.NativeWebRequest, mavContainer: org.springframework.web.method.support.ModelAndViewContainer, ...providedArgs: java.lang.Object[] | any[]): any
                        /**
                         * Get the method argument values for the current request, checking the provided
                         * argument values and falling back to the configured argument resolvers.
                         * <p>The resulting array will be passed into {@link #doInvoke}.
                         * @since 5.1.2
                         */
                        // @ts-ignore
                        getMethodArgumentValues(request: org.springframework.web.context.request.NativeWebRequest, mavContainer: org.springframework.web.method.support.ModelAndViewContainer, ...providedArgs: java.lang.Object[] | any[]): any[]
                        /**
                         * Invoke the handler method with the given argument values.
                         */
                        // @ts-ignore
                        doInvoke(...args: java.lang.Object[] | any[]): any
                    }
                }
            }
        }
    }
}
