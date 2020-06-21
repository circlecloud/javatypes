declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * Binder that allows for setting property values onto a target object,
             * including support for validation and binding result analysis.
             * The binding process can be customized through specifying allowed fields,
             * required fields, custom editors, etc.
             * <p>Note that there are potential security implications in failing to set an array
             * of allowed fields. In the case of HTTP form POST data for example, malicious clients
             * can attempt to subvert an application by supplying values for fields or properties
             * that do not exist on the form. In some cases this could lead to illegal data being
             * set on command objects <i>or their nested objects</i>. For this reason, it is
             * <b>highly recommended to specify the {@link #setAllowedFields allowedFields} property</b>
             * on the DataBinder.
             * <p>The binding results can be examined via the {@link BindingResult} interface,
             * extending the {@link Errors} interface: see the {@link #getBindingResult()} method.
             * Missing fields and property access exceptions will be converted to {@link FieldError FieldErrors},
             * collected in the Errors instance, using the following error codes:
             * <ul>
             * <li>Missing field error: "required"
             * <li>Type mismatch error: "typeMismatch"
             * <li>Method invocation error: "methodInvocation"
             * </ul>
             * <p>By default, binding errors get resolved through the {@link BindingErrorProcessor}
             * strategy, processing for missing fields and property access exceptions: see the
             * {@link #setBindingErrorProcessor} method. You can override the default strategy
             * if needed, for example to generate different error codes.
             * <p>Custom validation errors can be added afterwards. You will typically want to resolve
             * such error codes into proper user-visible error messages; this can be achieved through
             * resolving each error via a {@link org.springframework.context.MessageSource}, which is
             * able to resolve an {@link ObjectError}/{@link FieldError} through its
             * {@link org.springframework.context.MessageSource#getMessage(org.springframework.context.MessageSourceResolvable, java.util.Locale)}
             * method. The list of message codes can be customized through the {@link MessageCodesResolver}
             * strategy: see the {@link #setMessageCodesResolver} method. {@link DefaultMessageCodesResolver}'s
             * javadoc states details on the default resolution rules.
             * <p>This generic data binder can be used in any kind of environment.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @author Rob Harrop
             * @author Stephane Nicoll
             * @author Kazuki Shimizu
             * @see #setAllowedFields
             * @see #setRequiredFields
             * @see #registerCustomEditor
             * @see #setMessageCodesResolver
             * @see #setBindingErrorProcessor
             * @see #bind
             * @see #getBindingResult
             * @see DefaultMessageCodesResolver
             * @see DefaultBindingErrorProcessor
             * @see org.springframework.context.MessageSource
             */
            // @ts-ignore
            class DataBinder extends java.lang.Object {
                /**
                 * Create a new DataBinder instance, with default object name.
                 * @param target the target object to bind onto (or {#code null}
                 *  if the binder is just used to convert a plain parameter value)
                 * @see #DEFAULT_OBJECT_NAME
                 */
                // @ts-ignore
                constructor(target: java.lang.Object | any)
                /**
                 * Create a new DataBinder instance.
                 * @param target the target object to bind onto (or {#code null}
                 *  if the binder is just used to convert a plain parameter value)
                 * @param objectName the name of the target object
                 */
                // @ts-ignore
                constructor(target: java.lang.Object | any, objectName: java.lang.String | string)
                /**
                 * Default object name used for binding: "target".
                 */
                // @ts-ignore
                public static readonly DEFAULT_OBJECT_NAME: java.lang.String | string
                /**
                 * Default limit for array and collection growing: 256.
                 */
                // @ts-ignore
                public static readonly DEFAULT_AUTO_GROW_COLLECTION_LIMIT: number /*int*/
                /**
                 * We'll create a lot of DataBinder instances: Let's use a static logger.
                 */
                // @ts-ignore
                static readonly logger: Log
                /**
                 * Return the wrapped target object.
                 */
                // @ts-ignore
                public getTarget(): any
                /**
                 * Return the name of the bound object.
                 */
                // @ts-ignore
                public getObjectName(): string
                /**
                 * Set whether this binder should attempt to "auto-grow" a nested path that contains a null value.
                 * <p>If "true", a null path location will be populated with a default object value and traversed
                 * instead of resulting in an exception. This flag also enables auto-growth of collection elements
                 * when accessing an out-of-bounds index.
                 * <p>Default is "true" on a standard DataBinder. Note that since Spring 4.1 this feature is supported
                 * for bean property access (DataBinder's default mode) and field access.
                 * @see #initBeanPropertyAccess()
                 * @see org.springframework.beans.BeanWrapper#setAutoGrowNestedPaths
                 */
                // @ts-ignore
                public setAutoGrowNestedPaths(autoGrowNestedPaths: boolean): void
                /**
                 * Return whether "auto-growing" of nested paths has been activated.
                 */
                // @ts-ignore
                public isAutoGrowNestedPaths(): boolean
                /**
                 * Specify the limit for array and collection auto-growing.
                 * <p>Default is 256, preventing OutOfMemoryErrors in case of large indexes.
                 * Raise this limit if your auto-growing needs are unusually high.
                 * @see #initBeanPropertyAccess()
                 * @see org.springframework.beans.BeanWrapper#setAutoGrowCollectionLimit
                 */
                // @ts-ignore
                public setAutoGrowCollectionLimit(autoGrowCollectionLimit: number /*int*/): void
                /**
                 * Return the current limit for array and collection auto-growing.
                 */
                // @ts-ignore
                public getAutoGrowCollectionLimit(): number /*int*/
                /**
                 * Initialize standard JavaBean property access for this DataBinder.
                 * <p>This is the default; an explicit call just leads to eager initialization.
                 * @see #initDirectFieldAccess()
                 * @see #createBeanPropertyBindingResult()
                 */
                // @ts-ignore
                public initBeanPropertyAccess(): void
                /**
                 * Create the {@link AbstractPropertyBindingResult} instance using standard
                 * JavaBean property access.
                 * @since 4.2.1
                 */
                // @ts-ignore
                createBeanPropertyBindingResult(): org.springframework.validation.AbstractPropertyBindingResult
                /**
                 * Initialize direct field access for this DataBinder,
                 * as alternative to the default bean property access.
                 * @see #initBeanPropertyAccess()
                 * @see #createDirectFieldBindingResult()
                 */
                // @ts-ignore
                public initDirectFieldAccess(): void
                /**
                 * Create the {@link AbstractPropertyBindingResult} instance using direct
                 * field access.
                 * @since 4.2.1
                 */
                // @ts-ignore
                createDirectFieldBindingResult(): org.springframework.validation.AbstractPropertyBindingResult
                /**
                 * Return the internal BindingResult held by this DataBinder,
                 * as an AbstractPropertyBindingResult.
                 */
                // @ts-ignore
                getInternalBindingResult(): org.springframework.validation.AbstractPropertyBindingResult
                /**
                 * Return the underlying PropertyAccessor of this binder's BindingResult.
                 */
                // @ts-ignore
                getPropertyAccessor(): ConfigurablePropertyAccessor
                /**
                 * Return this binder's underlying SimpleTypeConverter.
                 */
                // @ts-ignore
                getSimpleTypeConverter(): SimpleTypeConverter
                /**
                 * Return the underlying TypeConverter of this binder's BindingResult.
                 */
                // @ts-ignore
                getPropertyEditorRegistry(): PropertyEditorRegistry
                /**
                 * Return the underlying TypeConverter of this binder's BindingResult.
                 */
                // @ts-ignore
                getTypeConverter(): TypeConverter
                /**
                 * Return the BindingResult instance created by this DataBinder.
                 * This allows for convenient access to the binding results after
                 * a bind operation.
                 * @return the BindingResult instance, to be treated as BindingResult
                 *  or as Errors instance (Errors is a super-interface of BindingResult)
                 * @see Errors
                 * @see #bind
                 */
                // @ts-ignore
                public getBindingResult(): org.springframework.validation.BindingResult
                /**
                 * Set whether to ignore unknown fields, that is, whether to ignore bind
                 * parameters that do not have corresponding fields in the target object.
                 * <p>Default is "true". Turn this off to enforce that all bind parameters
                 * must have a matching field in the target object.
                 * <p>Note that this setting only applies to <i>binding</i> operations
                 * on this DataBinder, not to <i>retrieving</i> values via its
                 * {@link #getBindingResult() BindingResult}.
                 * @see #bind
                 */
                // @ts-ignore
                public setIgnoreUnknownFields(ignoreUnknownFields: boolean): void
                /**
                 * Return whether to ignore unknown fields when binding.
                 */
                // @ts-ignore
                public isIgnoreUnknownFields(): boolean
                /**
                 * Set whether to ignore invalid fields, that is, whether to ignore bind
                 * parameters that have corresponding fields in the target object which are
                 * not accessible (for example because of null values in the nested path).
                 * <p>Default is "false". Turn this on to ignore bind parameters for
                 * nested objects in non-existing parts of the target object graph.
                 * <p>Note that this setting only applies to <i>binding</i> operations
                 * on this DataBinder, not to <i>retrieving</i> values via its
                 * {@link #getBindingResult() BindingResult}.
                 * @see #bind
                 */
                // @ts-ignore
                public setIgnoreInvalidFields(ignoreInvalidFields: boolean): void
                /**
                 * Return whether to ignore invalid fields when binding.
                 */
                // @ts-ignore
                public isIgnoreInvalidFields(): boolean
                /**
                 * Register fields that should be allowed for binding. Default is all
                 * fields. Restrict this for example to avoid unwanted modifications
                 * by malicious users when binding HTTP request parameters.
                 * <p>Supports "xxx*", "*xxx" and "*xxx*" patterns. More sophisticated matching
                 * can be implemented by overriding the {@code isAllowed} method.
                 * <p>Alternatively, specify a list of <i>disallowed</i> fields.
                 * @param allowedFields array of field names
                 * @see #setDisallowedFields
                 * @see #isAllowed(String)
                 */
                // @ts-ignore
                public setAllowedFields(...allowedFields: java.lang.String[] | string[]): void
                /**
                 * Return the fields that should be allowed for binding.
                 * @return array of field names
                 */
                // @ts-ignore
                public getAllowedFields(): string[]
                /**
                 * Register fields that should <i>not</i> be allowed for binding. Default is none.
                 * Mark fields as disallowed for example to avoid unwanted modifications
                 * by malicious users when binding HTTP request parameters.
                 * <p>Supports "xxx*", "*xxx" and "*xxx*" patterns. More sophisticated matching
                 * can be implemented by overriding the {@code isAllowed} method.
                 * <p>Alternatively, specify a list of <i>allowed</i> fields.
                 * @param disallowedFields array of field names
                 * @see #setAllowedFields
                 * @see #isAllowed(String)
                 */
                // @ts-ignore
                public setDisallowedFields(...disallowedFields: java.lang.String[] | string[]): void
                /**
                 * Return the fields that should <i>not</i> be allowed for binding.
                 * @return array of field names
                 */
                // @ts-ignore
                public getDisallowedFields(): string[]
                /**
                 * Register fields that are required for each binding process.
                 * <p>If one of the specified fields is not contained in the list of
                 * incoming property values, a corresponding "missing field" error
                 * will be created, with error code "required" (by the default
                 * binding error processor).
                 * @param requiredFields array of field names
                 * @see #setBindingErrorProcessor
                 * @see DefaultBindingErrorProcessor#MISSING_FIELD_ERROR_CODE
                 */
                // @ts-ignore
                public setRequiredFields(...requiredFields: java.lang.String[] | string[]): void
                /**
                 * Return the fields that are required for each binding process.
                 * @return array of field names
                 */
                // @ts-ignore
                public getRequiredFields(): string[]
                /**
                 * Set the strategy to use for resolving errors into message codes.
                 * Applies the given strategy to the underlying errors holder.
                 * <p>Default is a DefaultMessageCodesResolver.
                 * @see BeanPropertyBindingResult#setMessageCodesResolver
                 * @see DefaultMessageCodesResolver
                 */
                // @ts-ignore
                public setMessageCodesResolver(messageCodesResolver: org.springframework.validation.MessageCodesResolver): void
                /**
                 * Set the strategy to use for processing binding errors, that is,
                 * required field errors and {@code PropertyAccessException}s.
                 * <p>Default is a DefaultBindingErrorProcessor.
                 * @see DefaultBindingErrorProcessor
                 */
                // @ts-ignore
                public setBindingErrorProcessor(bindingErrorProcessor: org.springframework.validation.BindingErrorProcessor): void
                /**
                 * Return the strategy for processing binding errors.
                 */
                // @ts-ignore
                public getBindingErrorProcessor(): org.springframework.validation.BindingErrorProcessor
                /**
                 * Set the Validator to apply after each binding step.
                 * @see #addValidators(Validator...)
                 * @see #replaceValidators(Validator...)
                 */
                // @ts-ignore
                public setValidator(validator: org.springframework.validation.Validator): void
                /**
                 * Add Validators to apply after each binding step.
                 * @see #setValidator(Validator)
                 * @see #replaceValidators(Validator...)
                 */
                // @ts-ignore
                public addValidators(...validators: org.springframework.validation.Validator[]): void
                /**
                 * Replace the Validators to apply after each binding step.
                 * @see #setValidator(Validator)
                 * @see #addValidators(Validator...)
                 */
                // @ts-ignore
                public replaceValidators(...validators: org.springframework.validation.Validator[]): void
                /**
                 * Return the primary Validator to apply after each binding step, if any.
                 */
                // @ts-ignore
                public getValidator(): org.springframework.validation.Validator
                /**
                 * Return the Validators to apply after data binding.
                 */
                // @ts-ignore
                public getValidators(): Array<org.springframework.validation.Validator>
                /**
                 * Specify a Spring 3.0 ConversionService to use for converting
                 * property values, as an alternative to JavaBeans PropertyEditors.
                 */
                // @ts-ignore
                public setConversionService(conversionService: ConversionService): void
                /**
                 * Return the associated ConversionService, if any.
                 */
                // @ts-ignore
                public getConversionService(): ConversionService
                /**
                 * Add a custom formatter, applying it to all fields matching the
                 * {@link Formatter}-declared type.
                 * <p>Registers a corresponding {@link PropertyEditor} adapter underneath the covers.
                 * @param formatter the formatter to add, generically declared for a specific type
                 * @since 4.2
                 * @see #registerCustomEditor(Class, PropertyEditor)
                 */
                // @ts-ignore
                public addCustomFormatter(formatter: org.springframework.format.Formatter<any>): void
                /**
                 * Add a custom formatter for the field type specified in {@link Formatter} class,
                 * applying it to the specified fields only, if any, or otherwise to all fields.
                 * <p>Registers a corresponding {@link PropertyEditor} adapter underneath the covers.
                 * @param formatter the formatter to add, generically declared for a specific type
                 * @param fields the fields to apply the formatter to, or none if to be applied to all
                 * @since 4.2
                 * @see #registerCustomEditor(Class, String, PropertyEditor)
                 */
                // @ts-ignore
                public addCustomFormatter(formatter: org.springframework.format.Formatter<any>, ...fields: java.lang.String[] | string[]): void
                /**
                 * Add a custom formatter, applying it to the specified field types only, if any,
                 * or otherwise to all fields matching the {@link Formatter}-declared type.
                 * <p>Registers a corresponding {@link PropertyEditor} adapter underneath the covers.
                 * @param formatter the formatter to add (does not need to generically declare a
                 *  field type if field types are explicitly specified as parameters)
                 * @param fieldTypes the field types to apply the formatter to, or none if to be
                 *  derived from the given {#link Formatter} implementation class
                 * @since 4.2
                 * @see #registerCustomEditor(Class, PropertyEditor)
                 */
                // @ts-ignore
                public addCustomFormatter(formatter: org.springframework.format.Formatter<any>, ...fieldTypes: java.lang.Class<any>[]): void
                // @ts-ignore
                public registerCustomEditor(requiredType: java.lang.Class<any>, propertyEditor: java.beans.PropertyEditor): void
                // @ts-ignore
                public registerCustomEditor(requiredType: java.lang.Class<any>, field: java.lang.String | string, propertyEditor: java.beans.PropertyEditor): void
                // @ts-ignore
                public findCustomEditor(requiredType: java.lang.Class<any>, propertyPath: java.lang.String | string): java.beans.PropertyEditor
                // @ts-ignore
                public convertIfNecessary<T>(value: java.lang.Object | any, requiredType: java.lang.Class<T>): T
                // @ts-ignore
                public convertIfNecessary<T>(value: java.lang.Object | any, requiredType: java.lang.Class<T>, methodParam: MethodParameter): T
                // @ts-ignore
                public convertIfNecessary<T>(value: java.lang.Object | any, requiredType: java.lang.Class<T>, typeDescriptor: TypeDescriptor): T
                /**
                 * Bind the given property values to this binder's target.
                 * <p>This call can create field errors, representing basic binding
                 * errors like a required field (code "required"), or type mismatch
                 * between value and bean property (code "typeMismatch").
                 * <p>Note that the given PropertyValues should be a throwaway instance:
                 * For efficiency, it will be modified to just contain allowed fields if it
                 * implements the MutablePropertyValues interface; else, an internal mutable
                 * copy will be created for this purpose. Pass in a copy of the PropertyValues
                 * if you want your original instance to stay unmodified in any case.
                 * @param pvs property values to bind
                 * @see #doBind(org.springframework.beans.MutablePropertyValues)
                 */
                // @ts-ignore
                public bind(pvs: PropertyValues): void
                /**
                 * Actual implementation of the binding process, working with the
                 * passed-in MutablePropertyValues instance.
                 * @param mpvs the property values to bind,
                 *  as MutablePropertyValues instance
                 * @see #checkAllowedFields
                 * @see #checkRequiredFields
                 * @see #applyPropertyValues
                 */
                // @ts-ignore
                doBind(mpvs: MutablePropertyValues): void
                /**
                 * Check the given property values against the allowed fields,
                 * removing values for fields that are not allowed.
                 * @param mpvs the property values to be bound (can be modified)
                 * @see #getAllowedFields
                 * @see #isAllowed(String)
                 */
                // @ts-ignore
                checkAllowedFields(mpvs: MutablePropertyValues): void
                /**
                 * Return if the given field is allowed for binding.
                 * Invoked for each passed-in property value.
                 * <p>The default implementation checks for "xxx*", "*xxx" and "*xxx*" matches,
                 * as well as direct equality, in the specified lists of allowed fields and
                 * disallowed fields. A field matching a disallowed pattern will not be accepted
                 * even if it also happens to match a pattern in the allowed list.
                 * <p>Can be overridden in subclasses.
                 * @param field the field to check
                 * @return if the field is allowed
                 * @see #setAllowedFields
                 * @see #setDisallowedFields
                 * @see org.springframework.util.PatternMatchUtils#simpleMatch(String, String)
                 */
                // @ts-ignore
                isAllowed(field: java.lang.String | string): boolean
                /**
                 * Check the given property values against the required fields,
                 * generating missing field errors where appropriate.
                 * @param mpvs the property values to be bound (can be modified)
                 * @see #getRequiredFields
                 * @see #getBindingErrorProcessor
                 * @see BindingErrorProcessor#processMissingFieldError
                 */
                // @ts-ignore
                checkRequiredFields(mpvs: MutablePropertyValues): void
                /**
                 * Apply given property values to the target object.
                 * <p>Default implementation applies all of the supplied property
                 * values as bean property values. By default, unknown fields will
                 * be ignored.
                 * @param mpvs the property values to be bound (can be modified)
                 * @see #getTarget
                 * @see #getPropertyAccessor
                 * @see #isIgnoreUnknownFields
                 * @see #getBindingErrorProcessor
                 * @see BindingErrorProcessor#processPropertyAccessException
                 */
                // @ts-ignore
                applyPropertyValues(mpvs: MutablePropertyValues): void
                /**
                 * Invoke the specified Validators, if any.
                 * @see #setValidator(Validator)
                 * @see #getBindingResult()
                 */
                // @ts-ignore
                public validate(): void
                /**
                 * Invoke the specified Validators, if any, with the given validation hints.
                 * <p>Note: Validation hints may get ignored by the actual target Validator.
                 * @param validationHints one or more hint objects to be passed to a {#link SmartValidator}
                 * @since 3.1
                 * @see #setValidator(Validator)
                 * @see SmartValidator#validate(Object, Errors, Object...)
                 */
                // @ts-ignore
                public validate(...validationHints: java.lang.Object[] | any[]): void
                /**
                 * Close this DataBinder, which may result in throwing
                 * a BindException if it encountered any errors.
                 * @return the model Map, containing target object and Errors instance
                 * @throws BindException if there were any errors in the bind operation
                 * @see BindingResult#getModel()
                 */
                // @ts-ignore
                public close(): java.util.Map<any, any>
            }
        }
    }
}
