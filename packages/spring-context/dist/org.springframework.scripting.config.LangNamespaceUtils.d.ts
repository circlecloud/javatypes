declare namespace org {
    namespace springframework {
        namespace scripting {
            namespace config {
                /**
                 * Utilities for use with {@link LangNamespaceHandler}.
                 * @author Rob Harrop
                 * @author Mark Fisher
                 * @since 2.5
                 */
                // @ts-ignore
                class LangNamespaceUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Register a {@link ScriptFactoryPostProcessor} bean definition in the supplied
                     * {@link BeanDefinitionRegistry} if the {@link ScriptFactoryPostProcessor} hasn't
                     * already been registered.
                     * @param registry the {#link BeanDefinitionRegistry} to register the script processor with
                     * @return the {#link ScriptFactoryPostProcessor} bean definition (new or already registered)
                     */
                    // @ts-ignore
                    registerScriptFactoryPostProcessorIfNecessary(registry: BeanDefinitionRegistry): BeanDefinition
                }
            }
        }
    }
}
