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
            abstract class AbstractBindingResult extends org.springframework.validation.AbstractErrors implements org.springframework.validation.BindingResult, java.io.Serializable {
                /**
                 * Create a new AbstractBindingResult instance.
                 * @param objectName the name of the target object
                 * @see DefaultMessageCodesResolver
                 */
                // @ts-ignore
                constructor(objectName: java.lang.String | string)
                /**
                 * Set the strategy to use for resolving errors into message codes.
                 * Default is DefaultMessageCodesResolver.
                 * @see DefaultMessageCodesResolver
                 */
                // @ts-ignore
                public setMessageCodesResolver(messageCodesResolver: org.springframework.validation.MessageCodesResolver): void
                /**
                 * Return the strategy to use for resolving errors into message codes.
                 */
                // @ts-ignore
                public getMessageCodesResolver(): org.springframework.validation.MessageCodesResolver
                // @ts-ignore
                public getObjectName(): string
                // @ts-ignore
                public reject(errorCode: java.lang.String | string, errorArgs: java.lang.Object[] | any[], defaultMessage: java.lang.String | string): void
                // @ts-ignore
                public rejectValue(field: java.lang.String | string, errorCode: java.lang.String | string, errorArgs: java.lang.Object[] | any[], defaultMessage: java.lang.String | string): void
                // @ts-ignore
                public addAllErrors(errors: org.springframework.validation.Errors): void
                // @ts-ignore
                public hasErrors(): boolean
                // @ts-ignore
                public getErrorCount(): number /*int*/
                // @ts-ignore
                public getAllErrors(): Array<org.springframework.validation.ObjectError>
                // @ts-ignore
                public getGlobalErrors(): Array<org.springframework.validation.ObjectError>
                // @ts-ignore
                public getGlobalError(): org.springframework.validation.ObjectError
                // @ts-ignore
                public getFieldErrors(): Array<org.springframework.validation.FieldError>
                // @ts-ignore
                public getFieldError(): org.springframework.validation.FieldError
                // @ts-ignore
                public getFieldErrors(field: java.lang.String | string): Array<org.springframework.validation.FieldError>
                // @ts-ignore
                public getFieldError(field: java.lang.String | string): org.springframework.validation.FieldError
                // @ts-ignore
                public getFieldValue(field: java.lang.String | string): any
                /**
                 * This default implementation determines the type based on the actual
                 * field value, if any. Subclasses should override this to determine
                 * the type from a descriptor, even for {@code null} values.
                 * @see #getActualFieldValue
                 */
                // @ts-ignore
                public getFieldType(field: java.lang.String | string): java.lang.Class<any>
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
                public getModel(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                // @ts-ignore
                public getRawFieldValue(field: java.lang.String | string): any
                /**
                 * This implementation delegates to the
                 * {@link #getPropertyEditorRegistry() PropertyEditorRegistry}'s
                 * editor lookup facility, if available.
                 */
                // @ts-ignore
                public findEditor(field: java.lang.String | string, valueType: java.lang.Class<any>): java.beans.PropertyEditor
                /**
                 * This implementation returns {@code null}.
                 */
                // @ts-ignore
                public getPropertyEditorRegistry(): PropertyEditorRegistry
                // @ts-ignore
                public resolveMessageCodes(errorCode: java.lang.String | string): string[]
                // @ts-ignore
                public resolveMessageCodes(errorCode: java.lang.String | string, field: java.lang.String | string): string[]
                // @ts-ignore
                public addError(error: org.springframework.validation.ObjectError): void
                // @ts-ignore
                public recordFieldValue(field: java.lang.String | string, type: java.lang.Class<any>, value: java.lang.Object | any): void
                /**
                 * Mark the specified disallowed field as suppressed.
                 * <p>The data binder invokes this for each field value that was
                 * detected to target a disallowed field.
                 * @see DataBinder#setAllowedFields
                 */
                // @ts-ignore
                public recordSuppressedField(field: java.lang.String | string): void
                /**
                 * Return the list of fields that were suppressed during the bind process.
                 * <p>Can be used to determine whether any field values were targeting
                 * disallowed fields.
                 * @see DataBinder#setAllowedFields
                 */
                // @ts-ignore
                public getSuppressedFields(): string[]
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Return the wrapped target object.
                 */
                // @ts-ignore
                public abstract getTarget(): any
                /**
                 * Extract the actual field value for the given field.
                 * @param field the field to check
                 * @return the current value of the field
                 */
                // @ts-ignore
                abstract getActualFieldValue(field: java.lang.String | string): any
                /**
                 * Format the given value for the specified field.
                 * <p>The default implementation simply returns the field value as-is.
                 * @param field the field to check
                 * @param value the value of the field (either a rejected value
                 *  other than from a binding error, or an actual field value)
                 * @return the formatted value
                 */
                // @ts-ignore
                formatFieldValue(field: java.lang.String | string, value: java.lang.Object | any): any
            }
        }
    }
}
