declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * General interface that represents binding results. Extends the
             * {@link Errors interface} for error registration capabilities,
             * allowing for a {@link Validator} to be applied, and adds
             * binding-specific analysis and model building.
             * <p>Serves as result holder for a {@link DataBinder}, obtained via
             * the {@link DataBinder#getBindingResult()} method. BindingResult
             * implementations can also be used directly, for example to invoke
             * a {@link Validator} on it (e.g. as part of a unit test).
             * @author Juergen Hoeller
             * @since 2.0
             * @see DataBinder
             * @see Errors
             * @see Validator
             * @see BeanPropertyBindingResult
             * @see DirectFieldBindingResult
             * @see MapBindingResult
             */
            // @ts-ignore
            interface BindingResult extends org.springframework.validation.Errors {
                /**
                 * Prefix for the name of the BindingResult instance in a model,
                 * followed by the object name.
                 */
                // @ts-ignore
                
                /**
                 * Return the wrapped target object, which may be a bean, an object with
                 * public fields, a Map - depending on the concrete binding strategy.
                 */
                // @ts-ignore
                getTarget(): java.lang.Object
                /**
                 * Return a model Map for the obtained state, exposing a BindingResult
                 * instance as '{@link #MODEL_KEY_PREFIX MODEL_KEY_PREFIX} + objectName'
                 * and the object itself as 'objectName'.
                 * <p>Note that the Map is constructed every time you're calling this method.
                 * Adding things to the map and then re-calling this method will not work.
                 * <p>The attributes in the model Map returned by this method are usually
                 * included in the {@link org.springframework.web.servlet.ModelAndView}
                 * for a form view that uses Spring's {@code bind} tag in a JSP,
                 * which needs access to the BindingResult instance. Spring's pre-built
                 * form controllers will do this for you when rendering a form view.
                 * When building the ModelAndView instance yourself, you need to include
                 * the attributes from the model Map returned by this method.
                 * @see #getObjectName()
                 * @see #MODEL_KEY_PREFIX
                 * @see org.springframework.web.servlet.ModelAndView
                 * @see org.springframework.web.servlet.tags.BindTag
                 */
                // @ts-ignore
                getModel(): java.util.Map<java.lang.String, java.lang.Object>
                /**
                 * Extract the raw field value for the given field.
                 * Typically used for comparison purposes.
                 * @param field the field to check
                 * @return the current value of the field in its raw form, or {#code null} if not known
                 */
                // @ts-ignore
                getRawFieldValue(field: string): java.lang.Object
                /**
                 * Find a custom property editor for the given type and property.
                 * @param field the path of the property (name or nested path), or
                 *  {#code null} if looking for an editor for all properties of the given type
                 * @param valueType the type of the property (can be {#code null} if a property
                 *  is given but should be specified in any case for consistency checking)
                 * @return the registered editor, or {#code null} if none
                 */
                // @ts-ignore
                findEditor(field: string, valueType: java.lang.Class<any>): java.beans.PropertyEditor
                /**
                 * Return the underlying PropertyEditorRegistry.
                 * @return the PropertyEditorRegistry, or {#code null} if none
                 *  available for this BindingResult
                 */
                // @ts-ignore
                getPropertyEditorRegistry(): PropertyEditorRegistry
                /**
                 * Resolve the given error code into message codes.
                 * <p>Calls the configured {@link MessageCodesResolver} with appropriate parameters.
                 * @param errorCode the error code to resolve into message codes
                 * @return the resolved message codes
                 */
                // @ts-ignore
                resolveMessageCodes(errorCode: string): java.lang.String[]
                /**
                 * Resolve the given error code into message codes for the given field.
                 * <p>Calls the configured {@link MessageCodesResolver} with appropriate parameters.
                 * @param errorCode the error code to resolve into message codes
                 * @param field the field to resolve message codes for
                 * @return the resolved message codes
                 */
                // @ts-ignore
                resolveMessageCodes(errorCode: string, field: string): java.lang.String[]
                /**
                 * Add a custom {@link ObjectError} or {@link FieldError} to the errors list.
                 * <p>Intended to be used by cooperating strategies such as {@link BindingErrorProcessor}.
                 * @see ObjectError
                 * @see FieldError
                 * @see BindingErrorProcessor
                 */
                // @ts-ignore
                addError(error: org.springframework.validation.ObjectError): void
                /**
                 * Record the given value for the specified field.
                 * <p>To be used when a target object cannot be constructed, making
                 * the original field values available through {@link #getFieldValue}.
                 * In case of a registered error, the rejected value will be exposed
                 * for each affected field.
                 * @param field the field to record the value for
                 * @param type the type of the field
                 * @param value the original value
                 * @since 5.0.4
                 */
                // @ts-ignore
                recordFieldValue(field: string, type: java.lang.Class<any>, value: any): void
                /**
                 * Mark the specified disallowed field as suppressed.
                 * <p>The data binder invokes this for each field value that was
                 * detected to target a disallowed field.
                 * @see DataBinder#setAllowedFields
                 */
                // @ts-ignore
                recordSuppressedField(field: string): void
                /**
                 * Return the list of fields that were suppressed during the bind process.
                 * <p>Can be used to determine whether any field values were targeting
                 * disallowed fields.
                 * @see DataBinder#setAllowedFields
                 */
                // @ts-ignore
                getSuppressedFields(): java.lang.String[]
            }
        }
    }
}
