declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * This credential handler supports the following forms of stored passwords:
                 * <ul>
                 * <li><b>encodedCredential</b> - a hex encoded digest of the password digested
                 * using the configured digest</li>
                 * <li><b>{MD5}encodedCredential</b> - a Base64 encoded MD5 digest of the
                 * password</li>
                 * <li><b>{SHA}encodedCredential</b> - a Base64 encoded SHA1 digest of the
                 * password</li>
                 * <li><b>{SSHA}encodedCredential</b> - 20 character salt followed by the salted
                 * SHA1 digest Base64 encoded</li>
                 * <li><b>salt$iterationCount$encodedCredential</b> - a hex encoded salt,
                 * iteration code and a hex encoded credential, each separated by $</li>
                 * </ul>
                 * <p>
                 * If the stored password form does not include an iteration count then an
                 * iteration count of 1 is used.
                 * <p>
                 * If the stored password form does not include salt then no salt is used.
                 */
                // @ts-ignore
                class MessageDigestCredentialHandler extends org.apache.catalina.realm.DigestCredentialHandlerBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly DEFAULT_ITERATIONS: number /*int*/
                    // @ts-ignore
                    public getEncoding(): string
                    // @ts-ignore
                    public setEncoding(encodingName: java.lang.String | string): void
                    // @ts-ignore
                    public getAlgorithm(): string
                    // @ts-ignore
                    public setAlgorithm(algorithm: java.lang.String | string): void
                    // @ts-ignore
                    public matches(inputCredentials: java.lang.String | string, storedCredentials: java.lang.String | string): boolean
                    // @ts-ignore
                    mutate(inputCredentials: java.lang.String | string, salt: number /*byte*/[], iterations: number /*int*/): string
                    // @ts-ignore
                    getDefaultIterations(): number /*int*/
                    // @ts-ignore
                    getLog(): org.apache.juli.logging.Log
                }
            }
        }
    }
}
