declare namespace javax {
    namespace swing {
        namespace event {
            namespace RowSorterEvent {
                /**
                 * Enumeration of the types of <code>RowSorterEvent</code>s.
                 * @since 1.6
                 */
                // @ts-ignore
                class Type extends java.lang.Enum<javax.swing.event.RowSorterEvent.Type> {
                    /**
                     * Indicates the sort order has changed.
                     */
                    // @ts-ignore
                    readonly SORT_ORDER_CHANGED: javax.swing.event.RowSorterEvent.Type
                    /**
                     * Indicates the contents have been newly sorted or
                     * transformed in some way.
                     */
                    // @ts-ignore
                    readonly SORTED: javax.swing.event.RowSorterEvent.Type
                    // @ts-ignore
                    values(): javax.swing.event.RowSorterEvent.Type[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): javax.swing.event.RowSorterEvent.Type
                }
            }
        }
    }
}
