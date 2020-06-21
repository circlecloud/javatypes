declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace StyleSheet {
                    /**
                     * Class to carry out some of the duties of CSS list
                     * formatting.  Implementations of this
                     * class enable views to present the CSS formatting
                     * while not knowing anything about how the CSS values
                     * are being cached.
                     */
                    // @ts-ignore
                    class ListPainter extends java.lang.Object implements java.io.Serializable {
                        /**
                         * Paints the CSS list decoration according to the
                         * attributes given.
                         * @param g the rendering surface.
                         * @param x the x coordinate of the list item allocation
                         * @param y the y coordinate of the list item allocation
                         * @param w the width of the list item allocation
                         * @param h the height of the list item allocation
                         * @param v the allocated area to paint into.
                         * @param item which list item is being painted.  This
                         *   is a number greater than or equal to 0.
                         */
                        // @ts-ignore
                        public paint(g: java.awt.Graphics, x: number /*float*/, y: number /*float*/, w: number /*float*/, h: number /*float*/, v: javax.swing.text.View, item: number /*int*/): void
                    }
                }
            }
        }
    }
}
