declare namespace javax {
    namespace swing {
        namespace GroupLayout {
            /**
             * A {@code Group} that positions and sizes its elements
             * sequentially, one after another.  This class has no public
             * constructor, use the {@code createSequentialGroup} method
             * to create one.
             * <p>
             * In order to align a {@code SequentialGroup} along the baseline
             * of a baseline aligned {@code ParallelGroup} you need to specify
             * which of the elements of the {@code SequentialGroup} is used to
             * determine the baseline.  The element used to calculate the
             * baseline is specified using one of the {@code add} methods that
             * take a {@code boolean}. The last element added with a value of
             * {@code true} for {@code useAsBaseline} is used to calculate the
             * baseline.
             * @see #createSequentialGroup
             * @since 1.6
             */
            // @ts-ignore
            class SequentialGroup extends javax.swing.GroupLayout.Group {
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                addGroup(group: javax.swing.GroupLayout.Group): javax.swing.GroupLayout.SequentialGroup
                /**
                 * Adds a {@code Group} to this {@code Group}.
                 * @param group the {#code Group} to add
                 * @param useAsBaseline whether the specified {#code Group} should
                 *         be used to calculate the baseline for this {@code Group}
                 * @return this {#code Group}
                 */
                // @ts-ignore
                addGroup(useAsBaseline: boolean, group: javax.swing.GroupLayout.Group): javax.swing.GroupLayout.SequentialGroup
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                addComponent(component: java.awt.Component): javax.swing.GroupLayout.SequentialGroup
                /**
                 * Adds a {@code Component} to this {@code Group}.
                 * @param useAsBaseline whether the specified {#code Component} should
                 *         be used to calculate the baseline for this {@code Group}
                 * @param component the {#code Component} to add
                 * @return this {#code Group}
                 */
                // @ts-ignore
                addComponent(useAsBaseline: boolean, component: java.awt.Component): javax.swing.GroupLayout.SequentialGroup
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                addComponent(component: java.awt.Component, min: number /*int*/, pref: number /*int*/, max: number /*int*/): javax.swing.GroupLayout.SequentialGroup
                /**
                 * Adds a {@code Component} to this {@code Group}
                 * with the specified size.
                 * @param useAsBaseline whether the specified {#code Component} should
                 *         be used to calculate the baseline for this {@code Group}
                 * @param component the {#code Component} to add
                 * @param min the minimum size or one of {#code DEFAULT_SIZE} or
                 *             {@code PREFERRED_SIZE}
                 * @param pref the preferred size or one of {#code DEFAULT_SIZE} or
                 *             {@code PREFERRED_SIZE}
                 * @param max the maximum size or one of {#code DEFAULT_SIZE} or
                 *             {@code PREFERRED_SIZE}
                 * @return this {#code Group}
                 */
                // @ts-ignore
                addComponent(useAsBaseline: boolean, component: java.awt.Component, min: number /*int*/, pref: number /*int*/, max: number /*int*/): javax.swing.GroupLayout.SequentialGroup
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                addGap(size: number /*int*/): javax.swing.GroupLayout.SequentialGroup
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                addGap(min: number /*int*/, pref: number /*int*/, max: number /*int*/): javax.swing.GroupLayout.SequentialGroup
                /**
                 * Adds an element representing the preferred gap between two
                 * components. The element created to represent the gap is not
                 * resizable.
                 * @param comp1 the first component
                 * @param comp2 the second component
                 * @param type the type of gap; one of the constants defined by
                 *         {#code LayoutStyle}
                 * @return this {#code SequentialGroup}
                 * @throws IllegalArgumentException if {#code type}, {@code comp1} or
                 *          {@code comp2} is {@code null}
                 * @see LayoutStyle
                 */
                // @ts-ignore
                addPreferredGap(comp1: javax.swing.JComponent, comp2: javax.swing.JComponent, type: javax.swing.LayoutStyle.ComponentPlacement): javax.swing.GroupLayout.SequentialGroup
                /**
                 * Adds an element representing the preferred gap between two
                 * components.
                 * @param comp1 the first component
                 * @param comp2 the second component
                 * @param type the type of gap
                 * @param pref the preferred size of the grap; one of
                 *         {#code DEFAULT_SIZE} or a value &gt;= 0
                 * @param max the maximum size of the gap; one of
                 *         {#code DEFAULT_SIZE}, {@code PREFERRED_SIZE}
                 *         or a value &gt;= 0
                 * @return this {#code SequentialGroup}
                 * @throws IllegalArgumentException if {#code type}, {@code comp1} or
                 *          {@code comp2} is {@code null}
                 * @see LayoutStyle
                 */
                // @ts-ignore
                addPreferredGap(comp1: javax.swing.JComponent, comp2: javax.swing.JComponent, type: javax.swing.LayoutStyle.ComponentPlacement, pref: number /*int*/, max: number /*int*/): javax.swing.GroupLayout.SequentialGroup
                /**
                 * Adds an element representing the preferred gap between the
                 * nearest components.  During layout, neighboring
                 * components are found, and the size of the added gap is set
                 * based on the preferred gap between the components.  If no
                 * neighboring components are found the gap has a size of {@code 0}.
                 * <p>
                 * The element created to represent the gap is not
                 * resizable.
                 * @param type the type of gap; one of
                 *         {#code LayoutStyle.ComponentPlacement.RELATED} or
                 *         {@code LayoutStyle.ComponentPlacement.UNRELATED}
                 * @return this {#code SequentialGroup}
                 * @see LayoutStyle
                 * @throws IllegalArgumentException if {#code type} is not one of
                 *          {@code LayoutStyle.ComponentPlacement.RELATED} or
                 *          {@code LayoutStyle.ComponentPlacement.UNRELATED}
                 */
                // @ts-ignore
                addPreferredGap(type: javax.swing.LayoutStyle.ComponentPlacement): javax.swing.GroupLayout.SequentialGroup
                /**
                 * Adds an element representing the preferred gap between the
                 * nearest components.  During layout, neighboring
                 * components are found, and the minimum of this
                 * gap is set based on the size of the preferred gap between the
                 * neighboring components.  If no neighboring components are found the
                 * minimum size is set to 0.
                 * @param type the type of gap; one of
                 *         {#code LayoutStyle.ComponentPlacement.RELATED} or
                 *         {@code LayoutStyle.ComponentPlacement.UNRELATED}
                 * @param pref the preferred size of the grap; one of
                 *         {#code DEFAULT_SIZE} or a value &gt;= 0
                 * @param max the maximum size of the gap; one of
                 *         {#code DEFAULT_SIZE}, {@code PREFERRED_SIZE}
                 *         or a value &gt;= 0
                 * @return this {#code SequentialGroup}
                 * @throws IllegalArgumentException if {#code type} is not one of
                 *          {@code LayoutStyle.ComponentPlacement.RELATED} or
                 *          {@code LayoutStyle.ComponentPlacement.UNRELATED}
                 * @see LayoutStyle
                 */
                // @ts-ignore
                addPreferredGap(type: javax.swing.LayoutStyle.ComponentPlacement, pref: number /*int*/, max: number /*int*/): javax.swing.GroupLayout.SequentialGroup
                /**
                 * Adds an element representing the preferred gap between an edge
                 * the container and components that touch the border of the
                 * container. This has no effect if the added gap does not
                 * touch an edge of the parent container.
                 * <p>
                 * The element created to represent the gap is not
                 * resizable.
                 * @return this {#code SequentialGroup}
                 */
                // @ts-ignore
                addContainerGap(): javax.swing.GroupLayout.SequentialGroup
                /**
                 * Adds an element representing the preferred gap between one
                 * edge of the container and the next or previous {@code
                 * Component} with the specified size. This has no
                 * effect if the next or previous element is not a {@code
                 * Component} and does not touch one edge of the parent
                 * container.
                 * @param pref the preferred size; one of {#code DEFAULT_SIZE} or a
                 *               value &gt;= 0
                 * @param max the maximum size; one of {#code DEFAULT_SIZE},
                 *         {@code PREFERRED_SIZE} or a value &gt;= 0
                 * @return this {#code SequentialGroup}
                 */
                // @ts-ignore
                addContainerGap(pref: number /*int*/, max: number /*int*/): javax.swing.GroupLayout.SequentialGroup
            }
        }
    }
}
