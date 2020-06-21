declare namespace java {
    namespace awt {
        /**
         * <code>Panel</code> is the simplest container class. A panel
         * provides space in which an application can attach any other
         * component, including other panels.
         * <p>
         * The default layout manager for a panel is the
         * <code>FlowLayout</code> layout manager.
         * @author Sami Shaio
         * @see java.awt.FlowLayout
         * @since JDK1.0
         */
        // @ts-ignore
        class Panel extends java.awt.Container implements javax.accessibility.Accessible {
            /**
             * Creates a new panel using the default layout manager.
             * The default layout manager for all panels is the
             * <code>FlowLayout</code> class.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new panel with the specified layout manager.
             * @param layout the layout manager for this panel.
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(layout: java.awt.LayoutManager)
            /**
             * Creates the Panel's peer.  The peer allows you to modify the
             * appearance of the panel without changing its functionality.
             */
            // @ts-ignore
            public addNotify(): void
            /**
             * Gets the AccessibleContext associated with this Panel.
             * For panels, the AccessibleContext takes the form of an
             * AccessibleAWTPanel.
             * A new AccessibleAWTPanel instance is created if necessary.
             * @return an AccessibleAWTPanel that serves as the
             *          AccessibleContext of this Panel
             * @since 1.3
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
