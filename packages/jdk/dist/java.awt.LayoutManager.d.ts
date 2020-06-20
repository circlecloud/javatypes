declare namespace java {
    namespace awt {
        /**
         * Defines the interface for classes that know how to lay out
         * <code>Container</code>s.
         * <p>
         * Swing's painting architecture assumes the children of a
         * <code>JComponent</code> do not overlap.  If a
         * <code>JComponent</code>'s <code>LayoutManager</code> allows
         * children to overlap, the <code>JComponent</code> must override
         * <code>isOptimizedDrawingEnabled</code> to return false.
         * @see Container
         * @see javax.swing.JComponent#isOptimizedDrawingEnabled
         * @author Sami Shaio
         * @author Arthur van Hoff
         */
        // @ts-ignore
        interface LayoutManager {
            /**
             * If the layout manager uses a per-component string,
             * adds the component <code>comp</code> to the layout,
             * associating it
             * with the string specified by <code>name</code>.
             * @param name the string to be associated with the component
             * @param comp the component to be added
             */
            // @ts-ignore
            addLayoutComponent(name: string, comp: java.awt.Component): void
            /**
             * Removes the specified component from the layout.
             * @param comp the component to be removed
             */
            // @ts-ignore
            removeLayoutComponent(comp: java.awt.Component): void
            /**
             * Calculates the preferred size dimensions for the specified
             * container, given the components it contains.
             * @param parent the container to be laid out
             * @see #minimumLayoutSize
             */
            // @ts-ignore
            preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension
            /**
             * Calculates the minimum size dimensions for the specified
             * container, given the components it contains.
             * @param parent the component to be laid out
             * @see #preferredLayoutSize
             */
            // @ts-ignore
            minimumLayoutSize(parent: java.awt.Container): java.awt.Dimension
            /**
             * Lays out the specified container.
             * @param parent the container to be laid out
             */
            // @ts-ignore
            layoutContainer(parent: java.awt.Container): void
        }
    }
}
