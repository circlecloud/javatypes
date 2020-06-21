declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace StyleSheet {
                    /**
                     * Class to carry out some of the duties of
                     * CSS formatting.  Implementations of this
                     * class enable views to present the CSS formatting
                     * while not knowing anything about how the CSS values
                     * are being cached.
                     * <p>
                     * As a delegate of Views, this object is responsible for
                     * the insets of a View and making sure the background
                     * is maintained according to the CSS attributes.
                     */
                    // @ts-ignore
                    class BoxPainter extends java.lang.Object implements java.io.Serializable {
                        /**
                         * Fetches the inset needed on a given side to
                         * account for the margin, border, and padding.
                         * @param side The size of the box to fetch the
                         *   inset for.  This can be View.TOP,
                         *   View.LEFT, View.BOTTOM, or View.RIGHT.
                         * @param v the view making the request.  This is
                         *   used to get the AttributeSet, and may be used to
                         *   resolve percentage arguments.
                         * @exception IllegalArgumentException for an invalid direction
                         */
                        // @ts-ignore
                        public getInset(side: number /*int*/, v: javax.swing.text.View): number /*float*/
                        /**
                         * Paints the CSS box according to the attributes
                         * given.  This should paint the border, padding,
                         * and background.
                         * @param g the rendering surface.
                         * @param x the x coordinate of the allocated area to
                         *   render into.
                         * @param y the y coordinate of the allocated area to
                         *   render into.
                         * @param w the width of the allocated area to render into.
                         * @param h the height of the allocated area to render into.
                         * @param v the view making the request.  This is
                         *   used to get the AttributeSet, and may be used to
                         *   resolve percentage arguments.
                         */
                        // @ts-ignore
                        public paint(g: java.awt.Graphics, x: number /*float*/, y: number /*float*/, w: number /*float*/, h: number /*float*/, v: javax.swing.text.View): void
                    }
                }
            }
        }
    }
}
