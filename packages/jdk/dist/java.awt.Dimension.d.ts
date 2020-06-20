declare namespace java {
    namespace awt {
        /**
         * The <code>Dimension</code> class encapsulates the width and
         * height of a component (in integer precision) in a single object.
         * The class is
         * associated with certain properties of components. Several methods
         * defined by the <code>Component</code> class and the
         * <code>LayoutManager</code> interface return a
         * <code>Dimension</code> object.
         * <p>
         * Normally the values of <code>width</code>
         * and <code>height</code> are non-negative integers.
         * The constructors that allow you to create a dimension do
         * not prevent you from setting a negative value for these properties.
         * If the value of <code>width</code> or <code>height</code> is
         * negative, the behavior of some methods defined by other objects is
         * undefined.
         * @author Sami Shaio
         * @author Arthur van Hoff
         * @see java.awt.Component
         * @see java.awt.LayoutManager
         * @since 1.0
         */
        // @ts-ignore
        class Dimension extends java.awt.geom.Dimension2D implements java.io.Serializable {
            /**
             * Creates an instance of <code>Dimension</code> with a width
             * of zero and a height of zero.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates an instance of <code>Dimension</code> whose width
             * and height are the same as for the specified dimension.
             * @param d   the specified dimension for the
             *                <code>width</code> and
             *                <code>height</code> values
             */
            // @ts-ignore
            constructor(d: java.awt.Dimension)
            /**
             * Constructs a <code>Dimension</code> and initializes
             * it to the specified width and specified height.
             * @param width the specified width
             * @param height the specified height
             */
            // @ts-ignore
            constructor(width: number /*int*/, height: number /*int*/)
            /**
             * The width dimension; negative values can be used.
             * @serial 
             * @see #getSize
             * @see #setSize
             * @since 1.0
             */
            // @ts-ignore
            width: number /*int*/
            /**
             * The height dimension; negative values can be used.
             * @serial 
             * @see #getSize
             * @see #setSize
             * @since 1.0
             */
            // @ts-ignore
            height: number /*int*/
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            // @ts-ignore
            getWidth(): double
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            // @ts-ignore
            getHeight(): double
            /**
             * Sets the size of this <code>Dimension</code> object to
             * the specified width and height in double precision.
             * Note that if <code>width</code> or <code>height</code>
             * are larger than <code>Integer.MAX_VALUE</code>, they will
             * be reset to <code>Integer.MAX_VALUE</code>.
             * @param width  the new width for the <code>Dimension</code> object
             * @param height the new height for the <code>Dimension</code> object
             * @since 1.2
             */
            // @ts-ignore
            setSize(width: number /*double*/, height: number /*double*/): void
            /**
             * Gets the size of this <code>Dimension</code> object.
             * This method is included for completeness, to parallel the
             * <code>getSize</code> method defined by <code>Component</code>.
             * @return the size of this dimension, a new instance of
             *            <code>Dimension</code> with the same width and height
             * @see java.awt.Dimension#setSize
             * @see java.awt.Component#getSize
             * @since 1.1
             */
            // @ts-ignore
            getSize(): java.awt.Dimension
            /**
             * Sets the size of this <code>Dimension</code> object to the specified size.
             * This method is included for completeness, to parallel the
             * <code>setSize</code> method defined by <code>Component</code>.
             * @param d  the new size for this <code>Dimension</code> object
             * @see java.awt.Dimension#getSize
             * @see java.awt.Component#setSize
             * @since 1.1
             */
            // @ts-ignore
            setSize(d: java.awt.Dimension): void
            /**
             * Sets the size of this <code>Dimension</code> object
             * to the specified width and height.
             * This method is included for completeness, to parallel the
             * <code>setSize</code> method defined by <code>Component</code>.
             * @param width   the new width for this <code>Dimension</code> object
             * @param height  the new height for this <code>Dimension</code> object
             * @see java.awt.Dimension#getSize
             * @see java.awt.Component#setSize
             * @since 1.1
             */
            // @ts-ignore
            setSize(width: number /*int*/, height: number /*int*/): void
            /**
             * Checks whether two dimension objects have equal values.
             */
            // @ts-ignore
            equals(obj: any): boolean
            /**
             * Returns the hash code for this <code>Dimension</code>.
             * @return a hash code for this <code>Dimension</code>
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Returns a string representation of the values of this
             * <code>Dimension</code> object's <code>height</code> and
             * <code>width</code> fields. This method is intended to be used only
             * for debugging purposes, and the content and format of the returned
             * string may vary between implementations. The returned string may be
             * empty but may not be <code>null</code>.
             * @return a string representation of this <code>Dimension</code>
             *           object
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
