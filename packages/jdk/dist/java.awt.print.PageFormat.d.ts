declare namespace java {
    namespace awt {
        namespace print {
            /**
             * The <code>PageFormat</code> class describes the size and
             * orientation of a page to be printed.
             */
            // @ts-ignore
            class PageFormat extends java.lang.Object implements java.lang.Cloneable {
                /**
                 * Creates a default, portrait-oriented
                 * <code>PageFormat</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * The origin is at the bottom left of the paper with
                 * x running bottom to top and y running left to right.
                 * Note that this is not the Macintosh landscape but
                 * is the Window's and PostScript landscape.
                 */
                // @ts-ignore
                public static readonly LANDSCAPE: number /*int*/
                /**
                 * The origin is at the top left of the paper with
                 * x running to the right and y running down the
                 * paper.
                 */
                // @ts-ignore
                public static readonly PORTRAIT: number /*int*/
                /**
                 * The origin is at the top right of the paper with x
                 * running top to bottom and y running right to left.
                 * Note that this is the Macintosh landscape.
                 */
                // @ts-ignore
                public static readonly REVERSE_LANDSCAPE: number /*int*/
                /**
                 * Makes a copy of this <code>PageFormat</code> with the same
                 * contents as this <code>PageFormat</code>.
                 * @return a copy of this <code>PageFormat</code>.
                 */
                // @ts-ignore
                public clone(): any
                /**
                 * Returns the width, in 1/72nds of an inch, of the page.
                 * This method takes into account the orientation of the
                 * page when determining the width.
                 * @return the width of the page.
                 */
                // @ts-ignore
                public getWidth(): number /*double*/
                /**
                 * Returns the height, in 1/72nds of an inch, of the page.
                 * This method takes into account the orientation of the
                 * page when determining the height.
                 * @return the height of the page.
                 */
                // @ts-ignore
                public getHeight(): number /*double*/
                /**
                 * Returns the x coordinate of the upper left point of the
                 * imageable area of the <code>Paper</code> object
                 * associated with this <code>PageFormat</code>.
                 * This method takes into account the
                 * orientation of the page.
                 * @return the x coordinate of the upper left point of the
                 *  imageable area of the <code>Paper</code> object
                 *  associated with this <code>PageFormat</code>.
                 */
                // @ts-ignore
                public getImageableX(): number /*double*/
                /**
                 * Returns the y coordinate of the upper left point of the
                 * imageable area of the <code>Paper</code> object
                 * associated with this <code>PageFormat</code>.
                 * This method takes into account the
                 * orientation of the page.
                 * @return the y coordinate of the upper left point of the
                 *  imageable area of the <code>Paper</code> object
                 *  associated with this <code>PageFormat</code>.
                 */
                // @ts-ignore
                public getImageableY(): number /*double*/
                /**
                 * Returns the width, in 1/72nds of an inch, of the imageable
                 * area of the page. This method takes into account the orientation
                 * of the page.
                 * @return the width of the page.
                 */
                // @ts-ignore
                public getImageableWidth(): number /*double*/
                /**
                 * Return the height, in 1/72nds of an inch, of the imageable
                 * area of the page. This method takes into account the orientation
                 * of the page.
                 * @return the height of the page.
                 */
                // @ts-ignore
                public getImageableHeight(): number /*double*/
                /**
                 * Returns a copy of the {@link Paper} object associated
                 * with this <code>PageFormat</code>.  Changes made to the
                 * <code>Paper</code> object returned from this method do not
                 * affect the <code>Paper</code> object of this
                 * <code>PageFormat</code>.  To update the <code>Paper</code>
                 * object of this <code>PageFormat</code>, create a new
                 * <code>Paper</code> object and set it into this
                 * <code>PageFormat</code> by using the {@link #setPaper(Paper)}
                 * method.
                 * @return a copy of the <code>Paper</code> object associated
                 *           with this <code>PageFormat</code>.
                 * @see #setPaper
                 */
                // @ts-ignore
                public getPaper(): java.awt.print.Paper
                /**
                 * Sets the <code>Paper</code> object for this
                 * <code>PageFormat</code>.
                 * @param paper the <code>Paper</code> object to which to set
                 *  the <code>Paper</code> object for this <code>PageFormat</code>.
                 * @exception NullPointerException
                 *               a null paper instance was passed as a parameter.
                 * @see #getPaper
                 */
                // @ts-ignore
                public setPaper(paper: java.awt.print.Paper): void
                /**
                 * Sets the page orientation. <code>orientation</code> must be
                 * one of the constants: PORTRAIT, LANDSCAPE,
                 * or REVERSE_LANDSCAPE.
                 * @param orientation the new orientation for the page
                 * @throws IllegalArgumentException if
                 *           an unknown orientation was requested
                 * @see #getOrientation
                 */
                // @ts-ignore
                public setOrientation(orientation: number /*int*/): void
                /**
                 * Returns the orientation of this <code>PageFormat</code>.
                 * @return this <code>PageFormat</code> object's orientation.
                 * @see #setOrientation
                 */
                // @ts-ignore
                public getOrientation(): number /*int*/
                /**
                 * Returns a transformation matrix that translates user
                 * space rendering to the requested orientation
                 * of the page.  The values are placed into the
                 * array as
                 * {&nbsp;m00,&nbsp;m10,&nbsp;m01,&nbsp;m11,&nbsp;m02,&nbsp;m12} in
                 * the form required by the {@link AffineTransform}
                 * constructor.
                 * @return the matrix used to translate user space rendering
                 *  to the orientation of the page.
                 * @see java.awt.geom.AffineTransform
                 */
                // @ts-ignore
                public getMatrix(): number /*double*/[]
            }
        }
    }
}
