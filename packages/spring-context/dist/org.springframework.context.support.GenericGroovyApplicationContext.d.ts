declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * An {@link org.springframework.context.ApplicationContext} implementation that extends
                 * {@link GenericApplicationContext} and implements {@link GroovyObject} such that beans
                 * can be retrieved with the dot de-reference syntax instead of using {@link #getBean}.
                 * <p>Consider this as the equivalent of {@link GenericXmlApplicationContext} for
                 * Groovy bean definitions, or even an upgrade thereof since it seamlessly understands
                 * XML bean definition files as well. The main difference is that, within a Groovy
                 * script, the context can be used with an inline bean definition closure as follows:
                 * <pre class="code">
                 * import org.hibernate.SessionFactory
                 * import org.apache.commons.dbcp.BasicDataSource
                 * def context = new GenericGroovyApplicationContext()
                 * context.reader.beans {
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
                 * }
                 * context.refresh()
                 * </pre>
                 * <p>Alternatively, load a Groovy bean definition script like the following
                 * from an external resource (e.g. an "applicationContext.groovy" file):
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
                 * }
                 * </pre>
                 * <p>With the following Java code creating the {@code GenericGroovyApplicationContext}
                 * (potentially using Ant-style '*'/'**' location patterns):
                 * <pre class="code">
                 * GenericGroovyApplicationContext context = new GenericGroovyApplicationContext();
                 * context.load("org/myapp/applicationContext.groovy");
                 * context.refresh();
                 * </pre>
                 * <p>Or even more concise, provided that no extra configuration is needed:
                 * <pre class="code">
                 * ApplicationContext context = new GenericGroovyApplicationContext("org/myapp/applicationContext.groovy");
                 * </pre>
                 * <p><b>This application context also understands XML bean definition files,
                 * allowing for seamless mixing and matching with Groovy bean definition files.</b>
                 * ".xml" files will be parsed as XML content; all other kinds of resources will
                 * be parsed as Groovy scripts.
                 * @author Juergen Hoeller
                 * @author Jeff Brown
                 * @since 4.0
                 * @see org.springframework.beans.factory.groovy.GroovyBeanDefinitionReader
                 */
                // @ts-ignore
                class GenericGroovyApplicationContext extends org.springframework.context.support.GenericApplicationContext {
                    /**
                     * Create a new GenericGroovyApplicationContext that needs to be
                     * {@link #load loaded} and then manually {@link #refresh refreshed}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new GenericGroovyApplicationContext, loading bean definitions
                     * from the given resources and automatically refreshing the context.
                     * @param resources the resources to load from
                     */
                    // @ts-ignore
                    constructor(...resources: Resource[])
                    /**
                     * Create a new GenericGroovyApplicationContext, loading bean definitions
                     * from the given resource locations and automatically refreshing the context.
                     * @param relativeClass class whose package will be used as a prefix when
                     *  loading each specified resource name
                     * @param resourceNames relatively-qualified names of resources to load
                     */
                    // @ts-ignore
                    constructor(relativeClass: java.lang.Class<any>, ...resourceNames: string[])
                    /**
                     * Exposes the underlying {@link GroovyBeanDefinitionReader} for convenient access
                     * to the {@code loadBeanDefinition} methods on it as well as the ability
                     * to specify an inline Groovy bean definition closure.
                     * @see GroovyBeanDefinitionReader#loadBeanDefinitions(org.springframework.core.io.Resource...)
                     * @see GroovyBeanDefinitionReader#loadBeanDefinitions(String...)
                     */
                    // @ts-ignore
                    getReader(): GroovyBeanDefinitionReader
                    /**
                     * Delegates the given environment to underlying {@link GroovyBeanDefinitionReader}.
                     * Should be called before any call to {@code #load}.
                     */
                    // @ts-ignore
                    setEnvironment(environment: ConfigurableEnvironment): void
                    /**
                     * Load bean definitions from the given Groovy scripts or XML files.
                     * <p>Note that ".xml" files will be parsed as XML content; all other kinds
                     * of resources will be parsed as Groovy scripts.
                     * @param resources one or more resources to load from
                     */
                    // @ts-ignore
                    load(...resources: Resource[]): void
                    /**
                     * Load bean definitions from the given Groovy scripts or XML files.
                     * <p>Note that ".xml" files will be parsed as XML content; all other kinds
                     * of resources will be parsed as Groovy scripts.
                     * @param relativeClass class whose package will be used as a prefix when
                     *  loading each specified resource name
                     * @param resourceNames relatively-qualified names of resources to load
                     */
                    // @ts-ignore
                    load(relativeClass: java.lang.Class<any>, ...resourceNames: string[]): void
                    // @ts-ignore
                    setMetaClass(metaClass: MetaClass): void
                    // @ts-ignore
                    getMetaClass(): MetaClass
                    // @ts-ignore
                    invokeMethod(name: string, args: any): java.lang.Object
                    // @ts-ignore
                    setProperty(property: string, newValue: any): void
                    // @ts-ignore
                    getProperty(property: string): java.lang.Object
                }
            }
        }
    }
}
