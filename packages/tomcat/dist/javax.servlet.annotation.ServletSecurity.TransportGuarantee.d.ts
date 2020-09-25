declare namespace javax {
    namespace servlet {
        namespace annotation {
            namespace ServletSecurity {
                /**
                 * Represents the two possible values of data transport, encrypted or not.
                 */
                // @ts-ignore
                class TransportGuarantee extends java.lang.Enum<javax.servlet.annotation.ServletSecurity.TransportGuarantee> {
                    /**
                     * User data must not be encrypted by the container during transport
                     */
                    // @ts-ignore
                    public static readonly NONE: javax.servlet.annotation.ServletSecurity.TransportGuarantee
                    /**
                     * The container MUST encrypt user data during transport
                     */
                    // @ts-ignore
                    public static readonly CONFIDENTIAL: javax.servlet.annotation.ServletSecurity.TransportGuarantee
                    // @ts-ignore
                    public static values(): javax.servlet.annotation.ServletSecurity.TransportGuarantee[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): javax.servlet.annotation.ServletSecurity.TransportGuarantee
                }
            }
        }
    }
}
