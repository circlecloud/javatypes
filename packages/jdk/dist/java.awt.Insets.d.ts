declare namespace java {
    namespace awt {
        /**
         * An <code>Insets</code> object is a representation of the borders
         * of a container. It specifies the space that a container must leave
         * at each of its edges. The space can be a border, a blank space, or
         * a title.
         * @author Arthur van Hoff
         * @author Sami Shaio
         * @see java.awt.LayoutManager
         * @see java.awt.Container
         * @since JDK1.0
         */
        // @ts-ignore
        class Insets extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable {
            /**
             * Creates and initializes a new <code>Insets</code> object with the
             * specified top, left, bottom, and right insets.
             * @param top   the inset from the top.
             * @param left   the inset from the left.
             * @param bottom   the inset from the bottom.
             * @param right   the inset from the right.
             */
            // @ts-ignore
            constructor(top: number /*int*/, left: number /*int*/, bottom: number /*int*/, right: number /*int*/)
            /**
             * The inset from the top.
             * This value is added to the Top of the rectangle
             * to yield a new location for the Top.
             * @serial 
             * @see #clone()
             */
            // @ts-ignore
            top: number /*int*/
            /**
             * The inset from the left.
             * This value is added to the Left of the rectangle
             * to yield a new location for the Left edge.
             * @serial 
             * @see #clone()
             */
            // @ts-ignore
            left: number /*int*/
            /**
             * The inset from the bottom.
             * This value is subtracted from the Bottom of the rectangle
             * to yield a new location for the Bottom.
             * @serial 
             * @see #clone()
             */
            // @ts-ignore
            bottom: number /*int*/
            /**
             * The inset from the right.
             * This value is subtracted from the Right of the rectangle
             * to yield a new location for the Right edge.
             * @serial 
             * @see #clone()
             */
            // @ts-ignore
            right: number /*int*/
            /**
             * Set top, left, bottom, and right to the specified values
             * @param top   the inset from the top.
             * @param left   the inset from the left.
             * @param bottom   the inset from the bottom.
             * @param right   the inset from the right.
             * @since 1.5
             */
            // @ts-ignore
            set(top: number /*int*/, left: number /*int*/, bottom: number /*int*/, right: number /*int*/): void
            /**
             * Checks whether two insets objects are equal. Two instances
             * of <code>Insets</code> are equal if the four integer values
             * of the fields <code>top</code>, <code>left</code>,
             * <code>bottom</code>, and <code>right</code> are all equal.
             * @return <code>true</code> if the two insets are equal;
             *                           otherwise <code>false</code>.
             * @since JDK1.1
             */
            // @ts-ignore
            equals(obj: any): boolean
            /**
             * Returns the hash code for this Insets.
             * @return a hash code for this Insets.
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Returns a string representation of this <code>Insets</code> object.
             * This method is intended to be used only for debugging purposes, and
             * the content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             * @return a string representation of this <code>Insets</code> object.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Create a copy of this object.
             * @return a copy of this <code>Insets</code> object.
             */
            // @ts-ignore
            clone(): java.lang.Object
        }
    }
}
