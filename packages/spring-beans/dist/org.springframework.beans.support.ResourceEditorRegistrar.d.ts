declare namespace org {
    namespace springframework {
        namespace beans {
            namespace support {
                /**
                 * PropertyEditorRegistrar implementation that populates a given
                 * {@link org.springframework.beans.PropertyEditorRegistry}
                 * (typically a {@link org.springframework.beans.BeanWrapper} used for bean
                 * creation within an {@link org.springframework.context.ApplicationContext})
                 * with resource editors. Used by
                 * {@link org.springframework.context.support.AbstractApplicationContext}.
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @since 2.0
                 */
                // @ts-ignore
                class ResourceEditorRegistrar extends java.lang.Object implements org.springframework.beans.PropertyEditorRegistrar {
                    /**
                     * Create a new ResourceEditorRegistrar for the given {@link ResourceLoader}
                     * and {@link PropertyResolver}.
                     * @param resourceLoader the ResourceLoader (or ResourcePatternResolver)
                     *  to create editors for (usually an ApplicationContext)
                     * @param propertyResolver the PropertyResolver (usually an Environment)
                     * @see org.springframework.core.env.Environment
                     * @see org.springframework.core.io.support.ResourcePatternResolver
                     * @see org.springframework.context.ApplicationContext
                     */
                    // @ts-ignore
                    constructor(resourceLoader: ResourceLoader, propertyResolver: PropertyResolver)
                    /**
                     * Populate the given {@code registry} with the following resource editors:
                     * ResourceEditor, InputStreamEditor, InputSourceEditor, FileEditor, URLEditor,
                     * URIEditor, ClassEditor, ClassArrayEditor.
                     * <p>If this registrar has been configured with a {@link ResourcePatternResolver},
                     * a ResourceArrayPropertyEditor will be registered as well.
                     * @see org.springframework.core.io.ResourceEditor
                     * @see org.springframework.beans.propertyeditors.InputStreamEditor
                     * @see org.springframework.beans.propertyeditors.InputSourceEditor
                     * @see org.springframework.beans.propertyeditors.FileEditor
                     * @see org.springframework.beans.propertyeditors.URLEditor
                     * @see org.springframework.beans.propertyeditors.URIEditor
                     * @see org.springframework.beans.propertyeditors.ClassEditor
                     * @see org.springframework.beans.propertyeditors.ClassArrayEditor
                     * @see org.springframework.core.io.support.ResourceArrayPropertyEditor
                     */
                    // @ts-ignore
                    public registerCustomEditors(registry: org.springframework.beans.PropertyEditorRegistry): void
                }
            }
        }
    }
}
