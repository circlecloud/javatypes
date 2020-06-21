declare namespace javax {
    namespace swing {
        /**
         * The default layout manager for <code>JViewport</code>.
         * <code>ViewportLayout</code> defines
         * a policy for layout that should be useful for most applications.
         * The viewport makes its view the same size as the viewport,
         * however it will not make the view smaller than its minimum size.
         * As the viewport grows the view is kept bottom justified until
         * the entire view is visible, subsequently the view is kept top
         * justified.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @author Hans Muller
         */
        // @ts-ignore
        class ViewportLayout extends java.lang.Object implements java.awt.LayoutManager, java.io.Serializable {
            // @ts-ignore
            constructor()
            /**
             * Adds the specified component to the layout. Not used by this class.
             * @param name the name of the component
             * @param c the the component to be added
             */
            // @ts-ignore
            public addLayoutComponent(name: java.lang.String | string, c: java.awt.Component): void
            /**
             * Removes the specified component from the layout. Not used by
             * this class.
             * @param c the component to remove
             */
            // @ts-ignore
            public removeLayoutComponent(c: java.awt.Component): void
            /**
             * Returns the preferred dimensions for this layout given the components
             * in the specified target container.
             * @param parent the component which needs to be laid out
             * @return a <code>Dimension</code> object containing the
             *           preferred dimensions
             * @see #minimumLayoutSize
             */
            // @ts-ignore
            public preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension
            /**
             * Returns the minimum dimensions needed to layout the components
             * contained in the specified target container.
             * @param parent the component which needs to be laid out
             * @return a <code>Dimension</code> object containing the minimum
             *           dimensions
             * @see #preferredLayoutSize
             */
            // @ts-ignore
            public minimumLayoutSize(parent: java.awt.Container): java.awt.Dimension
            /**
             * Called by the AWT when the specified container needs to be laid out.
             * @param parent  the container to lay out
             * @throws AWTError if the target isn't the container specified to the
             *                       <code>BoxLayout</code> constructor
             */
            // @ts-ignore
            public layoutContainer(parent: java.awt.Container): void
        }
    }
}
