declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                /**
                 * Extension of the {@link RequiredModelMBean} class that ensures the
                 * {@link Thread#getContextClassLoader() thread context ClassLoader} is switched
                 * for the managed resource's {@link ClassLoader} before any invocations occur.
                 * @author Rob Harrop
                 * @since 2.0
                 * @see RequiredModelMBean
                 */
                // @ts-ignore
                class SpringModelMBean extends javax.management.modelmbean.RequiredModelMBean {
                    /**
                     * Construct a new SpringModelMBean instance with an empty {@link ModelMBeanInfo}.
                     * @see javax.management.modelmbean.RequiredModelMBean#RequiredModelMBean()
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new SpringModelMBean instance with the given {@link ModelMBeanInfo}.
                     * @see javax.management.modelmbean.RequiredModelMBean#RequiredModelMBean(ModelMBeanInfo)
                     */
                    // @ts-ignore
                    constructor(mbi: javax.management.modelmbean.ModelMBeanInfo)
                    /**
                     * Sets managed resource to expose and stores its {@link ClassLoader}.
                     */
                    // @ts-ignore
                    public setManagedResource(managedResource: java.lang.Object | any, managedResourceType: java.lang.String | string): void
                    /**
                     * Switches the {@link Thread#getContextClassLoader() context ClassLoader} for the
                     * managed resources {@link ClassLoader} before allowing the invocation to occur.
                     * @see javax.management.modelmbean.ModelMBean#invoke
                     */
                    // @ts-ignore
                    public invoke(opName: java.lang.String | string, opArgs: java.lang.Object[] | any[], sig: java.lang.String[] | string[]): any
                    /**
                     * Switches the {@link Thread#getContextClassLoader() context ClassLoader} for the
                     * managed resources {@link ClassLoader} before allowing the invocation to occur.
                     * @see javax.management.modelmbean.ModelMBean#getAttribute
                     */
                    // @ts-ignore
                    public getAttribute(attrName: java.lang.String | string): any
                    /**
                     * Switches the {@link Thread#getContextClassLoader() context ClassLoader} for the
                     * managed resources {@link ClassLoader} before allowing the invocation to occur.
                     * @see javax.management.modelmbean.ModelMBean#getAttributes
                     */
                    // @ts-ignore
                    public getAttributes(attrNames: java.lang.String[] | string[]): javax.management.AttributeList
                    /**
                     * Switches the {@link Thread#getContextClassLoader() context ClassLoader} for the
                     * managed resources {@link ClassLoader} before allowing the invocation to occur.
                     * @see javax.management.modelmbean.ModelMBean#setAttribute
                     */
                    // @ts-ignore
                    public setAttribute(attribute: javax.management.Attribute): void
                    /**
                     * Switches the {@link Thread#getContextClassLoader() context ClassLoader} for the
                     * managed resources {@link ClassLoader} before allowing the invocation to occur.
                     * @see javax.management.modelmbean.ModelMBean#setAttributes
                     */
                    // @ts-ignore
                    public setAttributes(attributes: javax.management.AttributeList): javax.management.AttributeList
                }
            }
        }
    }
}
