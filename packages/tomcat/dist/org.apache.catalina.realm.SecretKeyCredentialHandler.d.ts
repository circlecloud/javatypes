declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                // @ts-ignore
                class SecretKeyCredentialHandler extends org.apache.catalina.realm.DigestCredentialHandlerBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly DEFAULT_ALGORITHM: java.lang.String | string
                    // @ts-ignore
                    public static readonly DEFAULT_KEY_LENGTH: number /*int*/
                    // @ts-ignore
                    public static readonly DEFAULT_ITERATIONS: number /*int*/
                    // @ts-ignore
                    public getAlgorithm(): string
                    // @ts-ignore
                    public setAlgorithm(algorithm: java.lang.String | string): void
                    // @ts-ignore
                    public getKeyLength(): number /*int*/
                    // @ts-ignore
                    public setKeyLength(keyLength: number /*int*/): void
                    // @ts-ignore
                    public matches(inputCredentials: java.lang.String | string, storedCredentials: java.lang.String | string): boolean
                    // @ts-ignore
                    mutate(inputCredentials: java.lang.String | string, salt: number /*byte*/[], iterations: number /*int*/): string
                    // @ts-ignore
                    mutate(inputCredentials: java.lang.String | string, salt: number /*byte*/[], iterations: number /*int*/, keyLength: number /*int*/): string
                    // @ts-ignore
                    getDefaultIterations(): number /*int*/
                    // @ts-ignore
                    getLog(): org.apache.juli.logging.Log
                }
            }
        }
    }
}
