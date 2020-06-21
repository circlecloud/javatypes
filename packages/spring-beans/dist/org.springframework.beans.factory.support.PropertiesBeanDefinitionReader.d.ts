declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Bean definition reader for a simple properties format.
                     * <p>Provides bean definition registration methods for Map/Properties and
                     * ResourceBundle. Typically applied to a DefaultListableBeanFactory.
                     * <p><b>Example:</b>
                     * <pre class="code">
                     * employee.(class)=MyClass       // bean is of class MyClass
                     * employee.(abstract)=true       // this bean can't be instantiated directly
                     * employee.group=Insurance       // real property
                     * employee.usesDialUp=false      // real property (potentially overridden)
                     * salesrep.(parent)=employee     // derives from "employee" bean definition
                     * salesrep.(lazy-init)=true      // lazily initialize this singleton bean
                     * salesrep.manager(ref)=tony     // reference to another bean
                     * salesrep.department=Sales      // real property
                     * techie.(parent)=employee       // derives from "employee" bean definition
                     * techie.(scope)=prototype       // bean is a prototype (not a shared instance)
                     * techie.manager(ref)=jeff       // reference to another bean
                     * techie.department=Engineering  // real property
                     * techie.usesDialUp=true         // real property (overriding parent value)
                     * ceo.$0(ref)=secretary          // inject 'secretary' bean as 0th constructor arg
                     * ceo.$1=1000000                 // inject value '1000000' at 1st constructor arg
                     * </pre>
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @author Rob Harrop
                     * @since 26.11.2003
                     * @see DefaultListableBeanFactory
                     */
                    // @ts-ignore
                    class PropertiesBeanDefinitionReader extends org.springframework.beans.factory.support.AbstractBeanDefinitionReader {
                        /**
                         * Create new PropertiesBeanDefinitionReader for the given bean factory.
                         * @param registry the BeanFactory to load bean definitions into,
                         *  in the form of a BeanDefinitionRegistry
                         */
                        // @ts-ignore
                        constructor(registry: org.springframework.beans.factory.support.BeanDefinitionRegistry)
                        /**
                         * Value of a T/F attribute that represents true.
                         * Anything else represents false. Case seNsItive.
                         */
                        // @ts-ignore
                        public static readonly TRUE_VALUE: java.lang.String | string
                        /**
                         * Separator between bean name and property name.
                         * We follow normal Java conventions.
                         */
                        // @ts-ignore
                        public static readonly SEPARATOR: java.lang.String | string
                        /**
                         * Special key to distinguish {@code owner.(class)=com.myapp.MyClass}.
                         */
                        // @ts-ignore
                        public static readonly CLASS_KEY: java.lang.String | string
                        /**
                         * Special key to distinguish {@code owner.(parent)=parentBeanName}.
                         */
                        // @ts-ignore
                        public static readonly PARENT_KEY: java.lang.String | string
                        /**
                         * Special key to distinguish {@code owner.(scope)=prototype}.
                         * Default is "true".
                         */
                        // @ts-ignore
                        public static readonly SCOPE_KEY: java.lang.String | string
                        /**
                         * Special key to distinguish {@code owner.(singleton)=false}.
                         * Default is "true".
                         */
                        // @ts-ignore
                        public static readonly SINGLETON_KEY: java.lang.String | string
                        /**
                         * Special key to distinguish {@code owner.(abstract)=true}
                         * Default is "false".
                         */
                        // @ts-ignore
                        public static readonly ABSTRACT_KEY: java.lang.String | string
                        /**
                         * Special key to distinguish {@code owner.(lazy-init)=true}
                         * Default is "false".
                         */
                        // @ts-ignore
                        public static readonly LAZY_INIT_KEY: java.lang.String | string
                        /**
                         * Property suffix for references to other beans in the current
                         * BeanFactory: e.g. {@code owner.dog(ref)=fido}.
                         * Whether this is a reference to a singleton or a prototype
                         * will depend on the definition of the target bean.
                         */
                        // @ts-ignore
                        public static readonly REF_SUFFIX: java.lang.String | string
                        /**
                         * Prefix before values referencing other beans.
                         */
                        // @ts-ignore
                        public static readonly REF_PREFIX: java.lang.String | string
                        /**
                         * Prefix used to denote a constructor argument definition.
                         */
                        // @ts-ignore
                        public static readonly CONSTRUCTOR_ARG_PREFIX: java.lang.String | string
                        /**
                         * Set the default parent bean for this bean factory.
                         * If a child bean definition handled by this factory provides neither
                         * a parent nor a class attribute, this default value gets used.
                         * <p>Can be used e.g. for view definition files, to define a parent
                         * with a default view class and common attributes for all views.
                         * View definitions that define their own parent or carry their own
                         * class can still override this.
                         * <p>Strictly speaking, the rule that a default parent setting does
                         * not apply to a bean definition that carries a class is there for
                         * backwards compatibility reasons. It still matches the typical use case.
                         */
                        // @ts-ignore
                        public setDefaultParentBean(defaultParentBean: java.lang.String | string): void
                        /**
                         * Return the default parent bean for this bean factory.
                         */
                        // @ts-ignore
                        public getDefaultParentBean(): string
                        /**
                         * Set the PropertiesPersister to use for parsing properties files.
                         * The default is DefaultPropertiesPersister.
                         * @see org.springframework.util.DefaultPropertiesPersister
                         */
                        // @ts-ignore
                        public setPropertiesPersister(propertiesPersister: PropertiesPersister): void
                        /**
                         * Return the PropertiesPersister to use for parsing properties files.
                         */
                        // @ts-ignore
                        public getPropertiesPersister(): PropertiesPersister
                        /**
                         * Load bean definitions from the specified properties file,
                         * using all property keys (i.e. not filtering by prefix).
                         * @param resource the resource descriptor for the properties file
                         * @return the number of bean definitions found
                         * @throws BeanDefinitionStoreException in case of loading or parsing errors
                         * @see #loadBeanDefinitions(org.springframework.core.io.Resource, String)
                         */
                        // @ts-ignore
                        public loadBeanDefinitions(resource: Resource): number /*int*/
                        /**
                         * Load bean definitions from the specified properties file.
                         * @param resource the resource descriptor for the properties file
                         * @param prefix a filter within the keys in the map: e.g. 'beans.'
                         *  (can be empty or {#code null})
                         * @return the number of bean definitions found
                         * @throws BeanDefinitionStoreException in case of loading or parsing errors
                         */
                        // @ts-ignore
                        public loadBeanDefinitions(resource: Resource, prefix: java.lang.String | string): number /*int*/
                        /**
                         * Load bean definitions from the specified properties file.
                         * @param encodedResource the resource descriptor for the properties file,
                         *  allowing to specify an encoding to use for parsing the file
                         * @return the number of bean definitions found
                         * @throws BeanDefinitionStoreException in case of loading or parsing errors
                         */
                        // @ts-ignore
                        public loadBeanDefinitions(encodedResource: EncodedResource): number /*int*/
                        /**
                         * Load bean definitions from the specified properties file.
                         * @param encodedResource the resource descriptor for the properties file,
                         *  allowing to specify an encoding to use for parsing the file
                         * @param prefix a filter within the keys in the map: e.g. 'beans.'
                         *  (can be empty or {#code null})
                         * @return the number of bean definitions found
                         * @throws BeanDefinitionStoreException in case of loading or parsing errors
                         */
                        // @ts-ignore
                        public loadBeanDefinitions(encodedResource: EncodedResource, prefix: java.lang.String | string): number /*int*/
                        /**
                         * Register bean definitions contained in a resource bundle,
                         * using all property keys (i.e. not filtering by prefix).
                         * @param rb the ResourceBundle to load from
                         * @return the number of bean definitions found
                         * @throws BeanDefinitionStoreException in case of loading or parsing errors
                         * @see #registerBeanDefinitions(java.util.ResourceBundle, String)
                         */
                        // @ts-ignore
                        public registerBeanDefinitions(rb: java.util.ResourceBundle): number /*int*/
                        /**
                         * Register bean definitions contained in a ResourceBundle.
                         * <p>Similar syntax as for a Map. This method is useful to enable
                         * standard Java internationalization support.
                         * @param rb the ResourceBundle to load from
                         * @param prefix a filter within the keys in the map: e.g. 'beans.'
                         *  (can be empty or {#code null})
                         * @return the number of bean definitions found
                         * @throws BeanDefinitionStoreException in case of loading or parsing errors
                         */
                        // @ts-ignore
                        public registerBeanDefinitions(rb: java.util.ResourceBundle, prefix: java.lang.String | string): number /*int*/
                        /**
                         * Register bean definitions contained in a Map, using all property keys (i.e. not
                         * filtering by prefix).
                         * @param map a map of {#code name} to {@code property} (String or Object). Property
                         *  values will be strings if coming from a Properties file etc. Property names
                         *  (keys) <b>must</b> be Strings. Class keys must be Strings.
                         * @return the number of bean definitions found
                         * @throws BeansException in case of loading or parsing errors
                         * @see #registerBeanDefinitions(java.util.Map, String, String)
                         */
                        // @ts-ignore
                        public registerBeanDefinitions(map: java.util.Map<any, any>): number /*int*/
                        /**
                         * Register bean definitions contained in a Map.
                         * Ignore ineligible properties.
                         * @param map a map of {#code name} to {@code property} (String or Object). Property
                         *  values will be strings if coming from a Properties file etc. Property names
                         *  (keys) <b>must</b> be Strings. Class keys must be Strings.
                         * @param prefix a filter within the keys in the map: e.g. 'beans.'
                         *  (can be empty or {#code null})
                         * @return the number of bean definitions found
                         * @throws BeansException in case of loading or parsing errors
                         */
                        // @ts-ignore
                        public registerBeanDefinitions(map: java.util.Map<any, any>, prefix: java.lang.String | string): number /*int*/
                        /**
                         * Register bean definitions contained in a Map.
                         * Ignore ineligible properties.
                         * @param map a map of {#code name} to {@code property} (String or Object). Property
                         *  values will be strings if coming from a Properties file etc. Property names
                         *  (keys) <b>must</b> be Strings. Class keys must be Strings.
                         * @param prefix a filter within the keys in the map: e.g. 'beans.'
                         *  (can be empty or {#code null})
                         * @param resourceDescription description of the resource that the
                         *  Map came from (for logging purposes)
                         * @return the number of bean definitions found
                         * @throws BeansException in case of loading or parsing errors
                         * @see #registerBeanDefinitions(Map, String)
                         */
                        // @ts-ignore
                        public registerBeanDefinitions(map: java.util.Map<any, any>, prefix: java.lang.String | string, resourceDescription: java.lang.String | string): number /*int*/
                        /**
                         * Get all property values, given a prefix (which will be stripped)
                         * and add the bean they define to the factory with the given name.
                         * @param beanName name of the bean to define
                         * @param map a Map containing string pairs
                         * @param prefix prefix of each entry, which will be stripped
                         * @param resourceDescription description of the resource that the
                         *  Map came from (for logging purposes)
                         * @throws BeansException if the bean definition could not be parsed or registered
                         */
                        // @ts-ignore
                        registerBeanDefinition(beanName: java.lang.String | string, map: java.util.Map<any, any>, prefix: java.lang.String | string, resourceDescription: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
