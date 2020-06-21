declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * <p>Abstract representation of a security role, suitable for use in
             * environments like JAAS that want to deal with <code>Principals</code>.</p>
             * @author Craig R. McClanahan
             * @since 4.1
             */
            // @ts-ignore
            interface Role extends java.security.Principal {
                /**
                 * @return the description of this role.
                 */
                // @ts-ignore
                getDescription(): string
                /**
                 * Set the description of this role.
                 * @param description The new description
                 */
                // @ts-ignore
                setDescription(description: java.lang.String | string): void
                /**
                 * @return the role name of this role, which must be unique
                 *  within the scope of a {#link UserDatabase}.
                 */
                // @ts-ignore
                getRolename(): string
                /**
                 * Set the role name of this role, which must be unique
                 * within the scope of a {@link UserDatabase}.
                 * @param rolename The new role name
                 */
                // @ts-ignore
                setRolename(rolename: java.lang.String | string): void
                /**
                 * @return the {#link UserDatabase} within which this Role is defined.
                 */
                // @ts-ignore
                getUserDatabase(): org.apache.catalina.UserDatabase
            }
        }
    }
}
