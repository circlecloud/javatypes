declare namespace javax {
    namespace swing {
        namespace undo {
            /**
             * StateEditable defines the interface for objects that can have
             * their state undone/redone by a StateEdit.
             * @see StateEdit
             */
            // @ts-ignore
            interface StateEditable {
                /**
                 * Resource ID for this class.
                 */
                // @ts-ignore
                readonly RCSID: java.lang.String | string
                /**
                 * Upon receiving this message the receiver should place any relevant
                 * state into <EM>state</EM>.
                 */
                // @ts-ignore
                storeState(state: java.util.Hashtable<java.lang.Object | any, java.lang.Object | any>): void
                /**
                 * Upon receiving this message the receiver should extract any relevant
                 * state out of <EM>state</EM>.
                 */
                // @ts-ignore
                restoreState(state: java.util.Hashtable<any, any>): void
            }
        }
    }
}
