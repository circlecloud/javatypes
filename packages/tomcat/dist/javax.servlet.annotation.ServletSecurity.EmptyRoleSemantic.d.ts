declare namespace javax {
    namespace servlet {
        namespace annotation {
            namespace ServletSecurity {
                /**
                 * Represents the two possible values of the empty role semantic, active
                 * when a list of role names is empty.
                 */
                // @ts-ignore
                class EmptyRoleSemantic extends java.lang.Enum<javax.servlet.annotation.ServletSecurity.EmptyRoleSemantic> {
                    /**
                     * Access MUST be permitted, regardless of authentication state or
                     * identity
                     */
                    // @ts-ignore
                    public static readonly PERMIT: javax.servlet.annotation.ServletSecurity.EmptyRoleSemantic
                    /**
                     * Access MUST be denied, regardless of authentication state or identity
                     */
                    // @ts-ignore
                    public static readonly DENY: javax.servlet.annotation.ServletSecurity.EmptyRoleSemantic
                    // @ts-ignore
                    public static values(): javax.servlet.annotation.ServletSecurity.EmptyRoleSemantic[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): javax.servlet.annotation.ServletSecurity.EmptyRoleSemantic
                }
            }
        }
    }
}
