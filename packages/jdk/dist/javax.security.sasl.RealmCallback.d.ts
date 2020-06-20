declare namespace javax {
    namespace security {
        namespace sasl {
            /**
             * This callback is used by {@code SaslClient} and {@code SaslServer}
             * to retrieve realm information.
             * @since 1.5
             * @author Rosanna Lee
             * @author Rob Weltman
             */
            // @ts-ignore
            class RealmCallback extends javax.security.auth.callback.TextInputCallback {
                /**
                 * Constructs a {@code RealmCallback} with a prompt.
                 * @param prompt The non-null prompt to use to request the realm information.
                 * @throws IllegalArgumentException If {#code prompt} is null or
                 *  the empty string.
                 */
                // @ts-ignore
                constructor(prompt: string)
                /**
                 * Constructs a {@code RealmCallback} with a prompt and default
                 * realm information.
                 * @param prompt The non-null prompt to use to request the realm information.
                 * @param defaultRealmInfo The non-null default realm information to use.
                 * @throws IllegalArgumentException If {#code prompt} is null or
                 *  the empty string,
                 *  or if {@code defaultRealm} is empty or null.
                 */
                // @ts-ignore
                constructor(prompt: string, defaultRealmInfo: string)
            }
        }
    }
}
