declare namespace org {
    namespace apache {
        namespace catalina {
            namespace users {
                /**
                 * <p>Concrete implementation of {@link org.apache.catalina.Role} for the
                 * {@link MemoryUserDatabase} implementation of {@link UserDatabase}.</p>
                 * @author Craig R. McClanahan
                 * @since 4.1
                 */
                // @ts-ignore
                class MemoryRole extends org.apache.catalina.users.AbstractRole {
                    /**
                     * The {@link MemoryUserDatabase} that owns this role.
                     */
                    // @ts-ignore
                    readonly database: org.apache.catalina.users.MemoryUserDatabase
                    /**
                     * Return the {@link UserDatabase} within which this role is defined.
                     */
                    // @ts-ignore
                    public getUserDatabase(): org.apache.catalina.UserDatabase
                    /**
                     * <p>Return a String representation of this role in XML format.</p>
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
