declare namespace javax {
    namespace swing {
        namespace GroupLayout {
            /**
             * {@code Group} provides the basis for the two types of
             * operations supported by {@code GroupLayout}: laying out
             * components one after another ({@link SequentialGroup SequentialGroup})
             * or aligned ({@link ParallelGroup ParallelGroup}). {@code Group} and
             * its subclasses have no public constructor; to create one use
             * one of {@code createSequentialGroup} or
             * {@code createParallelGroup}. Additionally, taking a {@code Group}
             * created from one {@code GroupLayout} and using it with another
             * will produce undefined results.
             * <p>
             * Various methods in {@code Group} and its subclasses allow you
             * to explicitly specify the range. The arguments to these methods
             * can take two forms, either a value greater than or equal to 0,
             * or one of {@code DEFAULT_SIZE} or {@code PREFERRED_SIZE}. A
             * value greater than or equal to {@code 0} indicates a specific
             * size. {@code DEFAULT_SIZE} indicates the corresponding size
             * from the component should be used.  For example, if {@code
             * DEFAULT_SIZE} is passed as the minimum size argument, the
             * minimum size is obtained from invoking {@code getMinimumSize}
             * on the component. Likewise, {@code PREFERRED_SIZE} indicates
             * the value from {@code getPreferredSize} should be used.
             * The following example adds {@code myComponent} to {@code group}
             * with specific values for the range. That is, the minimum is
             * explicitly specified as 100, preferred as 200, and maximum as
             * 300.
             * <pre>
             * group.addComponent(myComponent, 100, 200, 300);
             * </pre>
             * The following example adds {@code myComponent} to {@code group} using
             * a combination of the forms. The minimum size is forced to be the
             * same as the preferred size, the preferred size is determined by
             * using {@code myComponent.getPreferredSize} and the maximum is
             * determined by invoking {@code getMaximumSize} on the component.
             * <pre>
             * group.addComponent(myComponent, GroupLayout.PREFERRED_SIZE,
             * GroupLayout.PREFERRED_SIZE, GroupLayout.DEFAULT_SIZE);
             * </pre>
             * <p>
             * Unless otherwise specified all the methods of {@code Group} and
             * its subclasses that allow you to specify a range throw an
             * {@code IllegalArgumentException} if passed an invalid range. An
             * invalid range is one in which any of the values are &lt; 0 and
             * not one of {@code PREFERRED_SIZE} or {@code DEFAULT_SIZE}, or
             * the following is not met (for specific values): {@code min}
             * &lt;= {@code pref} &lt;= {@code max}.
             * <p>
             * Similarly any methods that take a {@code Component} throw a
             * {@code IllegalArgumentException} if passed {@code null} and any methods
             * that take a {@code Group} throw an {@code NullPointerException} if
             * passed {@code null}.
             * @see #createSequentialGroup
             * @see #createParallelGroup
             * @since 1.6
             */
            // @ts-ignore
            abstract class Group extends javax.swing.GroupLayout.Spring {
                /**
                 * Adds a {@code Group} to this {@code Group}.
                 * @param group the {#code Group} to add
                 * @return this {#code Group}
                 */
                // @ts-ignore
                public addGroup(group: javax.swing.GroupLayout.Group): javax.swing.GroupLayout.Group
                /**
                 * Adds a {@code Component} to this {@code Group}.
                 * @param component the {#code Component} to add
                 * @return this {#code Group}
                 */
                // @ts-ignore
                public addComponent(component: java.awt.Component): javax.swing.GroupLayout.Group
                /**
                 * Adds a {@code Component} to this {@code Group}
                 * with the specified size.
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
                public addComponent(component: java.awt.Component, min: number /*int*/, pref: number /*int*/, max: number /*int*/): javax.swing.GroupLayout.Group
                /**
                 * Adds a rigid gap to this {@code Group}.
                 * @param size the size of the gap
                 * @return this {#code Group}
                 * @throws IllegalArgumentException if {#code size} is less than
                 *          {@code 0}
                 */
                // @ts-ignore
                public addGap(size: number /*int*/): javax.swing.GroupLayout.Group
                /**
                 * Adds a gap to this {@code Group} with the specified size.
                 * @param min the minimum size of the gap
                 * @param pref the preferred size of the gap
                 * @param max the maximum size of the gap
                 * @throws IllegalArgumentException if any of the values are
                 *          less than {#code 0}
                 * @return this {#code Group}
                 */
                // @ts-ignore
                public addGap(min: number /*int*/, pref: number /*int*/, max: number /*int*/): javax.swing.GroupLayout.Group
            }
        }
    }
}
