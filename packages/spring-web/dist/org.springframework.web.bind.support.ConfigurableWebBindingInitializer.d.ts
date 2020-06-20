declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace support {
                    /**
                     * Convenient {@link WebBindingInitializer} for declarative configuration
                     * in a Spring application context. Allows for reusing pre-configured
                     * initializers with multiple controller/handlers.
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see #setDirectFieldAccess
                     * @see #setMessageCodesResolver
                     * @see #setBindingErrorProcessor
                     * @see #setValidator(Validator)
                     * @see #setConversionService(ConversionService)
                     * @see #setPropertyEditorRegistrar
                     */
                    // @ts-ignore
                    class ConfigurableWebBindingInitializer extends java.lang.Object implements org.springframework.web.bind.support.WebBindingInitializer {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set whether a binder should attempt to "auto-grow" a nested path that contains a null value.
                         * <p>If "true", a null path location will be populated with a default object value and traversed
                         * instead of resulting in an exception. This flag also enables auto-growth of collection elements
                         * when accessing an out-of-bounds index.
                         * <p>Default is "true" on a standard DataBinder. Note that this feature is only supported
                         * for bean property access (DataBinder's default mode), not for field access.
                         * @see org.springframework.validation.DataBinder#initBeanPropertyAccess()
                         * @see org.springframework.validation.DataBinder#setAutoGrowNestedPaths
                         */
                        // @ts-ignore
                        setAutoGrowNestedPaths(autoGrowNestedPaths: boolean): void
                        /**
                         * Return whether a binder should attempt to "auto-grow" a nested path that contains a null value.
                         */
                        // @ts-ignore
                        isAutoGrowNestedPaths(): boolean
                        /**
                         * Set whether to use direct field access instead of bean property access.
                         * <p>Default is {@code false}, using bean property access.
                         * Switch this to {@code true} in order to enforce direct field access.
                         * @see org.springframework.validation.DataBinder#initDirectFieldAccess()
                         * @see org.springframework.validation.DataBinder#initBeanPropertyAccess()
                         */
                        // @ts-ignore
                        setDirectFieldAccess(directFieldAccess: boolean): void
                        /**
                         * Return whether to use direct field access instead of bean property access.
                         */
                        // @ts-ignore
                        isDirectFieldAccess(): boolean
                        /**
                         * Set the strategy to use for resolving errors into message codes.
                         * Applies the given strategy to all data binders used by this controller.
                         * <p>Default is {@code null}, i.e. using the default strategy of
                         * the data binder.
                         * @see org.springframework.validation.DataBinder#setMessageCodesResolver
                         */
                        // @ts-ignore
                        setMessageCodesResolver(messageCodesResolver: MessageCodesResolver): void
                        /**
                         * Return the strategy to use for resolving errors into message codes.
                         */
                        // @ts-ignore
                        getMessageCodesResolver(): MessageCodesResolver
                        /**
                         * Set the strategy to use for processing binding errors, that is,
                         * required field errors and {@code PropertyAccessException}s.
                         * <p>Default is {@code null}, that is, using the default strategy
                         * of the data binder.
                         * @see org.springframework.validation.DataBinder#setBindingErrorProcessor
                         */
                        // @ts-ignore
                        setBindingErrorProcessor(bindingErrorProcessor: BindingErrorProcessor): void
                        /**
                         * Return the strategy to use for processing binding errors.
                         */
                        // @ts-ignore
                        getBindingErrorProcessor(): BindingErrorProcessor
                        /**
                         * Set the Validator to apply after each binding step.
                         */
                        // @ts-ignore
                        setValidator(validator: Validator): void
                        /**
                         * Return the Validator to apply after each binding step, if any.
                         */
                        // @ts-ignore
                        getValidator(): Validator
                        /**
                         * Specify a ConversionService which will apply to every DataBinder.
                         * @since 3.0
                         */
                        // @ts-ignore
                        setConversionService(conversionService: ConversionService): void
                        /**
                         * Return the ConversionService which will apply to every DataBinder.
                         */
                        // @ts-ignore
                        getConversionService(): ConversionService
                        /**
                         * Specify a single PropertyEditorRegistrar to be applied to every DataBinder.
                         */
                        // @ts-ignore
                        setPropertyEditorRegistrar(propertyEditorRegistrar: PropertyEditorRegistrar): void
                        /**
                         * Specify multiple PropertyEditorRegistrars to be applied to every DataBinder.
                         */
                        // @ts-ignore
                        setPropertyEditorRegistrars(propertyEditorRegistrars: PropertyEditorRegistrar[]): void
                        /**
                         * Return the PropertyEditorRegistrars to be applied to every DataBinder.
                         */
                        // @ts-ignore
                        getPropertyEditorRegistrars(): PropertyEditorRegistrar[]
                        // @ts-ignore
                        initBinder(binder: org.springframework.web.bind.WebDataBinder): void
                    }
                }
            }
        }
    }
}
