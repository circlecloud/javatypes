declare namespace java {
    namespace lang {
        namespace management {
            /**
             * This is the security permission that code running with a Java security
             * manager will be verified against when attempts are made to invoke methods in
             * the platform's management interface.
             * <p>
             * Instances of this type are normally created by security code.
             * </p>
             * @since 1.5
             */
            // @ts-ignore
            class ManagementPermission extends java.security.BasicPermission {
                /**
                 * Creates a new instance of <code>ManagementPermission</code> with
                 * the given name.
                 * @param name the name of the permission. The only acceptable values
                 *  are the strings &quot;control&quot; or &quot;monitor&quot;.
                 * @throws IllegalArgumentException if <code>name</code> is not one of 
                 *  the string values &quot;control&quot; or &quot;monitor&quot;.
                 * @throws NullPointerException if <code>name</code> is <code>null</code>.
                 */
                // @ts-ignore
                constructor(name: string)
                /**
                 * Creates a new instance of <code>ManagementPermission</code> with
                 * the given name and permitted actions.
                 * @param name the name of the permission. The only acceptable values
                 *  are the strings &quot;control&quot; or &quot;monitor&quot;.
                 * @param actions this argument must either be an empty string or 
                 *  <code>null</code>.
                 * @throws NullPointerException if <code>name</code> is <code>null</code>.
                 */
                // @ts-ignore
                constructor(name: string, actions: string)
            }
        }
    }
}
