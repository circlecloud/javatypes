declare namespace org {
    namespace springframework {
        namespace beans {
            namespace support {
                /**
                 * Subclass of {@link MethodInvoker} that tries to convert the given
                 * arguments for the actual target method via a {@link TypeConverter}.
                 * <p>Supports flexible argument conversions, in particular for
                 * invoking a specific overloaded method.
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see org.springframework.beans.BeanWrapperImpl#convertIfNecessary
                 */
                // @ts-ignore
                class ArgumentConvertingMethodInvoker extends MethodInvoker {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set a TypeConverter to use for argument type conversion.
                     * <p>Default is a {@link org.springframework.beans.SimpleTypeConverter}.
                     * Can be overridden with any TypeConverter implementation, typically
                     * a pre-configured SimpleTypeConverter or a BeanWrapperImpl instance.
                     * @see org.springframework.beans.SimpleTypeConverter
                     * @see org.springframework.beans.BeanWrapperImpl
                     */
                    // @ts-ignore
                    public setTypeConverter(typeConverter: org.springframework.beans.TypeConverter): void
                    /**
                     * Return the TypeConverter used for argument type conversion.
                     * <p>Can be cast to {@link org.springframework.beans.PropertyEditorRegistry}
                     * if direct access to the underlying PropertyEditors is desired
                     * (provided that the present TypeConverter actually implements the
                     * PropertyEditorRegistry interface).
                     */
                    // @ts-ignore
                    public getTypeConverter(): org.springframework.beans.TypeConverter
                    /**
                     * Obtain the default TypeConverter for this method invoker.
                     * <p>Called if no explicit TypeConverter has been specified.
                     * The default implementation builds a
                     * {@link org.springframework.beans.SimpleTypeConverter}.
                     * Can be overridden in subclasses.
                     */
                    // @ts-ignore
                    getDefaultTypeConverter(): org.springframework.beans.TypeConverter
                    /**
                     * Register the given custom property editor for all properties of the given type.
                     * <p>Typically used in conjunction with the default
                     * {@link org.springframework.beans.SimpleTypeConverter}; will work with any
                     * TypeConverter that implements the PropertyEditorRegistry interface as well.
                     * @param requiredType type of the property
                     * @param propertyEditor editor to register
                     * @see #setTypeConverter
                     * @see org.springframework.beans.PropertyEditorRegistry#registerCustomEditor
                     */
                    // @ts-ignore
                    public registerCustomEditor(requiredType: java.lang.Class<any>, propertyEditor: java.beans.PropertyEditor): void
                    /**
                     * This implementation looks for a method with matching parameter types.
                     * @see #doFindMatchingMethod
                     */
                    // @ts-ignore
                    findMatchingMethod(): java.lang.reflect.Method
                    /**
                     * Actually find a method with matching parameter type, i.e. where each
                     * argument value is assignable to the corresponding parameter type.
                     * @param arguments the argument values to match against method parameters
                     * @return a matching method, or {#code null} if none
                     */
                    // @ts-ignore
                    doFindMatchingMethod(arguments: java.lang.Object[] | any[]): java.lang.reflect.Method
                }
            }
        }
    }
}
