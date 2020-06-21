declare namespace javax {
    namespace swing {
        /**
         * This class is inserted in between cell renderers and the components that
         * use them.  It just exists to thwart the repaint() and invalidate() methods
         * which would otherwise propagate up the tree when the renderer was configured.
         * It's used by the implementations of JTable, JTree, and JList.  For example,
         * here's how CellRendererPane is used in the code the paints each row
         * in a JList:
         * <pre>
         * cellRendererPane = new CellRendererPane();
         * ...
         * Component rendererComponent = renderer.getListCellRendererComponent();
         * renderer.configureListCellRenderer(dataModel.getElementAt(row), row);
         * cellRendererPane.paintComponent(g, rendererComponent, this, x, y, w, h);
         * </pre>
         * <p>
         * A renderer component must override isShowing() and unconditionally return
         * true to work correctly because the Swing paint does nothing for components
         * with isShowing false.
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
        class CellRendererPane extends java.awt.Container implements javax.accessibility.Accessible {
            /**
             * Construct a CellRendererPane object.
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            accessibleContext: javax.accessibility.AccessibleContext
            /**
             * Overridden to avoid propagating a invalidate up the tree when the
             * cell renderer child is configured.
             */
            // @ts-ignore
            public invalidate(): void
            /**
             * Shouldn't be called.
             */
            // @ts-ignore
            public paint(g: java.awt.Graphics): void
            /**
             * Shouldn't be called.
             */
            // @ts-ignore
            public update(g: java.awt.Graphics): void
            /**
             * If the specified component is already a child of this then we don't
             * bother doing anything - stacking order doesn't matter for cell
             * renderer components (CellRendererPane doesn't paint anyway).
             */
            // @ts-ignore
            addImpl(x: java.awt.Component, constraints: java.lang.Object | any, index: number /*int*/): void
            /**
             * Paint a cell renderer component c on graphics object g.  Before the component
             * is drawn it's reparented to this (if that's necessary), it's bounds
             * are set to w,h and the graphics object is (effectively) translated to x,y.
             * If it's a JComponent, double buffering is temporarily turned off. After
             * the component is painted it's bounds are reset to -w, -h, 0, 0 so that, if
             * it's the last renderer component painted, it will not start consuming input.
             * The Container p is the component we're actually drawing on, typically it's
             * equal to this.getParent(). If shouldValidate is true the component c will be
             * validated before painted.
             */
            // @ts-ignore
            public paintComponent(g: java.awt.Graphics, c: java.awt.Component, p: java.awt.Container, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, shouldValidate: boolean): void
            /**
             * Calls this.paintComponent(g, c, p, x, y, w, h, false).
             */
            // @ts-ignore
            public paintComponent(g: java.awt.Graphics, c: java.awt.Component, p: java.awt.Container, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
            /**
             * Calls this.paintComponent() with the rectangles x,y,width,height fields.
             */
            // @ts-ignore
            public paintComponent(g: java.awt.Graphics, c: java.awt.Component, p: java.awt.Container, r: java.awt.Rectangle): void
            /**
             * Gets the AccessibleContext associated with this CellRendererPane.
             * For CellRendererPanes, the AccessibleContext takes the form of an
             * AccessibleCellRendererPane.
             * A new AccessibleCellRendererPane instance is created if necessary.
             * @return an AccessibleCellRendererPane that serves as the
             *          AccessibleContext of this CellRendererPane
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
