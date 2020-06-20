declare namespace java {
    namespace util {
        namespace prefs {
            /**
             * A listener for receiving preference change events.
             * @author Josh Bloch
             * @see Preferences
             * @see PreferenceChangeEvent
             * @see NodeChangeListener
             * @since 1.4
             */
            // @ts-ignore
            interface PreferenceChangeListener extends java.util.EventListener {
                /**
                 * This method gets called when a preference is added, removed or when
                 * its value is changed.
                 * <p>
                 * @param evt A PreferenceChangeEvent object describing the event source
                 *           and the preference that has changed.
                 */
                // @ts-ignore
                preferenceChange(evt: java.util.prefs.PreferenceChangeEvent): void
            }
        }
    }
}
