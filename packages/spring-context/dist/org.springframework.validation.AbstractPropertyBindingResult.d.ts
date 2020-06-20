declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * Abstract base class for {@link BindingResult} implementations that work with
             * Spring's {@link org.springframework.beans.PropertyAccessor} mechanism.
             * Pre-implements field access through delegation to the corresponding
             * PropertyAccessor methods.
             * @author Juergen Hoeller
             * @since 2.0
             * @see #getPropertyAccessor()
             * @see org.springframework.beans.PropertyAccessor
             * @see org.springframework.beans.ConfigurablePropertyAccessor
             */
            // @ts-ignore
            class AbstractPropertyBindingResult extends org.springframework.validation.AbstractBindingResult {
                /**
                 * Create a new AbstractPropertyBindingResult instance.
                 * @param objectName the name of the target object
                 * @see DefaultMessageCodesResolver
                 */
                // @ts-ignore
                constructor(objectName: string)
                // @ts-ignore
                initConversion(conversionService: ConversionService): void
                /**
                 * Returns the underlying PropertyAccessor.
                 * @see #getPropertyAccessor()
                 */
                // @ts-ignore
                getPropertyEditorRegistry(): PropertyEditorRegistry
                /**
                 * Returns the canonical property name.
                 * @see org.springframework.beans.PropertyAccessorUtils#canonicalPropertyName
                 */
                // @ts-ignore
                canonicalFieldName(field: string): java.lang.String
                /**
                 * Determines the field type from the property type.
                 * @see #getPropertyAccessor()
                 */
                // @ts-ignore
                getFieldType(field: string): java.lang.Class<?>
                /**
                 * Fetches the field value from the PropertyAccessor.
                 * @see #getPropertyAccessor()
                 */
                // @ts-ignore
                getActualFieldValue(field: string): java.lang.Object
                /**
                 * Formats the field value based on registered PropertyEditors.
                 * @see #getCustomEditor
                 */
                // @ts-ignore
                formatFieldValue(field: string, value: any): java.lang.Object
                /**
                 * Retrieve the custom PropertyEditor for the given field, if any.
                 * @param fixedField the fully qualified field name
                 * @return the custom PropertyEditor, or {#code null}
                 */
                // @ts-ignore
                getCustomEditor(fixedField: string): java.beans.PropertyEditor
                /**
                 * This implementation exposes a PropertyEditor adapter for a Formatter,
                 * if applicable.
                 */
                // @ts-ignore
                findEditor(field: string, valueType: java.lang.Class<any>): java.beans.PropertyEditor
                /**
                 * Provide the PropertyAccessor to work with, according to the
                 * concrete strategy of access.
                 * <p>Note that a PropertyAccessor used by a BindingResult should
                 * always have its "extractOldValueForEditor" flag set to "true"
                 * by default, since this is typically possible without side effects
                 * for model objects that serve as data binding target.
                 * @see ConfigurablePropertyAccessor#setExtractOldValueForEditor
                 */
                // @ts-ignore
                abstract getPropertyAccessor(): ConfigurablePropertyAccessor
            }
        }
    }
}
