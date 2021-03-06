declare namespace java {
    namespace awt {
        namespace dnd {
            namespace peer {
                /**
                 * <p>
                 * This interface is supplied by the underlying window system platform to
                 * expose the behaviors of the Drag and Drop system to an originator of
                 * the same
                 * </p>
                 * @since 1.2
                 */
                // @ts-ignore
                interface DragSourceContextPeer {
                    /**
                     * start a drag
                     */
                    // @ts-ignore
                    startDrag(dsc: java.awt.dnd.DragSourceContext, c: java.awt.Cursor, dragImage: java.awt.Image, imageOffset: java.awt.Point): void
                    /**
                     * return the current drag cursor
                     */
                    // @ts-ignore
                    getCursor(): java.awt.Cursor
                    /**
                     * set the current drag cursor
                     */
                    // @ts-ignore
                    setCursor(c: java.awt.Cursor): void
                    /**
                     * notify the peer that the Transferables DataFlavors have changed
                     */
                    // @ts-ignore
                    transferablesFlavorsChanged(): void
                }
            }
        }
    }
}
