declare namespace javax {
    namespace security {
        namespace sasl {
            /**
             * This callback is used by {@code SaslClient} and {@code SaslServer}
             * to obtain a realm given a list of realm choices.
             * @since 1.5
             * @author Rosanna Lee
             * @author Rob Weltman
             */
            // @ts-ignore
            class RealmChoiceCallback extends javax.security.auth.callback.ChoiceCallback {
                /**
                 * Constructs a {@code RealmChoiceCallback} with a prompt, a list of
                 * choices and a default choice.
                 * @param prompt the non-null prompt to use to request the realm.
                 * @param choices the non-null list of realms to choose from.
                 * @param defaultChoice the choice to be used as the default choice
                 *  when the list of choices is displayed. It is an index into
                 *  the {#code choices} array.
                 * @param multiple true if multiple choices allowed; false otherwise
                 * @throws IllegalArgumentException If {#code prompt} is null or the empty string,
                 *  if {@code choices} has a length of 0, if any element from
                 *  {@code choices} is null or empty, or if {@code defaultChoice}
                 *  does not fall within the array boundary of {@code choices}
                 */
                // @ts-ignore
                constructor(prompt: java.lang.String | string, choices: java.lang.String[] | string[], defaultChoice: number /*int*/, multiple: boolean)
            }
        }
    }
}
