declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace groovy {
                    /**
                     * A Groovy-based reader for Spring bean definitions: like a Groovy builder,
                     * but more of a DSL for Spring configuration.
                     * <p>This bean definition reader also understands XML bean definition files,
                     * allowing for seamless mixing and matching with Groovy bean definition files.
                     * <p>Typically applied to a
                     * {@link org.springframework.beans.factory.support.DefaultListableBeanFactory}
                     * or a {@link org.springframework.context.support.GenericApplicationContext},
                     * but can be used against any {@link BeanDefinitionRegistry} implementation.
                     * <h3>Example Syntax</h3>
                     * <pre class="code">
                     * import org.hibernate.SessionFactory
                     * import org.apache.commons.dbcp.BasicDataSource
                     * def reader = new GroovyBeanDefinitionReader(myApplicationContext)
                     * reader.beans {
                     * dataSource(BasicDataSource) {                  // <--- invokeMethod
                     * driverClassName = "org.hsqldb.jdbcDriver"
                     * url = "jdbc:hsqldb:mem:grailsDB"
                     * username = "sa"                            // <-- setProperty
                     * password = ""
                     * settings = [mynew:"setting"]
                     * }
                     * sessionFactory(SessionFactory) {
                     * dataSource = dataSource                    // <-- getProperty for retrieving references
                     * }
                     * myService(MyService) {
                     * nestedBean = { AnotherBean bean ->         // <-- setProperty with closure for nested bean
                     * dataSource = dataSource
                     * }
                     * }
                     * }</pre>
                     * <p>You can also load resources containing beans defined in a Groovy script using
                     * either the {@link #loadBeanDefinitions(Resource...)} or
                     * {@link #loadBeanDefinitions(String...)} method, with a script looking similar to
                     * the following.
                     * <pre class="code">
                     * import org.hibernate.SessionFactory
                     * import org.apache.commons.dbcp.BasicDataSource
                     * beans {
                     * dataSource(BasicDataSource) {
                     * driverClassName = "org.hsqldb.jdbcDriver"
                     * url = "jdbc:hsqldb:mem:grailsDB"
                     * username = "sa"
                     * password = ""
                     * settings = [mynew:"setting"]
                     * }
                     * sessionFactory(SessionFactory) {
                     * dataSource = dataSource
                     * }
                     * myService(MyService) {
                     * nestedBean = { AnotherBean bean ->
                     * dataSource = dataSource
                     * }
                     * }
                     * }</pre>
                     * @author Jeff Brown
                     * @author Graeme Rocher
                     * @author Juergen Hoeller
                     * @author Sam Brannen
                     * @since 4.0
                     * @see BeanDefinitionRegistry
                     * @see org.springframework.beans.factory.support.DefaultListableBeanFactory
                     * @see org.springframework.context.support.GenericApplicationContext
                     * @see org.springframework.context.support.GenericGroovyApplicationContext
                     */
                    // @ts-ignore
                    class GroovyBeanDefinitionReader extends org.springframework.beans.factory.support.AbstractBeanDefinitionReader {
                        /**
                         * Create a new {@code GroovyBeanDefinitionReader} for the given
                         * {@link BeanDefinitionRegistry}.
                         * @param registry the {#code BeanDefinitionRegistry} to load bean definitions into
                         */
                        // @ts-ignore
                        constructor(registry: org.springframework.beans.factory.support.BeanDefinitionRegistry)
                        /**
                         * Create a new {@code GroovyBeanDefinitionReader} based on the given
                         * {@link XmlBeanDefinitionReader}, loading bean definitions into its
                         * {@code BeanDefinitionRegistry} and delegating Groovy DSL loading to it.
                         * <p>The supplied {@code XmlBeanDefinitionReader} should typically
                         * be pre-configured with XML validation disabled.
                         * @param xmlBeanDefinitionReader the {#code XmlBeanDefinitionReader} to
                         *  derive the registry from and to delegate Groovy DSL loading to
                         */
                        // @ts-ignore
                        constructor(xmlBeanDefinitionReader: org.springframework.beans.factory.xml.XmlBeanDefinitionReader)
                        // @ts-ignore
                        public setMetaClass(metaClass: MetaClass): void
                        // @ts-ignore
                        public getMetaClass(): MetaClass
                        /**
                         * Set the binding, i.e. the Groovy variables available in the scope
                         * of a {@code GroovyBeanDefinitionReader} closure.
                         */
                        // @ts-ignore
                        public setBinding(binding: Binding): void
                        /**
                         * Return a specified binding for Groovy variables, if any.
                         */
                        // @ts-ignore
                        public getBinding(): Binding
                        /**
                         * Load bean definitions from the specified Groovy script or XML file.
                         * <p>Note that {@code ".xml"} files will be parsed as XML content; all other kinds
                         * of resources will be parsed as Groovy scripts.
                         * @param resource the resource descriptor for the Groovy script or XML file
                         * @return the number of bean definitions found
                         * @throws BeanDefinitionStoreException in case of loading or parsing errors
                         */
                        // @ts-ignore
                        public loadBeanDefinitions(resource: Resource): number /*int*/
                        /**
                         * Load bean definitions from the specified Groovy script or XML file.
                         * <p>Note that {@code ".xml"} files will be parsed as XML content; all other kinds
                         * of resources will be parsed as Groovy scripts.
                         * @param encodedResource the resource descriptor for the Groovy script or XML file,
                         *  allowing specification of an encoding to use for parsing the file
                         * @return the number of bean definitions found
                         * @throws BeanDefinitionStoreException in case of loading or parsing errors
                         */
                        // @ts-ignore
                        public loadBeanDefinitions(encodedResource: EncodedResource): number /*int*/
                        /**
                         * Defines a set of beans for the given block or closure.
                         * @param closure the block or closure
                         * @return this {#code GroovyBeanDefinitionReader} instance
                         */
                        // @ts-ignore
                        public beans(closure: object): org.springframework.beans.factory.groovy.GroovyBeanDefinitionReader
                        /**
                         * Define an inner bean definition.
                         * @param type the bean type
                         * @return the bean definition
                         */
                        // @ts-ignore
                        public bean(type: java.lang.Class<any>): org.springframework.beans.factory.support.GenericBeanDefinition
                        /**
                         * Define an inner bean definition.
                         * @param type the bean type
                         * @param args the constructors arguments and closure configurer
                         * @return the bean definition
                         */
                        // @ts-ignore
                        public bean(type: java.lang.Class<any>, ...args: java.lang.Object[] | any[]): org.springframework.beans.factory.support.AbstractBeanDefinition
                        /**
                         * Define a Spring XML namespace definition to use.
                         * @param definition the namespace definition
                         */
                        // @ts-ignore
                        public xmlns(definition: java.util.Map<java.lang.String | string, java.lang.String | string>): void
                        /**
                         * Import Spring bean definitions from either XML or Groovy sources into the
                         * current bean builder instance.
                         * @param resourcePattern the resource pattern
                         */
                        // @ts-ignore
                        public importBeans(resourcePattern: java.lang.String | string): void
                        /**
                         * This method overrides method invocation to create beans for each method name that
                         * takes a class argument.
                         */
                        // @ts-ignore
                        public invokeMethod(name: java.lang.String | string, arg: java.lang.Object | any): any
                        /**
                         * When a method argument is only a closure it is a set of bean definitions.
                         * @param callable the closure argument
                         * @return this {#code GroovyBeanDefinitionReader} instance
                         */
                        // @ts-ignore
                        invokeBeanDefiningClosure(callable: object): org.springframework.beans.factory.groovy.GroovyBeanDefinitionReader
                        // @ts-ignore
                        resolveConstructorArguments(args: java.lang.Object[] | any[], start: number /*int*/, end: number /*int*/): Array<java.lang.Object | any>
                        /**
                         * This method overrides property setting in the scope of the {@code GroovyBeanDefinitionReader}
                         * to set properties on the current bean definition.
                         */
                        // @ts-ignore
                        public setProperty(name: java.lang.String | string, value: java.lang.Object | any): void
                        // @ts-ignore
                        applyPropertyToBeanDefinition(name: java.lang.String | string, value: java.lang.Object | any): void
                        /**
                         * This method overrides property retrieval in the scope of the
                         * {@code GroovyBeanDefinitionReader}. A property retrieval will either:
                         * <ul>
                         * <li>Retrieve a variable from the bean builder's binding if it exists
                         * <li>Retrieve a RuntimeBeanReference for a specific bean if it exists
                         * <li>Otherwise just delegate to MetaClass.getProperty which will resolve
                         * properties from the {@code GroovyBeanDefinitionReader} itself
                         * </ul>
                         */
                        // @ts-ignore
                        public getProperty(name: java.lang.String | string): any
                    }
                }
            }
        }
    }
}
