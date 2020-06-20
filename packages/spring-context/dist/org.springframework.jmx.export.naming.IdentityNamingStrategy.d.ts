declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace naming {
                    /**
                     * An implementation of the {@code ObjectNamingStrategy} interface that
                     * creates a name based on the identity of a given instance.
                     * <p>The resulting {@code ObjectName} will be in the form
                     * <i>package</i>:class=<i>class name</i>,hashCode=<i>identity hash (in hex)</i>
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 1.2
                     */
                    // @ts-ignore
                    class IdentityNamingStrategy extends java.lang.Object implements org.springframework.jmx.export.naming.ObjectNamingStrategy {
                        // @ts-ignore
                        constructor()
                        /**
                         * The type key.
                         */
                        // @ts-ignore
                        readonly TYPE_KEY: string
                        /**
                         * The hash code key.
                         */
                        // @ts-ignore
                        readonly HASH_CODE_KEY: string
                        /**
                         * Returns an instance of {@code ObjectName} based on the identity
                         * of the managed resource.
                         */
                        // @ts-ignore
                        getObjectName(managedBean: any, beanKey: string): javax.management.ObjectName
                    }
                }
            }
        }
    }
}
