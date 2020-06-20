declare namespace java {
    namespace awt {
        /**
         * The <code>GridBagLayout</code> class is a flexible layout
         * manager that aligns components vertically, horizontally or along their
         * baseline without requiring that the components be of the same size.
         * Each <code>GridBagLayout</code> object maintains a dynamic,
         * rectangular grid of cells, with each component occupying
         * one or more cells, called its <em>display area</em>.
         * <p>
         * Each component managed by a <code>GridBagLayout</code> is associated with
         * an instance of {@link GridBagConstraints}.  The constraints object
         * specifies where a component's display area should be located on the grid
         * and how the component should be positioned within its display area.  In
         * addition to its constraints object, the <code>GridBagLayout</code> also
         * considers each component's minimum and preferred sizes in order to
         * determine a component's size.
         * <p>
         * The overall orientation of the grid depends on the container's
         * {@link ComponentOrientation} property.  For horizontal left-to-right
         * orientations, grid coordinate (0,0) is in the upper left corner of the
         * container with x increasing to the right and y increasing downward.  For
         * horizontal right-to-left orientations, grid coordinate (0,0) is in the upper
         * right corner of the container with x increasing to the left and y
         * increasing downward.
         * <p>
         * To use a grid bag layout effectively, you must customize one or more
         * of the <code>GridBagConstraints</code> objects that are associated
         * with its components. You customize a <code>GridBagConstraints</code>
         * object by setting one or more of its instance variables:
         * <dl>
         * <dt>{@link GridBagConstraints#gridx},
         * {@link GridBagConstraints#gridy}
         * <dd>Specifies the cell containing the leading corner of the component's
         * display area, where the cell at the origin of the grid has address
         * <code>gridx&nbsp;=&nbsp;0</code>,
         * <code>gridy&nbsp;=&nbsp;0</code>.  For horizontal left-to-right layout,
         * a component's leading corner is its upper left.  For horizontal
         * right-to-left layout, a component's leading corner is its upper right.
         * Use <code>GridBagConstraints.RELATIVE</code> (the default value)
         * to specify that the component be placed immediately following
         * (along the x axis for <code>gridx</code> or the y axis for
         * <code>gridy</code>) the component that was added to the container
         * just before this component was added.
         * <dt>{@link GridBagConstraints#gridwidth},
         * {@link GridBagConstraints#gridheight}
         * <dd>Specifies the number of cells in a row (for <code>gridwidth</code>)
         * or column (for <code>gridheight</code>)
         * in the component's display area.
         * The default value is 1.
         * Use <code>GridBagConstraints.REMAINDER</code> to specify
         * that the component's display area will be from <code>gridx</code>
         * to the last cell in the row (for <code>gridwidth</code>)
         * or from <code>gridy</code> to the last cell in the column
         * (for <code>gridheight</code>).
         * Use <code>GridBagConstraints.RELATIVE</code> to specify
         * that the component's display area will be from <code>gridx</code>
         * to the next to the last cell in its row (for <code>gridwidth</code>
         * or from <code>gridy</code> to the next to the last cell in its
         * column (for <code>gridheight</code>).
         * <dt>{@link GridBagConstraints#fill}
         * <dd>Used when the component's display area
         * is larger than the component's requested size
         * to determine whether (and how) to resize the component.
         * Possible values are
         * <code>GridBagConstraints.NONE</code> (the default),
         * <code>GridBagConstraints.HORIZONTAL</code>
         * (make the component wide enough to fill its display area
         * horizontally, but don't change its height),
         * <code>GridBagConstraints.VERTICAL</code>
         * (make the component tall enough to fill its display area
         * vertically, but don't change its width), and
         * <code>GridBagConstraints.BOTH</code>
         * (make the component fill its display area entirely).
         * <dt>{@link GridBagConstraints#ipadx},
         * {@link GridBagConstraints#ipady}
         * <dd>Specifies the component's internal padding within the layout,
         * how much to add to the minimum size of the component.
         * The width of the component will be at least its minimum width
         * plus <code>ipadx</code> pixels. Similarly, the height of
         * the component will be at least the minimum height plus
         * <code>ipady</code> pixels.
         * <dt>{@link GridBagConstraints#insets}
         * <dd>Specifies the component's external padding, the minimum
         * amount of space between the component and the edges of its display area.
         * <dt>{@link GridBagConstraints#anchor}
         * <dd>Specifies where the component should be positioned in its display area.
         * There are three kinds of possible values: absolute, orientation-relative,
         * and baseline-relative
         * Orientation relative values are interpreted relative to the container's
         * <code>ComponentOrientation</code> property while absolute values
         * are not.  Baseline relative values are calculated relative to the
         * baseline.  Valid values are:
         * <center><table BORDER=0 WIDTH=800
         * SUMMARY="absolute, relative and baseline values as described above">
         * <tr>
         * <th><P style="text-align:left">Absolute Values</th>
         * <th><P style="text-align:left">Orientation Relative Values</th>
         * <th><P style="text-align:left">Baseline Relative Values</th>
         * </tr>
         * <tr>
         * <td>
         * <ul style="list-style-type:none">
         * <li><code>GridBagConstraints.NORTH</code></li>
         * <li><code>GridBagConstraints.SOUTH</code></li>
         * <li><code>GridBagConstraints.WEST</code></li>
         * <li><code>GridBagConstraints.EAST</code></li>
         * <li><code>GridBagConstraints.NORTHWEST</code></li>
         * <li><code>GridBagConstraints.NORTHEAST</code></li>
         * <li><code>GridBagConstraints.SOUTHWEST</code></li>
         * <li><code>GridBagConstraints.SOUTHEAST</code></li>
         * <li><code>GridBagConstraints.CENTER</code> (the default)</li>
         * </ul>
         * </td>
         * <td>
         * <ul style="list-style-type:none">
         * <li><code>GridBagConstraints.PAGE_START</code></li>
         * <li><code>GridBagConstraints.PAGE_END</code></li>
         * <li><code>GridBagConstraints.LINE_START</code></li>
         * <li><code>GridBagConstraints.LINE_END</code></li>
         * <li><code>GridBagConstraints.FIRST_LINE_START</code></li>
         * <li><code>GridBagConstraints.FIRST_LINE_END</code></li>
         * <li><code>GridBagConstraints.LAST_LINE_START</code></li>
         * <li><code>GridBagConstraints.LAST_LINE_END</code></li>
         * </ul>
         * </td>
         * <td>
         * <ul style="list-style-type:none">
         * <li><code>GridBagConstraints.BASELINE</code></li>
         * <li><code>GridBagConstraints.BASELINE_LEADING</code></li>
         * <li><code>GridBagConstraints.BASELINE_TRAILING</code></li>
         * <li><code>GridBagConstraints.ABOVE_BASELINE</code></li>
         * <li><code>GridBagConstraints.ABOVE_BASELINE_LEADING</code></li>
         * <li><code>GridBagConstraints.ABOVE_BASELINE_TRAILING</code></li>
         * <li><code>GridBagConstraints.BELOW_BASELINE</code></li>
         * <li><code>GridBagConstraints.BELOW_BASELINE_LEADING</code></li>
         * <li><code>GridBagConstraints.BELOW_BASELINE_TRAILING</code></li>
         * </ul>
         * </td>
         * </tr>
         * </table></center>
         * <dt>{@link GridBagConstraints#weightx},
         * {@link GridBagConstraints#weighty}
         * <dd>Used to determine how to distribute space, which is
         * important for specifying resizing behavior.
         * Unless you specify a weight for at least one component
         * in a row (<code>weightx</code>) and column (<code>weighty</code>),
         * all the components clump together in the center of their container.
         * This is because when the weight is zero (the default),
         * the <code>GridBagLayout</code> object puts any extra space
         * between its grid of cells and the edges of the container.
         * </dl>
         * <p>
         * Each row may have a baseline; the baseline is determined by the
         * components in that row that have a valid baseline and are aligned
         * along the baseline (the component's anchor value is one of {@code
         * BASELINE}, {@code BASELINE_LEADING} or {@code BASELINE_TRAILING}).
         * If none of the components in the row has a valid baseline, the row
         * does not have a baseline.
         * <p>
         * If a component spans rows it is aligned either to the baseline of
         * the start row (if the baseline-resize behavior is {@code
         * CONSTANT_ASCENT}) or the end row (if the baseline-resize behavior
         * is {@code CONSTANT_DESCENT}).  The row that the component is
         * aligned to is called the <em>prevailing row</em>.
         * <p>
         * The following figure shows a baseline layout and includes a
         * component that spans rows:
         * <center><table summary="Baseline Layout">
         * <tr ALIGN=CENTER>
         * <td>
         * <img src="doc-files/GridBagLayout-baseline.png"
         * alt="The following text describes this graphic (Figure 1)." style="float:center">
         * </td>
         * </table></center>
         * This layout consists of three components:
         * <ul><li>A panel that starts in row 0 and ends in row 1.  The panel
         * has a baseline-resize behavior of <code>CONSTANT_DESCENT</code> and has
         * an anchor of <code>BASELINE</code>.  As the baseline-resize behavior
         * is <code>CONSTANT_DESCENT</code> the prevailing row for the panel is
         * row 1.
         * <li>Two buttons, each with a baseline-resize behavior of
         * <code>CENTER_OFFSET</code> and an anchor of <code>BASELINE</code>.
         * </ul>
         * Because the second button and the panel share the same prevailing row,
         * they are both aligned along their baseline.
         * <p>
         * Components positioned using one of the baseline-relative values resize
         * differently than when positioned using an absolute or orientation-relative
         * value.  How components change is dictated by how the baseline of the
         * prevailing row changes.  The baseline is anchored to the
         * bottom of the display area if any components with the same prevailing row
         * have a baseline-resize behavior of <code>CONSTANT_DESCENT</code>,
         * otherwise the baseline is anchored to the top of the display area.
         * The following rules dictate the resize behavior:
         * <ul>
         * <li>Resizable components positioned above the baseline can only
         * grow as tall as the baseline.  For example, if the baseline is at 100
         * and anchored at the top, a resizable component positioned above the
         * baseline can never grow more than 100 units.
         * <li>Similarly, resizable components positioned below the baseline can
         * only grow as high as the difference between the display height and the
         * baseline.
         * <li>Resizable components positioned on the baseline with a
         * baseline-resize behavior of <code>OTHER</code> are only resized if
         * the baseline at the resized size fits within the display area.  If
         * the baseline is such that it does not fit within the display area
         * the component is not resized.
         * <li>Components positioned on the baseline that do not have a
         * baseline-resize behavior of <code>OTHER</code>
         * can only grow as tall as {@code display height - baseline + baseline of component}.
         * </ul>
         * If you position a component along the baseline, but the
         * component does not have a valid baseline, it will be vertically centered
         * in its space.  Similarly if you have positioned a component relative
         * to the baseline and none of the components in the row have a valid
         * baseline the component is vertically centered.
         * <p>
         * The following figures show ten components (all buttons)
         * managed by a grid bag layout.  Figure 2 shows the layout for a horizontal,
         * left-to-right container and Figure 3 shows the layout for a horizontal,
         * right-to-left container.
         * <center><table WIDTH=600 summary="layout">
         * <tr ALIGN=CENTER>
         * <td>
         * <img src="doc-files/GridBagLayout-1.gif" alt="The preceding text describes this graphic (Figure 1)." style="float:center; margin: 7px 10px;">
         * </td>
         * <td>
         * <img src="doc-files/GridBagLayout-2.gif" alt="The preceding text describes this graphic (Figure 2)." style="float:center; margin: 7px 10px;">
         * </td>
         * <tr ALIGN=CENTER>
         * <td>Figure 2: Horizontal, Left-to-Right</td>
         * <td>Figure 3: Horizontal, Right-to-Left</td>
         * </tr>
         * </table></center>
         * <p>
         * Each of the ten components has the <code>fill</code> field
         * of its associated <code>GridBagConstraints</code> object
         * set to <code>GridBagConstraints.BOTH</code>.
         * In addition, the components have the following non-default constraints:
         * <ul>
         * <li>Button1, Button2, Button3: <code>weightx&nbsp;=&nbsp;1.0</code>
         * <li>Button4: <code>weightx&nbsp;=&nbsp;1.0</code>,
         * <code>gridwidth&nbsp;=&nbsp;GridBagConstraints.REMAINDER</code>
         * <li>Button5: <code>gridwidth&nbsp;=&nbsp;GridBagConstraints.REMAINDER</code>
         * <li>Button6: <code>gridwidth&nbsp;=&nbsp;GridBagConstraints.RELATIVE</code>
         * <li>Button7: <code>gridwidth&nbsp;=&nbsp;GridBagConstraints.REMAINDER</code>
         * <li>Button8: <code>gridheight&nbsp;=&nbsp;2</code>,
         * <code>weighty&nbsp;=&nbsp;1.0</code>
         * <li>Button9, Button 10:
         * <code>gridwidth&nbsp;=&nbsp;GridBagConstraints.REMAINDER</code>
         * </ul>
         * <p>
         * Here is the code that implements the example shown above:
         * <hr><blockquote><pre>
         * import java.awt.*;
         * import java.util.*;
         * import java.applet.Applet;
         * public class GridBagEx1 extends Applet {
         * protected void makebutton(String name,
         * GridBagLayout gridbag,
         * GridBagConstraints c) {
         * Button button = new Button(name);
         * gridbag.setConstraints(button, c);
         * add(button);
         * }
         * public void init() {
         * GridBagLayout gridbag = new GridBagLayout();
         * GridBagConstraints c = new GridBagConstraints();
         * setFont(new Font("SansSerif", Font.PLAIN, 14));
         * setLayout(gridbag);
         * c.fill = GridBagConstraints.BOTH;
         * c.weightx = 1.0;
         * makebutton("Button1", gridbag, c);
         * makebutton("Button2", gridbag, c);
         * makebutton("Button3", gridbag, c);
         * c.gridwidth = GridBagConstraints.REMAINDER; //end row
         * makebutton("Button4", gridbag, c);
         * c.weightx = 0.0;                //reset to the default
         * makebutton("Button5", gridbag, c); //another row
         * c.gridwidth = GridBagConstraints.RELATIVE; //next-to-last in row
         * makebutton("Button6", gridbag, c);
         * c.gridwidth = GridBagConstraints.REMAINDER; //end row
         * makebutton("Button7", gridbag, c);
         * c.gridwidth = 1;                //reset to the default
         * c.gridheight = 2;
         * c.weighty = 1.0;
         * makebutton("Button8", gridbag, c);
         * c.weighty = 0.0;                //reset to the default
         * c.gridwidth = GridBagConstraints.REMAINDER; //end row
         * c.gridheight = 1;               //reset to the default
         * makebutton("Button9", gridbag, c);
         * makebutton("Button10", gridbag, c);
         * setSize(300, 100);
         * }
         * public static void main(String args[]) {
         * Frame f = new Frame("GridBag Layout Example");
         * GridBagEx1 ex1 = new GridBagEx1();
         * ex1.init();
         * f.add("Center", ex1);
         * f.pack();
         * f.setSize(f.getPreferredSize());
         * f.show();
         * }
         * }
         * </pre></blockquote><hr>
         * <p>
         * @author Doug Stein
         * @author Bill Spitzak (orignial NeWS &amp; OLIT implementation)
         * @see java.awt.GridBagConstraints
         * @see java.awt.GridBagLayoutInfo
         * @see java.awt.ComponentOrientation
         * @since JDK1.0
         */
        // @ts-ignore
        class GridBagLayout extends java.lang.Object implements java.awt.LayoutManager2, java.io.Serializable {
            /**
             * Creates a grid bag layout manager.
             */
            // @ts-ignore
            constructor()
            /**
             * This field is no longer used to reserve arrays and kept for backward
             * compatibility. Previously, this was
             * the maximum number of grid positions (both horizontal and
             * vertical) that could be laid out by the grid bag layout.
             * Current implementation doesn't impose any limits
             * on the size of a grid.
             */
            // @ts-ignore
            readonly MAXGRIDSIZE: number /*int*/
            /**
             * The smallest grid that can be laid out by the grid bag layout.
             */
            // @ts-ignore
            readonly MINSIZE: number /*int*/
            /**
             * The preferred grid size that can be laid out by the grid bag layout.
             */
            // @ts-ignore
            readonly PREFERREDSIZE: number /*int*/
            /**
             * This hashtable maintains the association between
             * a component and its gridbag constraints.
             * The Keys in <code>comptable</code> are the components and the
             * values are the instances of <code>GridBagConstraints</code>.
             * @serial 
             * @see java.awt.GridBagConstraints
             */
            // @ts-ignore
            comptable: java.util.Hashtable<java.awt.Component, java.awt.GridBagConstraints>
            /**
             * This field holds a gridbag constraints instance
             * containing the default values, so if a component
             * does not have gridbag constraints associated with
             * it, then the component will be assigned a
             * copy of the <code>defaultConstraints</code>.
             * @serial 
             * @see #getConstraints(Component)
             * @see #setConstraints(Component, GridBagConstraints)
             * @see #lookupConstraints(Component)
             */
            // @ts-ignore
            defaultConstraints: java.awt.GridBagConstraints
            /**
             * This field holds the layout information
             * for the gridbag.  The information in this field
             * is based on the most recent validation of the
             * gridbag.
             * If <code>layoutInfo</code> is <code>null</code>
             * this indicates that there are no components in
             * the gridbag or if there are components, they have
             * not yet been validated.
             * @serial 
             * @see #getLayoutInfo(Container, int)
             */
            // @ts-ignore
            layoutInfo: java.awt.GridBagLayoutInfo
            /**
             * This field holds the overrides to the column minimum
             * width.  If this field is non-<code>null</code> the values are
             * applied to the gridbag after all of the minimum columns
             * widths have been calculated.
             * If columnWidths has more elements than the number of
             * columns, columns are added to the gridbag to match
             * the number of elements in columnWidth.
             * @serial 
             * @see #getLayoutDimensions()
             */
            // @ts-ignore
            columnWidths: number /*int*/[]
            /**
             * This field holds the overrides to the row minimum
             * heights.  If this field is non-<code>null</code> the values are
             * applied to the gridbag after all of the minimum row
             * heights have been calculated.
             * If <code>rowHeights</code> has more elements than the number of
             * rows, rows are added to the gridbag to match
             * the number of elements in <code>rowHeights</code>.
             * @serial 
             * @see #getLayoutDimensions()
             */
            // @ts-ignore
            rowHeights: number /*int*/[]
            /**
             * This field holds the overrides to the column weights.
             * If this field is non-<code>null</code> the values are
             * applied to the gridbag after all of the columns
             * weights have been calculated.
             * If <code>columnWeights[i]</code> &gt; weight for column i, then
             * column i is assigned the weight in <code>columnWeights[i]</code>.
             * If <code>columnWeights</code> has more elements than the number
             * of columns, the excess elements are ignored - they do
             * not cause more columns to be created.
             * @serial 
             */
            // @ts-ignore
            columnWeights: number /*double*/[]
            /**
             * This field holds the overrides to the row weights.
             * If this field is non-<code>null</code> the values are
             * applied to the gridbag after all of the rows
             * weights have been calculated.
             * If <code>rowWeights[i]</code> &gt; weight for row i, then
             * row i is assigned the weight in <code>rowWeights[i]</code>.
             * If <code>rowWeights</code> has more elements than the number
             * of rows, the excess elements are ignored - they do
             * not cause more rows to be created.
             * @serial 
             */
            // @ts-ignore
            rowWeights: number /*double*/[]
            /**
             * Sets the constraints for the specified component in this layout.
             * @param comp the component to be modified
             * @param constraints the constraints to be applied
             */
            // @ts-ignore
            setConstraints(comp: java.awt.Component, constraints: java.awt.GridBagConstraints): void
            /**
             * Gets the constraints for the specified component.  A copy of
             * the actual <code>GridBagConstraints</code> object is returned.
             * @param comp the component to be queried
             * @return the constraint for the specified component in this
             *                   grid bag layout; a copy of the actual constraint
             *                   object is returned
             */
            // @ts-ignore
            getConstraints(comp: java.awt.Component): java.awt.GridBagConstraints
            /**
             * Retrieves the constraints for the specified component.
             * The return value is not a copy, but is the actual
             * <code>GridBagConstraints</code> object used by the layout mechanism.
             * <p>
             * If <code>comp</code> is not in the <code>GridBagLayout</code>,
             * a set of default <code>GridBagConstraints</code> are returned.
             * A <code>comp</code> value of <code>null</code> is invalid
             * and returns <code>null</code>.
             * @param comp the component to be queried
             * @return the constraints for the specified component
             */
            // @ts-ignore
            lookupConstraints(comp: java.awt.Component): java.awt.GridBagConstraints
            /**
             * Determines the origin of the layout area, in the graphics coordinate
             * space of the target container.  This value represents the pixel
             * coordinates of the top-left corner of the layout area regardless of
             * the <code>ComponentOrientation</code> value of the container.  This
             * is distinct from the grid origin given by the cell coordinates (0,0).
             * Most applications do not call this method directly.
             * @return the graphics origin of the cell in the top-left
             *              corner of the layout grid
             * @see java.awt.ComponentOrientation
             * @since JDK1.1
             */
            // @ts-ignore
            getLayoutOrigin(): java.awt.Point
            /**
             * Determines column widths and row heights for the layout grid.
             * <p>
             * Most applications do not call this method directly.
             * @return an array of two arrays, containing the widths
             *                        of the layout columns and
             *                        the heights of the layout rows
             * @since JDK1.1
             */
            // @ts-ignore
            getLayoutDimensions(): int[][]
            /**
             * Determines the weights of the layout grid's columns and rows.
             * Weights are used to calculate how much a given column or row
             * stretches beyond its preferred size, if the layout has extra
             * room to fill.
             * <p>
             * Most applications do not call this method directly.
             * @return an array of two arrays, representing the
             *                     horizontal weights of the layout columns
             *                     and the vertical weights of the layout rows
             * @since JDK1.1
             */
            // @ts-ignore
            getLayoutWeights(): double[][]
            /**
             * Determines which cell in the layout grid contains the point
             * specified by <code>(x,&nbsp;y)</code>. Each cell is identified
             * by its column index (ranging from 0 to the number of columns
             * minus 1) and its row index (ranging from 0 to the number of
             * rows minus 1).
             * <p>
             * If the <code>(x,&nbsp;y)</code> point lies
             * outside the grid, the following rules are used.
             * The column index is returned as zero if <code>x</code> lies to the
             * left of the layout for a left-to-right container or to the right of
             * the layout for a right-to-left container.  The column index is returned
             * as the number of columns if <code>x</code> lies
             * to the right of the layout in a left-to-right container or to the left
             * in a right-to-left container.
             * The row index is returned as zero if <code>y</code> lies above the
             * layout, and as the number of rows if <code>y</code> lies
             * below the layout.  The orientation of a container is determined by its
             * <code>ComponentOrientation</code> property.
             * @param x    the <i>x</i> coordinate of a point
             * @param y    the <i>y</i> coordinate of a point
             * @return an ordered pair of indexes that indicate which cell
             *              in the layout grid contains the point
             *              (<i>x</i>,&nbsp;<i>y</i>).
             * @see java.awt.ComponentOrientation
             * @since JDK1.1
             */
            // @ts-ignore
            location(x: number /*int*/, y: number /*int*/): java.awt.Point
            /**
             * Has no effect, since this layout manager does not use a per-component string.
             */
            // @ts-ignore
            addLayoutComponent(name: string, comp: java.awt.Component): void
            /**
             * Adds the specified component to the layout, using the specified
             * <code>constraints</code> object.  Note that constraints
             * are mutable and are, therefore, cloned when cached.
             * @param comp         the component to be added
             * @param constraints  an object that determines how
             *                           the component is added to the layout
             * @exception IllegalArgumentException if <code>constraints</code>
             *             is not a <code>GridBagConstraint</code>
             */
            // @ts-ignore
            addLayoutComponent(comp: java.awt.Component, constraints: any): void
            /**
             * Removes the specified component from this layout.
             * <p>
             * Most applications do not call this method directly.
             * @param comp   the component to be removed.
             * @see java.awt.Container#remove(java.awt.Component)
             * @see java.awt.Container#removeAll()
             */
            // @ts-ignore
            removeLayoutComponent(comp: java.awt.Component): void
            /**
             * Determines the preferred size of the <code>parent</code>
             * container using this grid bag layout.
             * <p>
             * Most applications do not call this method directly.
             * @param parent   the container in which to do the layout
             * @see java.awt.Container#getPreferredSize
             * @return the preferred size of the <code>parent</code>
             *   container
             */
            // @ts-ignore
            preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension
            /**
             * Determines the minimum size of the <code>parent</code> container
             * using this grid bag layout.
             * <p>
             * Most applications do not call this method directly.
             * @param parent   the container in which to do the layout
             * @see java.awt.Container#doLayout
             * @return the minimum size of the <code>parent</code> container
             */
            // @ts-ignore
            minimumLayoutSize(parent: java.awt.Container): java.awt.Dimension
            /**
             * Returns the maximum dimensions for this layout given the components
             * in the specified target container.
             * @param target the container which needs to be laid out
             * @see Container
             * @see #minimumLayoutSize(Container)
             * @see #preferredLayoutSize(Container)
             * @return the maximum dimensions for this layout
             */
            // @ts-ignore
            maximumLayoutSize(target: java.awt.Container): java.awt.Dimension
            /**
             * Returns the alignment along the x axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
             * <p>
             * @return the value <code>0.5f</code> to indicate centered
             */
            // @ts-ignore
            getLayoutAlignmentX(parent: java.awt.Container): float
            /**
             * Returns the alignment along the y axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
             * <p>
             * @return the value <code>0.5f</code> to indicate centered
             */
            // @ts-ignore
            getLayoutAlignmentY(parent: java.awt.Container): float
            /**
             * Invalidates the layout, indicating that if the layout manager
             * has cached information it should be discarded.
             */
            // @ts-ignore
            invalidateLayout(target: java.awt.Container): void
            /**
             * Lays out the specified container using this grid bag layout.
             * This method reshapes components in the specified container in
             * order to satisfy the constraints of this <code>GridBagLayout</code>
             * object.
             * <p>
             * Most applications do not call this method directly.
             * @param parent the container in which to do the layout
             * @see java.awt.Container
             * @see java.awt.Container#doLayout
             */
            // @ts-ignore
            layoutContainer(parent: java.awt.Container): void
            /**
             * Returns a string representation of this grid bag layout's values.
             * @return a string representation of this grid bag layout.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Fills in an instance of <code>GridBagLayoutInfo</code> for the
             * current set of managed children. This requires three passes through the
             * set of children:
             * <ol>
             * <li>Figure out the dimensions of the layout grid.
             * <li>Determine which cells the components occupy.
             * <li>Distribute the weights and min sizes among the rows/columns.
             * </ol>
             * This also caches the minsizes for all the children when they are
             * first encountered (so subsequent loops don't need to ask again).
             * <p>
             * This method should only be used internally by
             * <code>GridBagLayout</code>.
             * @param parent  the layout container
             * @param sizeflag either <code>PREFERREDSIZE</code> or
             *    <code>MINSIZE</code>
             * @return the <code>GridBagLayoutInfo</code> for the set of children
             * @since 1.4
             */
            // @ts-ignore
            getLayoutInfo(parent: java.awt.Container, sizeflag: number /*int*/): java.awt.GridBagLayoutInfo
            /**
             * This method is obsolete and supplied for backwards
             * compatibility only; new code should call {@link
             * #getLayoutInfo(java.awt.Container, int) getLayoutInfo} instead.
             * This method is the same as <code>getLayoutInfo</code>;
             * refer to <code>getLayoutInfo</code> for details on parameters
             * and return value.
             */
            // @ts-ignore
            GetLayoutInfo(parent: java.awt.Container, sizeflag: number /*int*/): java.awt.GridBagLayoutInfo
            /**
             * Adjusts the x, y, width, and height fields to the correct
             * values depending on the constraint geometry and pads.
             * This method should only be used internally by
             * <code>GridBagLayout</code>.
             * @param constraints the constraints to be applied
             * @param r the <code>Rectangle</code> to be adjusted
             * @since 1.4
             */
            // @ts-ignore
            adjustForGravity(constraints: java.awt.GridBagConstraints, r: java.awt.Rectangle): void
            /**
             * This method is obsolete and supplied for backwards
             * compatibility only; new code should call {@link
             * #adjustForGravity(java.awt.GridBagConstraints, java.awt.Rectangle)
             * adjustForGravity} instead.
             * This method is the same as <code>adjustForGravity</code>;
             * refer to <code>adjustForGravity</code> for details
             * on parameters.
             */
            // @ts-ignore
            AdjustForGravity(constraints: java.awt.GridBagConstraints, r: java.awt.Rectangle): void
            /**
             * Figures out the minimum size of the
             * master based on the information from <code>getLayoutInfo</code>.
             * This method should only be used internally by
             * <code>GridBagLayout</code>.
             * @param parent the layout container
             * @param info the layout info for this parent
             * @return a <code>Dimension</code> object containing the
             *    minimum size
             * @since 1.4
             */
            // @ts-ignore
            getMinSize(parent: java.awt.Container, info: java.awt.GridBagLayoutInfo): java.awt.Dimension
            /**
             * This method is obsolete and supplied for backwards
             * compatibility only; new code should call {@link
             * #getMinSize(java.awt.Container, GridBagLayoutInfo) getMinSize} instead.
             * This method is the same as <code>getMinSize</code>;
             * refer to <code>getMinSize</code> for details on parameters
             * and return value.
             */
            // @ts-ignore
            GetMinSize(parent: java.awt.Container, info: java.awt.GridBagLayoutInfo): java.awt.Dimension
            /**
             * Lays out the grid.
             * This method should only be used internally by
             * <code>GridBagLayout</code>.
             * @param parent the layout container
             * @since 1.4
             */
            // @ts-ignore
            arrangeGrid(parent: java.awt.Container): void
            /**
             * This method is obsolete and supplied for backwards
             * compatibility only; new code should call {@link
             * #arrangeGrid(Container) arrangeGrid} instead.
             * This method is the same as <code>arrangeGrid</code>;
             * refer to <code>arrangeGrid</code> for details on the
             * parameter.
             */
            // @ts-ignore
            ArrangeGrid(parent: java.awt.Container): void
        }
    }
}
