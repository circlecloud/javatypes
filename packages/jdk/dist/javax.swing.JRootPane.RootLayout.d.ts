declare namespace javax {
    namespace swing {
        namespace JRootPane {
            /**
             * A custom layout manager that is responsible for the layout of
             * layeredPane, glassPane, and menuBar.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             */
            // @ts-ignore
            class RootLayout extends java.lang.Object implements java.awt.LayoutManager2, java.io.Serializable {
                // @ts-ignore
                constructor()
                /**
                 * Returns the amount of space the layout would like to have.
                 * @param parent the Container for which this layout manager
                 *  is being used
                 * @return a Dimension object containing the layout's preferred size
                 */
                // @ts-ignore
                preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension
                /**
                 * Returns the minimum amount of space the layout needs.
                 * @param parent the Container for which this layout manager
                 *  is being used
                 * @return a Dimension object containing the layout's minimum size
                 */
                // @ts-ignore
                minimumLayoutSize(parent: java.awt.Container): java.awt.Dimension
                /**
                 * Returns the maximum amount of space the layout can use.
                 * @param target the Container for which this layout manager
                 *  is being used
                 * @return a Dimension object containing the layout's maximum size
                 */
                // @ts-ignore
                maximumLayoutSize(target: java.awt.Container): java.awt.Dimension
                /**
                 * Instructs the layout manager to perform the layout for the specified
                 * container.
                 * @param parent the Container for which this layout manager
                 *  is being used
                 */
                // @ts-ignore
                layoutContainer(parent: java.awt.Container): void
                // @ts-ignore
                addLayoutComponent(name: string, comp: java.awt.Component): void
                // @ts-ignore
                removeLayoutComponent(comp: java.awt.Component): void
                // @ts-ignore
                addLayoutComponent(comp: java.awt.Component, constraints: any): void
                // @ts-ignore
                getLayoutAlignmentX(target: java.awt.Container): float
                // @ts-ignore
                getLayoutAlignmentY(target: java.awt.Container): float
                // @ts-ignore
                invalidateLayout(target: java.awt.Container): void
            }
        }
    }
}
