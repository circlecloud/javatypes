declare namespace java {
    namespace util {
        namespace prefs {
            /**
             * A listener for receiving preference node change events.
             * @author Josh Bloch
             * @see Preferences
             * @see NodeChangeEvent
             * @see PreferenceChangeListener
             * @since 1.4
             */
            // @ts-ignore
            interface NodeChangeListener extends java.util.EventListener {
                /**
                 * This method gets called when a child node is added.
                 * @param evt A node change event object describing the parent
                 *             and child node.
                 */
                // @ts-ignore
                childAdded(evt: java.util.prefs.NodeChangeEvent): void
                /**
                 * This method gets called when a child node is removed.
                 * @param evt A node change event object describing the parent
                 *             and child node.
                 */
                // @ts-ignore
                childRemoved(evt: java.util.prefs.NodeChangeEvent): void
            }
        }
    }
}
