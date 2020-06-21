declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                /**
                 * <p>A convenience base class for <strong>ModelMBean</strong> implementations
                 * where the underlying base class (and therefore the set of supported
                 * properties) is different for varying implementations of a standard
                 * interface.  For Catalina, that includes at least the following:
                 * Connector, Logger, Realm, and Valve.  This class creates an artificial
                 * MBean attribute named <code>className</code>, which reports the fully
                 * qualified class name of the managed object as its value.</p>
                 * @param <T> The type that this bean represents.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class ClassNameMBean<T> extends org.apache.catalina.mbeans.BaseCatalinaMBean<T> {
                    // @ts-ignore
                    constructor()
                    /**
                     * Return the fully qualified Java class name of the managed object
                     * for this MBean.
                     */
                    // @ts-ignore
                    public getClassName(): string
                }
            }
        }
    }
}
