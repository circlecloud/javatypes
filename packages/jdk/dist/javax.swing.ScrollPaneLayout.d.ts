declare namespace javax {
    namespace swing {
        /**
         * The layout manager used by <code>JScrollPane</code>.
         * <code>JScrollPaneLayout</code> is
         * responsible for nine components: a viewport, two scrollbars,
         * a row header, a column header, and four "corner" components.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @see JScrollPane
         * @see JViewport
         * @author Hans Muller
         */
        // @ts-ignore
        class ScrollPaneLayout extends java.lang.Object implements java.awt.LayoutManager, javax.swing.ScrollPaneConstants, java.io.Serializable {
            // @ts-ignore
            constructor()
            /**
             * The scrollpane's viewport child.
             * Default is an empty <code>JViewport</code>.
             * @see JScrollPane#setViewport
             */
            // @ts-ignore
            viewport: javax.swing.JViewport
            /**
             * The scrollpane's vertical scrollbar child.
             * Default is a <code>JScrollBar</code>.
             * @see JScrollPane#setVerticalScrollBar
             */
            // @ts-ignore
            vsb: javax.swing.JScrollBar
            /**
             * The scrollpane's horizontal scrollbar child.
             * Default is a <code>JScrollBar</code>.
             * @see JScrollPane#setHorizontalScrollBar
             */
            // @ts-ignore
            hsb: javax.swing.JScrollBar
            /**
             * The row header child.  Default is <code>null</code>.
             * @see JScrollPane#setRowHeader
             */
            // @ts-ignore
            rowHead: javax.swing.JViewport
            /**
             * The column header child.  Default is <code>null</code>.
             * @see JScrollPane#setColumnHeader
             */
            // @ts-ignore
            colHead: javax.swing.JViewport
            /**
             * The component to display in the lower left corner.
             * Default is <code>null</code>.
             * @see JScrollPane#setCorner
             */
            // @ts-ignore
            lowerLeft: java.awt.Component
            /**
             * The component to display in the lower right corner.
             * Default is <code>null</code>.
             * @see JScrollPane#setCorner
             */
            // @ts-ignore
            lowerRight: java.awt.Component
            /**
             * The component to display in the upper left corner.
             * Default is <code>null</code>.
             * @see JScrollPane#setCorner
             */
            // @ts-ignore
            upperLeft: java.awt.Component
            /**
             * The component to display in the upper right corner.
             * Default is <code>null</code>.
             * @see JScrollPane#setCorner
             */
            // @ts-ignore
            upperRight: java.awt.Component
            /**
             * The display policy for the vertical scrollbar.
             * The default is <code>ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED</code>.
             * <p>
             * This field is obsolete, please use the <code>JScrollPane</code> field instead.
             * @see JScrollPane#setVerticalScrollBarPolicy
             */
            // @ts-ignore
            vsbPolicy: number /*int*/
            /**
             * The display policy for the horizontal scrollbar.
             * The default is <code>ScrollPaneConstants.HORIZONTAL_SCROLLBAR_AS_NEEDED</code>.
             * <p>
             * This field is obsolete, please use the <code>JScrollPane</code> field instead.
             * @see JScrollPane#setHorizontalScrollBarPolicy
             */
            // @ts-ignore
            hsbPolicy: number /*int*/
            /**
             * This method is invoked after the ScrollPaneLayout is set as the
             * LayoutManager of a <code>JScrollPane</code>.
             * It initializes all of the internal fields that
             * are ordinarily set by <code>addLayoutComponent</code>.  For example:
             * <pre>
             * ScrollPaneLayout mySPLayout = new ScrollPanelLayout() {
             * public void layoutContainer(Container p) {
             * super.layoutContainer(p);
             * // do some extra work here ...
             * }
             * };
             * scrollpane.setLayout(mySPLayout):
             * </pre>
             */
            // @ts-ignore
            syncWithScrollPane(sp: javax.swing.JScrollPane): void
            /**
             * Removes an existing component.  When a new component, such as
             * the left corner, or vertical scrollbar, is added, the old one,
             * if it exists, must be removed.
             * <p>
             * This method returns <code>newC</code>. If <code>oldC</code> is
             * not equal to <code>newC</code> and is non-<code>null</code>,
             * it will be removed from its parent.
             * @param oldC the <code>Component</code> to replace
             * @param newC the <code>Component</code> to add
             * @return the <code>newC</code>
             */
            // @ts-ignore
            addSingletonComponent(oldC: java.awt.Component, newC: java.awt.Component): java.awt.Component
            /**
             * Adds the specified component to the layout. The layout is
             * identified using one of:
             * <ul>
             * <li>ScrollPaneConstants.VIEWPORT
             * <li>ScrollPaneConstants.VERTICAL_SCROLLBAR
             * <li>ScrollPaneConstants.HORIZONTAL_SCROLLBAR
             * <li>ScrollPaneConstants.ROW_HEADER
             * <li>ScrollPaneConstants.COLUMN_HEADER
             * <li>ScrollPaneConstants.LOWER_LEFT_CORNER
             * <li>ScrollPaneConstants.LOWER_RIGHT_CORNER
             * <li>ScrollPaneConstants.UPPER_LEFT_CORNER
             * <li>ScrollPaneConstants.UPPER_RIGHT_CORNER
             * </ul>
             * @param s the component identifier
             * @param c the the component to be added
             * @exception IllegalArgumentException if <code>s</code> is an invalid key
             */
            // @ts-ignore
            addLayoutComponent(s: string, c: java.awt.Component): void
            /**
             * Removes the specified component from the layout.
             * @param c the component to remove
             */
            // @ts-ignore
            removeLayoutComponent(c: java.awt.Component): void
            /**
             * Returns the vertical scrollbar-display policy.
             * @return an integer giving the display policy
             * @see #setVerticalScrollBarPolicy
             */
            // @ts-ignore
            getVerticalScrollBarPolicy(): int
            /**
             * Sets the vertical scrollbar-display policy. The options
             * are:
             * <ul>
             * <li>ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED
             * <li>ScrollPaneConstants.VERTICAL_SCROLLBAR_NEVER
             * <li>ScrollPaneConstants.VERTICAL_SCROLLBAR_ALWAYS
             * </ul>
             * Note: Applications should use the <code>JScrollPane</code> version
             * of this method.  It only exists for backwards compatibility
             * with the Swing 1.0.2 (and earlier) versions of this class.
             * @param x an integer giving the display policy
             * @exception IllegalArgumentException if <code>x</code> is an invalid
             *           vertical scroll bar policy, as listed above
             */
            // @ts-ignore
            setVerticalScrollBarPolicy(x: number /*int*/): void
            /**
             * Returns the horizontal scrollbar-display policy.
             * @return an integer giving the display policy
             * @see #setHorizontalScrollBarPolicy
             */
            // @ts-ignore
            getHorizontalScrollBarPolicy(): int
            /**
             * Sets the horizontal scrollbar-display policy.
             * The options are:<ul>
             * <li>ScrollPaneConstants.HORIZONTAL_SCROLLBAR_AS_NEEDED
             * <li>ScrollPaneConstants.HORIZONTAL_SCROLLBAR_NEVER
             * <li>ScrollPaneConstants.HORIZONTAL_SCROLLBAR_ALWAYS
             * </ul>
             * Note: Applications should use the <code>JScrollPane</code> version
             * of this method.  It only exists for backwards compatibility
             * with the Swing 1.0.2 (and earlier) versions of this class.
             * @param x an int giving the display policy
             * @exception IllegalArgumentException if <code>x</code> is not a valid
             *           horizontal scrollbar policy, as listed above
             */
            // @ts-ignore
            setHorizontalScrollBarPolicy(x: number /*int*/): void
            /**
             * Returns the <code>JViewport</code> object that displays the
             * scrollable contents.
             * @return the <code>JViewport</code> object that displays the scrollable contents
             * @see JScrollPane#getViewport
             */
            // @ts-ignore
            getViewport(): javax.swing.JViewport
            /**
             * Returns the <code>JScrollBar</code> object that handles horizontal scrolling.
             * @return the <code>JScrollBar</code> object that handles horizontal scrolling
             * @see JScrollPane#getHorizontalScrollBar
             */
            // @ts-ignore
            getHorizontalScrollBar(): javax.swing.JScrollBar
            /**
             * Returns the <code>JScrollBar</code> object that handles vertical scrolling.
             * @return the <code>JScrollBar</code> object that handles vertical scrolling
             * @see JScrollPane#getVerticalScrollBar
             */
            // @ts-ignore
            getVerticalScrollBar(): javax.swing.JScrollBar
            /**
             * Returns the <code>JViewport</code> object that is the row header.
             * @return the <code>JViewport</code> object that is the row header
             * @see JScrollPane#getRowHeader
             */
            // @ts-ignore
            getRowHeader(): javax.swing.JViewport
            /**
             * Returns the <code>JViewport</code> object that is the column header.
             * @return the <code>JViewport</code> object that is the column header
             * @see JScrollPane#getColumnHeader
             */
            // @ts-ignore
            getColumnHeader(): javax.swing.JViewport
            /**
             * Returns the <code>Component</code> at the specified corner.
             * @param key the <code>String</code> specifying the corner
             * @return the <code>Component</code> at the specified corner, as defined in
             *          {#link ScrollPaneConstants}; if <code>key</code> is not one of the
             *           four corners, <code>null</code> is returned
             * @see JScrollPane#getCorner
             */
            // @ts-ignore
            getCorner(key: string): java.awt.Component
            /**
             * The preferred size of a <code>ScrollPane</code> is the size of the insets,
             * plus the preferred size of the viewport, plus the preferred size of
             * the visible headers, plus the preferred size of the scrollbars
             * that will appear given the current view and the current
             * scrollbar displayPolicies.
             * <p>Note that the rowHeader is calculated as part of the preferred width
             * and the colHeader is calculated as part of the preferred size.
             * @param parent the <code>Container</code> that will be laid out
             * @return a <code>Dimension</code> object specifying the preferred size of the
             *          viewport and any scrollbars
             * @see ViewportLayout
             * @see LayoutManager
             */
            // @ts-ignore
            preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension
            /**
             * The minimum size of a <code>ScrollPane</code> is the size of the insets
             * plus minimum size of the viewport, plus the scrollpane's
             * viewportBorder insets, plus the minimum size
             * of the visible headers, plus the minimum size of the
             * scrollbars whose displayPolicy isn't NEVER.
             * @param parent the <code>Container</code> that will be laid out
             * @return a <code>Dimension</code> object specifying the minimum size
             */
            // @ts-ignore
            minimumLayoutSize(parent: java.awt.Container): java.awt.Dimension
            /**
             * Lays out the scrollpane. The positioning of components depends on
             * the following constraints:
             * <ul>
             * <li> The row header, if present and visible, gets its preferred
             * width and the viewport's height.
             * <li> The column header, if present and visible, gets its preferred
             * height and the viewport's width.
             * <li> If a vertical scrollbar is needed, i.e. if the viewport's extent
             * height is smaller than its view height or if the <code>displayPolicy</code>
             * is ALWAYS, it's treated like the row header with respect to its
             * dimensions and is made visible.
             * <li> If a horizontal scrollbar is needed, it is treated like the
             * column header (see the paragraph above regarding the vertical scrollbar).
             * <li> If the scrollpane has a non-<code>null</code>
             * <code>viewportBorder</code>, then space is allocated for that.
             * <li> The viewport gets the space available after accounting for
             * the previous constraints.
             * <li> The corner components, if provided, are aligned with the
             * ends of the scrollbars and headers. If there is a vertical
             * scrollbar, the right corners appear; if there is a horizontal
             * scrollbar, the lower corners appear; a row header gets left
             * corners, and a column header gets upper corners.
             * </ul>
             * @param parent the <code>Container</code> to lay out
             */
            // @ts-ignore
            layoutContainer(parent: java.awt.Container): void
            /**
             * Returns the bounds of the border around the specified scroll pane's
             * viewport.
             * @return the size and position of the viewport border
             * @deprecated As of JDK version Swing1.1
             *     replaced by <code>JScrollPane.getViewportBorderBounds()</code>.
             */
            // @ts-ignore
            getViewportBorderBounds(scrollpane: javax.swing.JScrollPane): java.awt.Rectangle
        }
    }
}
