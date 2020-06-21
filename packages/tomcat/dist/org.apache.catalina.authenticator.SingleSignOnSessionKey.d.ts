declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                /**
                 * Key used by SSO to identify a session. This key is used rather than the
                 * actual session to facilitate the replication of the SSO information
                 * across a cluster where replicating the entire session would generate
                 * significant, unnecessary overhead.
                 */
                // @ts-ignore
                class SingleSignOnSessionKey extends java.lang.Object implements java.io.Serializable {
                    // @ts-ignore
                    constructor(session: org.apache.catalina.Session)
                    // @ts-ignore
                    public getSessionId(): string
                    // @ts-ignore
                    public getContextName(): string
                    // @ts-ignore
                    public getHostName(): string
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
