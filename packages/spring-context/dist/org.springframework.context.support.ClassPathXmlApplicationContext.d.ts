declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Standalone XML application context, taking the context definition files
                 * from the class path, interpreting plain paths as class path resource names
                 * that include the package path (e.g. "mypackage/myresource.txt"). Useful for
                 * test harnesses as well as for application contexts embedded within JARs.
                 * <p>The config location defaults can be overridden via {@link #getConfigLocations},
                 * Config locations can either denote concrete files like "/myfiles/context.xml"
                 * or Ant-style patterns like "/myfiles/*-context.xml" (see the
                 * {@link org.springframework.util.AntPathMatcher} javadoc for pattern details).
                 * <p>Note: In case of multiple config locations, later bean definitions will
                 * override ones defined in earlier loaded files. This can be leveraged to
                 * deliberately override certain bean definitions via an extra XML file.
                 * <p><b>This is a simple, one-stop shop convenience ApplicationContext.
                 * Consider using the {@link GenericApplicationContext} class in combination
                 * with an {@link org.springframework.beans.factory.xml.XmlBeanDefinitionReader}
                 * for more flexible context setup.</b>
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @see #getResource
                 * @see #getResourceByPath
                 * @see GenericApplicationContext
                 */
                // @ts-ignore
                class ClassPathXmlApplicationContext extends org.springframework.context.support.AbstractXmlApplicationContext {
                    /**
                     * Create a new ClassPathXmlApplicationContext for bean-style configuration.
                     * @see #setConfigLocation
                     * @see #setConfigLocations
                     * @see #afterPropertiesSet()
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new ClassPathXmlApplicationContext for bean-style configuration.
                     * @param parent the parent context
                     * @see #setConfigLocation
                     * @see #setConfigLocations
                     * @see #afterPropertiesSet()
                     */
                    // @ts-ignore
                    constructor(parent: org.springframework.context.ApplicationContext)
                    /**
                     * Create a new ClassPathXmlApplicationContext, loading the definitions
                     * from the given XML file and automatically refreshing the context.
                     * @param configLocation resource location
                     * @throws BeansException if context creation failed
                     */
                    // @ts-ignore
                    constructor(configLocation: java.lang.String | string)
                    /**
                     * Create a new ClassPathXmlApplicationContext, loading the definitions
                     * from the given XML files and automatically refreshing the context.
                     * @param configLocations array of resource locations
                     * @throws BeansException if context creation failed
                     */
                    // @ts-ignore
                    constructor(...configLocations: java.lang.String[] | string[])
                    /**
                     * Create a new ClassPathXmlApplicationContext with the given parent,
                     * loading the definitions from the given XML files and automatically
                     * refreshing the context.
                     * @param configLocations array of resource locations
                     * @param parent the parent context
                     * @throws BeansException if context creation failed
                     */
                    // @ts-ignore
                    constructor(configLocations: java.lang.String[] | string[], parent: org.springframework.context.ApplicationContext)
                    /**
                     * Create a new ClassPathXmlApplicationContext, loading the definitions
                     * from the given XML files.
                     * @param configLocations array of resource locations
                     * @param refresh whether to automatically refresh the context,
                     *  loading all bean definitions and creating all singletons.
                     *  Alternatively, call refresh manually after further configuring the context.
                     * @throws BeansException if context creation failed
                     * @see #refresh()
                     */
                    // @ts-ignore
                    constructor(configLocations: java.lang.String[] | string[], refresh: boolean)
                    /**
                     * Create a new ClassPathXmlApplicationContext with the given parent,
                     * loading the definitions from the given XML files.
                     * @param configLocations array of resource locations
                     * @param refresh whether to automatically refresh the context,
                     *  loading all bean definitions and creating all singletons.
                     *  Alternatively, call refresh manually after further configuring the context.
                     * @param parent the parent context
                     * @throws BeansException if context creation failed
                     * @see #refresh()
                     */
                    // @ts-ignore
                    constructor(configLocations: java.lang.String[] | string[], refresh: boolean, parent: org.springframework.context.ApplicationContext)
                    /**
                     * Create a new ClassPathXmlApplicationContext, loading the definitions
                     * from the given XML file and automatically refreshing the context.
                     * <p>This is a convenience method to load class path resources relative to a
                     * given Class. For full flexibility, consider using a GenericApplicationContext
                     * with an XmlBeanDefinitionReader and a ClassPathResource argument.
                     * @param path relative (or absolute) path within the class path
                     * @param clazz the class to load resources with (basis for the given paths)
                     * @throws BeansException if context creation failed
                     * @see org.springframework.core.io.ClassPathResource#ClassPathResource(String, Class)
                     * @see org.springframework.context.support.GenericApplicationContext
                     * @see org.springframework.beans.factory.xml.XmlBeanDefinitionReader
                     */
                    // @ts-ignore
                    constructor(path: java.lang.String | string, clazz: java.lang.Class<any>)
                    /**
                     * Create a new ClassPathXmlApplicationContext, loading the definitions
                     * from the given XML files and automatically refreshing the context.
                     * @param paths array of relative (or absolute) paths within the class path
                     * @param clazz the class to load resources with (basis for the given paths)
                     * @throws BeansException if context creation failed
                     * @see org.springframework.core.io.ClassPathResource#ClassPathResource(String, Class)
                     * @see org.springframework.context.support.GenericApplicationContext
                     * @see org.springframework.beans.factory.xml.XmlBeanDefinitionReader
                     */
                    // @ts-ignore
                    constructor(paths: java.lang.String[] | string[], clazz: java.lang.Class<any>)
                    /**
                     * Create a new ClassPathXmlApplicationContext with the given parent,
                     * loading the definitions from the given XML files and automatically
                     * refreshing the context.
                     * @param paths array of relative (or absolute) paths within the class path
                     * @param clazz the class to load resources with (basis for the given paths)
                     * @param parent the parent context
                     * @throws BeansException if context creation failed
                     * @see org.springframework.core.io.ClassPathResource#ClassPathResource(String, Class)
                     * @see org.springframework.context.support.GenericApplicationContext
                     * @see org.springframework.beans.factory.xml.XmlBeanDefinitionReader
                     */
                    // @ts-ignore
                    constructor(paths: java.lang.String[] | string[], clazz: java.lang.Class<any>, parent: org.springframework.context.ApplicationContext)
                    // @ts-ignore
                    getConfigResources(): Resource[]
                }
            }
        }
    }
}
