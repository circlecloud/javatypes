declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Encapsulates methods for registering JavaBeans {@link PropertyEditor PropertyEditors}.
             * This is the central interface that a {@link PropertyEditorRegistrar} operates on.
             * <p>Extended by {@link BeanWrapper}; implemented by {@link BeanWrapperImpl}
             * and {@link org.springframework.validation.DataBinder}.
             * @author Juergen Hoeller
             * @since 1.2.6
             * @see java.beans.PropertyEditor
             * @see PropertyEditorRegistrar
             * @see BeanWrapper
             * @see org.springframework.validation.DataBinder
             */
            // @ts-ignore
            interface PropertyEditorRegistry {
                /**
                 * Register the given custom property editor for all properties of the given type.
                 * @param requiredType the type of the property
                 * @param propertyEditor the editor to register
                 */
                // @ts-ignore
                registerCustomEditor(requiredType: java.lang.Class<any>, propertyEditor: java.beans.PropertyEditor): void
                /**
                 * Register the given custom property editor for the given type and
                 * property, or for all properties of the given type.
                 * <p>If the property path denotes an array or Collection property,
                 * the editor will get applied either to the array/Collection itself
                 * (the {@link PropertyEditor} has to create an array or Collection value) or
                 * to each element (the {@code PropertyEditor} has to create the element type),
                 * depending on the specified required type.
                 * <p>Note: Only one single registered custom editor per property path
                 * is supported. In the case of a Collection/array, do not register an editor
                 * for both the Collection/array and each element on the same property.
                 * <p>For example, if you wanted to register an editor for "items[n].quantity"
                 * (for all values n), you would use "items.quantity" as the value of the
                 * 'propertyPath' argument to this method.
                 * @param requiredType the type of the property. This may be {#code null}
                 *  if a property is given but should be specified in any case, in particular in
                 *  case of a Collection - making clear whether the editor is supposed to apply
                 *  to the entire Collection itself or to each of its entries. So as a general rule:
                 *  <b>Do not specify {@code null} here in case of a Collection/array!</b>
                 * @param propertyPath the path of the property (name or nested path), or
                 *  {#code null} if registering an editor for all properties of the given type
                 * @param propertyEditor editor to register
                 */
                // @ts-ignore
                registerCustomEditor(requiredType: java.lang.Class<any>, propertyPath: java.lang.String | string, propertyEditor: java.beans.PropertyEditor): void
                /**
                 * Find a custom property editor for the given type and property.
                 * @param requiredType the type of the property (can be {#code null} if a property
                 *  is given but should be specified in any case for consistency checking)
                 * @param propertyPath the path of the property (name or nested path), or
                 *  {#code null} if looking for an editor for all properties of the given type
                 * @return the registered editor, or {#code null} if none
                 */
                // @ts-ignore
                findCustomEditor(requiredType: java.lang.Class<any>, propertyPath: java.lang.String | string): java.beans.PropertyEditor
            }
        }
    }
}
