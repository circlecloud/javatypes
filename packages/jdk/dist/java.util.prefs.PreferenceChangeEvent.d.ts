declare namespace java {
    namespace util {
        namespace prefs {
            /**
             * An event emitted by a <tt>Preferences</tt> node to indicate that
             * a preference has been added, removed or has had its value changed.<p>
             * Note, that although PreferenceChangeEvent inherits Serializable interface
             * from EventObject, it is not intended to be Serializable. Appropriate
             * serialization methods are implemented to throw NotSerializableException.
             * @author Josh Bloch
             * @see Preferences
             * @see PreferenceChangeListener
             * @see NodeChangeEvent
             * @since 1.4
             * @serial exclude
             */
            // @ts-ignore
            class PreferenceChangeEvent extends java.util.EventObject {
                /**
                 * Constructs a new <code>PreferenceChangeEvent</code> instance.
                 * @param node  The Preferences node that emitted the event.
                 * @param key  The key of the preference that was changed.
                 * @param newValue  The new value of the preference, or <tt>null</tt>
                 *                   if the preference is being removed.
                 */
                // @ts-ignore
                constructor(node: java.util.prefs.Preferences, key: java.lang.String | string, newValue: java.lang.String | string)
                /**
                 * Returns the preference node that emitted the event.
                 * @return The preference node that emitted the event.
                 */
                // @ts-ignore
                public getNode(): java.util.prefs.Preferences
                /**
                 * Returns the key of the preference that was changed.
                 * @return The key of the preference that was changed.
                 */
                // @ts-ignore
                public getKey(): string
                /**
                 * Returns the new value for the preference.
                 * @return The new value for the preference, or <tt>null</tt> if the
                 *           preference was removed.
                 */
                // @ts-ignore
                public getNewValue(): string
            }
        }
    }
}
