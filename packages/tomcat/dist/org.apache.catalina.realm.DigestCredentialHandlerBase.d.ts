declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * Base implementation for the Tomcat provided {@link CredentialHandler}s.
                 */
                // @ts-ignore
                abstract class DigestCredentialHandlerBase extends java.lang.Object implements org.apache.catalina.CredentialHandler {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    public static readonly DEFAULT_SALT_LENGTH: number /*int*/
                    /**
                     * @return the number of iterations of the associated algorithm that will be
                     *  used when creating a new stored credential for a given input credential.
                     */
                    // @ts-ignore
                    public getIterations(): number /*int*/
                    /**
                     * Set the number of iterations of the associated algorithm that will be
                     * used when creating a new stored credential for a given input credential.
                     * @param iterations the iterations count
                     */
                    // @ts-ignore
                    public setIterations(iterations: number /*int*/): void
                    /**
                     * @return the salt length that will be used when creating a new stored
                     *  credential for a given input credential.
                     */
                    // @ts-ignore
                    public getSaltLength(): number /*int*/
                    /**
                     * Set the salt length that will be used when creating a new stored
                     * credential for a given input credential.
                     * @param saltLength the salt length
                     */
                    // @ts-ignore
                    public setSaltLength(saltLength: number /*int*/): void
                    /**
                     * When checking input credentials against stored credentials will a warning
                     * message be logged if invalid stored credentials are discovered?
                     * @return <code>true</code> if logging will occur
                     */
                    // @ts-ignore
                    public getLogInvalidStoredCredentials(): boolean
                    /**
                     * Set whether a warning message will be logged if invalid stored
                     * credentials are discovered while checking input credentials against
                     * stored credentials?
                     * @param logInvalidStoredCredentials <code>true</code> to log, the
                     *    default value is <code>false</code>
                     */
                    // @ts-ignore
                    public setLogInvalidStoredCredentials(logInvalidStoredCredentials: boolean): void
                    // @ts-ignore
                    public mutate(userCredential: java.lang.String | string): string
                    /**
                     * Checks whether the provided credential matches the stored credential when
                     * the stored credential is in the form salt$iteration-count$credential
                     * @param inputCredentials  The input credential
                     * @param storedCredentials The stored credential
                     * @return <code>true</code> if they match, otherwise <code>false</code>
                     */
                    // @ts-ignore
                    matchesSaltIterationsEncoded(inputCredentials: java.lang.String | string, storedCredentials: java.lang.String | string): boolean
                    /**
                     * @return the default salt length used by the {#link CredentialHandler}.
                     */
                    // @ts-ignore
                    getDefaultSaltLength(): number /*int*/
                    /**
                     * Generates the equivalent stored credentials for the given input
                     * credentials, salt and iterations. If the algorithm requires a key length,
                     * the default will be used.
                     * @param inputCredentials  User provided credentials
                     * @param salt              Salt, if any
                     * @param iterations        Number of iterations of the algorithm associated
                     *                           with this CredentialHandler applied to the
                     *                           inputCredentials to generate the equivalent
                     *                           stored credentials
                     * @return The equivalent stored credentials for the given input
                     *           credentials or <code>null</code> if the generation fails
                     */
                    // @ts-ignore
                    abstract mutate(inputCredentials: java.lang.String | string, salt: number /*byte*/[], iterations: number /*int*/): string
                    /**
                     * Generates the equivalent stored credentials for the given input
                     * credentials, salt, iterations and key length. The default implementation
                     * calls ignores the key length and calls
                     * {@link #mutate(String, byte[], int)}. Sub-classes that use the key length
                     * should override this method.
                     * @param inputCredentials  User provided credentials
                     * @param salt              Salt, if any
                     * @param iterations        Number of iterations of the algorithm associated
                     *                           with this CredentialHandler applied to the
                     *                           inputCredentials to generate the equivalent
                     *                           stored credentials
                     * @param keyLength         Length of the produced digest in bits for
                     *                           implementations where it's applicable
                     * @return The equivalent stored credentials for the given input
                     *           credentials or <code>null</code> if the generation fails
                     */
                    // @ts-ignore
                    mutate(inputCredentials: java.lang.String | string, salt: number /*byte*/[], iterations: number /*int*/, keyLength: number /*int*/): string
                    /**
                     * Set the algorithm used to convert input credentials to stored
                     * credentials.
                     * @param algorithm the algorithm
                     * @throws NoSuchAlgorithmException if the specified algorithm
                     *   is not supported
                     */
                    // @ts-ignore
                    public abstract setAlgorithm(algorithm: java.lang.String | string): void
                    /**
                     * @return the algorithm used to convert input credentials to stored
                     *  credentials.
                     */
                    // @ts-ignore
                    public abstract getAlgorithm(): string
                    /**
                     * @return the default number of iterations used by the
                     *  {#link CredentialHandler}.
                     */
                    // @ts-ignore
                    abstract getDefaultIterations(): number /*int*/
                    /**
                     * @return the logger for the CredentialHandler instance.
                     */
                    // @ts-ignore
                    abstract getLog(): org.apache.juli.logging.Log
                }
            }
        }
    }
}
