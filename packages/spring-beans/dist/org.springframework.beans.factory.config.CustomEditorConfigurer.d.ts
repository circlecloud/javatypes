declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * {@link BeanFactoryPostProcessor} implementation that allows for convenient
                     * registration of custom {@link PropertyEditor property editors}.
                     * <p>In case you want to register {@link PropertyEditor} instances,
                     * the recommended usage as of Spring 2.0 is to use custom
                     * {@link PropertyEditorRegistrar} implementations that in turn register any
                     * desired editor instances on a given
                     * {@link org.springframework.beans.PropertyEditorRegistry registry}. Each
                     * PropertyEditorRegistrar can register any number of custom editors.
                     * <pre class="code">
                     * &lt;bean id="customEditorConfigurer" class="org.springframework.beans.factory.config.CustomEditorConfigurer"&gt;
                     * &lt;property name="propertyEditorRegistrars"&gt;
                     * &lt;list&gt;
                     * &lt;bean class="mypackage.MyCustomDateEditorRegistrar"/&gt;
                     * &lt;bean class="mypackage.MyObjectEditorRegistrar"/&gt;
                     * &lt;/list&gt;
                     * &lt;/property&gt;
                     * &lt;/bean&gt;
                     * </pre>
                     * <p>
                     * It's perfectly fine to register {@link PropertyEditor} <em>classes</em> via
                     * the {@code customEditors} property. Spring will create fresh instances of
                     * them for each editing attempt then:
                     * <pre class="code">
                     * &lt;bean id="customEditorConfigurer" class="org.springframework.beans.factory.config.CustomEditorConfigurer"&gt;
                     * &lt;property name="customEditors"&gt;
                     * &lt;map&gt;
                     * &lt;entry key="java.util.Date" value="mypackage.MyCustomDateEditor"/&gt;
                     * &lt;entry key="mypackage.MyObject" value="mypackage.MyObjectEditor"/&gt;
                     * &lt;/map&gt;
                     * &lt;/property&gt;
                     * &lt;/bean&gt;
                     * </pre>
                     * <p>
                     * Note, that you shouldn't register {@link PropertyEditor} bean instances via
                     * the {@code customEditors} property as {@link PropertyEditor PropertyEditors} are stateful
                     * and the instances will then have to be synchronized for every editing
                     * attempt. In case you need control over the instantiation process of
                     * {@link PropertyEditor PropertyEditors}, use a {@link PropertyEditorRegistrar} to register
                     * them.
                     * <p>
                     * Also supports "java.lang.String[]"-style array class names and primitive
                     * class names (e.g. "boolean"). Delegates to {@link ClassUtils} for actual
                     * class name resolution.
                     * <p><b>NOTE:</b> Custom property editors registered with this configurer do
                     * <i>not</i> apply to data binding. Custom editors for data binding need to
                     * be registered on the {@link org.springframework.validation.DataBinder}:
                     * Use a common base class or delegate to common PropertyEditorRegistrar
                     * implementations to reuse editor registration there.
                     * @author Juergen Hoeller
                     * @since 27.02.2004
                     * @see java.beans.PropertyEditor
                     * @see org.springframework.beans.PropertyEditorRegistrar
                     * @see ConfigurableBeanFactory#addPropertyEditorRegistrar
                     * @see ConfigurableBeanFactory#registerCustomEditor
                     * @see org.springframework.validation.DataBinder#registerCustomEditor
                     */
                    // @ts-ignore
                    class CustomEditorConfigurer extends java.lang.Object implements org.springframework.beans.factory.config.BeanFactoryPostProcessor {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        setOrder(order: number /*int*/): void
                        // @ts-ignore
                        getOrder(): int
                        /**
                         * Specify the {@link PropertyEditorRegistrar PropertyEditorRegistrars}
                         * to apply to beans defined within the current application context.
                         * <p>This allows for sharing {@code PropertyEditorRegistrars} with
                         * {@link org.springframework.validation.DataBinder DataBinders}, etc.
                         * Furthermore, it avoids the need for synchronization on custom editors:
                         * A {@code PropertyEditorRegistrar} will always create fresh editor
                         * instances for each bean creation attempt.
                         * @see ConfigurableListableBeanFactory#addPropertyEditorRegistrar
                         */
                        // @ts-ignore
                        setPropertyEditorRegistrars(propertyEditorRegistrars: org.springframework.beans.PropertyEditorRegistrar[]): void
                        /**
                         * Specify the custom editors to register via a {@link Map}, using the
                         * class name of the required type as the key and the class name of the
                         * associated {@link PropertyEditor} as value.
                         * @see ConfigurableListableBeanFactory#registerCustomEditor
                         */
                        // @ts-ignore
                        setCustomEditors(customEditors: java.util.Map<java.lang.Class<any>, java.lang.Class<java.beans.PropertyEditor>>): void
                        // @ts-ignore
                        postProcessBeanFactory(beanFactory: org.springframework.beans.factory.config.ConfigurableListableBeanFactory): void
                    }
                }
            }
        }
    }
}
