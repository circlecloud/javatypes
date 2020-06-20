declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                /**
                 * A view implementation to display an html list
                 * @author Timothy Prinzing
                 */
                // @ts-ignore
                class ListView extends javax.swing.text.html.BlockView {
                    /**
                     * Creates a new view that represents a list element.
                     * @param elem the element to create a view for
                     */
                    // @ts-ignore
                    constructor(elem: javax.swing.text.Element)
                    /**
                     * Calculates the desired shape of the list.
                     * @return the desired span
                     * @see View#getPreferredSpan
                     */
                    // @ts-ignore
                    getAlignment(axis: number /*int*/): float
                    /**
                     * Renders using the given rendering surface and area on that
                     * surface.
                     * @param g the rendering surface to use
                     * @param allocation the allocated region to render into
                     * @see View#paint
                     */
                    // @ts-ignore
                    paint(g: java.awt.Graphics, allocation: java.awt.Shape): void
                    /**
                     * Paints one of the children; called by paint().  By default
                     * that is all it does, but a subclass can use this to paint
                     * things relative to the child.
                     * @param g the graphics context
                     * @param alloc the allocated region to render the child into
                     * @param index the index of the child
                     */
                    // @ts-ignore
                    paintChild(g: java.awt.Graphics, alloc: java.awt.Rectangle, index: number /*int*/): void
                    // @ts-ignore
                    setPropertiesFromAttributes(): void
                }
            }
        }
    }
}
