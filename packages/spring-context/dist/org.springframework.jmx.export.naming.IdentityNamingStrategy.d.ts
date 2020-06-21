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
                        public static readonly TYPE_KEY: java.lang.String | string
                        /**
                         * The hash code key.
                         */
                        // @ts-ignore
                        public static readonly HASH_CODE_KEY: java.lang.String | string
                        /**
                         * Returns an instance of {@code ObjectName} based on the identity
                         * of the managed resource.
                         */
                        // @ts-ignore
                        public getObjectName(managedBean: java.lang.Object | any, beanKey: java.lang.String | string): javax.management.ObjectName
                    }
                }
            }
        }
    }
}
