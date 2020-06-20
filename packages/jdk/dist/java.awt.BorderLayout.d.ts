declare namespace java {
    namespace awt {
        /**
         * A border layout lays out a container, arranging and resizing
         * its components to fit in five regions:
         * north, south, east, west, and center.
         * Each region may contain no more than one component, and
         * is identified by a corresponding constant:
         * <code>NORTH</code>, <code>SOUTH</code>, <code>EAST</code>,
         * <code>WEST</code>, and <code>CENTER</code>.  When adding a
         * component to a container with a border layout, use one of these
         * five constants, for example:
         * <pre>
         * Panel p = new Panel();
         * p.setLayout(new BorderLayout());
         * p.add(new Button("Okay"), BorderLayout.SOUTH);
         * </pre>
         * As a convenience, <code>BorderLayout</code> interprets the
         * absence of a string specification the same as the constant
         * <code>CENTER</code>:
         * <pre>
         * Panel p2 = new Panel();
         * p2.setLayout(new BorderLayout());
         * p2.add(new TextArea());  // Same as p.add(new TextArea(), BorderLayout.CENTER);
         * </pre>
         * <p>
         * In addition, <code>BorderLayout</code> supports the relative
         * positioning constants, <code>PAGE_START</code>, <code>PAGE_END</code>,
         * <code>LINE_START</code>, and <code>LINE_END</code>.
         * In a container whose <code>ComponentOrientation</code> is set to
         * <code>ComponentOrientation.LEFT_TO_RIGHT</code>, these constants map to
         * <code>NORTH</code>, <code>SOUTH</code>, <code>WEST</code>, and
         * <code>EAST</code>, respectively.
         * <p>
         * For compatibility with previous releases, <code>BorderLayout</code>
         * also includes the relative positioning constants <code>BEFORE_FIRST_LINE</code>,
         * <code>AFTER_LAST_LINE</code>, <code>BEFORE_LINE_BEGINS</code> and
         * <code>AFTER_LINE_ENDS</code>.  These are equivalent to
         * <code>PAGE_START</code>, <code>PAGE_END</code>, <code>LINE_START</code>
         * and <code>LINE_END</code> respectively.  For
         * consistency with the relative positioning constants used by other
         * components, the latter constants are preferred.
         * <p>
         * Mixing both absolute and relative positioning constants can lead to
         * unpredictable results.  If
         * you use both types, the relative constants will take precedence.
         * For example, if you add components using both the <code>NORTH</code>
         * and <code>PAGE_START</code> constants in a container whose
         * orientation is <code>LEFT_TO_RIGHT</code>, only the
         * <code>PAGE_START</code> will be layed out.
         * <p>
         * NOTE: Currently (in the Java 2 platform v1.2),
         * <code>BorderLayout</code> does not support vertical
         * orientations.  The <code>isVertical</code> setting on the container's
         * <code>ComponentOrientation</code> is not respected.
         * <p>
         * The components are laid out according to their
         * preferred sizes and the constraints of the container's size.
         * The <code>NORTH</code> and <code>SOUTH</code> components may
         * be stretched horizontally; the <code>EAST</code> and
         * <code>WEST</code> components may be stretched vertically;
         * the <code>CENTER</code> component may stretch both horizontally
         * and vertically to fill any space left over.
         * <p>
         * Here is an example of five buttons in an applet laid out using
         * the <code>BorderLayout</code> layout manager:
         * <p>
         * <img src="doc-files/BorderLayout-1.gif"
         * alt="Diagram of an applet demonstrating BorderLayout.
         * Each section of the BorderLayout contains a Button corresponding to its position in the layout, one of:
         * North, West, Center, East, or South."
         * style="float:center; margin: 7px 10px;">
         * <p>
         * The code for this applet is as follows:
         * <hr><blockquote><pre>
         * import java.awt.*;
         * import java.applet.Applet;
         * public class buttonDir extends Applet {
         * public void init() {
         * setLayout(new BorderLayout());
         * add(new Button("North"), BorderLayout.NORTH);
         * add(new Button("South"), BorderLayout.SOUTH);
         * add(new Button("East"), BorderLayout.EAST);
         * add(new Button("West"), BorderLayout.WEST);
         * add(new Button("Center"), BorderLayout.CENTER);
         * }
         * }
         * </pre></blockquote><hr>
         * <p>
         * @author Arthur van Hoff
         * @see java.awt.Container#add(String, Component)
         * @see java.awt.ComponentOrientation
         * @since JDK1.0
         */
        // @ts-ignore
        class BorderLayout extends java.lang.Object implements java.awt.LayoutManager2, java.io.Serializable {
            /**
             * Constructs a new border layout with
             * no gaps between components.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a border layout with the specified gaps
             * between components.
             * The horizontal gap is specified by <code>hgap</code>
             * and the vertical gap is specified by <code>vgap</code>.
             * @param hgap   the horizontal gap.
             * @param vgap   the vertical gap.
             */
            // @ts-ignore
            constructor(hgap: number /*int*/, vgap: number /*int*/)
            /**
             * The north layout constraint (top of container).
             */
            // @ts-ignore
            readonly NORTH: string
            /**
             * The south layout constraint (bottom of container).
             */
            // @ts-ignore
            readonly SOUTH: string
            /**
             * The east layout constraint (right side of container).
             */
            // @ts-ignore
            readonly EAST: string
            /**
             * The west layout constraint (left side of container).
             */
            // @ts-ignore
            readonly WEST: string
            /**
             * The center layout constraint (middle of container).
             */
            // @ts-ignore
            readonly CENTER: string
            /**
             * Synonym for PAGE_START.  Exists for compatibility with previous
             * versions.  PAGE_START is preferred.
             * @see #PAGE_START
             * @since 1.2
             */
            // @ts-ignore
            readonly BEFORE_FIRST_LINE: string
            /**
             * Synonym for PAGE_END.  Exists for compatibility with previous
             * versions.  PAGE_END is preferred.
             * @see #PAGE_END
             * @since 1.2
             */
            // @ts-ignore
            readonly AFTER_LAST_LINE: string
            /**
             * Synonym for LINE_START.  Exists for compatibility with previous
             * versions.  LINE_START is preferred.
             * @see #LINE_START
             * @since 1.2
             */
            // @ts-ignore
            readonly BEFORE_LINE_BEGINS: string
            /**
             * Synonym for LINE_END.  Exists for compatibility with previous
             * versions.  LINE_END is preferred.
             * @see #LINE_END
             * @since 1.2
             */
            // @ts-ignore
            readonly AFTER_LINE_ENDS: string
            /**
             * The component comes before the first line of the layout's content.
             * For Western, left-to-right and top-to-bottom orientations, this is
             * equivalent to NORTH.
             * @see java.awt.Component#getComponentOrientation
             * @since 1.4
             */
            // @ts-ignore
            readonly PAGE_START: string
            /**
             * The component comes after the last line of the layout's content.
             * For Western, left-to-right and top-to-bottom orientations, this is
             * equivalent to SOUTH.
             * @see java.awt.Component#getComponentOrientation
             * @since 1.4
             */
            // @ts-ignore
            readonly PAGE_END: string
            /**
             * The component goes at the beginning of the line direction for the
             * layout. For Western, left-to-right and top-to-bottom orientations,
             * this is equivalent to WEST.
             * @see java.awt.Component#getComponentOrientation
             * @since 1.4
             */
            // @ts-ignore
            readonly LINE_START: string
            /**
             * The component goes at the end of the line direction for the
             * layout. For Western, left-to-right and top-to-bottom orientations,
             * this is equivalent to EAST.
             * @see java.awt.Component#getComponentOrientation
             * @since 1.4
             */
            // @ts-ignore
            readonly LINE_END: string
            /**
             * Returns the horizontal gap between components.
             * @since JDK1.1
             */
            // @ts-ignore
            getHgap(): int
            /**
             * Sets the horizontal gap between components.
             * @param hgap the horizontal gap between components
             * @since JDK1.1
             */
            // @ts-ignore
            setHgap(hgap: number /*int*/): void
            /**
             * Returns the vertical gap between components.
             * @since JDK1.1
             */
            // @ts-ignore
            getVgap(): int
            /**
             * Sets the vertical gap between components.
             * @param vgap the vertical gap between components
             * @since JDK1.1
             */
            // @ts-ignore
            setVgap(vgap: number /*int*/): void
            /**
             * Adds the specified component to the layout, using the specified
             * constraint object.  For border layouts, the constraint must be
             * one of the following constants:  <code>NORTH</code>,
             * <code>SOUTH</code>, <code>EAST</code>,
             * <code>WEST</code>, or <code>CENTER</code>.
             * <p>
             * Most applications do not call this method directly. This method
             * is called when a component is added to a container using the
             * <code>Container.add</code> method with the same argument types.
             * @param comp         the component to be added.
             * @param constraints  an object that specifies how and where
             *                        the component is added to the layout.
             * @see java.awt.Container#add(java.awt.Component, java.lang.Object)
             * @exception IllegalArgumentException  if the constraint object is not
             *                  a string, or if it not one of the five specified
             *               constants.
             * @since JDK1.1
             */
            // @ts-ignore
            addLayoutComponent(comp: java.awt.Component, constraints: any): void
            /**
             * @deprecated replaced by <code>addLayoutComponent(Component, Object)</code>.
             */
            // @ts-ignore
            addLayoutComponent(name: string, comp: java.awt.Component): void
            /**
             * Removes the specified component from this border layout. This
             * method is called when a container calls its <code>remove</code> or
             * <code>removeAll</code> methods. Most applications do not call this
             * method directly.
             * @param comp   the component to be removed.
             * @see java.awt.Container#remove(java.awt.Component)
             * @see java.awt.Container#removeAll()
             */
            // @ts-ignore
            removeLayoutComponent(comp: java.awt.Component): void
            /**
             * Gets the component that was added using the given constraint
             * @param constraints  the desired constraint, one of <code>CENTER</code>,
             *                        <code>NORTH</code>, <code>SOUTH</code>,
             *                        <code>WEST</code>, <code>EAST</code>,
             *                        <code>PAGE_START</code>, <code>PAGE_END</code>,
             *                        <code>LINE_START</code>, <code>LINE_END</code>
             * @return the component at the given location, or <code>null</code> if
             *           the location is empty
             * @exception IllegalArgumentException  if the constraint object is
             *               not one of the nine specified constants
             * @see #addLayoutComponent(java.awt.Component, java.lang.Object)
             * @since 1.5
             */
            // @ts-ignore
            getLayoutComponent(constraints: any): java.awt.Component
            /**
             * Returns the component that corresponds to the given constraint location
             * based on the target <code>Container</code>'s component orientation.
             * Components added with the relative constraints <code>PAGE_START</code>,
             * <code>PAGE_END</code>, <code>LINE_START</code>, and <code>LINE_END</code>
             * take precedence over components added with the explicit constraints
             * <code>NORTH</code>, <code>SOUTH</code>, <code>WEST</code>, and <code>EAST</code>.
             * The <code>Container</code>'s component orientation is used to determine the location of components
             * added with <code>LINE_START</code> and <code>LINE_END</code>.
             * @param constraints     the desired absolute position, one of <code>CENTER</code>,
             *                           <code>NORTH</code>, <code>SOUTH</code>,
             *                           <code>EAST</code>, <code>WEST</code>
             * @param target     the {#code Container} used to obtain
             *                      the constraint location based on the target
             *                      {@code Container}'s component orientation.
             * @return the component at the given location, or <code>null</code> if
             *           the location is empty
             * @exception IllegalArgumentException  if the constraint object is
             *               not one of the five specified constants
             * @exception NullPointerException  if the target parameter is null
             * @see #addLayoutComponent(java.awt.Component, java.lang.Object)
             * @since 1.5
             */
            // @ts-ignore
            getLayoutComponent(target: java.awt.Container, constraints: any): java.awt.Component
            /**
             * Gets the constraints for the specified component
             * @param comp the component to be queried
             * @return the constraint for the specified component,
             *           or null if component is null or is not present
             *           in this layout
             * @see #addLayoutComponent(java.awt.Component, java.lang.Object)
             * @since 1.5
             */
            // @ts-ignore
            getConstraints(comp: java.awt.Component): java.lang.Object
            /**
             * Determines the minimum size of the <code>target</code> container
             * using this layout manager.
             * <p>
             * This method is called when a container calls its
             * <code>getMinimumSize</code> method. Most applications do not call
             * this method directly.
             * @param target   the container in which to do the layout.
             * @return the minimum dimensions needed to lay out the subcomponents
             *           of the specified container.
             * @see java.awt.Container
             * @see java.awt.BorderLayout#preferredLayoutSize
             * @see java.awt.Container#getMinimumSize()
             */
            // @ts-ignore
            minimumLayoutSize(target: java.awt.Container): java.awt.Dimension
            /**
             * Determines the preferred size of the <code>target</code>
             * container using this layout manager, based on the components
             * in the container.
             * <p>
             * Most applications do not call this method directly. This method
             * is called when a container calls its <code>getPreferredSize</code>
             * method.
             * @param target   the container in which to do the layout.
             * @return the preferred dimensions to lay out the subcomponents
             *           of the specified container.
             * @see java.awt.Container
             * @see java.awt.BorderLayout#minimumLayoutSize
             * @see java.awt.Container#getPreferredSize()
             */
            // @ts-ignore
            preferredLayoutSize(target: java.awt.Container): java.awt.Dimension
            /**
             * Returns the maximum dimensions for this layout given the components
             * in the specified target container.
             * @param target the component which needs to be laid out
             * @see Container
             * @see #minimumLayoutSize
             * @see #preferredLayoutSize
             */
            // @ts-ignore
            maximumLayoutSize(target: java.awt.Container): java.awt.Dimension
            /**
             * Returns the alignment along the x axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
             */
            // @ts-ignore
            getLayoutAlignmentX(parent: java.awt.Container): float
            /**
             * Returns the alignment along the y axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
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
             * Lays out the container argument using this border layout.
             * <p>
             * This method actually reshapes the components in the specified
             * container in order to satisfy the constraints of this
             * <code>BorderLayout</code> object. The <code>NORTH</code>
             * and <code>SOUTH</code> components, if any, are placed at
             * the top and bottom of the container, respectively. The
             * <code>WEST</code> and <code>EAST</code> components are
             * then placed on the left and right, respectively. Finally,
             * the <code>CENTER</code> object is placed in any remaining
             * space in the middle.
             * <p>
             * Most applications do not call this method directly. This method
             * is called when a container calls its <code>doLayout</code> method.
             * @param target   the container in which to do the layout.
             * @see java.awt.Container
             * @see java.awt.Container#doLayout()
             */
            // @ts-ignore
            layoutContainer(target: java.awt.Container): void
            /**
             * Returns a string representation of the state of this border layout.
             * @return a string representation of this border layout.
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
