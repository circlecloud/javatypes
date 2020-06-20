declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace support {
                    /**
                     * Records model and view related decisions made by
                     * {@link HandlerMethodArgumentResolver HandlerMethodArgumentResolvers} and
                     * {@link HandlerMethodReturnValueHandler HandlerMethodReturnValueHandlers} during the course of invocation of
                     * a controller method.
                     * <p>The {@link #setRequestHandled} flag can be used to indicate the request
                     * has been handled directly and view resolution is not required.
                     * <p>A default {@link Model} is automatically created at instantiation.
                     * An alternate model instance may be provided via {@link #setRedirectModel}
                     * for use in a redirect scenario. When {@link #setRedirectModelScenario} is set
                     * to {@code true} signalling a redirect scenario, the {@link #getModel()}
                     * returns the redirect model instead of the default model.
                     * @author Rossen Stoyanchev
                     * @author Juergen Hoeller
                     * @since 3.1
                     */
                    // @ts-ignore
                    class ModelAndViewContainer extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * By default the content of the "default" model is used both during
                         * rendering and redirect scenarios. Alternatively controller methods
                         * can declare an argument of type {@code RedirectAttributes} and use
                         * it to provide attributes to prepare the redirect URL.
                         * <p>Setting this flag to {@code true} guarantees the "default" model is
                         * never used in a redirect scenario even if a RedirectAttributes argument
                         * is not declared. Setting it to {@code false} means the "default" model
                         * may be used in a redirect if the controller method doesn't declare a
                         * RedirectAttributes argument.
                         * <p>The default setting is {@code false}.
                         */
                        // @ts-ignore
                        setIgnoreDefaultModelOnRedirect(ignoreDefaultModelOnRedirect: boolean): void
                        /**
                         * Set a view name to be resolved by the DispatcherServlet via a ViewResolver.
                         * Will override any pre-existing view name or View.
                         */
                        // @ts-ignore
                        setViewName(viewName: string): void
                        /**
                         * Return the view name to be resolved by the DispatcherServlet via a
                         * ViewResolver, or {@code null} if a View object is set.
                         */
                        // @ts-ignore
                        getViewName(): java.lang.String
                        /**
                         * Set a View object to be used by the DispatcherServlet.
                         * Will override any pre-existing view name or View.
                         */
                        // @ts-ignore
                        setView(view: any): void
                        /**
                         * Return the View object, or {@code null} if we using a view name
                         * to be resolved by the DispatcherServlet via a ViewResolver.
                         */
                        // @ts-ignore
                        getView(): java.lang.Object
                        /**
                         * Whether the view is a view reference specified via a name to be
                         * resolved by the DispatcherServlet via a ViewResolver.
                         */
                        // @ts-ignore
                        isViewReference(): boolean
                        /**
                         * Return the model to use -- either the "default" or the "redirect" model.
                         * The default model is used if {@code redirectModelScenario=false} or
                         * there is no redirect model (i.e. RedirectAttributes was not declared as
                         * a method argument) and {@code ignoreDefaultModelOnRedirect=false}.
                         */
                        // @ts-ignore
                        getModel(): ModelMap
                        /**
                         * Return the "default" model created at instantiation.
                         * <p>In general it is recommended to use {@link #getModel()} instead which
                         * returns either the "default" model (template rendering) or the "redirect"
                         * model (redirect URL preparation). Use of this method may be needed for
                         * advanced cases when access to the "default" model is needed regardless,
                         * e.g. to save model attributes specified via {@code @SessionAttributes}.
                         * @return the default model (never {#code null})
                         * @since 4.1.4
                         */
                        // @ts-ignore
                        getDefaultModel(): ModelMap
                        /**
                         * Provide a separate model instance to use in a redirect scenario.
                         * <p>The provided additional model however is not used unless
                         * {@link #setRedirectModelScenario} gets set to {@code true}
                         * to signal an actual redirect scenario.
                         */
                        // @ts-ignore
                        setRedirectModel(redirectModel: ModelMap): void
                        /**
                         * Whether the controller has returned a redirect instruction, e.g. a
                         * "redirect:" prefixed view name, a RedirectView instance, etc.
                         */
                        // @ts-ignore
                        setRedirectModelScenario(redirectModelScenario: boolean): void
                        /**
                         * Provide an HTTP status that will be passed on to with the
                         * {@code ModelAndView} used for view rendering purposes.
                         * @since 4.3
                         */
                        // @ts-ignore
                        setStatus(status: org.springframework.http.HttpStatus): void
                        /**
                         * Return the configured HTTP status, if any.
                         * @since 4.3
                         */
                        // @ts-ignore
                        getStatus(): org.springframework.http.HttpStatus
                        /**
                         * Programmatically register an attribute for which data binding should not occur,
                         * not even for a subsequent {@code @ModelAttribute} declaration.
                         * @param attributeName the name of the attribute
                         * @since 4.3
                         */
                        // @ts-ignore
                        setBindingDisabled(attributeName: string): void
                        /**
                         * Whether binding is disabled for the given model attribute.
                         * @since 4.3
                         */
                        // @ts-ignore
                        isBindingDisabled(name: string): boolean
                        /**
                         * Register whether data binding should occur for a corresponding model attribute,
                         * corresponding to an {@code @ModelAttribute(binding=true/false)} declaration.
                         * <p>Note: While this flag will be taken into account by {@link #isBindingDisabled},
                         * a hard {@link #setBindingDisabled} declaration will always override it.
                         * @param attributeName the name of the attribute
                         * @since 4.3.13
                         */
                        // @ts-ignore
                        setBinding(attributeName: string, enabled: boolean): void
                        /**
                         * Return the {@link SessionStatus} instance to use that can be used to
                         * signal that session processing is complete.
                         */
                        // @ts-ignore
                        getSessionStatus(): org.springframework.web.bind.support.SessionStatus
                        /**
                         * Whether the request has been handled fully within the handler, e.g.
                         * {@code @ResponseBody} method, and therefore view resolution is not
                         * necessary. This flag can also be set when controller methods declare an
                         * argument of type {@code ServletResponse} or {@code OutputStream}).
                         * <p>The default value is {@code false}.
                         */
                        // @ts-ignore
                        setRequestHandled(requestHandled: boolean): void
                        /**
                         * Whether the request has been handled fully within the handler.
                         */
                        // @ts-ignore
                        isRequestHandled(): boolean
                        /**
                         * Add the supplied attribute to the underlying model.
                         * A shortcut for {@code getModel().addAttribute(String, Object)}.
                         */
                        // @ts-ignore
                        addAttribute(name: string, value: any): org.springframework.web.method.support.ModelAndViewContainer
                        /**
                         * Add the supplied attribute to the underlying model.
                         * A shortcut for {@code getModel().addAttribute(Object)}.
                         */
                        // @ts-ignore
                        addAttribute(value: any): org.springframework.web.method.support.ModelAndViewContainer
                        /**
                         * Copy all attributes to the underlying model.
                         * A shortcut for {@code getModel().addAllAttributes(Map)}.
                         */
                        // @ts-ignore
                        addAllAttributes(attributes: java.util.Map<java.lang.String, any>): org.springframework.web.method.support.ModelAndViewContainer
                        /**
                         * Copy attributes in the supplied {@code Map} with existing objects of
                         * the same name taking precedence (i.e. not getting replaced).
                         * A shortcut for {@code getModel().mergeAttributes(Map<String, ?>)}.
                         */
                        // @ts-ignore
                        mergeAttributes(attributes: java.util.Map<java.lang.String, any>): org.springframework.web.method.support.ModelAndViewContainer
                        /**
                         * Remove the given attributes from the model.
                         */
                        // @ts-ignore
                        removeAttributes(attributes: java.util.Map<java.lang.String, any>): org.springframework.web.method.support.ModelAndViewContainer
                        /**
                         * Whether the underlying model contains the given attribute name.
                         * A shortcut for {@code getModel().containsAttribute(String)}.
                         */
                        // @ts-ignore
                        containsAttribute(name: string): boolean
                        /**
                         * Return diagnostic information.
                         */
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
