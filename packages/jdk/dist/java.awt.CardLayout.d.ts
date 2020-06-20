declare namespace java {
    namespace awt {
        /**
         * A <code>CardLayout</code> object is a layout manager for a
         * container. It treats each component in the container as a card.
         * Only one card is visible at a time, and the container acts as
         * a stack of cards. The first component added to a
         * <code>CardLayout</code> object is the visible component when the
         * container is first displayed.
         * <p>
         * The ordering of cards is determined by the container's own internal
         * ordering of its component objects. <code>CardLayout</code>
         * defines a set of methods that allow an application to flip
         * through these cards sequentially, or to show a specified card.
         * The {@link CardLayout#addLayoutComponent}
         * method can be used to associate a string identifier with a given card
         * for fast random access.
         * @author Arthur van Hoff
         * @see java.awt.Container
         * @since JDK1.0
         */
        // @ts-ignore
        class CardLayout extends java.lang.Object implements java.awt.LayoutManager2, java.io.Serializable {
            /**
             * Creates a new card layout with gaps of size zero.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new card layout with the specified horizontal and
             * vertical gaps. The horizontal gaps are placed at the left and
             * right edges. The vertical gaps are placed at the top and bottom
             * edges.
             * @param hgap   the horizontal gap.
             * @param vgap   the vertical gap.
             */
            // @ts-ignore
            constructor(hgap: number /*int*/, vgap: number /*int*/)
            /**
             * Gets the horizontal gap between components.
             * @return the horizontal gap between components.
             * @see java.awt.CardLayout#setHgap(int)
             * @see java.awt.CardLayout#getVgap()
             * @since JDK1.1
             */
            // @ts-ignore
            getHgap(): int
            /**
             * Sets the horizontal gap between components.
             * @param hgap the horizontal gap between components.
             * @see java.awt.CardLayout#getHgap()
             * @see java.awt.CardLayout#setVgap(int)
             * @since JDK1.1
             */
            // @ts-ignore
            setHgap(hgap: number /*int*/): void
            /**
             * Gets the vertical gap between components.
             * @return the vertical gap between components.
             * @see java.awt.CardLayout#setVgap(int)
             * @see java.awt.CardLayout#getHgap()
             */
            // @ts-ignore
            getVgap(): int
            /**
             * Sets the vertical gap between components.
             * @param vgap the vertical gap between components.
             * @see java.awt.CardLayout#getVgap()
             * @see java.awt.CardLayout#setHgap(int)
             * @since JDK1.1
             */
            // @ts-ignore
            setVgap(vgap: number /*int*/): void
            /**
             * Adds the specified component to this card layout's internal
             * table of names. The object specified by <code>constraints</code>
             * must be a string. The card layout stores this string as a key-value
             * pair that can be used for random access to a particular card.
             * By calling the <code>show</code> method, an application can
             * display the component with the specified name.
             * @param comp          the component to be added.
             * @param constraints   a tag that identifies a particular
             *                                         card in the layout.
             * @see java.awt.CardLayout#show(java.awt.Container, java.lang.String)
             * @exception IllegalArgumentException  if the constraint is not a string.
             */
            // @ts-ignore
            addLayoutComponent(comp: java.awt.Component, constraints: any): void
            /**
             * @deprecated replaced by
             *       <code>addLayoutComponent(Component, Object)</code>.
             */
            // @ts-ignore
            addLayoutComponent(name: string, comp: java.awt.Component): void
            /**
             * Removes the specified component from the layout.
             * If the card was visible on top, the next card underneath it is shown.
             * @param comp   the component to be removed.
             * @see java.awt.Container#remove(java.awt.Component)
             * @see java.awt.Container#removeAll()
             */
            // @ts-ignore
            removeLayoutComponent(comp: java.awt.Component): void
            /**
             * Determines the preferred size of the container argument using
             * this card layout.
             * @param parent the parent container in which to do the layout
             * @return the preferred dimensions to lay out the subcomponents
             *                 of the specified container
             * @see java.awt.Container#getPreferredSize
             * @see java.awt.CardLayout#minimumLayoutSize
             */
            // @ts-ignore
            preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension
            /**
             * Calculates the minimum size for the specified panel.
             * @param parent the parent container in which to do the layout
             * @return the minimum dimensions required to lay out the
             *                 subcomponents of the specified container
             * @see java.awt.Container#doLayout
             * @see java.awt.CardLayout#preferredLayoutSize
             */
            // @ts-ignore
            minimumLayoutSize(parent: java.awt.Container): java.awt.Dimension
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
             * Lays out the specified container using this card layout.
             * <p>
             * Each component in the <code>parent</code> container is reshaped
             * to be the size of the container, minus space for surrounding
             * insets, horizontal gaps, and vertical gaps.
             * @param parent the parent container in which to do the layout
             * @see java.awt.Container#doLayout
             */
            // @ts-ignore
            layoutContainer(parent: java.awt.Container): void
            /**
             * Flips to the first card of the container.
             * @param parent   the parent container in which to do the layout
             * @see java.awt.CardLayout#last
             */
            // @ts-ignore
            first(parent: java.awt.Container): void
            /**
             * Flips to the next card of the specified container. If the
             * currently visible card is the last one, this method flips to the
             * first card in the layout.
             * @param parent   the parent container in which to do the layout
             * @see java.awt.CardLayout#previous
             */
            // @ts-ignore
            next(parent: java.awt.Container): void
            /**
             * Flips to the previous card of the specified container. If the
             * currently visible card is the first one, this method flips to the
             * last card in the layout.
             * @param parent   the parent container in which to do the layout
             * @see java.awt.CardLayout#next
             */
            // @ts-ignore
            previous(parent: java.awt.Container): void
            /**
             * Flips to the last card of the container.
             * @param parent   the parent container in which to do the layout
             * @see java.awt.CardLayout#first
             */
            // @ts-ignore
            last(parent: java.awt.Container): void
            /**
             * Flips to the component that was added to this layout with the
             * specified <code>name</code>, using <code>addLayoutComponent</code>.
             * If no such component exists, then nothing happens.
             * @param parent   the parent container in which to do the layout
             * @param name     the component name
             * @see java.awt.CardLayout#addLayoutComponent(java.awt.Component, java.lang.Object)
             */
            // @ts-ignore
            show(parent: java.awt.Container, name: string): void
            /**
             * Returns a string representation of the state of this card layout.
             * @return a string representation of this card layout.
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
