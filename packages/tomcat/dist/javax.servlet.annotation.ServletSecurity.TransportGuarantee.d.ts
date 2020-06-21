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
                    readonly NONE: javax.servlet.annotation.ServletSecurity.TransportGuarantee
                    /**
                     * The container MUST encrypt user data during transport
                     */
                    // @ts-ignore
                    readonly CONFIDENTIAL: javax.servlet.annotation.ServletSecurity.TransportGuarantee
                    // @ts-ignore
                    values(): javax.servlet.annotation.ServletSecurity.TransportGuarantee[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): javax.servlet.annotation.ServletSecurity.TransportGuarantee
                }
            }
        }
    }
}
