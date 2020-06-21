declare namespace java {
    namespace awt {
        namespace print {
            /**
             * The <code>Paper</code> class describes the physical characteristics of
             * a piece of paper.
             * <p>
             * When creating a <code>Paper</code> object, it is the application's
             * responsibility to ensure that the paper size and the imageable area
             * are compatible.  For example, if the paper size is changed from
             * 11 x 17 to 8.5 x 11, the application might need to reduce the
             * imageable area so that whatever is printed fits on the page.
             * <p>
             * @see #setSize(double, double)
             * @see #setImageableArea(double, double, double, double)
             */
            // @ts-ignore
            class Paper extends java.lang.Object implements java.lang.Cloneable {
                /**
                 * Creates a letter sized piece of paper
                 * with one inch margins.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a copy of this <code>Paper</code> with the same contents
                 * as this <code>Paper</code>.
                 * @return a copy of this <code>Paper</code>.
                 */
                // @ts-ignore
                public clone(): any
                /**
                 * Returns the height of the page in 1/72nds of an inch.
                 * @return the height of the page described by this
                 *           <code>Paper</code>.
                 */
                // @ts-ignore
                public getHeight(): number /*double*/
                /**
                 * Sets the width and height of this <code>Paper</code>
                 * object, which represents the properties of the page onto
                 * which printing occurs.
                 * The dimensions are supplied in 1/72nds of
                 * an inch.
                 * @param width the value to which to set this <code>Paper</code>
                 *  object's width
                 * @param height the value to which to set this <code>Paper</code>
                 *  object's height
                 */
                // @ts-ignore
                public setSize(width: number /*double*/, height: number /*double*/): void
                /**
                 * Returns the width of the page in 1/72nds
                 * of an inch.
                 * @return the width of the page described by this
                 *  <code>Paper</code>.
                 */
                // @ts-ignore
                public getWidth(): number /*double*/
                /**
                 * Sets the imageable area of this <code>Paper</code>.  The
                 * imageable area is the area on the page in which printing
                 * occurs.
                 * @param x the X coordinate to which to set the
                 *  upper-left corner of the imageable area of this <code>Paper</code>
                 * @param y the Y coordinate to which to set the
                 *  upper-left corner of the imageable area of this <code>Paper</code>
                 * @param width the value to which to set the width of the
                 *  imageable area of this <code>Paper</code>
                 * @param height the value to which to set the height of the
                 *  imageable area of this <code>Paper</code>
                 */
                // @ts-ignore
                public setImageableArea(x: number /*double*/, y: number /*double*/, width: number /*double*/, height: number /*double*/): void
                /**
                 * Returns the x coordinate of the upper-left corner of this
                 * <code>Paper</code> object's imageable area.
                 * @return the x coordinate of the imageable area.
                 */
                // @ts-ignore
                public getImageableX(): number /*double*/
                /**
                 * Returns the y coordinate of the upper-left corner of this
                 * <code>Paper</code> object's imageable area.
                 * @return the y coordinate of the imageable area.
                 */
                // @ts-ignore
                public getImageableY(): number /*double*/
                /**
                 * Returns the width of this <code>Paper</code> object's imageable
                 * area.
                 * @return the width of the imageable area.
                 */
                // @ts-ignore
                public getImageableWidth(): number /*double*/
                /**
                 * Returns the height of this <code>Paper</code> object's imageable
                 * area.
                 * @return the height of the imageable area.
                 */
                // @ts-ignore
                public getImageableHeight(): number /*double*/
            }
        }
    }
}
