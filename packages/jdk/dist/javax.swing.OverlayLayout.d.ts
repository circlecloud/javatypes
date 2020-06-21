declare namespace javax {
    namespace swing {
        /**
         * A layout manager to arrange components over the top
         * of each other.  The requested size of the container
         * will be the largest requested size of the children,
         * taking alignment needs into consideration.
         * The alignment is based upon what is needed to properly
         * fit the children in the allocation area.  The children
         * will be placed such that their alignment points are all
         * on top of each other.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @author Timothy Prinzing
         */
        // @ts-ignore
        class OverlayLayout extends java.lang.Object implements java.awt.LayoutManager2, java.io.Serializable {
            /**
             * Constructs a layout manager that performs overlay
             * arrangement of the children.  The layout manager
             * created is dedicated to the given container.
             * @param target  the container to do layout against
             */
            // @ts-ignore
            constructor(target: java.awt.Container)
            /**
             * Returns the container that uses this layout manager.
             * @return the container that uses this layout manager
             * @since 1.6
             */
            // @ts-ignore
            public getTarget(): java.awt.Container
            /**
             * Indicates a child has changed its layout related information,
             * which causes any cached calculations to be flushed.
             * @param target the container
             */
            // @ts-ignore
            public invalidateLayout(target: java.awt.Container): void
            /**
             * Adds the specified component to the layout. Used by
             * this class to know when to invalidate layout.
             * @param name the name of the component
             * @param comp the the component to be added
             */
            // @ts-ignore
            public addLayoutComponent(name: java.lang.String | string, comp: java.awt.Component): void
            /**
             * Removes the specified component from the layout. Used by
             * this class to know when to invalidate layout.
             * @param comp the component to remove
             */
            // @ts-ignore
            public removeLayoutComponent(comp: java.awt.Component): void
            /**
             * Adds the specified component to the layout, using the specified
             * constraint object. Used by this class to know when to invalidate
             * layout.
             * @param comp the component to be added
             * @param constraints  where/how the component is added to the layout.
             */
            // @ts-ignore
            public addLayoutComponent(comp: java.awt.Component, constraints: java.lang.Object | any): void
            /**
             * Returns the preferred dimensions for this layout given the components
             * in the specified target container.  Recomputes the layout if it
             * has been invalidated.  Factors in the current inset setting returned
             * by getInsets().
             * @param target the component which needs to be laid out
             * @return a Dimension object containing the preferred dimensions
             * @see #minimumLayoutSize
             */
            // @ts-ignore
            public preferredLayoutSize(target: java.awt.Container): java.awt.Dimension
            /**
             * Returns the minimum dimensions needed to lay out the components
             * contained in the specified target container.  Recomputes the layout
             * if it has been invalidated, and factors in the current inset setting.
             * @param target the component which needs to be laid out
             * @return a Dimension object containing the minimum dimensions
             * @see #preferredLayoutSize
             */
            // @ts-ignore
            public minimumLayoutSize(target: java.awt.Container): java.awt.Dimension
            /**
             * Returns the maximum dimensions needed to lay out the components
             * contained in the specified target container.  Recomputes the
             * layout if it has been invalidated, and factors in the inset setting
             * returned by <code>getInset</code>.
             * @param target the component that needs to be laid out
             * @return a <code>Dimension</code> object containing the maximum
             *          dimensions
             * @see #preferredLayoutSize
             */
            // @ts-ignore
            public maximumLayoutSize(target: java.awt.Container): java.awt.Dimension
            /**
             * Returns the alignment along the x axis for the container.
             * @param target the container
             * @return the alignment &gt;= 0.0f &amp;&amp; &lt;= 1.0f
             */
            // @ts-ignore
            public getLayoutAlignmentX(target: java.awt.Container): number /*float*/
            /**
             * Returns the alignment along the y axis for the container.
             * @param target the container
             * @return the alignment &gt;= 0.0f &amp;&amp; &lt;= 1.0f
             */
            // @ts-ignore
            public getLayoutAlignmentY(target: java.awt.Container): number /*float*/
            /**
             * Called by the AWT when the specified container needs to be laid out.
             * @param target  the container to lay out
             * @exception AWTError  if the target isn't the container specified to the
             *                       constructor
             */
            // @ts-ignore
            public layoutContainer(target: java.awt.Container): void
        }
    }
}
