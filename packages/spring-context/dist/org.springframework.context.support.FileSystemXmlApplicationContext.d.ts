declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Standalone XML application context, taking the context definition files
                 * from the file system or from URLs, interpreting plain paths as relative
                 * file system locations (e.g. "mydir/myfile.txt"). Useful for test harnesses
                 * as well as for standalone environments.
                 * <p><b>NOTE:</b> Plain paths will always be interpreted as relative
                 * to the current VM working directory, even if they start with a slash.
                 * (This is consistent with the semantics in a Servlet container.)
                 * <b>Use an explicit "file:" prefix to enforce an absolute file path.</b>
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
                class FileSystemXmlApplicationContext extends org.springframework.context.support.AbstractXmlApplicationContext {
                    /**
                     * Create a new FileSystemXmlApplicationContext for bean-style configuration.
                     * @see #setConfigLocation
                     * @see #setConfigLocations
                     * @see #afterPropertiesSet()
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new FileSystemXmlApplicationContext for bean-style configuration.
                     * @param parent the parent context
                     * @see #setConfigLocation
                     * @see #setConfigLocations
                     * @see #afterPropertiesSet()
                     */
                    // @ts-ignore
                    constructor(parent: org.springframework.context.ApplicationContext)
                    /**
                     * Create a new FileSystemXmlApplicationContext, loading the definitions
                     * from the given XML file and automatically refreshing the context.
                     * @param configLocation file path
                     * @throws BeansException if context creation failed
                     */
                    // @ts-ignore
                    constructor(configLocation: string)
                    /**
                     * Create a new FileSystemXmlApplicationContext, loading the definitions
                     * from the given XML files and automatically refreshing the context.
                     * @param configLocations array of file paths
                     * @throws BeansException if context creation failed
                     */
                    // @ts-ignore
                    constructor(...configLocations: string[])
                    /**
                     * Create a new FileSystemXmlApplicationContext with the given parent,
                     * loading the definitions from the given XML files and automatically
                     * refreshing the context.
                     * @param configLocations array of file paths
                     * @param parent the parent context
                     * @throws BeansException if context creation failed
                     */
                    // @ts-ignore
                    constructor(configLocations: string[], parent: org.springframework.context.ApplicationContext)
                    /**
                     * Create a new FileSystemXmlApplicationContext, loading the definitions
                     * from the given XML files.
                     * @param configLocations array of file paths
                     * @param refresh whether to automatically refresh the context,
                     *  loading all bean definitions and creating all singletons.
                     *  Alternatively, call refresh manually after further configuring the context.
                     * @throws BeansException if context creation failed
                     * @see #refresh()
                     */
                    // @ts-ignore
                    constructor(configLocations: string[], refresh: boolean)
                    /**
                     * Create a new FileSystemXmlApplicationContext with the given parent,
                     * loading the definitions from the given XML files.
                     * @param configLocations array of file paths
                     * @param refresh whether to automatically refresh the context,
                     *  loading all bean definitions and creating all singletons.
                     *  Alternatively, call refresh manually after further configuring the context.
                     * @param parent the parent context
                     * @throws BeansException if context creation failed
                     * @see #refresh()
                     */
                    // @ts-ignore
                    constructor(configLocations: string[], refresh: boolean, parent: org.springframework.context.ApplicationContext)
                    /**
                     * Resolve resource paths as file system paths.
                     * <p>Note: Even if a given path starts with a slash, it will get
                     * interpreted as relative to the current VM working directory.
                     * This is consistent with the semantics in a Servlet container.
                     * @param path the path to the resource
                     * @return the Resource handle
                     * @see org.springframework.web.context.support.XmlWebApplicationContext#getResourceByPath
                     */
                    // @ts-ignore
                    getResourceByPath(path: string): Resource
                }
            }
        }
    }
}
