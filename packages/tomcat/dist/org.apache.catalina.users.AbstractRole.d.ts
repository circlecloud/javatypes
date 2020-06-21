declare namespace org {
    namespace apache {
        namespace catalina {
            namespace users {
                /**
                 * <p>Convenience base class for {@link Role} implementations.</p>
                 * @author Craig R. McClanahan
                 * @since 4.1
                 */
                // @ts-ignore
                abstract class AbstractRole extends java.lang.Object implements org.apache.catalina.Role {
                    // @ts-ignore
                    constructor()
                    /**
                     * The description of this Role.
                     */
                    // @ts-ignore
                    description: java.lang.String | string
                    /**
                     * The role name of this Role.
                     */
                    // @ts-ignore
                    rolename: java.lang.String | string
                    /**
                     * Return the description of this role.
                     */
                    // @ts-ignore
                    public getDescription(): string
                    /**
                     * Set the description of this role.
                     * @param description The new description
                     */
                    // @ts-ignore
                    public setDescription(description: java.lang.String | string): void
                    /**
                     * Return the role name of this role, which must be unique
                     * within the scope of a {@link UserDatabase}.
                     */
                    // @ts-ignore
                    public getRolename(): string
                    /**
                     * Set the role name of this role, which must be unique
                     * within the scope of a {@link UserDatabase}.
                     * @param rolename The new role name
                     */
                    // @ts-ignore
                    public setRolename(rolename: java.lang.String | string): void
                    /**
                     * Return the {@link UserDatabase} within which this Role is defined.
                     */
                    // @ts-ignore
                    public abstract getUserDatabase(): org.apache.catalina.UserDatabase
                    /**
                     * Make the principal name the same as the role name.
                     */
                    // @ts-ignore
                    public getName(): string
                }
            }
        }
    }
}
