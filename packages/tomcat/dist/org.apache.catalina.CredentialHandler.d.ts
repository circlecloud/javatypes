declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * This interface is used by the {@link Realm} to compare the user provided
             * credentials with the credentials stored in the {@link Realm} for that user.
             */
            // @ts-ignore
            interface CredentialHandler {
                /**
                 * Checks to see if the input credentials match the stored credentials
                 * @param inputCredentials  User provided credentials
                 * @param storedCredentials Credentials stored in the {#link Realm}
                 * @return <code>true</code> if the inputCredentials match the
                 *          storedCredentials, otherwise <code>false</code>
                 */
                // @ts-ignore
                matches(inputCredentials: java.lang.String | string, storedCredentials: java.lang.String | string): boolean
                /**
                 * Generates the equivalent stored credentials for the given input
                 * credentials.
                 * @param inputCredentials  User provided credentials
                 * @return The equivalent stored credentials for the given input
                 *           credentials
                 */
                // @ts-ignore
                mutate(inputCredentials: java.lang.String | string): string
            }
        }
    }
}
