declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * Abstract implementation of the {@link BindingResult} interface and
             * its super-interface {@link Errors}. Encapsulates common management of
             * {@link ObjectError ObjectErrors} and {@link FieldError FieldErrors}.
             * @author Juergen Hoeller
             * @author Rob Harrop
             * @since 2.0
             * @see Errors
             */
            // @ts-ignore
            class AbstractBindingResult extends org.springframework.validation.AbstractErrors implements org.springframework.validation.BindingResult, java.io.Serializable {
                /**
                 * Create a new AbstractBindingResult instance.
                 * @param objectName the name of the target object
                 * @see DefaultMessageCodesResolver
                 */
                // @ts-ignore
                constructor(objectName: string)
                /**
                 * Set the strategy to use for resolving errors into message codes.
                 * Default is DefaultMessageCodesResolver.
                 * @see DefaultMessageCodesResolver
                 */
                // @ts-ignore
                setMessageCodesResolver(messageCodesResolver: org.springframework.validation.MessageCodesResolver): void
                /**
                 * Return the strategy to use for resolving errors into message codes.
                 */
                // @ts-ignore
                getMessageCodesResolver(): org.springframework.validation.MessageCodesResolver
                // @ts-ignore
                getObjectName(): java.lang.String
                // @ts-ignore
                reject(errorCode: string, errorArgs: any[], defaultMessage: string): void
                // @ts-ignore
                rejectValue(field: string, errorCode: string, errorArgs: any[], defaultMessage: string): void
                // @ts-ignore
                addAllErrors(errors: org.springframework.validation.Errors): void
                // @ts-ignore
                hasErrors(): boolean
                // @ts-ignore
                getErrorCount(): int
                // @ts-ignore
                getAllErrors(): java.util.List<org.springframework.validation.ObjectError>
                // @ts-ignore
                getGlobalErrors(): java.util.List<org.springframework.validation.ObjectError>
                // @ts-ignore
                getGlobalError(): org.springframework.validation.ObjectError
                // @ts-ignore
                getFieldErrors(): java.util.List<org.springframework.validation.FieldError>
                // @ts-ignore
                getFieldError(): org.springframework.validation.FieldError
                // @ts-ignore
                getFieldErrors(field: string): java.util.List<org.springframework.validation.FieldError>
                // @ts-ignore
                getFieldError(field: string): org.springframework.validation.FieldError
                // @ts-ignore
                getFieldValue(field: string): java.lang.Object
                /**
                 * This default implementation determines the type based on the actual
                 * field value, if any. Subclasses should override this to determine
                 * the type from a descriptor, even for {@code null} values.
                 * @see #getActualFieldValue
                 */
                // @ts-ignore
                getFieldType(field: string): java.lang.Class<?>
                /**
                 * Return a model Map for the obtained state, exposing an Errors
                 * instance as '{@link #MODEL_KEY_PREFIX MODEL_KEY_PREFIX} + objectName'
                 * and the object itself.
                 * <p>Note that the Map is constructed every time you're calling this method.
                 * Adding things to the map and then re-calling this method will not work.
                 * <p>The attributes in the model Map returned by this method are usually
                 * included in the ModelAndView for a form view that uses Spring's bind tag,
                 * which needs access to the Errors instance.
                 * @see #getObjectName
                 * @see #MODEL_KEY_PREFIX
                 */
                // @ts-ignore
                getModel(): java.util.Map<java.lang.String, java.lang.Object>
                // @ts-ignore
                getRawFieldValue(field: string): java.lang.Object
                /**
                 * This implementation delegates to the
                 * {@link #getPropertyEditorRegistry() PropertyEditorRegistry}'s
                 * editor lookup facility, if available.
                 */
                // @ts-ignore
                findEditor(field: string, valueType: java.lang.Class<any>): java.beans.PropertyEditor
                /**
                 * This implementation returns {@code null}.
                 */
                // @ts-ignore
                getPropertyEditorRegistry(): PropertyEditorRegistry
                // @ts-ignore
                resolveMessageCodes(errorCode: string): java.lang.String[]
                // @ts-ignore
                resolveMessageCodes(errorCode: string, field: string): java.lang.String[]
                // @ts-ignore
                addError(error: org.springframework.validation.ObjectError): void
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
                // @ts-ignore
                equals(other: any): boolean
                // @ts-ignore
                hashCode(): int
                /**
                 * Return the wrapped target object.
                 */
                // @ts-ignore
                abstract getTarget(): java.lang.Object
                /**
                 * Extract the actual field value for the given field.
                 * @param field the field to check
                 * @return the current value of the field
                 */
                // @ts-ignore
                abstract getActualFieldValue(field: string): java.lang.Object
                /**
                 * Format the given value for the specified field.
                 * <p>The default implementation simply returns the field value as-is.
                 * @param field the field to check
                 * @param value the value of the field (either a rejected value
                 *  other than from a binding error, or an actual field value)
                 * @return the formatted value
                 */
                // @ts-ignore
                formatFieldValue(field: string, value: any): java.lang.Object
            }
        }
    }
}
