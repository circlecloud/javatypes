declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Base implementation of the {@link PropertyEditorRegistry} interface.
             * Provides management of default editors and custom editors.
             * Mainly serves as base class for {@link BeanWrapperImpl}.
             * @author Juergen Hoeller
             * @author Rob Harrop
             * @since 1.2.6
             * @see java.beans.PropertyEditorManager
             * @see java.beans.PropertyEditorSupport#setAsText
             * @see java.beans.PropertyEditorSupport#setValue
             */
            // @ts-ignore
            class PropertyEditorRegistrySupport extends java.lang.Object implements org.springframework.beans.PropertyEditorRegistry {
                // @ts-ignore
                constructor()
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
                 * Activate the default editors for this registry instance,
                 * allowing for lazily registering default editors when needed.
                 */
                // @ts-ignore
                registerDefaultEditors(): void
                /**
                 * Activate config value editors which are only intended for configuration purposes,
                 * such as {@link org.springframework.beans.propertyeditors.StringArrayPropertyEditor}.
                 * <p>Those editors are not registered by default simply because they are in
                 * general inappropriate for data binding purposes. Of course, you may register
                 * them individually in any case, through {@link #registerCustomEditor}.
                 */
                // @ts-ignore
                public useConfigValueEditors(): void
                /**
                 * Override the default editor for the specified type with the given property editor.
                 * <p>Note that this is different from registering a custom editor in that the editor
                 * semantically still is a default editor. A ConversionService will override such a
                 * default editor, whereas custom editors usually override the ConversionService.
                 * @param requiredType the type of the property
                 * @param propertyEditor the editor to register
                 * @see #registerCustomEditor(Class, PropertyEditor)
                 */
                // @ts-ignore
                public overrideDefaultEditor(requiredType: java.lang.Class<any>, propertyEditor: java.beans.PropertyEditor): void
                /**
                 * Retrieve the default editor for the given property type, if any.
                 * <p>Lazily registers the default editors, if they are active.
                 * @param requiredType type of the property
                 * @return the default editor, or {#code null} if none found
                 * @see #registerDefaultEditors
                 */
                // @ts-ignore
                public getDefaultEditor(requiredType: java.lang.Class<any>): java.beans.PropertyEditor
                /**
                 * Copy the default editors registered in this instance to the given target registry.
                 * @param target the target registry to copy to
                 */
                // @ts-ignore
                copyDefaultEditorsTo(target: org.springframework.beans.PropertyEditorRegistrySupport): void
                // @ts-ignore
                public registerCustomEditor(requiredType: java.lang.Class<any>, propertyEditor: java.beans.PropertyEditor): void
                // @ts-ignore
                public registerCustomEditor(requiredType: java.lang.Class<any>, propertyPath: java.lang.String | string, propertyEditor: java.beans.PropertyEditor): void
                // @ts-ignore
                public findCustomEditor(requiredType: java.lang.Class<any>, propertyPath: java.lang.String | string): java.beans.PropertyEditor
                /**
                 * Determine whether this registry contains a custom editor
                 * for the specified array/collection element.
                 * @param elementType the target type of the element
                 *  (can be {#code null} if not known)
                 * @param propertyPath the property path (typically of the array/collection;
                 *  can be {#code null} if not known)
                 * @return whether a matching custom editor has been found
                 */
                // @ts-ignore
                public hasCustomEditorForElement(elementType: java.lang.Class<any>, propertyPath: java.lang.String | string): boolean
                /**
                 * Determine the property type for the given property path.
                 * <p>Called by {@link #findCustomEditor} if no required type has been specified,
                 * to be able to find a type-specific editor even if just given a property path.
                 * <p>The default implementation always returns {@code null}.
                 * BeanWrapperImpl overrides this with the standard {@code getPropertyType}
                 * method as defined by the BeanWrapper interface.
                 * @param propertyPath the property path to determine the type for
                 * @return the type of the property, or {#code null} if not determinable
                 * @see BeanWrapper#getPropertyType(String)
                 */
                // @ts-ignore
                getPropertyType(propertyPath: java.lang.String | string): java.lang.Class<any>
                /**
                 * Guess the property type of the specified property from the registered
                 * custom editors (provided that they were registered for a specific type).
                 * @param propertyName the name of the property
                 * @return the property type, or {#code null} if not determinable
                 */
                // @ts-ignore
                guessPropertyTypeFromEditors(propertyName: java.lang.String | string): java.lang.Class<any>
                /**
                 * Copy the custom editors registered in this instance to the given target registry.
                 * @param target the target registry to copy to
                 * @param nestedProperty the nested property path of the target registry, if any.
                 *  If this is non-null, only editors registered for a path below this nested property
                 *  will be copied. If this is null, all editors will be copied.
                 */
                // @ts-ignore
                copyCustomEditorsTo(target: org.springframework.beans.PropertyEditorRegistry, nestedProperty: java.lang.String | string): void
            }
        }
    }
}
