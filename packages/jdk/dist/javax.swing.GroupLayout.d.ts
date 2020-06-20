declare namespace javax {
    namespace swing {
        /**
         * {@code GroupLayout} is a {@code LayoutManager} that hierarchically
         * groups components in order to position them in a {@code Container}.
         * {@code GroupLayout} is intended for use by builders, but may be
         * hand-coded as well.
         * Grouping is done by instances of the {@link Group Group} class. {@code
         * GroupLayout} supports two types of groups. A sequential group
         * positions its child elements sequentially, one after another. A
         * parallel group aligns its child elements in one of four ways.
         * <p>
         * Each group may contain any number of elements, where an element is
         * a {@code Group}, {@code Component}, or gap. A gap can be thought
         * of as an invisible component with a minimum, preferred and maximum
         * size. In addition {@code GroupLayout} supports a preferred gap,
         * whose value comes from {@code LayoutStyle}.
         * <p>
         * Elements are similar to a spring. Each element has a range as
         * specified by a minimum, preferred and maximum.  Gaps have either a
         * developer-specified range, or a range determined by {@code
         * LayoutStyle}. The range for {@code Component}s is determined from
         * the {@code Component}'s {@code getMinimumSize}, {@code
         * getPreferredSize} and {@code getMaximumSize} methods. In addition,
         * when adding {@code Component}s you may specify a particular range
         * to use instead of that from the component. The range for a {@code
         * Group} is determined by the type of group. A {@code ParallelGroup}'s
         * range is the maximum of the ranges of its elements. A {@code
         * SequentialGroup}'s range is the sum of the ranges of its elements.
         * <p>
         * {@code GroupLayout} treats each axis independently.  That is, there
         * is a group representing the horizontal axis, and a group
         * representing the vertical axis.  The horizontal group is
         * responsible for determining the minimum, preferred and maximum size
         * along the horizontal axis as well as setting the x and width of the
         * components contained in it. The vertical group is responsible for
         * determining the minimum, preferred and maximum size along the
         * vertical axis as well as setting the y and height of the
         * components contained in it. Each {@code Component} must exist in both
         * a horizontal and vertical group, otherwise an {@code IllegalStateException}
         * is thrown during layout, or when the minimum, preferred or
         * maximum size is requested.
         * <p>
         * The following diagram shows a sequential group along the horizontal
         * axis. The sequential group contains three components. A parallel group
         * was used along the vertical axis.
         * <p style="text-align:center">
         * <img src="doc-files/groupLayout.1.gif" alt="Sequential group along the horizontal axis in three components">
         * <p>
         * To reinforce that each axis is treated independently the diagram shows
         * the range of each group and element along each axis. The
         * range of each component has been projected onto the axes,
         * and the groups are rendered in blue (horizontal) and red (vertical).
         * For readability there is a gap between each of the elements in the
         * sequential group.
         * <p>
         * The sequential group along the horizontal axis is rendered as a solid
         * blue line. Notice the sequential group is the sum of the children elements
         * it contains.
         * <p>
         * Along the vertical axis the parallel group is the maximum of the height
         * of each of the components. As all three components have the same height,
         * the parallel group has the same height.
         * <p>
         * The following diagram shows the same three components, but with the
         * parallel group along the horizontal axis and the sequential group along
         * the vertical axis.
         * <p style="text-align:center">
         * <img src="doc-files/groupLayout.2.gif" alt="Sequential group along the vertical axis in three components">
         * <p>
         * As {@code c1} is the largest of the three components, the parallel
         * group is sized to {@code c1}. As {@code c2} and {@code c3} are smaller
         * than {@code c1} they are aligned based on the alignment specified
         * for the component (if specified) or the default alignment of the
         * parallel group. In the diagram {@code c2} and {@code c3} were created
         * with an alignment of {@code LEADING}. If the component orientation were
         * right-to-left then {@code c2} and {@code c3} would be positioned on
         * the opposite side.
         * <p>
         * The following diagram shows a sequential group along both the horizontal
         * and vertical axis.
         * <p style="text-align:center">
         * <img src="doc-files/groupLayout.3.gif" alt="Sequential group along both the horizontal and vertical axis in three components">
         * <p>
         * {@code GroupLayout} provides the ability to insert gaps between
         * {@code Component}s. The size of the gap is determined by an
         * instance of {@code LayoutStyle}. This may be turned on using the
         * {@code setAutoCreateGaps} method.  Similarly, you may use
         * the {@code setAutoCreateContainerGaps} method to insert gaps
         * between components that touch the edge of the parent container and the
         * container.
         * <p>
         * The following builds a panel consisting of two labels in
         * one column, followed by two textfields in the next column:
         * <pre>
         * JComponent panel = ...;
         * GroupLayout layout = new GroupLayout(panel);
         * panel.setLayout(layout);
         * // Turn on automatically adding gaps between components
         * layout.setAutoCreateGaps(true);
         * // Turn on automatically creating gaps between components that touch
         * // the edge of the container and the container.
         * layout.setAutoCreateContainerGaps(true);
         * // Create a sequential group for the horizontal axis.
         * GroupLayout.SequentialGroup hGroup = layout.createSequentialGroup();
         * // The sequential group in turn contains two parallel groups.
         * // One parallel group contains the labels, the other the text fields.
         * // Putting the labels in a parallel group along the horizontal axis
         * // positions them at the same x location.
         * //
         * // Variable indentation is used to reinforce the level of grouping.
         * hGroup.addGroup(layout.createParallelGroup().
         * addComponent(label1).addComponent(label2));
         * hGroup.addGroup(layout.createParallelGroup().
         * addComponent(tf1).addComponent(tf2));
         * layout.setHorizontalGroup(hGroup);
         * // Create a sequential group for the vertical axis.
         * GroupLayout.SequentialGroup vGroup = layout.createSequentialGroup();
         * // The sequential group contains two parallel groups that align
         * // the contents along the baseline. The first parallel group contains
         * // the first label and text field, and the second parallel group contains
         * // the second label and text field. By using a sequential group
         * // the labels and text fields are positioned vertically after one another.
         * vGroup.addGroup(layout.createParallelGroup(Alignment.BASELINE).
         * addComponent(label1).addComponent(tf1));
         * vGroup.addGroup(layout.createParallelGroup(Alignment.BASELINE).
         * addComponent(label2).addComponent(tf2));
         * layout.setVerticalGroup(vGroup);
         * </pre>
         * <p>
         * When run the following is produced.
         * <p style="text-align:center">
         * <img src="doc-files/groupLayout.example.png" alt="Produced horizontal/vertical form">
         * <p>
         * This layout consists of the following.
         * <ul><li>The horizontal axis consists of a sequential group containing two
         * parallel groups.  The first parallel group contains the labels,
         * and the second parallel group contains the text fields.
         * <li>The vertical axis consists of a sequential group
         * containing two parallel groups.  The parallel groups are configured
         * to align their components along the baseline. The first parallel
         * group contains the first label and first text field, and
         * the second group consists of the second label and second
         * text field.
         * </ul>
         * There are a couple of things to notice in this code:
         * <ul>
         * <li>You need not explicitly add the components to the container; this
         * is indirectly done by using one of the {@code add} methods of
         * {@code Group}.
         * <li>The various {@code add} methods return
         * the caller.  This allows for easy chaining of invocations.  For
         * example, {@code group.addComponent(label1).addComponent(label2);} is
         * equivalent to
         * {@code group.addComponent(label1); group.addComponent(label2);}.
         * <li>There are no public constructors for {@code Group}s; instead
         * use the create methods of {@code GroupLayout}.
         * </ul>
         * @author Tomas Pavek
         * @author Jan Stola
         * @author Scott Violet
         * @since 1.6
         */
        // @ts-ignore
        class GroupLayout extends java.lang.Object implements java.awt.LayoutManager2 {
            /**
             * Creates a {@code GroupLayout} for the specified {@code Container}.
             * @param host the {#code Container} the {@code GroupLayout} is
             *         the {@code LayoutManager} for
             * @throws IllegalArgumentException if host is {#code null}
             */
            // @ts-ignore
            constructor(host: java.awt.Container)
            /**
             * Indicates the size from the component or gap should be used for a
             * particular range value.
             * @see Group
             */
            // @ts-ignore
            readonly DEFAULT_SIZE: number /*int*/
            /**
             * Indicates the preferred size from the component or gap should
             * be used for a particular range value.
             * @see Group
             */
            // @ts-ignore
            readonly PREFERRED_SIZE: number /*int*/
            /**
             * Sets whether component visibility is considered when sizing and
             * positioning components. A value of {@code true} indicates that
             * non-visible components should not be treated as part of the
             * layout. A value of {@code false} indicates that components should be
             * positioned and sized regardless of visibility.
             * <p>
             * A value of {@code false} is useful when the visibility of components
             * is dynamically adjusted and you don't want surrounding components and
             * the sizing to change.
             * <p>
             * The specified value is used for components that do not have an
             * explicit visibility specified.
             * <p>
             * The default is {@code true}.
             * @param honorsVisibility whether component visibility is considered when
             *                          sizing and positioning components
             * @see #setHonorsVisibility(Component,Boolean)
             */
            // @ts-ignore
            setHonorsVisibility(honorsVisibility: boolean): void
            /**
             * Returns whether component visibility is considered when sizing and
             * positioning components.
             * @return whether component visibility is considered when sizing and
             *          positioning components
             */
            // @ts-ignore
            getHonorsVisibility(): boolean
            /**
             * Sets whether the component's visibility is considered for
             * sizing and positioning. A value of {@code Boolean.TRUE}
             * indicates that if {@code component} is not visible it should
             * not be treated as part of the layout. A value of {@code false}
             * indicates that {@code component} is positioned and sized
             * regardless of it's visibility.  A value of {@code null}
             * indicates the value specified by the single argument method {@code
             * setHonorsVisibility} should be used.
             * <p>
             * If {@code component} is not a child of the {@code Container} this
             * {@code GroupLayout} is managing, it will be added to the
             * {@code Container}.
             * @param component the component
             * @param honorsVisibility whether visibility of this {#code component} should be
             *               considered for sizing and positioning
             * @throws IllegalArgumentException if {#code component} is {@code null}
             * @see #setHonorsVisibility(Component,Boolean)
             */
            // @ts-ignore
            setHonorsVisibility(component: java.awt.Component, honorsVisibility: java.lang.Boolean): void
            /**
             * Sets whether a gap between components should automatically be
             * created.  For example, if this is {@code true} and you add two
             * components to a {@code SequentialGroup} a gap between the
             * two components is automatically be created.  The default is
             * {@code false}.
             * @param autoCreatePadding whether a gap between components is
             *         automatically created
             */
            // @ts-ignore
            setAutoCreateGaps(autoCreatePadding: boolean): void
            /**
             * Returns {@code true} if gaps between components are automatically
             * created.
             * @return {#code true} if gaps between components are automatically
             *          created
             */
            // @ts-ignore
            getAutoCreateGaps(): boolean
            /**
             * Sets whether a gap between the container and components that
             * touch the border of the container should automatically be
             * created. The default is {@code false}.
             * @param autoCreateContainerPadding whether a gap between the container and
             *         components that touch the border of the container should
             *         automatically be created
             */
            // @ts-ignore
            setAutoCreateContainerGaps(autoCreateContainerPadding: boolean): void
            /**
             * Returns {@code true} if gaps between the container and components that
             * border the container are automatically created.
             * @return {#code true} if gaps between the container and components that
             *          border the container are automatically created
             */
            // @ts-ignore
            getAutoCreateContainerGaps(): boolean
            /**
             * Sets the {@code Group} that positions and sizes
             * components along the horizontal axis.
             * @param group the {#code Group} that positions and sizes
             *         components along the horizontal axis
             * @throws IllegalArgumentException if group is {#code null}
             */
            // @ts-ignore
            setHorizontalGroup(group: javax.swing.GroupLayout.Group): void
            /**
             * Sets the {@code Group} that positions and sizes
             * components along the vertical axis.
             * @param group the {#code Group} that positions and sizes
             *         components along the vertical axis
             * @throws IllegalArgumentException if group is {#code null}
             */
            // @ts-ignore
            setVerticalGroup(group: javax.swing.GroupLayout.Group): void
            /**
             * Creates and returns a {@code SequentialGroup}.
             * @return a new {#code SequentialGroup}
             */
            // @ts-ignore
            createSequentialGroup(): javax.swing.GroupLayout.SequentialGroup
            /**
             * Creates and returns a {@code ParallelGroup} with an alignment of
             * {@code Alignment.LEADING}.  This is a cover method for the more
             * general {@code createParallelGroup(Alignment)} method.
             * @return a new {#code ParallelGroup}
             * @see #createParallelGroup(Alignment)
             */
            // @ts-ignore
            createParallelGroup(): javax.swing.GroupLayout.ParallelGroup
            /**
             * Creates and returns a {@code ParallelGroup} with the specified
             * alignment.  This is a cover method for the more general {@code
             * createParallelGroup(Alignment,boolean)} method with {@code true}
             * supplied for the second argument.
             * @param alignment the alignment for the elements of the group
             * @throws IllegalArgumentException if {#code alignment} is {@code null}
             * @return a new {#code ParallelGroup}
             * @see #createBaselineGroup
             * @see ParallelGroup
             */
            // @ts-ignore
            createParallelGroup(alignment: javax.swing.GroupLayout.Alignment): javax.swing.GroupLayout.ParallelGroup
            /**
             * Creates and returns a {@code ParallelGroup} with the specified
             * alignment and resize behavior. The {@code
             * alignment} argument specifies how children elements are
             * positioned that do not fill the group. For example, if a {@code
             * ParallelGroup} with an alignment of {@code TRAILING} is given
             * 100 and a child only needs 50, the child is
             * positioned at the position 50 (with a component orientation of
             * left-to-right).
             * <p>
             * Baseline alignment is only useful when used along the vertical
             * axis. A {@code ParallelGroup} created with a baseline alignment
             * along the horizontal axis is treated as {@code LEADING}.
             * <p>
             * Refer to {@link GroupLayout.ParallelGroup ParallelGroup} for details on
             * the behavior of baseline groups.
             * @param alignment the alignment for the elements of the group
             * @param resizable {#code true} if the group is resizable; if the group
             *         is not resizable the preferred size is used for the
             *         minimum and maximum size of the group
             * @throws IllegalArgumentException if {#code alignment} is {@code null}
             * @return a new {#code ParallelGroup}
             * @see #createBaselineGroup
             * @see GroupLayout.ParallelGroup
             */
            // @ts-ignore
            createParallelGroup(alignment: javax.swing.GroupLayout.Alignment, resizable: boolean): javax.swing.GroupLayout.ParallelGroup
            /**
             * Creates and returns a {@code ParallelGroup} that aligns it's
             * elements along the baseline.
             * @param resizable whether the group is resizable
             * @param anchorBaselineToTop whether the baseline is anchored to
             *         the top or bottom of the group
             * @see #createBaselineGroup
             * @see ParallelGroup
             */
            // @ts-ignore
            createBaselineGroup(resizable: boolean, anchorBaselineToTop: boolean): javax.swing.GroupLayout.ParallelGroup
            /**
             * Forces the specified components to have the same size
             * regardless of their preferred, minimum or maximum sizes. Components that
             * are linked are given the maximum of the preferred size of each of
             * the linked components. For example, if you link two components with
             * a preferred width of 10 and 20, both components are given a width of 20.
             * <p>
             * This can be used multiple times to force any number of
             * components to share the same size.
             * <p>
             * Linked Components are not be resizable.
             * @param components the {#code Component}s that are to have the same size
             * @throws IllegalArgumentException if {#code components} is
             *          {@code null}, or contains {@code null}
             * @see #linkSize(int,Component[])
             */
            // @ts-ignore
            linkSize(...components: java.awt.Component[]): void
            /**
             * Forces the specified components to have the same size along the
             * specified axis regardless of their preferred, minimum or
             * maximum sizes. Components that are linked are given the maximum
             * of the preferred size of each of the linked components. For
             * example, if you link two components along the horizontal axis
             * and the preferred width is 10 and 20, both components are given
             * a width of 20.
             * <p>
             * This can be used multiple times to force any number of
             * components to share the same size.
             * <p>
             * Linked {@code Component}s are not be resizable.
             * @param components the {#code Component}s that are to have the same size
             * @param axis the axis to link the size along; one of
             *              {#code SwingConstants.HORIZONTAL} or
             *              {@code SwingConstans.VERTICAL}
             * @throws IllegalArgumentException if {#code components} is
             *          {@code null}, or contains {@code null}; or {@code axis}
             *           is not {@code SwingConstants.HORIZONTAL} or
             *           {@code SwingConstants.VERTICAL}
             */
            // @ts-ignore
            linkSize(axis: number /*int*/, ...components: java.awt.Component[]): void
            /**
             * Replaces an existing component with a new one.
             * @param existingComponent the component that should be removed
             *         and replaced with {#code newComponent}
             * @param newComponent the component to put in
             *         {#code existingComponent}'s place
             * @throws IllegalArgumentException if either of the components are
             *          {#code null} or {@code existingComponent} is not being managed
             *          by this layout manager
             */
            // @ts-ignore
            replace(existingComponent: java.awt.Component, newComponent: java.awt.Component): void
            /**
             * Sets the {@code LayoutStyle} used to calculate the preferred
             * gaps between components. A value of {@code null} indicates the
             * shared instance of {@code LayoutStyle} should be used.
             * @param layoutStyle the {#code LayoutStyle} to use
             * @see LayoutStyle
             */
            // @ts-ignore
            setLayoutStyle(layoutStyle: javax.swing.LayoutStyle): void
            /**
             * Returns the {@code LayoutStyle} used for calculating the preferred
             * gap between components. This returns the value specified to
             * {@code setLayoutStyle}, which may be {@code null}.
             * @return the {#code LayoutStyle} used for calculating the preferred
             *          gap between components
             */
            // @ts-ignore
            getLayoutStyle(): javax.swing.LayoutStyle
            /**
             * Notification that a {@code Component} has been added to
             * the parent container.  You should not invoke this method
             * directly, instead you should use one of the {@code Group}
             * methods to add a {@code Component}.
             * @param name the string to be associated with the component
             * @param component the {#code Component} to be added
             */
            // @ts-ignore
            addLayoutComponent(name: string, component: java.awt.Component): void
            /**
             * Notification that a {@code Component} has been removed from
             * the parent container.  You should not invoke this method
             * directly, instead invoke {@code remove} on the parent
             * {@code Container}.
             * @param component the component to be removed
             * @see java.awt.Component#remove
             */
            // @ts-ignore
            removeLayoutComponent(component: java.awt.Component): void
            /**
             * Returns the preferred size for the specified container.
             * @param parent the container to return the preferred size for
             * @return the preferred size for {#code parent}
             * @throws IllegalArgumentException if {#code parent} is not
             *          the same {@code Container} this was created with
             * @throws IllegalStateException if any of the components added to
             *          this layout are not in both a horizontal and vertical group
             * @see java.awt.Container#getPreferredSize
             */
            // @ts-ignore
            preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension
            /**
             * Returns the minimum size for the specified container.
             * @param parent the container to return the size for
             * @return the minimum size for {#code parent}
             * @throws IllegalArgumentException if {#code parent} is not
             *          the same {@code Container} that this was created with
             * @throws IllegalStateException if any of the components added to
             *          this layout are not in both a horizontal and vertical group
             * @see java.awt.Container#getMinimumSize
             */
            // @ts-ignore
            minimumLayoutSize(parent: java.awt.Container): java.awt.Dimension
            /**
             * Lays out the specified container.
             * @param parent the container to be laid out
             * @throws IllegalStateException if any of the components added to
             *          this layout are not in both a horizontal and vertical group
             */
            // @ts-ignore
            layoutContainer(parent: java.awt.Container): void
            /**
             * Notification that a {@code Component} has been added to
             * the parent container.  You should not invoke this method
             * directly, instead you should use one of the {@code Group}
             * methods to add a {@code Component}.
             * @param component the component added
             * @param constraints description of where to place the component
             */
            // @ts-ignore
            addLayoutComponent(component: java.awt.Component, constraints: any): void
            /**
             * Returns the maximum size for the specified container.
             * @param parent the container to return the size for
             * @return the maximum size for {#code parent}
             * @throws IllegalArgumentException if {#code parent} is not
             *          the same {@code Container} that this was created with
             * @throws IllegalStateException if any of the components added to
             *          this layout are not in both a horizontal and vertical group
             * @see java.awt.Container#getMaximumSize
             */
            // @ts-ignore
            maximumLayoutSize(parent: java.awt.Container): java.awt.Dimension
            /**
             * Returns the alignment along the x axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
             * @param parent the {#code Container} hosting this {@code LayoutManager}
             * @throws IllegalArgumentException if {#code parent} is not
             *          the same {@code Container} that this was created with
             * @return the alignment; this implementation returns {#code .5}
             */
            // @ts-ignore
            getLayoutAlignmentX(parent: java.awt.Container): float
            /**
             * Returns the alignment along the y axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
             * @param parent the {#code Container} hosting this {@code LayoutManager}
             * @throws IllegalArgumentException if {#code parent} is not
             *          the same {@code Container} that this was created with
             * @return alignment; this implementation returns {#code .5}
             */
            // @ts-ignore
            getLayoutAlignmentY(parent: java.awt.Container): float
            /**
             * Invalidates the layout, indicating that if the layout manager
             * has cached information it should be discarded.
             * @param parent the {#code Container} hosting this LayoutManager
             * @throws IllegalArgumentException if {#code parent} is not
             *          the same {@code Container} that this was created with
             */
            // @ts-ignore
            invalidateLayout(parent: java.awt.Container): void
            /**
             * Returns a string representation of this {@code GroupLayout}.
             * This method is intended to be used for debugging purposes,
             * and the content and format of the returned string may vary
             * between implementations.
             * @return a string representation of this {#code GroupLayout}
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
