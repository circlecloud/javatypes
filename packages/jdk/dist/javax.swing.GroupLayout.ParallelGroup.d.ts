declare namespace javax {
    namespace swing {
        namespace GroupLayout {
            /**
             * A {@code Group} that aligns and sizes it's children.
             * {@code ParallelGroup} aligns it's children in
             * four possible ways: along the baseline, centered, anchored to the
             * leading edge, or anchored to the trailing edge.
             * <h3>Baseline</h3>
             * A {@code ParallelGroup} that aligns it's children along the
             * baseline must first decide where the baseline is
             * anchored. The baseline can either be anchored to the top, or
             * anchored to the bottom of the group. That is, the distance between the
             * baseline and the beginning of the group can be a constant
             * distance, or the distance between the end of the group and the
             * baseline can be a constant distance. The possible choices
             * correspond to the {@code BaselineResizeBehavior} constants
             * {@link
             * java.awt.Component.BaselineResizeBehavior#CONSTANT_ASCENT CONSTANT_ASCENT} and
             * {@link
             * java.awt.Component.BaselineResizeBehavior#CONSTANT_DESCENT CONSTANT_DESCENT}.
             * <p>
             * The baseline anchor may be explicitly specified by the
             * {@code createBaselineGroup} method, or determined based on the elements.
             * If not explicitly specified, the baseline will be anchored to
             * the bottom if all the elements with a baseline, and that are
             * aligned to the baseline, have a baseline resize behavior of
             * {@code CONSTANT_DESCENT}; otherwise the baseline is anchored to the top
             * of the group.
             * <p>
             * Elements aligned to the baseline are resizable if they have have
             * a baseline resize behavior of {@code CONSTANT_ASCENT} or
             * {@code CONSTANT_DESCENT}. Elements with a baseline resize
             * behavior of {@code OTHER} or {@code CENTER_OFFSET} are not resizable.
             * <p>
             * The baseline is calculated based on the preferred height of each
             * of the elements that have a baseline. The baseline is
             * calculated using the following algorithm:
             * {@code max(maxNonBaselineHeight, maxAscent + maxDescent)}, where the
             * {@code maxNonBaselineHeight} is the maximum height of all elements
             * that do not have a baseline, or are not aligned along the baseline.
             * {@code maxAscent} is the maximum ascent (baseline) of all elements that
             * have a baseline and are aligned along the baseline.
             * {@code maxDescent} is the maximum descent (preferred height - baseline)
             * of all elements that have a baseline and are aligned along the baseline.
             * <p>
             * A {@code ParallelGroup} that aligns it's elements along the baseline
             * is only useful along the vertical axis. If you create a
             * baseline group and use it along the horizontal axis an
             * {@code IllegalStateException} is thrown when you ask
             * {@code GroupLayout} for the minimum, preferred or maximum size or
             * attempt to layout the components.
             * <p>
             * Elements that are not aligned to the baseline and smaller than the size
             * of the {@code ParallelGroup} are positioned in one of three
             * ways: centered, anchored to the leading edge, or anchored to the
             * trailing edge.
             * <h3>Non-baseline {@code ParallelGroup}</h3>
             * {@code ParallelGroup}s created with an alignment other than
             * {@code BASELINE} align elements that are smaller than the size
             * of the group in one of three ways: centered, anchored to the
             * leading edge, or anchored to the trailing edge.
             * <p>
             * The leading edge is based on the axis and {@code
             * ComponentOrientation}.  For the vertical axis the top edge is
             * always the leading edge, and the bottom edge is always the
             * trailing edge. When the {@code ComponentOrientation} is {@code
             * LEFT_TO_RIGHT}, the leading edge is the left edge and the
             * trailing edge the right edge. A {@code ComponentOrientation} of
             * {@code RIGHT_TO_LEFT} flips the left and right edges. Child
             * elements are aligned based on the specified alignment the
             * element was added with. If you do not specify an alignment, the
             * alignment specified for the {@code ParallelGroup} is used.
             * <p>
             * To align elements along the baseline you {@code createBaselineGroup},
             * or {@code createParallelGroup} with an alignment of {@code BASELINE}.
             * If the group was not created with a baseline alignment, and you attempt
             * to add an element specifying a baseline alignment, an
             * {@code IllegalArgumentException} is thrown.
             * @see #createParallelGroup()
             * @see #createBaselineGroup(boolean,boolean)
             * @since 1.6
             */
            // @ts-ignore
            class ParallelGroup extends javax.swing.GroupLayout.Group {
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public addGroup(group: javax.swing.GroupLayout.Group): javax.swing.GroupLayout.ParallelGroup
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public addComponent(component: java.awt.Component): javax.swing.GroupLayout.ParallelGroup
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public addComponent(component: java.awt.Component, min: number /*int*/, pref: number /*int*/, max: number /*int*/): javax.swing.GroupLayout.ParallelGroup
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public addGap(pref: number /*int*/): javax.swing.GroupLayout.ParallelGroup
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public addGap(min: number /*int*/, pref: number /*int*/, max: number /*int*/): javax.swing.GroupLayout.ParallelGroup
                /**
                 * Adds a {@code Group} to this {@code ParallelGroup} with the
                 * specified alignment. If the child is smaller than the
                 * {@code Group} it is aligned based on the specified
                 * alignment.
                 * @param alignment the alignment
                 * @param group the {#code Group} to add
                 * @return this {#code ParallelGroup}
                 * @throws IllegalArgumentException if {#code alignment} is
                 *          {@code null}
                 */
                // @ts-ignore
                public addGroup(alignment: javax.swing.GroupLayout.Alignment, group: javax.swing.GroupLayout.Group): javax.swing.GroupLayout.ParallelGroup
                /**
                 * Adds a {@code Component} to this {@code ParallelGroup} with
                 * the specified alignment.
                 * @param alignment the alignment
                 * @param component the {#code Component} to add
                 * @return this {#code Group}
                 * @throws IllegalArgumentException if {#code alignment} is
                 *          {@code null}
                 */
                // @ts-ignore
                public addComponent(component: java.awt.Component, alignment: javax.swing.GroupLayout.Alignment): javax.swing.GroupLayout.ParallelGroup
                /**
                 * Adds a {@code Component} to this {@code ParallelGroup} with the
                 * specified alignment and size.
                 * @param alignment the alignment
                 * @param component the {#code Component} to add
                 * @param min the minimum size
                 * @param pref the preferred size
                 * @param max the maximum size
                 * @throws IllegalArgumentException if {#code alignment} is
                 *          {@code null}
                 * @return this {#code Group}
                 */
                // @ts-ignore
                public addComponent(component: java.awt.Component, alignment: javax.swing.GroupLayout.Alignment, min: number /*int*/, pref: number /*int*/, max: number /*int*/): javax.swing.GroupLayout.ParallelGroup
            }
        }
    }
}
