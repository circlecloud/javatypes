declare namespace java {
    namespace util {
        namespace prefs {
            /**
             * An event emitted by a <tt>Preferences</tt> node to indicate that
             * a child of that node has been added or removed.<p>
             * Note, that although NodeChangeEvent inherits Serializable interface from
             * java.util.EventObject, it is not intended to be Serializable. Appropriate
             * serialization methods are implemented to throw NotSerializableException.
             * @author Josh Bloch
             * @see Preferences
             * @see NodeChangeListener
             * @see PreferenceChangeEvent
             * @since 1.4
             * @serial exclude
             */
            // @ts-ignore
            class NodeChangeEvent extends java.util.EventObject {
                /**
                 * Constructs a new <code>NodeChangeEvent</code> instance.
                 * @param parent  The parent of the node that was added or removed.
                 * @param child   The node that was added or removed.
                 */
                // @ts-ignore
                constructor(parent: java.util.prefs.Preferences, child: java.util.prefs.Preferences)
                /**
                 * Returns the parent of the node that was added or removed.
                 * @return The parent Preferences node whose child was added or removed
                 */
                // @ts-ignore
                public getParent(): java.util.prefs.Preferences
                /**
                 * Returns the node that was added or removed.
                 * @return The node that was added or removed.
                 */
                // @ts-ignore
                public getChild(): java.util.prefs.Preferences
            }
        }
    }
}
