declare namespace javax {
    namespace swing {
        /**
         * Provides a scrollable view of a lightweight component.
         * A <code>JScrollPane</code> manages a viewport, optional
         * vertical and horizontal scroll bars, and optional row and
         * column heading viewports.
         * You can find task-oriented documentation of <code>JScrollPane</code> in
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/scrollpane.html">How to Use Scroll Panes</a>,
         * a section in <em>The Java Tutorial</em>.  Note that
         * <code>JScrollPane</code> does not support heavyweight components.
         * <TABLE STYLE="FLOAT:RIGHT" BORDER="0" SUMMARY="layout">
         * <TR>
         * <TD ALIGN="CENTER">
         * <P STYLE="TEXT-ALIGN:CENTER"><IMG SRC="doc-files/JScrollPane-1.gif"
         * alt="The following text describes this image."
         * WIDTH="256" HEIGHT="248" STYLE="FLOAT:BOTTOM; BORDER:0px">
         * </TD>
         * </TR>
         * </TABLE>
         * The <code>JViewport</code> provides a window,
         * or &quot;viewport&quot; onto a data
         * source -- for example, a text file. That data source is the
         * &quot;scrollable client&quot; (aka data model) displayed by the
         * <code>JViewport</code> view.
         * A <code>JScrollPane</code> basically consists of <code>JScrollBar</code>s,
         * a <code>JViewport</code>, and the wiring between them,
         * as shown in the diagram at right.
         * <p>
         * In addition to the scroll bars and viewport,
         * a <code>JScrollPane</code> can have a
         * column header and a row header. Each of these is a
         * <code>JViewport</code> object that
         * you specify with <code>setRowHeaderView</code>,
         * and <code>setColumnHeaderView</code>.
         * The column header viewport automatically scrolls left and right, tracking
         * the left-right scrolling of the main viewport.
         * (It never scrolls vertically, however.)
         * The row header acts in a similar fashion.
         * <p>
         * Where two scroll bars meet, the row header meets the column header,
         * or a scroll bar meets one of the headers, both components stop short
         * of the corner, leaving a rectangular space which is, by default, empty.
         * These spaces can potentially exist in any number of the four corners.
         * In the previous diagram, the top right space is present and identified
         * by the label "corner component".
         * <p>
         * Any number of these empty spaces can be replaced by using the
         * <code>setCorner</code> method to add a component to a particular corner.
         * (Note: The same component cannot be added to multiple corners.)
         * This is useful if there's
         * some extra decoration or function you'd like to add to the scroll pane.
         * The size of each corner component is entirely determined by the size of the
         * headers and/or scroll bars that surround it.
         * <p>
         * A corner component will only be visible if there is an empty space in that
         * corner for it to exist in. For example, consider a component set into the
         * top right corner of a scroll pane with a column header. If the scroll pane's
         * vertical scrollbar is not present, perhaps because the view component hasn't
         * grown large enough to require it, then the corner component will not be
         * shown (since there is no empty space in that corner created by the meeting
         * of the header and vertical scroll bar). Forcing the scroll bar to always be
         * shown, using
         * <code>setVerticalScrollBarPolicy(VERTICAL_SCROLLBAR_ALWAYS)</code>,
         * will ensure that the space for the corner component always exists.
         * <p>
         * To add a border around the main viewport,
         * you can use <code>setViewportBorder</code>.
         * (Of course, you can also add a border around the whole scroll pane using
         * <code>setBorder</code>.)
         * <p>
         * A common operation to want to do is to set the background color that will
         * be used if the main viewport view is smaller than the viewport, or is
         * not opaque. This can be accomplished by setting the background color
         * of the viewport, via <code>scrollPane.getViewport().setBackground()</code>.
         * The reason for setting the color of the viewport and not the scrollpane
         * is that by default <code>JViewport</code> is opaque
         * which, among other things, means it will completely fill
         * in its background using its background color.  Therefore when
         * <code>JScrollPane</code> draws its background the viewport will
         * usually draw over it.
         * <p>
         * By default <code>JScrollPane</code> uses <code>ScrollPaneLayout</code>
         * to handle the layout of its child Components. <code>ScrollPaneLayout</code>
         * determines the size to make the viewport view in one of two ways:
         * <ol>
         * <li>If the view implements <code>Scrollable</code>
         * a combination of <code>getPreferredScrollableViewportSize</code>,
         * <code>getScrollableTracksViewportWidth</code> and
         * <code>getScrollableTracksViewportHeight</code>is used, otherwise
         * <li><code>getPreferredSize</code> is used.
         * </ol>
         * <p>
         * <strong>Warning:</strong> Swing is not thread safe. For more
         * information see <a
         * href="package-summary.html#threading">Swing's Threading
         * Policy</a>.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @see JScrollBar
         * @see JViewport
         * @see ScrollPaneLayout
         * @see Scrollable
         * @see Component#getPreferredSize
         * @see #setViewportView
         * @see #setRowHeaderView
         * @see #setColumnHeaderView
         * @see #setCorner
         * @see #setViewportBorder
         * @beaninfo attribute: isContainer true
         *      attribute: containerDelegate getViewport
         *    description: A specialized container that manages a viewport, optional scrollbars and headers
         * @author Hans Muller
         */
        // @ts-ignore
        class JScrollPane extends javax.swing.JComponent implements javax.swing.ScrollPaneConstants, javax.accessibility.Accessible {
            /**
             * Creates a <code>JScrollPane</code> that displays the view
             * component in a viewport
             * whose view position can be controlled with a pair of scrollbars.
             * The scrollbar policies specify when the scrollbars are displayed,
             * For example, if <code>vsbPolicy</code> is
             * <code>VERTICAL_SCROLLBAR_AS_NEEDED</code>
             * then the vertical scrollbar only appears if the view doesn't fit
             * vertically. The available policy settings are listed at
             * {@link #setVerticalScrollBarPolicy} and
             * {@link #setHorizontalScrollBarPolicy}.
             * @see #setViewportView
             * @param view the component to display in the scrollpanes viewport
             * @param vsbPolicy an integer that specifies the vertical
             *           scrollbar policy
             * @param hsbPolicy an integer that specifies the horizontal
             *           scrollbar policy
             */
            // @ts-ignore
            constructor(view: java.awt.Component, vsbPolicy: number /*int*/, hsbPolicy: number /*int*/)
            /**
             * Creates a <code>JScrollPane</code> that displays the
             * contents of the specified
             * component, where both horizontal and vertical scrollbars appear
             * whenever the component's contents are larger than the view.
             * @see #setViewportView
             * @param view the component to display in the scrollpane's viewport
             */
            // @ts-ignore
            constructor(view: java.awt.Component)
            /**
             * Creates an empty (no viewport view) <code>JScrollPane</code>
             * with specified
             * scrollbar policies. The available policy settings are listed at
             * {@link #setVerticalScrollBarPolicy} and
             * {@link #setHorizontalScrollBarPolicy}.
             * @see #setViewportView
             * @param vsbPolicy an integer that specifies the vertical
             *           scrollbar policy
             * @param hsbPolicy an integer that specifies the horizontal
             *           scrollbar policy
             */
            // @ts-ignore
            constructor(vsbPolicy: number /*int*/, hsbPolicy: number /*int*/)
            /**
             * Creates an empty (no viewport view) <code>JScrollPane</code>
             * where both horizontal and vertical scrollbars appear when needed.
             */
            // @ts-ignore
            constructor()
            /**
             * The display policy for the vertical scrollbar.
             * The default is
             * <code>ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED</code>.
             * @see #setVerticalScrollBarPolicy
             */
            // @ts-ignore
            verticalScrollBarPolicy: number /*int*/
            /**
             * The display policy for the horizontal scrollbar.
             * The default is
             * <code>ScrollPaneConstants.HORIZONTAL_SCROLLBAR_AS_NEEDED</code>.
             * @see #setHorizontalScrollBarPolicy
             */
            // @ts-ignore
            horizontalScrollBarPolicy: number /*int*/
            /**
             * The scrollpane's viewport child.  Default is an empty
             * <code>JViewport</code>.
             * @see #setViewport
             */
            // @ts-ignore
            viewport: javax.swing.JViewport
            /**
             * The scrollpane's vertical scrollbar child.
             * Default is a <code>JScrollBar</code>.
             * @see #setVerticalScrollBar
             */
            // @ts-ignore
            verticalScrollBar: javax.swing.JScrollBar
            /**
             * The scrollpane's horizontal scrollbar child.
             * Default is a <code>JScrollBar</code>.
             * @see #setHorizontalScrollBar
             */
            // @ts-ignore
            horizontalScrollBar: javax.swing.JScrollBar
            /**
             * The row header child.  Default is <code>null</code>.
             * @see #setRowHeader
             */
            // @ts-ignore
            rowHeader: javax.swing.JViewport
            /**
             * The column header child.  Default is <code>null</code>.
             * @see #setColumnHeader
             */
            // @ts-ignore
            columnHeader: javax.swing.JViewport
            /**
             * The component to display in the lower left corner.
             * Default is <code>null</code>.
             * @see #setCorner
             */
            // @ts-ignore
            lowerLeft: java.awt.Component
            /**
             * The component to display in the lower right corner.
             * Default is <code>null</code>.
             * @see #setCorner
             */
            // @ts-ignore
            lowerRight: java.awt.Component
            /**
             * The component to display in the upper left corner.
             * Default is <code>null</code>.
             * @see #setCorner
             */
            // @ts-ignore
            upperLeft: java.awt.Component
            /**
             * The component to display in the upper right corner.
             * Default is <code>null</code>.
             * @see #setCorner
             */
            // @ts-ignore
            upperRight: java.awt.Component
            /**
             * Returns the look and feel (L&amp;F) object that renders this component.
             * @return the <code>ScrollPaneUI</code> object that renders this
             *                           component
             * @see #setUI
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The UI object that implements the Component's LookAndFeel.
             */
            // @ts-ignore
            public getUI(): javax.swing.plaf.ScrollPaneUI
            /**
             * Sets the <code>ScrollPaneUI</code> object that provides the
             * look and feel (L&amp;F) for this component.
             * @param ui the <code>ScrollPaneUI</code> L&amp;F object
             * @see #getUI
             */
            // @ts-ignore
            public setUI(ui: javax.swing.plaf.ScrollPaneUI): void
            /**
             * Replaces the current <code>ScrollPaneUI</code> object with a version
             * from the current default look and feel.
             * To be called when the default look and feel changes.
             * @see JComponent#updateUI
             * @see UIManager#getUI
             */
            // @ts-ignore
            public updateUI(): void
            /**
             * Returns the suffix used to construct the name of the L&amp;F class used to
             * render this component.
             * @return the string "ScrollPaneUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             * @beaninfo hidden: true
             */
            // @ts-ignore
            public getUIClassID(): string
            /**
             * Sets the layout manager for this <code>JScrollPane</code>.
             * This method overrides <code>setLayout</code> in
             * <code>java.awt.Container</code> to ensure that only
             * <code>LayoutManager</code>s which
             * are subclasses of <code>ScrollPaneLayout</code> can be used in a
             * <code>JScrollPane</code>. If <code>layout</code> is non-null, this
             * will invoke <code>syncWithScrollPane</code> on it.
             * @param layout the specified layout manager
             * @exception ClassCastException if layout is not a
             *                   <code>ScrollPaneLayout</code>
             * @see java.awt.Container#getLayout
             * @see java.awt.Container#setLayout
             * @beaninfo hidden: true
             */
            // @ts-ignore
            public setLayout(layout: java.awt.LayoutManager): void
            /**
             * Overridden to return true so that any calls to <code>revalidate</code>
             * on any descendants of this <code>JScrollPane</code> will cause the
             * entire tree beginning with this <code>JScrollPane</code> to be
             * validated.
             * @return true
             * @see java.awt.Container#validate
             * @see JComponent#revalidate
             * @see JComponent#isValidateRoot
             * @see java.awt.Container#isValidateRoot
             * @beaninfo hidden: true
             */
            // @ts-ignore
            public isValidateRoot(): boolean
            /**
             * Returns the vertical scroll bar policy value.
             * @return the <code>verticalScrollBarPolicy</code> property
             * @see #setVerticalScrollBarPolicy
             */
            // @ts-ignore
            public getVerticalScrollBarPolicy(): number /*int*/
            /**
             * Determines when the vertical scrollbar appears in the scrollpane.
             * Legal values are:
             * <ul>
             * <li><code>ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED</code>
             * <li><code>ScrollPaneConstants.VERTICAL_SCROLLBAR_NEVER</code>
             * <li><code>ScrollPaneConstants.VERTICAL_SCROLLBAR_ALWAYS</code>
             * </ul>
             * @param policy one of the three values listed above
             * @exception IllegalArgumentException if <code>policy</code>
             *                           is not one of the legal values shown above
             * @see #getVerticalScrollBarPolicy
             * @beaninfo preferred: true
             *        bound: true
             *  description: The scrollpane vertical scrollbar policy
             *         enum: VERTICAL_SCROLLBAR_AS_NEEDED ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED
             *               VERTICAL_SCROLLBAR_NEVER ScrollPaneConstants.VERTICAL_SCROLLBAR_NEVER
             *               VERTICAL_SCROLLBAR_ALWAYS ScrollPaneConstants.VERTICAL_SCROLLBAR_ALWAYS
             */
            // @ts-ignore
            public setVerticalScrollBarPolicy(policy: number /*int*/): void
            /**
             * Returns the horizontal scroll bar policy value.
             * @return the <code>horizontalScrollBarPolicy</code> property
             * @see #setHorizontalScrollBarPolicy
             */
            // @ts-ignore
            public getHorizontalScrollBarPolicy(): number /*int*/
            /**
             * Determines when the horizontal scrollbar appears in the scrollpane.
             * The options are:<ul>
             * <li><code>ScrollPaneConstants.HORIZONTAL_SCROLLBAR_AS_NEEDED</code>
             * <li><code>ScrollPaneConstants.HORIZONTAL_SCROLLBAR_NEVER</code>
             * <li><code>ScrollPaneConstants.HORIZONTAL_SCROLLBAR_ALWAYS</code>
             * </ul>
             * @param policy one of the three values listed above
             * @exception IllegalArgumentException if <code>policy</code>
             *                           is not one of the legal values shown above
             * @see #getHorizontalScrollBarPolicy
             * @beaninfo preferred: true
             *        bound: true
             *  description: The scrollpane scrollbar policy
             *         enum: HORIZONTAL_SCROLLBAR_AS_NEEDED ScrollPaneConstants.HORIZONTAL_SCROLLBAR_AS_NEEDED
             *               HORIZONTAL_SCROLLBAR_NEVER ScrollPaneConstants.HORIZONTAL_SCROLLBAR_NEVER
             *               HORIZONTAL_SCROLLBAR_ALWAYS ScrollPaneConstants.HORIZONTAL_SCROLLBAR_ALWAYS
             */
            // @ts-ignore
            public setHorizontalScrollBarPolicy(policy: number /*int*/): void
            /**
             * Returns the <code>Border</code> object that surrounds the viewport.
             * @return the <code>viewportBorder</code> property
             * @see #setViewportBorder
             */
            // @ts-ignore
            public getViewportBorder(): javax.swing.border.Border
            /**
             * Adds a border around the viewport.  Note that the border isn't
             * set on the viewport directly, <code>JViewport</code> doesn't support
             * the <code>JComponent</code> border property.
             * Similarly setting the <code>JScrollPane</code>s
             * viewport doesn't affect the <code>viewportBorder</code> property.
             * <p>
             * The default value of this property is computed by the look
             * and feel implementation.
             * @param viewportBorder the border to be added
             * @see #getViewportBorder
             * @see #setViewport
             * @beaninfo preferred: true
             *        bound: true
             *  description: The border around the viewport.
             */
            // @ts-ignore
            public setViewportBorder(viewportBorder: javax.swing.border.Border): void
            /**
             * Returns the bounds of the viewport's border.
             * @return a <code>Rectangle</code> object specifying the viewport border
             */
            // @ts-ignore
            public getViewportBorderBounds(): java.awt.Rectangle
            /**
             * Returns a <code>JScrollPane.ScrollBar</code> by default.
             * Subclasses may override this method to force <code>ScrollPaneUI</code>
             * implementations to use a <code>JScrollBar</code> subclass.
             * Used by <code>ScrollPaneUI</code> implementations to
             * create the horizontal scrollbar.
             * @return a <code>JScrollBar</code> with a horizontal orientation
             * @see JScrollBar
             */
            // @ts-ignore
            public createHorizontalScrollBar(): javax.swing.JScrollBar
            /**
             * Returns the horizontal scroll bar that controls the viewport's
             * horizontal view position.
             * @return the <code>horizontalScrollBar</code> property
             * @see #setHorizontalScrollBar
             */
            // @ts-ignore
            public getHorizontalScrollBar(): javax.swing.JScrollBar
            /**
             * Adds the scrollbar that controls the viewport's horizontal view
             * position to the scrollpane.
             * This is usually unnecessary, as <code>JScrollPane</code> creates
             * horizontal and vertical scrollbars by default.
             * @param horizontalScrollBar the horizontal scrollbar to be added
             * @see #createHorizontalScrollBar
             * @see #getHorizontalScrollBar
             * @beaninfo expert: true
             *          bound: true
             *    description: The horizontal scrollbar.
             */
            // @ts-ignore
            public setHorizontalScrollBar(horizontalScrollBar: javax.swing.JScrollBar): void
            /**
             * Returns a <code>JScrollPane.ScrollBar</code> by default.  Subclasses
             * may override this method to force <code>ScrollPaneUI</code>
             * implementations to use a <code>JScrollBar</code> subclass.
             * Used by <code>ScrollPaneUI</code> implementations to create the
             * vertical scrollbar.
             * @return a <code>JScrollBar</code> with a vertical orientation
             * @see JScrollBar
             */
            // @ts-ignore
            public createVerticalScrollBar(): javax.swing.JScrollBar
            /**
             * Returns the vertical scroll bar that controls the viewports
             * vertical view position.
             * @return the <code>verticalScrollBar</code> property
             * @see #setVerticalScrollBar
             */
            // @ts-ignore
            public getVerticalScrollBar(): javax.swing.JScrollBar
            /**
             * Adds the scrollbar that controls the viewports vertical view position
             * to the scrollpane.  This is usually unnecessary,
             * as <code>JScrollPane</code> creates vertical and
             * horizontal scrollbars by default.
             * @param verticalScrollBar the new vertical scrollbar to be added
             * @see #createVerticalScrollBar
             * @see #getVerticalScrollBar
             * @beaninfo expert: true
             *          bound: true
             *    description: The vertical scrollbar.
             */
            // @ts-ignore
            public setVerticalScrollBar(verticalScrollBar: javax.swing.JScrollBar): void
            /**
             * Returns a new <code>JViewport</code> by default.
             * Used to create the
             * viewport (as needed) in <code>setViewportView</code>,
             * <code>setRowHeaderView</code>, and <code>setColumnHeaderView</code>.
             * Subclasses may override this method to return a subclass of
             * <code>JViewport</code>.
             * @return a new <code>JViewport</code>
             */
            // @ts-ignore
            createViewport(): javax.swing.JViewport
            /**
             * Returns the current <code>JViewport</code>.
             * @see #setViewport
             * @return the <code>viewport</code> property
             */
            // @ts-ignore
            public getViewport(): javax.swing.JViewport
            /**
             * Removes the old viewport (if there is one); forces the
             * viewPosition of the new viewport to be in the +x,+y quadrant;
             * syncs up the row and column headers (if there are any) with the
             * new viewport; and finally syncs the scrollbars and
             * headers with the new viewport.
             * <p>
             * Most applications will find it more convenient to use
             * <code>setViewportView</code>
             * to add a viewport and a view to the scrollpane.
             * @param viewport the new viewport to be used; if viewport is
             *           <code>null</code>, the old viewport is still removed
             *           and the new viewport is set to <code>null</code>
             * @see #createViewport
             * @see #getViewport
             * @see #setViewportView
             * @beaninfo expert: true
             *         bound: true
             *     attribute: visualUpdate true
             *   description: The viewport child for this scrollpane
             */
            // @ts-ignore
            public setViewport(viewport: javax.swing.JViewport): void
            /**
             * Creates a viewport if necessary and then sets its view.  Applications
             * that don't provide the view directly to the <code>JScrollPane</code>
             * constructor
             * should use this method to specify the scrollable child that's going
             * to be displayed in the scrollpane. For example:
             * <pre>
             * JScrollPane scrollpane = new JScrollPane();
             * scrollpane.setViewportView(myBigComponentToScroll);
             * </pre>
             * Applications should not add children directly to the scrollpane.
             * @param view the component to add to the viewport
             * @see #setViewport
             * @see JViewport#setView
             */
            // @ts-ignore
            public setViewportView(view: java.awt.Component): void
            /**
             * Returns the row header.
             * @return the <code>rowHeader</code> property
             * @see #setRowHeader
             */
            // @ts-ignore
            public getRowHeader(): javax.swing.JViewport
            /**
             * Removes the old rowHeader, if it exists; if the new rowHeader
             * isn't <code>null</code>, syncs the y coordinate of its
             * viewPosition with
             * the viewport (if there is one) and then adds it to the scroll pane.
             * <p>
             * Most applications will find it more convenient to use
             * <code>setRowHeaderView</code>
             * to add a row header component and its viewport to the scroll pane.
             * @param rowHeader the new row header to be used; if <code>null</code>
             *           the old row header is still removed and the new rowHeader
             *           is set to <code>null</code>
             * @see #getRowHeader
             * @see #setRowHeaderView
             * @beaninfo bound: true
             *        expert: true
             *   description: The row header child for this scrollpane
             */
            // @ts-ignore
            public setRowHeader(rowHeader: javax.swing.JViewport): void
            /**
             * Creates a row-header viewport if necessary, sets
             * its view and then adds the row-header viewport
             * to the scrollpane.  For example:
             * <pre>
             * JScrollPane scrollpane = new JScrollPane();
             * scrollpane.setViewportView(myBigComponentToScroll);
             * scrollpane.setRowHeaderView(myBigComponentsRowHeader);
             * </pre>
             * @see #setRowHeader
             * @see JViewport#setView
             * @param view the component to display as the row header
             */
            // @ts-ignore
            public setRowHeaderView(view: java.awt.Component): void
            /**
             * Returns the column header.
             * @return the <code>columnHeader</code> property
             * @see #setColumnHeader
             */
            // @ts-ignore
            public getColumnHeader(): javax.swing.JViewport
            /**
             * Removes the old columnHeader, if it exists; if the new columnHeader
             * isn't <code>null</code>, syncs the x coordinate of its viewPosition
             * with the viewport (if there is one) and then adds it to the scroll pane.
             * <p>
             * Most applications will find it more convenient to use
             * <code>setColumnHeaderView</code>
             * to add a column header component and its viewport to the scroll pane.
             * @see #getColumnHeader
             * @see #setColumnHeaderView
             * @beaninfo bound: true
             *   description: The column header child for this scrollpane
             *     attribute: visualUpdate true
             */
            // @ts-ignore
            public setColumnHeader(columnHeader: javax.swing.JViewport): void
            /**
             * Creates a column-header viewport if necessary, sets
             * its view, and then adds the column-header viewport
             * to the scrollpane.  For example:
             * <pre>
             * JScrollPane scrollpane = new JScrollPane();
             * scrollpane.setViewportView(myBigComponentToScroll);
             * scrollpane.setColumnHeaderView(myBigComponentsColumnHeader);
             * </pre>
             * @see #setColumnHeader
             * @see JViewport#setView
             * @param view the component to display as the column header
             */
            // @ts-ignore
            public setColumnHeaderView(view: java.awt.Component): void
            /**
             * Returns the component at the specified corner. The
             * <code>key</code> value specifying the corner is one of:
             * <ul>
             * <li>ScrollPaneConstants.LOWER_LEFT_CORNER
             * <li>ScrollPaneConstants.LOWER_RIGHT_CORNER
             * <li>ScrollPaneConstants.UPPER_LEFT_CORNER
             * <li>ScrollPaneConstants.UPPER_RIGHT_CORNER
             * <li>ScrollPaneConstants.LOWER_LEADING_CORNER
             * <li>ScrollPaneConstants.LOWER_TRAILING_CORNER
             * <li>ScrollPaneConstants.UPPER_LEADING_CORNER
             * <li>ScrollPaneConstants.UPPER_TRAILING_CORNER
             * </ul>
             * @param key one of the values as shown above
             * @return the corner component (which may be <code>null</code>)
             *          identified by the given key, or <code>null</code>
             *          if the key is invalid
             * @see #setCorner
             */
            // @ts-ignore
            public getCorner(key: java.lang.String | string): java.awt.Component
            /**
             * Adds a child that will appear in one of the scroll panes
             * corners, if there's room.   For example with both scrollbars
             * showing (on the right and bottom edges of the scrollpane)
             * the lower left corner component will be shown in the space
             * between ends of the two scrollbars. Legal values for
             * the <b>key</b> are:
             * <ul>
             * <li>ScrollPaneConstants.LOWER_LEFT_CORNER
             * <li>ScrollPaneConstants.LOWER_RIGHT_CORNER
             * <li>ScrollPaneConstants.UPPER_LEFT_CORNER
             * <li>ScrollPaneConstants.UPPER_RIGHT_CORNER
             * <li>ScrollPaneConstants.LOWER_LEADING_CORNER
             * <li>ScrollPaneConstants.LOWER_TRAILING_CORNER
             * <li>ScrollPaneConstants.UPPER_LEADING_CORNER
             * <li>ScrollPaneConstants.UPPER_TRAILING_CORNER
             * </ul>
             * <p>
             * Although "corner" doesn't match any beans property
             * signature, <code>PropertyChange</code> events are generated with the
             * property name set to the corner key.
             * @param key identifies which corner the component will appear in
             * @param corner one of the following components:
             *  <ul>
             *  <li>lowerLeft
             *  <li>lowerRight
             *  <li>upperLeft
             *  <li>upperRight
             *  </ul>
             * @exception IllegalArgumentException if corner key is invalid
             */
            // @ts-ignore
            public setCorner(key: java.lang.String | string, corner: java.awt.Component): void
            /**
             * Sets the orientation for the vertical and horizontal
             * scrollbars as determined by the
             * <code>ComponentOrientation</code> argument.
             * @param co one of the following values:
             *  <ul>
             *  <li>java.awt.ComponentOrientation.LEFT_TO_RIGHT
             *  <li>java.awt.ComponentOrientation.RIGHT_TO_LEFT
             *  <li>java.awt.ComponentOrientation.UNKNOWN
             *  </ul>
             * @see java.awt.ComponentOrientation
             */
            // @ts-ignore
            public setComponentOrientation(co: java.awt.ComponentOrientation): void
            /**
             * Indicates whether or not scrolling will take place in response to the
             * mouse wheel.  Wheel scrolling is enabled by default.
             * @see #setWheelScrollingEnabled
             * @since 1.4
             * @beaninfo bound: true
             *  description: Flag for enabling/disabling mouse wheel scrolling
             */
            // @ts-ignore
            public isWheelScrollingEnabled(): boolean
            /**
             * Enables/disables scrolling in response to movement of the mouse wheel.
             * Wheel scrolling is enabled by default.
             * @param handleWheel   <code>true</code> if scrolling should be done
             *                       automatically for a MouseWheelEvent,
             *                       <code>false</code> otherwise.
             * @see #isWheelScrollingEnabled
             * @see java.awt.event.MouseWheelEvent
             * @see java.awt.event.MouseWheelListener
             * @since 1.4
             * @beaninfo bound: true
             *  description: Flag for enabling/disabling mouse wheel scrolling
             */
            // @ts-ignore
            public setWheelScrollingEnabled(handleWheel: boolean): void
            /**
             * Returns a string representation of this <code>JScrollPane</code>.
             * This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JScrollPane</code>.
             */
            // @ts-ignore
            paramString(): string
            /**
             * Gets the AccessibleContext associated with this JScrollPane.
             * For scroll panes, the AccessibleContext takes the form of an
             * AccessibleJScrollPane.
             * A new AccessibleJScrollPane instance is created if necessary.
             * @return an AccessibleJScrollPane that serves as the
             *          AccessibleContext of this JScrollPane
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
