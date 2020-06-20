declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Interface that defines type conversion methods. Typically (but not necessarily)
             * implemented in conjunction with the {@link PropertyEditorRegistry} interface.
             * <p><b>Note:</b> Since TypeConverter implementations are typically based on
             * {@link java.beans.PropertyEditor PropertyEditors} which aren't thread-safe,
             * TypeConverters themselves are <em>not</em> to be considered as thread-safe either.
             * @author Juergen Hoeller
             * @since 2.0
             * @see SimpleTypeConverter
             * @see BeanWrapperImpl
             */
            // @ts-ignore
            interface TypeConverter {
                /**
                 * Convert the value to the required type (if necessary from a String).
                 * <p>Conversions from String to any type will typically use the {@code setAsText}
                 * method of the PropertyEditor class, or a Spring Converter in a ConversionService.
                 * @param value the value to convert
                 * @param requiredType the type we must convert to
                 *  (or {#code null} if not known, for example in case of a collection element)
                 * @return the new value, possibly the result of type conversion
                 * @throws TypeMismatchException if type conversion failed
                 * @see java.beans.PropertyEditor#setAsText(String)
                 * @see java.beans.PropertyEditor#getValue()
                 * @see org.springframework.core.convert.ConversionService
                 * @see org.springframework.core.convert.converter.Converter
                 */
                // @ts-ignore
                convertIfNecessary<T>(value: any, requiredType: java.lang.Class<T>): T
                /**
                 * Convert the value to the required type (if necessary from a String).
                 * <p>Conversions from String to any type will typically use the {@code setAsText}
                 * method of the PropertyEditor class, or a Spring Converter in a ConversionService.
                 * @param value the value to convert
                 * @param requiredType the type we must convert to
                 *  (or {#code null} if not known, for example in case of a collection element)
                 * @param methodParam the method parameter that is the target of the conversion
                 *  (for analysis of generic types; may be {#code null})
                 * @return the new value, possibly the result of type conversion
                 * @throws TypeMismatchException if type conversion failed
                 * @see java.beans.PropertyEditor#setAsText(String)
                 * @see java.beans.PropertyEditor#getValue()
                 * @see org.springframework.core.convert.ConversionService
                 * @see org.springframework.core.convert.converter.Converter
                 */
                // @ts-ignore
                convertIfNecessary<T>(value: any, requiredType: java.lang.Class<T>, methodParam: MethodParameter): T
                /**
                 * Convert the value to the required type (if necessary from a String).
                 * <p>Conversions from String to any type will typically use the {@code setAsText}
                 * method of the PropertyEditor class, or a Spring Converter in a ConversionService.
                 * @param value the value to convert
                 * @param requiredType the type we must convert to
                 *  (or {#code null} if not known, for example in case of a collection element)
                 * @param typeDescriptor the type descriptor to use (may be {#code null}))
                 * @return the new value, possibly the result of type conversion
                 * @throws TypeMismatchException if type conversion failed
                 * @since 5.1.4
                 * @see java.beans.PropertyEditor#setAsText(String)
                 * @see java.beans.PropertyEditor#getValue()
                 * @see org.springframework.core.convert.ConversionService
                 * @see org.springframework.core.convert.converter.Converter
                 */
                // @ts-ignore
                convertIfNecessary<T>(value: any, requiredType: java.lang.Class<T>, typeDescriptor: TypeDescriptor): T
            }
        }
    }
}
