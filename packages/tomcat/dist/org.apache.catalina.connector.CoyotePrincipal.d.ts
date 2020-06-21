declare namespace org {
    namespace apache {
        namespace catalina {
            namespace connector {
                /**
                 * Generic implementation of <strong>java.security.Principal</strong> that
                 * is used to represent principals authenticated at the protocol handler level.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class CoyotePrincipal extends java.lang.Object implements java.security.Principal, java.io.Serializable {
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    /**
                     * The username of the user represented by this Principal.
                     */
                    // @ts-ignore
                    readonly name: java.lang.String | string
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Return a String representation of this object, which exposes only
                     * information that should be public.
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
