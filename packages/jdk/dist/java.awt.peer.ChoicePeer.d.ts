declare namespace java {
    namespace awt {
        namespace peer {
            /**
             * The peer interface for {@link Choice}.
             * The peer interfaces are intended only for use in porting
             * the AWT. They are not intended for use by application
             * developers, and developers should not implement peers
             * nor invoke any of the peer methods directly on the peer
             * instances.
             */
            // @ts-ignore
            interface ChoicePeer extends java.awt.peer.ComponentPeer {
                /**
                 * Adds an item with the string {@code item} to the combo box list
                 * at index {@code index}.
                 * @param item the label to be added to the list
                 * @param index the index where to add the item
                 * @see Choice#add(String)
                 */
                // @ts-ignore
                add(item: string, index: number /*int*/): void
                /**
                 * Removes the item at index {@code index} from the combo box list.
                 * @param index the index where to remove the item
                 * @see Choice#remove(int)
                 */
                // @ts-ignore
                remove(index: number /*int*/): void
                /**
                 * Removes all items from the combo box list.
                 * @see Choice#removeAll()
                 */
                // @ts-ignore
                removeAll(): void
                /**
                 * Selects the item at index {@code index}.
                 * @param index the index which should be selected
                 * @see Choice#select(int)
                 */
                // @ts-ignore
                select(index: number /*int*/): void
            }
        }
    }
}
