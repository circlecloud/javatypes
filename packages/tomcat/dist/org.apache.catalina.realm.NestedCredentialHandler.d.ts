declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                // @ts-ignore
                class NestedCredentialHandler extends java.lang.Object implements org.apache.catalina.CredentialHandler {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public matches(inputCredentials: java.lang.String | string, storedCredentials: java.lang.String | string): boolean
                    /**
                     * The input credentials will be passed to the first nested
                     * {@link CredentialHandler}. If no nested {@link CredentialHandler} are
                     * configured then <code>null</code> will be returned.
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public mutate(inputCredentials: java.lang.String | string): string
                    // @ts-ignore
                    public addCredentialHandler(handler: org.apache.catalina.CredentialHandler): void
                    // @ts-ignore
                    public getCredentialHandlers(): org.apache.catalina.CredentialHandler[]
                }
            }
        }
    }
}
