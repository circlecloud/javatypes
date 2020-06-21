declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * Facade for the <b>StandardWrapper</b> object.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class StandardWrapperFacade extends java.lang.Object implements javax.servlet.ServletConfig {
                    /**
                     * Create a new facade around a StandardWrapper.
                     * @param config the associated wrapper
                     */
                    // @ts-ignore
                    constructor(config: org.apache.catalina.core.StandardWrapper)
                    // @ts-ignore
                    public getServletName(): string
                    // @ts-ignore
                    public getServletContext(): javax.servlet.ServletContext
                    // @ts-ignore
                    public getInitParameter(name: java.lang.String | string): string
                    // @ts-ignore
                    public getInitParameterNames(): java.util.Enumeration<java.lang.String | string>
                }
            }
        }
    }
}
