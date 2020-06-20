declare namespace javax {
    namespace swing {
        /**
         * A <code>SpringLayout</code> lays out the children of its associated container
         * according to a set of constraints.
         * See <a href="https://docs.oracle.com/javase/tutorial/uiswing/layout/spring.html">How to Use SpringLayout</a>
         * in <em>The Java Tutorial</em> for examples of using
         * <code>SpringLayout</code>.
         * <p>
         * Each constraint,
         * represented by a <code>Spring</code> object,
         * controls the vertical or horizontal distance
         * between two component edges.
         * The edges can belong to
         * any child of the container,
         * or to the container itself.
         * For example,
         * the allowable width of a component
         * can be expressed using a constraint
         * that controls the distance between the west (left) and east (right)
         * edges of the component.
         * The allowable <em>y</em> coordinates for a component
         * can be expressed by constraining the distance between
         * the north (top) edge of the component
         * and the north edge of its container.
         * <P>
         * Every child of a <code>SpringLayout</code>-controlled container,
         * as well as the container itself,
         * has exactly one set of constraints
         * associated with it.
         * These constraints are represented by
         * a <code>SpringLayout.Constraints</code> object.
         * By default,
         * <code>SpringLayout</code> creates constraints
         * that make their associated component
         * have the minimum, preferred, and maximum sizes
         * returned by the component's
         * {@link java.awt.Component#getMinimumSize},
         * {@link java.awt.Component#getPreferredSize}, and
         * {@link java.awt.Component#getMaximumSize}
         * methods. The <em>x</em> and <em>y</em> positions are initially not
         * constrained, so that until you constrain them the <code>Component</code>
         * will be positioned at 0,0 relative to the <code>Insets</code> of the
         * parent <code>Container</code>.
         * <p>
         * You can change
         * a component's constraints in several ways.
         * You can
         * use one of the
         * {@link #putConstraint putConstraint}
         * methods
         * to establish a spring
         * linking the edges of two components within the same container.
         * Or you can get the appropriate <code>SpringLayout.Constraints</code>
         * object using
         * {@link #getConstraints getConstraints}
         * and then modify one or more of its springs.
         * Or you can get the spring for a particular edge of a component
         * using {@link #getConstraint getConstraint},
         * and modify it.
         * You can also associate
         * your own <code>SpringLayout.Constraints</code> object
         * with a component by specifying the constraints object
         * when you add the component to its container
         * (using
         * {@link Container#add(Component, Object)}).
         * <p>
         * The <code>Spring</code> object representing each constraint
         * has a minimum, preferred, maximum, and current value.
         * The current value of the spring
         * is somewhere between the minimum and maximum values,
         * according to the formula given in the
         * {@link Spring#sum} method description.
         * When the minimum, preferred, and maximum values are the same,
         * the current value is always equal to them;
         * this inflexible spring is called a <em>strut</em>.
         * You can create struts using the factory method
         * {@link Spring#constant(int)}.
         * The <code>Spring</code> class also provides factory methods
         * for creating other kinds of springs,
         * including springs that depend on other springs.
         * <p>
         * In a <code>SpringLayout</code>, the position of each edge is dependent on
         * the position of just one other edge. If a constraint is subsequently added
         * to create a new binding for an edge, the previous binding is discarded
         * and the edge remains dependent on a single edge.
         * Springs should only be attached
         * between edges of the container and its immediate children; the behavior
         * of the <code>SpringLayout</code> when presented with constraints linking
         * the edges of components from different containers (either internal or
         * external) is undefined.
         * <h3>
         * SpringLayout vs. Other Layout Managers
         * </h3>
         * <blockquote>
         * <hr>
         * <strong>Note:</strong>
         * Unlike many layout managers,
         * <code>SpringLayout</code> doesn't automatically set the location of
         * the components it manages.
         * If you hand-code a GUI that uses <code>SpringLayout</code>,
         * remember to initialize component locations by constraining the west/east
         * and north/south locations.
         * <p>
         * Depending on the constraints you use,
         * you may also need to set the size of the container explicitly.
         * <hr>
         * </blockquote>
         * <p>
         * Despite the simplicity of <code>SpringLayout</code>,
         * it can emulate the behavior of most other layout managers.
         * For some features,
         * such as the line breaking provided by <code>FlowLayout</code>,
         * you'll need to
         * create a special-purpose subclass of the <code>Spring</code> class.
         * <p>
         * <code>SpringLayout</code> also provides a way to solve
         * many of the difficult layout
         * problems that cannot be solved by nesting combinations
         * of <code>Box</code>es. That said, <code>SpringLayout</code> honors the
         * <code>LayoutManager2</code> contract correctly and so can be nested with
         * other layout managers -- a technique that can be preferable to
         * creating the constraints implied by the other layout managers.
         * <p>
         * The asymptotic complexity of the layout operation of a <code>SpringLayout</code>
         * is linear in the number of constraints (and/or components).
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @see Spring
         * @see SpringLayout.Constraints
         * @author Philip Milne
         * @author Scott Violet
         * @author Joe Winchester
         * @since 1.4
         */
        // @ts-ignore
        class SpringLayout extends java.lang.Object implements java.awt.LayoutManager2 {
            /**
             * Constructs a new <code>SpringLayout</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * Specifies the top edge of a component's bounding rectangle.
             */
            // @ts-ignore
            readonly NORTH: string
            /**
             * Specifies the bottom edge of a component's bounding rectangle.
             */
            // @ts-ignore
            readonly SOUTH: string
            /**
             * Specifies the right edge of a component's bounding rectangle.
             */
            // @ts-ignore
            readonly EAST: string
            /**
             * Specifies the left edge of a component's bounding rectangle.
             */
            // @ts-ignore
            readonly WEST: string
            /**
             * Specifies the horizontal center of a component's bounding rectangle.
             * @since 1.6
             */
            // @ts-ignore
            readonly HORIZONTAL_CENTER: string
            /**
             * Specifies the vertical center of a component's bounding rectangle.
             * @since 1.6
             */
            // @ts-ignore
            readonly VERTICAL_CENTER: string
            /**
             * Specifies the baseline of a component.
             * @since 1.6
             */
            // @ts-ignore
            readonly BASELINE: string
            /**
             * Specifies the width of a component's bounding rectangle.
             * @since 1.6
             */
            // @ts-ignore
            readonly WIDTH: string
            /**
             * Specifies the height of a component's bounding rectangle.
             * @since 1.6
             */
            // @ts-ignore
            readonly HEIGHT: string
            /**
             * Has no effect,
             * since this layout manager does not
             * use a per-component string.
             */
            // @ts-ignore
            addLayoutComponent(name: string, c: java.awt.Component): void
            /**
             * Removes the constraints associated with the specified component.
             * @param c the component being removed from the container
             */
            // @ts-ignore
            removeLayoutComponent(c: java.awt.Component): void
            // @ts-ignore
            minimumLayoutSize(parent: java.awt.Container): java.awt.Dimension
            // @ts-ignore
            preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension
            // @ts-ignore
            maximumLayoutSize(parent: java.awt.Container): java.awt.Dimension
            /**
             * If <code>constraints</code> is an instance of
             * <code>SpringLayout.Constraints</code>,
             * associates the constraints with the specified component.
             * <p>
             * @param component the component being added
             * @param constraints the component's constraints
             * @see SpringLayout.Constraints
             */
            // @ts-ignore
            addLayoutComponent(component: java.awt.Component, constraints: any): void
            /**
             * Returns 0.5f (centered).
             */
            // @ts-ignore
            getLayoutAlignmentX(p: java.awt.Container): float
            /**
             * Returns 0.5f (centered).
             */
            // @ts-ignore
            getLayoutAlignmentY(p: java.awt.Container): float
            // @ts-ignore
            invalidateLayout(p: java.awt.Container): void
            /**
             * Links edge <code>e1</code> of component <code>c1</code> to
             * edge <code>e2</code> of component <code>c2</code>,
             * with a fixed distance between the edges. This
             * constraint will cause the assignment
             * <pre>
             * value(e1, c1) = value(e2, c2) + pad</pre>
             * to take place during all subsequent layout operations.
             * <p>
             * @param e1 the edge of the dependent
             * @param c1 the component of the dependent
             * @param pad the fixed distance between dependent and anchor
             * @param e2 the edge of the anchor
             * @param c2 the component of the anchor
             * @see #putConstraint(String, Component, Spring, String, Component)
             */
            // @ts-ignore
            putConstraint(e1: string, c1: java.awt.Component, pad: number /*int*/, e2: string, c2: java.awt.Component): void
            /**
             * Links edge <code>e1</code> of component <code>c1</code> to
             * edge <code>e2</code> of component <code>c2</code>. As edge
             * <code>(e2, c2)</code> changes value, edge <code>(e1, c1)</code> will
             * be calculated by taking the (spring) sum of <code>(e2, c2)</code>
             * and <code>s</code>.
             * Each edge must have one of the following values:
             * <code>SpringLayout.NORTH</code>,
             * <code>SpringLayout.SOUTH</code>,
             * <code>SpringLayout.EAST</code>,
             * <code>SpringLayout.WEST</code>,
             * <code>SpringLayout.VERTICAL_CENTER</code>,
             * <code>SpringLayout.HORIZONTAL_CENTER</code> or
             * <code>SpringLayout.BASELINE</code>.
             * <p>
             * @param e1 the edge of the dependent
             * @param c1 the component of the dependent
             * @param s the spring linking dependent and anchor
             * @param e2 the edge of the anchor
             * @param c2 the component of the anchor
             * @see #putConstraint(String, Component, int, String, Component)
             * @see #NORTH
             * @see #SOUTH
             * @see #EAST
             * @see #WEST
             * @see #VERTICAL_CENTER
             * @see #HORIZONTAL_CENTER
             * @see #BASELINE
             */
            // @ts-ignore
            putConstraint(e1: string, c1: java.awt.Component, s: javax.swing.Spring, e2: string, c2: java.awt.Component): void
            /**
             * Returns the constraints for the specified component.
             * Note that,
             * unlike the <code>GridBagLayout</code>
             * <code>getConstraints</code> method,
             * this method does not clone constraints.
             * If no constraints
             * have been associated with this component,
             * this method
             * returns a default constraints object positioned at
             * 0,0 relative to the parent's Insets and its width/height
             * constrained to the minimum, maximum, and preferred sizes of the
             * component. The size characteristics
             * are not frozen at the time this method is called;
             * instead this method returns a constraints object
             * whose characteristics track the characteristics
             * of the component as they change.
             * @param c the component whose constraints will be returned
             * @return the constraints for the specified component
             */
            // @ts-ignore
            getConstraints(c: java.awt.Component): javax.swing.SpringLayout.Constraints
            /**
             * Returns the spring controlling the distance between
             * the specified edge of
             * the component and the top or left edge of its parent. This
             * method, instead of returning the current binding for the
             * edge, returns a proxy that tracks the characteristics
             * of the edge even if the edge is subsequently rebound.
             * Proxies are intended to be used in builder environments
             * where it is useful to allow the user to define the
             * constraints for a layout in any order. Proxies do, however,
             * provide the means to create cyclic dependencies amongst
             * the constraints of a layout. Such cycles are detected
             * internally by <code>SpringLayout</code> so that
             * the layout operation always terminates.
             * @param edgeName must be one of
             *  <code>SpringLayout.NORTH</code>,
             *  <code>SpringLayout.SOUTH</code>,
             *  <code>SpringLayout.EAST</code>,
             *  <code>SpringLayout.WEST</code>,
             *  <code>SpringLayout.VERTICAL_CENTER</code>,
             *  <code>SpringLayout.HORIZONTAL_CENTER</code> or
             *  <code>SpringLayout.BASELINE</code>
             * @param c the component whose edge spring is desired
             * @return a proxy for the spring controlling the distance between the
             *          specified edge and the top or left edge of its parent
             * @see #NORTH
             * @see #SOUTH
             * @see #EAST
             * @see #WEST
             * @see #VERTICAL_CENTER
             * @see #HORIZONTAL_CENTER
             * @see #BASELINE
             */
            // @ts-ignore
            getConstraint(edgeName: string, c: java.awt.Component): javax.swing.Spring
            // @ts-ignore
            layoutContainer(parent: java.awt.Container): void
        }
    }
}
