declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * View of a simple line-wrapping paragraph that supports
             * multiple fonts, colors, components, icons, etc.  It is
             * basically a vertical box with a margin around it.  The
             * contents of the box are a bunch of rows which are special
             * horizontal boxes.  This view creates a collection of
             * views that represent the child elements of the paragraph
             * element.  Each of these views are placed into a row
             * directly if they will fit, otherwise the <code>breakView</code>
             * method is called to try and carve the view into pieces
             * that fit.
             * @author Timothy Prinzing
             * @author Scott Violet
             * @author Igor Kushnirskiy
             * @see View
             */
            // @ts-ignore
            class ParagraphView extends javax.swing.text.FlowView implements javax.swing.text.TabExpander {
                /**
                 * Constructs a <code>ParagraphView</code> for the given element.
                 * @param elem the element that this view is responsible for
                 */
                // @ts-ignore
                constructor(elem: javax.swing.text.Element)
                /**
                 * Indentation for the first line, from the left inset.
                 */
                // @ts-ignore
                firstLineIndent: number /*int*/
                /**
                 * Sets the type of justification.
                 * @param j one of the following values:
                 *  <ul>
                 *  <li><code>StyleConstants.ALIGN_LEFT</code>
                 *  <li><code>StyleConstants.ALIGN_CENTER</code>
                 *  <li><code>StyleConstants.ALIGN_RIGHT</code>
                 *  </ul>
                 */
                // @ts-ignore
                setJustification(j: number /*int*/): void
                /**
                 * Sets the line spacing.
                 * @param ls the value is a factor of the line hight
                 */
                // @ts-ignore
                setLineSpacing(ls: number /*float*/): void
                /**
                 * Sets the indent on the first line.
                 * @param fi the value in points
                 */
                // @ts-ignore
                setFirstLineIndent(fi: number /*float*/): void
                /**
                 * Set the cached properties from the attributes.
                 */
                // @ts-ignore
                setPropertiesFromAttributes(): void
                /**
                 * Returns the number of views that this view is
                 * responsible for.
                 * The child views of the paragraph are rows which
                 * have been used to arrange pieces of the <code>View</code>s
                 * that represent the child elements.  This is the number
                 * of views that have been tiled in two dimensions,
                 * and should be equivalent to the number of child elements
                 * to the element this view is responsible for.
                 * @return the number of views that this <code>ParagraphView</code>
                 *           is responsible for
                 */
                // @ts-ignore
                getLayoutViewCount(): int
                /**
                 * Returns the view at a given <code>index</code>.
                 * The child views of the paragraph are rows which
                 * have been used to arrange pieces of the <code>Views</code>
                 * that represent the child elements.  This methods returns
                 * the view responsible for the child element index
                 * (prior to breaking).  These are the Views that were
                 * produced from a factory (to represent the child
                 * elements) and used for layout.
                 * @param index the <code>index</code> of the desired view
                 * @return the view at <code>index</code>
                 */
                // @ts-ignore
                getLayoutView(index: number /*int*/): javax.swing.text.View
                /**
                 * Returns the next visual position for the cursor, in
                 * either the east or west direction.
                 * Overridden from <code>CompositeView</code>.
                 * @param pos position into the model
                 * @param b either <code>Position.Bias.Forward</code> or
                 *           <code>Position.Bias.Backward</code>
                 * @param a the allocated region to render into
                 * @param direction either <code>SwingConstants.NORTH</code>
                 *           or <code>SwingConstants.SOUTH</code>
                 * @param biasRet an array containing the bias that were checked
                 *   in this method
                 * @return the location in the model that represents the
                 *   next location visual position
                 */
                // @ts-ignore
                getNextNorthSouthVisualPositionFrom(pos: number /*int*/, b: javax.swing.text.Position.Bias, a: java.awt.Shape, direction: number /*int*/, biasRet: javax.swing.text.Position.Bias[]): int
                /**
                 * Returns the closest model position to <code>x</code>.
                 * <code>rowIndex</code> gives the index of the view that corresponds
                 * that should be looked in.
                 * @param pos  position into the model
                 * @param a the allocated region to render into
                 * @param direction one of the following values:
                 *  <ul>
                 *  <li><code>SwingConstants.NORTH</code>
                 *  <li><code>SwingConstants.SOUTH</code>
                 *  </ul>
                 * @param biasRet an array containing the bias that were checked
                 *   in this method
                 * @param rowIndex the index of the view
                 * @param x the x coordinate of interest
                 * @return the closest model position to <code>x</code>
                 */
                // @ts-ignore
                getClosestPositionTo(pos: number /*int*/, b: javax.swing.text.Position.Bias, a: java.awt.Shape, direction: number /*int*/, biasRet: javax.swing.text.Position.Bias[], rowIndex: number /*int*/, x: number /*int*/): int
                /**
                 * Determines in which direction the next view lays.
                 * Consider the <code>View</code> at index n.
                 * Typically the <code>View</code>s are layed out
                 * from left to right, so that the <code>View</code>
                 * to the EAST will be at index n + 1, and the
                 * <code>View</code> to the WEST will be at index n - 1.
                 * In certain situations, such as with bidirectional text,
                 * it is possible that the <code>View</code> to EAST is not
                 * at index n + 1, but rather at index n - 1,
                 * or that the <code>View</code> to the WEST is not at
                 * index n - 1, but index n + 1.  In this case this method
                 * would return true, indicating the <code>View</code>s are
                 * layed out in descending order.
                 * <p>
                 * This will return true if the text is layed out right
                 * to left at position, otherwise false.
                 * @param position position into the model
                 * @param bias either <code>Position.Bias.Forward</code> or
                 *           <code>Position.Bias.Backward</code>
                 * @return true if the text is layed out right to left at
                 *          position, otherwise false.
                 */
                // @ts-ignore
                flipEastAndWestAtEnds(position: number /*int*/, bias: javax.swing.text.Position.Bias): boolean
                /**
                 * Fetches the constraining span to flow against for
                 * the given child index.
                 * @param index the index of the view being queried
                 * @return the constraining span for the given view at
                 *   <code>index</code>
                 * @since 1.3
                 */
                // @ts-ignore
                getFlowSpan(index: number /*int*/): int
                /**
                 * Fetches the location along the flow axis that the
                 * flow span will start at.
                 * @param index the index of the view being queried
                 * @return the location for the given view at
                 *   <code>index</code>
                 * @since 1.3
                 */
                // @ts-ignore
                getFlowStart(index: number /*int*/): int
                /**
                 * Create a <code>View</code> that should be used to hold a
                 * a row's worth of children in a flow.
                 * @return the new <code>View</code>
                 * @since 1.3
                 */
                // @ts-ignore
                createRow(): javax.swing.text.View
                /**
                 * Returns the next tab stop position given a reference position.
                 * This view implements the tab coordinate system, and calls
                 * <code>getTabbedSpan</code> on the logical children in the process
                 * of layout to determine the desired span of the children.  The
                 * logical children can delegate their tab expansion upward to
                 * the paragraph which knows how to expand tabs.
                 * <code>LabelView</code> is an example of a view that delegates
                 * its tab expansion needs upward to the paragraph.
                 * <p>
                 * This is implemented to try and locate a <code>TabSet</code>
                 * in the paragraph element's attribute set.  If one can be
                 * found, its settings will be used, otherwise a default expansion
                 * will be provided.  The base location for for tab expansion
                 * is the left inset from the paragraphs most recent allocation
                 * (which is what the layout of the children is based upon).
                 * @param x the X reference position
                 * @param tabOffset the position within the text stream
                 *    that the tab occurred at &gt;= 0
                 * @return the trailing end of the tab expansion &gt;= 0
                 * @see TabSet
                 * @see TabStop
                 * @see LabelView
                 */
                // @ts-ignore
                nextTabStop(x: number /*float*/, tabOffset: number /*int*/): float
                /**
                 * Gets the <code>Tabset</code> to be used in calculating tabs.
                 * @return the <code>TabSet</code>
                 */
                // @ts-ignore
                getTabSet(): javax.swing.text.TabSet
                /**
                 * Returns the size used by the views between
                 * <code>startOffset</code> and <code>endOffset</code>.
                 * This uses <code>getPartialView</code> to calculate the
                 * size if the child view implements the
                 * <code>TabableView</code> interface. If a
                 * size is needed and a <code>View</code> does not implement
                 * the <code>TabableView</code> interface,
                 * the <code>preferredSpan</code> will be used.
                 * @param startOffset the starting document offset &gt;= 0
                 * @param endOffset the ending document offset &gt;= startOffset
                 * @return the size &gt;= 0
                 */
                // @ts-ignore
                getPartialSize(startOffset: number /*int*/, endOffset: number /*int*/): float
                /**
                 * Finds the next character in the document with a character in
                 * <code>string</code>, starting at offset <code>start</code>. If
                 * there are no characters found, -1 will be returned.
                 * @param string the string of characters
                 * @param start where to start in the model &gt;= 0
                 * @return the document offset, or -1 if no characters found
                 */
                // @ts-ignore
                findOffsetToCharactersInString(string: string[], start: number /*int*/): int
                /**
                 * Returns where the tabs are calculated from.
                 * @return where tabs are calculated from
                 */
                // @ts-ignore
                getTabBase(): float
                /**
                 * Renders using the given rendering surface and area on that
                 * surface.  This is implemented to delegate to the superclass
                 * after stashing the base coordinate for tab calculations.
                 * @param g the rendering surface to use
                 * @param a the allocated region to render into
                 * @see View#paint
                 */
                // @ts-ignore
                paint(g: java.awt.Graphics, a: java.awt.Shape): void
                /**
                 * Determines the desired alignment for this view along an
                 * axis.  This is implemented to give the alignment to the
                 * center of the first row along the y axis, and the default
                 * along the x axis.
                 * @param axis may be either <code>View.X_AXIS</code> or
                 *    <code>View.Y_AXIS</code>
                 * @return the desired alignment.  This should be a value
                 *    between 0.0 and 1.0 inclusive, where 0 indicates alignment at the
                 *    origin and 1.0 indicates alignment to the full span
                 *    away from the origin.  An alignment of 0.5 would be the
                 *    center of the view.
                 */
                // @ts-ignore
                getAlignment(axis: number /*int*/): float
                /**
                 * Breaks this view on the given axis at the given length.
                 * <p>
                 * <code>ParagraphView</code> instances are breakable
                 * along the <code>Y_AXIS</code> only, and only if
                 * <code>len</code> is after the first line.
                 * @param axis may be either <code>View.X_AXIS</code>
                 *   or <code>View.Y_AXIS</code>
                 * @param len specifies where a potential break is desired
                 *   along the given axis &gt;= 0
                 * @param a the current allocation of the view
                 * @return the fragment of the view that represents the
                 *   given span, if the view can be broken; if the view
                 *   doesn't support breaking behavior, the view itself is
                 *   returned
                 * @see View#breakView
                 */
                // @ts-ignore
                breakView(axis: number /*int*/, len: number /*float*/, a: java.awt.Shape): javax.swing.text.View
                /**
                 * Gets the break weight for a given location.
                 * <p>
                 * <code>ParagraphView</code> instances are breakable
                 * along the <code>Y_AXIS</code> only, and only if
                 * <code>len</code> is after the first row.  If the length
                 * is less than one row, a value of <code>BadBreakWeight</code>
                 * is returned.
                 * @param axis may be either <code>View.X_AXIS</code>
                 *   or <code>View.Y_AXIS</code>
                 * @param len specifies where a potential break is desired &gt;= 0
                 * @return a value indicating the attractiveness of breaking here;
                 *   either <code>GoodBreakWeight</code> or <code>BadBreakWeight</code>
                 * @see View#getBreakWeight
                 */
                // @ts-ignore
                getBreakWeight(axis: number /*int*/, len: number /*float*/): int
                /**
                 * Calculate the needs for the paragraph along the minor axis.
                 * <p>This uses size requirements of the superclass, modified to take into
                 * account the non-breakable areas at the adjacent views edges.  The minimal
                 * size requirements for such views should be no less than the sum of all
                 * adjacent fragments.</p>
                 * <p>If the {@code axis} parameter is neither {@code View.X_AXIS} nor
                 * {@code View.Y_AXIS}, {@link IllegalArgumentException} is thrown.  If the
                 * {@code r} parameter is {@code null,} a new {@code SizeRequirements}
                 * object is created, otherwise the supplied {@code SizeRequirements}
                 * object is returned.</p>
                 * @param axis  the minor axis
                 * @param r     the input {#code SizeRequirements} object
                 * @return the new or adjusted {#code SizeRequirements} object
                 * @throws IllegalArgumentException  if the {#code axis} parameter is invalid
                 */
                // @ts-ignore
                calculateMinorAxisRequirements(axis: number /*int*/, r: javax.swing.SizeRequirements): javax.swing.SizeRequirements
                /**
                 * Gives notification from the document that attributes were changed
                 * in a location that this view is responsible for.
                 * @param changes the change information from the
                 *   associated document
                 * @param a the current allocation of the view
                 * @param f the factory to use to rebuild if the view has children
                 * @see View#changedUpdate
                 */
                // @ts-ignore
                changedUpdate(changes: javax.swing.event.DocumentEvent, a: java.awt.Shape, f: javax.swing.text.ViewFactory): void
            }
        }
    }
}
