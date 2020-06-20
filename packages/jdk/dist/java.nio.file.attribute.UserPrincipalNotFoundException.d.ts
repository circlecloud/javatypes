declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                /**
                 * Checked exception thrown when a lookup of {@link UserPrincipal} fails because
                 * the principal does not exist.
                 * @since 1.7
                 */
                // @ts-ignore
                class UserPrincipalNotFoundException extends java.io.IOException {
                    /**
                     * Constructs an instance of this class.
                     * @param name
                     *           the principal name; may be {#code null}
                     */
                    // @ts-ignore
                    constructor(name: string)
                    /**
                     * Returns the user principal name if this exception was created with the
                     * user principal name that was not found, otherwise <tt>null</tt>.
                     * @return the user principal name or {#code null}
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
