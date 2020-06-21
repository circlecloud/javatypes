declare namespace java {
    namespace awt {
        /**
         * The <code>GridBagConstraints</code> class specifies constraints
         * for components that are laid out using the
         * <code>GridBagLayout</code> class.
         * @author Doug Stein
         * @author Bill Spitzak (orignial NeWS &amp; OLIT implementation)
         * @see java.awt.GridBagLayout
         * @since JDK1.0
         */
        // @ts-ignore
        class GridBagConstraints extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable {
            /**
             * Creates a <code>GridBagConstraint</code> object with
             * all of its fields set to their default value.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a <code>GridBagConstraints</code> object with
             * all of its fields set to the passed-in arguments.
             * Note: Because the use of this constructor hinders readability
             * of source code, this constructor should only be used by
             * automatic source code generation tools.
             * @param gridx     The initial gridx value.
             * @param gridy     The initial gridy value.
             * @param gridwidth The initial gridwidth value.
             * @param gridheight        The initial gridheight value.
             * @param weightx   The initial weightx value.
             * @param weighty   The initial weighty value.
             * @param anchor    The initial anchor value.
             * @param fill      The initial fill value.
             * @param insets    The initial insets value.
             * @param ipadx     The initial ipadx value.
             * @param ipady     The initial ipady value.
             * @see java.awt.GridBagConstraints#gridx
             * @see java.awt.GridBagConstraints#gridy
             * @see java.awt.GridBagConstraints#gridwidth
             * @see java.awt.GridBagConstraints#gridheight
             * @see java.awt.GridBagConstraints#weightx
             * @see java.awt.GridBagConstraints#weighty
             * @see java.awt.GridBagConstraints#anchor
             * @see java.awt.GridBagConstraints#fill
             * @see java.awt.GridBagConstraints#insets
             * @see java.awt.GridBagConstraints#ipadx
             * @see java.awt.GridBagConstraints#ipady
             * @since 1.2
             */
            // @ts-ignore
            constructor(gridx: number /*int*/, gridy: number /*int*/, gridwidth: number /*int*/, gridheight: number /*int*/, weightx: number /*double*/, weighty: number /*double*/, anchor: number /*int*/, fill: number /*int*/, insets: java.awt.Insets, ipadx: number /*int*/, ipady: number /*int*/)
            /**
             * Specifies that this component is the next-to-last component in its
             * column or row (<code>gridwidth</code>, <code>gridheight</code>),
             * or that this component be placed next to the previously added
             * component (<code>gridx</code>, <code>gridy</code>).
             * @see java.awt.GridBagConstraints#gridwidth
             * @see java.awt.GridBagConstraints#gridheight
             * @see java.awt.GridBagConstraints#gridx
             * @see java.awt.GridBagConstraints#gridy
             */
            // @ts-ignore
            public static readonly RELATIVE: number /*int*/
            /**
             * Specifies that this component is the
             * last component in its column or row.
             */
            // @ts-ignore
            public static readonly REMAINDER: number /*int*/
            /**
             * Do not resize the component.
             */
            // @ts-ignore
            public static readonly NONE: number /*int*/
            /**
             * Resize the component both horizontally and vertically.
             */
            // @ts-ignore
            public static readonly BOTH: number /*int*/
            /**
             * Resize the component horizontally but not vertically.
             */
            // @ts-ignore
            public static readonly HORIZONTAL: number /*int*/
            /**
             * Resize the component vertically but not horizontally.
             */
            // @ts-ignore
            public static readonly VERTICAL: number /*int*/
            /**
             * Put the component in the center of its display area.
             */
            // @ts-ignore
            public static readonly CENTER: number /*int*/
            /**
             * Put the component at the top of its display area,
             * centered horizontally.
             */
            // @ts-ignore
            public static readonly NORTH: number /*int*/
            /**
             * Put the component at the top-right corner of its display area.
             */
            // @ts-ignore
            public static readonly NORTHEAST: number /*int*/
            /**
             * Put the component on the right side of its display area,
             * centered vertically.
             */
            // @ts-ignore
            public static readonly EAST: number /*int*/
            /**
             * Put the component at the bottom-right corner of its display area.
             */
            // @ts-ignore
            public static readonly SOUTHEAST: number /*int*/
            /**
             * Put the component at the bottom of its display area, centered
             * horizontally.
             */
            // @ts-ignore
            public static readonly SOUTH: number /*int*/
            /**
             * Put the component at the bottom-left corner of its display area.
             */
            // @ts-ignore
            public static readonly SOUTHWEST: number /*int*/
            /**
             * Put the component on the left side of its display area,
             * centered vertically.
             */
            // @ts-ignore
            public static readonly WEST: number /*int*/
            /**
             * Put the component at the top-left corner of its display area.
             */
            // @ts-ignore
            public static readonly NORTHWEST: number /*int*/
            /**
             * Place the component centered along the edge of its display area
             * associated with the start of a page for the current
             * {@code ComponentOrientation}.  Equal to NORTH for horizontal
             * orientations.
             */
            // @ts-ignore
            public static readonly PAGE_START: number /*int*/
            /**
             * Place the component centered along the edge of its display area
             * associated with the end of a page for the current
             * {@code ComponentOrientation}.  Equal to SOUTH for horizontal
             * orientations.
             */
            // @ts-ignore
            public static readonly PAGE_END: number /*int*/
            /**
             * Place the component centered along the edge of its display area where
             * lines of text would normally begin for the current
             * {@code ComponentOrientation}.  Equal to WEST for horizontal,
             * left-to-right orientations and EAST for horizontal, right-to-left
             * orientations.
             */
            // @ts-ignore
            public static readonly LINE_START: number /*int*/
            /**
             * Place the component centered along the edge of its display area where
             * lines of text would normally end for the current
             * {@code ComponentOrientation}.  Equal to EAST for horizontal,
             * left-to-right orientations and WEST for horizontal, right-to-left
             * orientations.
             */
            // @ts-ignore
            public static readonly LINE_END: number /*int*/
            /**
             * Place the component in the corner of its display area where
             * the first line of text on a page would normally begin for the current
             * {@code ComponentOrientation}.  Equal to NORTHWEST for horizontal,
             * left-to-right orientations and NORTHEAST for horizontal, right-to-left
             * orientations.
             */
            // @ts-ignore
            public static readonly FIRST_LINE_START: number /*int*/
            /**
             * Place the component in the corner of its display area where
             * the first line of text on a page would normally end for the current
             * {@code ComponentOrientation}.  Equal to NORTHEAST for horizontal,
             * left-to-right orientations and NORTHWEST for horizontal, right-to-left
             * orientations.
             */
            // @ts-ignore
            public static readonly FIRST_LINE_END: number /*int*/
            /**
             * Place the component in the corner of its display area where
             * the last line of text on a page would normally start for the current
             * {@code ComponentOrientation}.  Equal to SOUTHWEST for horizontal,
             * left-to-right orientations and SOUTHEAST for horizontal, right-to-left
             * orientations.
             */
            // @ts-ignore
            public static readonly LAST_LINE_START: number /*int*/
            /**
             * Place the component in the corner of its display area where
             * the last line of text on a page would normally end for the current
             * {@code ComponentOrientation}.  Equal to SOUTHEAST for horizontal,
             * left-to-right orientations and SOUTHWEST for horizontal, right-to-left
             * orientations.
             */
            // @ts-ignore
            public static readonly LAST_LINE_END: number /*int*/
            /**
             * Possible value for the <code>anchor</code> field.  Specifies
             * that the component should be horizontally centered and
             * vertically aligned along the baseline of the prevailing row.
             * If the component does not have a baseline it will be vertically
             * centered.
             * @since 1.6
             */
            // @ts-ignore
            public static readonly BASELINE: number /*int*/
            /**
             * Possible value for the <code>anchor</code> field.  Specifies
             * that the component should be horizontally placed along the
             * leading edge.  For components with a left-to-right orientation,
             * the leading edge is the left edge.  Vertically the component is
             * aligned along the baseline of the prevailing row.  If the
             * component does not have a baseline it will be vertically
             * centered.
             * @since 1.6
             */
            // @ts-ignore
            public static readonly BASELINE_LEADING: number /*int*/
            /**
             * Possible value for the <code>anchor</code> field.  Specifies
             * that the component should be horizontally placed along the
             * trailing edge.  For components with a left-to-right
             * orientation, the trailing edge is the right edge.  Vertically
             * the component is aligned along the baseline of the prevailing
             * row.  If the component does not have a baseline it will be
             * vertically centered.
             * @since 1.6
             */
            // @ts-ignore
            public static readonly BASELINE_TRAILING: number /*int*/
            /**
             * Possible value for the <code>anchor</code> field.  Specifies
             * that the component should be horizontally centered.  Vertically
             * the component is positioned so that its bottom edge touches
             * the baseline of the starting row.  If the starting row does not
             * have a baseline it will be vertically centered.
             * @since 1.6
             */
            // @ts-ignore
            public static readonly ABOVE_BASELINE: number /*int*/
            /**
             * Possible value for the <code>anchor</code> field.  Specifies
             * that the component should be horizontally placed along the
             * leading edge.  For components with a left-to-right orientation,
             * the leading edge is the left edge.  Vertically the component is
             * positioned so that its bottom edge touches the baseline of the
             * starting row.  If the starting row does not have a baseline it
             * will be vertically centered.
             * @since 1.6
             */
            // @ts-ignore
            public static readonly ABOVE_BASELINE_LEADING: number /*int*/
            /**
             * Possible value for the <code>anchor</code> field.  Specifies
             * that the component should be horizontally placed along the
             * trailing edge.  For components with a left-to-right
             * orientation, the trailing edge is the right edge.  Vertically
             * the component is positioned so that its bottom edge touches
             * the baseline of the starting row.  If the starting row does not
             * have a baseline it will be vertically centered.
             * @since 1.6
             */
            // @ts-ignore
            public static readonly ABOVE_BASELINE_TRAILING: number /*int*/
            /**
             * Possible value for the <code>anchor</code> field.  Specifies
             * that the component should be horizontally centered.  Vertically
             * the component is positioned so that its top edge touches the
             * baseline of the starting row.  If the starting row does not
             * have a baseline it will be vertically centered.
             * @since 1.6
             */
            // @ts-ignore
            public static readonly BELOW_BASELINE: number /*int*/
            /**
             * Possible value for the <code>anchor</code> field.  Specifies
             * that the component should be horizontally placed along the
             * leading edge.  For components with a left-to-right orientation,
             * the leading edge is the left edge.  Vertically the component is
             * positioned so that its top edge touches the baseline of the
             * starting row.  If the starting row does not have a baseline it
             * will be vertically centered.
             * @since 1.6
             */
            // @ts-ignore
            public static readonly BELOW_BASELINE_LEADING: number /*int*/
            /**
             * Possible value for the <code>anchor</code> field.  Specifies
             * that the component should be horizontally placed along the
             * trailing edge.  For components with a left-to-right
             * orientation, the trailing edge is the right edge.  Vertically
             * the component is positioned so that its top edge touches the
             * baseline of the starting row.  If the starting row does not
             * have a baseline it will be vertically centered.
             * @since 1.6
             */
            // @ts-ignore
            public static readonly BELOW_BASELINE_TRAILING: number /*int*/
            /**
             * Specifies the cell containing the leading edge of the component's
             * display area, where the first cell in a row has <code>gridx=0</code>.
             * The leading edge of a component's display area is its left edge for
             * a horizontal, left-to-right container and its right edge for a
             * horizontal, right-to-left container.
             * The value
             * <code>RELATIVE</code> specifies that the component be placed
             * immediately following the component that was added to the container
             * just before this component was added.
             * <p>
             * The default value is <code>RELATIVE</code>.
             * <code>gridx</code> should be a non-negative value.
             * @serial 
             * @see #clone()
             * @see java.awt.GridBagConstraints#gridy
             * @see java.awt.ComponentOrientation
             */
            // @ts-ignore
            public gridx: number /*int*/
            /**
             * Specifies the cell at the top of the component's display area,
             * where the topmost cell has <code>gridy=0</code>. The value
             * <code>RELATIVE</code> specifies that the component be placed just
             * below the component that was added to the container just before
             * this component was added.
             * <p>
             * The default value is <code>RELATIVE</code>.
             * <code>gridy</code> should be a non-negative value.
             * @serial 
             * @see #clone()
             * @see java.awt.GridBagConstraints#gridx
             */
            // @ts-ignore
            public gridy: number /*int*/
            /**
             * Specifies the number of cells in a row for the component's
             * display area.
             * <p>
             * Use <code>REMAINDER</code> to specify that the component's
             * display area will be from <code>gridx</code> to the last
             * cell in the row.
             * Use <code>RELATIVE</code> to specify that the component's
             * display area will be from <code>gridx</code> to the next
             * to the last one in its row.
             * <p>
             * <code>gridwidth</code> should be non-negative and the default
             * value is 1.
             * @serial 
             * @see #clone()
             * @see java.awt.GridBagConstraints#gridheight
             */
            // @ts-ignore
            public gridwidth: number /*int*/
            /**
             * Specifies the number of cells in a column for the component's
             * display area.
             * <p>
             * Use <code>REMAINDER</code> to specify that the component's
             * display area will be from <code>gridy</code> to the last
             * cell in the column.
             * Use <code>RELATIVE</code> to specify that the component's
             * display area will be from <code>gridy</code> to the next
             * to the last one in its column.
             * <p>
             * <code>gridheight</code> should be a non-negative value and the
             * default value is 1.
             * @serial 
             * @see #clone()
             * @see java.awt.GridBagConstraints#gridwidth
             */
            // @ts-ignore
            public gridheight: number /*int*/
            /**
             * Specifies how to distribute extra horizontal space.
             * <p>
             * The grid bag layout manager calculates the weight of a column to
             * be the maximum <code>weightx</code> of all the components in a
             * column. If the resulting layout is smaller horizontally than the area
             * it needs to fill, the extra space is distributed to each column in
             * proportion to its weight. A column that has a weight of zero receives
             * no extra space.
             * <p>
             * If all the weights are zero, all the extra space appears between
             * the grids of the cell and the left and right edges.
             * <p>
             * The default value of this field is <code>0</code>.
             * <code>weightx</code> should be a non-negative value.
             * @serial 
             * @see #clone()
             * @see java.awt.GridBagConstraints#weighty
             */
            // @ts-ignore
            public weightx: number /*double*/
            /**
             * Specifies how to distribute extra vertical space.
             * <p>
             * The grid bag layout manager calculates the weight of a row to be
             * the maximum <code>weighty</code> of all the components in a row.
             * If the resulting layout is smaller vertically than the area it
             * needs to fill, the extra space is distributed to each row in
             * proportion to its weight. A row that has a weight of zero receives no
             * extra space.
             * <p>
             * If all the weights are zero, all the extra space appears between
             * the grids of the cell and the top and bottom edges.
             * <p>
             * The default value of this field is <code>0</code>.
             * <code>weighty</code> should be a non-negative value.
             * @serial 
             * @see #clone()
             * @see java.awt.GridBagConstraints#weightx
             */
            // @ts-ignore
            public weighty: number /*double*/
            /**
             * This field is used when the component is smaller than its
             * display area. It determines where, within the display area, to
             * place the component.
             * <p> There are three kinds of possible values: orientation
             * relative, baseline relative and absolute.  Orientation relative
             * values are interpreted relative to the container's component
             * orientation property, baseline relative values are interpreted
             * relative to the baseline and absolute values are not.  The
             * absolute values are:
             * <code>CENTER</code>, <code>NORTH</code>, <code>NORTHEAST</code>,
             * <code>EAST</code>, <code>SOUTHEAST</code>, <code>SOUTH</code>,
             * <code>SOUTHWEST</code>, <code>WEST</code>, and <code>NORTHWEST</code>.
             * The orientation relative values are: <code>PAGE_START</code>,
             * <code>PAGE_END</code>,
             * <code>LINE_START</code>, <code>LINE_END</code>,
             * <code>FIRST_LINE_START</code>, <code>FIRST_LINE_END</code>,
             * <code>LAST_LINE_START</code> and <code>LAST_LINE_END</code>.  The
             * baseline relative values are:
             * <code>BASELINE</code>, <code>BASELINE_LEADING</code>,
             * <code>BASELINE_TRAILING</code>,
             * <code>ABOVE_BASELINE</code>, <code>ABOVE_BASELINE_LEADING</code>,
             * <code>ABOVE_BASELINE_TRAILING</code>,
             * <code>BELOW_BASELINE</code>, <code>BELOW_BASELINE_LEADING</code>,
             * and <code>BELOW_BASELINE_TRAILING</code>.
             * The default value is <code>CENTER</code>.
             * @serial 
             * @see #clone()
             * @see java.awt.ComponentOrientation
             */
            // @ts-ignore
            public anchor: number /*int*/
            /**
             * This field is used when the component's display area is larger
             * than the component's requested size. It determines whether to
             * resize the component, and if so, how.
             * <p>
             * The following values are valid for <code>fill</code>:
             * <ul>
             * <li>
             * <code>NONE</code>: Do not resize the component.
             * <li>
             * <code>HORIZONTAL</code>: Make the component wide enough to fill
             * its display area horizontally, but do not change its height.
             * <li>
             * <code>VERTICAL</code>: Make the component tall enough to fill its
             * display area vertically, but do not change its width.
             * <li>
             * <code>BOTH</code>: Make the component fill its display area
             * entirely.
             * </ul>
             * <p>
             * The default value is <code>NONE</code>.
             * @serial 
             * @see #clone()
             */
            // @ts-ignore
            public fill: number /*int*/
            /**
             * This field specifies the external padding of the component, the
             * minimum amount of space between the component and the edges of its
             * display area.
             * <p>
             * The default value is <code>new Insets(0, 0, 0, 0)</code>.
             * @serial 
             * @see #clone()
             */
            // @ts-ignore
            public insets: java.awt.Insets
            /**
             * This field specifies the internal padding of the component, how much
             * space to add to the minimum width of the component. The width of
             * the component is at least its minimum width plus
             * <code>ipadx</code> pixels.
             * <p>
             * The default value is <code>0</code>.
             * @serial 
             * @see #clone()
             * @see java.awt.GridBagConstraints#ipady
             */
            // @ts-ignore
            public ipadx: number /*int*/
            /**
             * This field specifies the internal padding, that is, how much
             * space to add to the minimum height of the component. The height of
             * the component is at least its minimum height plus
             * <code>ipady</code> pixels.
             * <p>
             * The default value is 0.
             * @serial 
             * @see #clone()
             * @see java.awt.GridBagConstraints#ipadx
             */
            // @ts-ignore
            public ipady: number /*int*/
            /**
             * Creates a copy of this grid bag constraint.
             * @return a copy of this grid bag constraint
             */
            // @ts-ignore
            public clone(): any
        }
    }
}
