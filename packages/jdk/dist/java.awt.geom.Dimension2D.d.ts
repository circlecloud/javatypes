declare namespace java {
    namespace awt {
        namespace geom {
            /**
             * The <code>Dimension2D</code> class is to encapsulate a width
             * and a height dimension.
             * <p>
             * This class is only the abstract superclass for all objects that
             * store a 2D dimension.
             * The actual storage representation of the sizes is left to
             * the subclass.
             * @author Jim Graham
             * @since 1.2
             */
            // @ts-ignore
            abstract class Dimension2D extends java.lang.Object implements java.lang.Cloneable {
                /**
                 * This is an abstract class that cannot be instantiated directly.
                 * Type-specific implementation subclasses are available for
                 * instantiation and provide a number of formats for storing
                 * the information necessary to satisfy the various accessor
                 * methods below.
                 * @see java.awt.Dimension
                 * @since 1.2
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the width of this <code>Dimension</code> in double
                 * precision.
                 * @return the width of this <code>Dimension</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getWidth(): number /*double*/
                /**
                 * Returns the height of this <code>Dimension</code> in double
                 * precision.
                 * @return the height of this <code>Dimension</code>.
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract getHeight(): number /*double*/
                /**
                 * Sets the size of this <code>Dimension</code> object to the
                 * specified width and height.
                 * This method is included for completeness, to parallel the
                 * {@link java.awt.Component#getSize getSize} method of
                 * {@link java.awt.Component}.
                 * @param width  the new width for the <code>Dimension</code>
                 *  object
                 * @param height  the new height for the <code>Dimension</code>
                 *  object
                 * @since 1.2
                 */
                // @ts-ignore
                public abstract setSize(width: number /*double*/, height: number /*double*/): void
                /**
                 * Sets the size of this <code>Dimension2D</code> object to
                 * match the specified size.
                 * This method is included for completeness, to parallel the
                 * <code>getSize</code> method of <code>Component</code>.
                 * @param d  the new size for the <code>Dimension2D</code>
                 *  object
                 * @since 1.2
                 */
                // @ts-ignore
                public setSize(d: java.awt.geom.Dimension2D): void
                /**
                 * Creates a new object of the same class as this object.
                 * @return a clone of this instance.
                 * @exception OutOfMemoryError            if there is not enough memory.
                 * @see java.lang.Cloneable
                 * @since 1.2
                 */
                // @ts-ignore
                public clone(): any
            }
        }
    }
}
