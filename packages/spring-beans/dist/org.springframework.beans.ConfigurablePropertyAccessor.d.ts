declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Interface that encapsulates configuration methods for a PropertyAccessor.
             * Also extends the PropertyEditorRegistry interface, which defines methods
             * for PropertyEditor management.
             * <p>Serves as base interface for {@link BeanWrapper}.
             * @author Juergen Hoeller
             * @author Stephane Nicoll
             * @since 2.0
             * @see BeanWrapper
             */
            // @ts-ignore
            interface ConfigurablePropertyAccessor extends org.springframework.beans.PropertyAccessor, org.springframework.beans.PropertyEditorRegistry, org.springframework.beans.TypeConverter {
                /**
                 * Specify a Spring 3.0 ConversionService to use for converting
                 * property values, as an alternative to JavaBeans PropertyEditors.
                 */
                // @ts-ignore
                setConversionService(conversionService: ConversionService): void
                /**
                 * Return the associated ConversionService, if any.
                 */
                // @ts-ignore
                getConversionService(): ConversionService
                /**
                 * Set whether to extract the old property value when applying a
                 * property editor to a new value for a property.
                 */
                // @ts-ignore
                setExtractOldValueForEditor(extractOldValueForEditor: boolean): void
                /**
                 * Return whether to extract the old property value when applying a
                 * property editor to a new value for a property.
                 */
                // @ts-ignore
                isExtractOldValueForEditor(): boolean
                /**
                 * Set whether this instance should attempt to "auto-grow" a
                 * nested path that contains a {@code null} value.
                 * <p>If {@code true}, a {@code null} path location will be populated
                 * with a default object value and traversed instead of resulting in a
                 * {@link NullValueInNestedPathException}.
                 * <p>Default is {@code false} on a plain PropertyAccessor instance.
                 */
                // @ts-ignore
                setAutoGrowNestedPaths(autoGrowNestedPaths: boolean): void
                /**
                 * Return whether "auto-growing" of nested paths has been activated.
                 */
                // @ts-ignore
                isAutoGrowNestedPaths(): boolean
            }
        }
    }
}
