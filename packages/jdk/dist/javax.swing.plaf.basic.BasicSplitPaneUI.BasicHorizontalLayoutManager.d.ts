declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicSplitPaneUI {
                    /**
                     * LayoutManager for JSplitPanes that have an orientation of
                     * HORIZONTAL_SPLIT.
                     */
                    // @ts-ignore
                    class BasicHorizontalLayoutManager extends java.lang.Object implements java.awt.LayoutManager2 {
                        // @ts-ignore
                        sizes: number /*int*/[]
                        // @ts-ignore
                        components: java.awt.Component[]
                        /**
                         * Does the actual layout.
                         */
                        // @ts-ignore
                        layoutContainer(container: java.awt.Container): void
                        /**
                         * Adds the component at place.  Place must be one of
                         * JSplitPane.LEFT, RIGHT, TOP, BOTTOM, or null (for the
                         * divider).
                         */
                        // @ts-ignore
                        addLayoutComponent(place: string, component: java.awt.Component): void
                        /**
                         * Returns the minimum size needed to contain the children.
                         * The width is the sum of all the children's min widths and
                         * the height is the largest of the children's minimum heights.
                         */
                        // @ts-ignore
                        minimumLayoutSize(container: java.awt.Container): java.awt.Dimension
                        /**
                         * Returns the preferred size needed to contain the children.
                         * The width is the sum of all the preferred widths of the children and
                         * the height is the largest preferred height of the children.
                         */
                        // @ts-ignore
                        preferredLayoutSize(container: java.awt.Container): java.awt.Dimension
                        /**
                         * Removes the specified component from our knowledge.
                         */
                        // @ts-ignore
                        removeLayoutComponent(component: java.awt.Component): void
                        /**
                         * Adds the specified component to the layout, using the specified
                         * constraint object.
                         * @param comp the component to be added
                         * @param constraints  where/how the component is added to the layout.
                         */
                        // @ts-ignore
                        addLayoutComponent(comp: java.awt.Component, constraints: any): void
                        /**
                         * Returns the alignment along the x axis.  This specifies how
                         * the component would like to be aligned relative to other
                         * components.  The value should be a number between 0 and 1
                         * where 0 represents alignment along the origin, 1 is aligned
                         * the furthest away from the origin, 0.5 is centered, etc.
                         */
                        // @ts-ignore
                        getLayoutAlignmentX(target: java.awt.Container): float
                        /**
                         * Returns the alignment along the y axis.  This specifies how
                         * the component would like to be aligned relative to other
                         * components.  The value should be a number between 0 and 1
                         * where 0 represents alignment along the origin, 1 is aligned
                         * the furthest away from the origin, 0.5 is centered, etc.
                         */
                        // @ts-ignore
                        getLayoutAlignmentY(target: java.awt.Container): float
                        /**
                         * Does nothing. If the developer really wants to change the
                         * size of one of the views JSplitPane.resetToPreferredSizes should
                         * be messaged.
                         */
                        // @ts-ignore
                        invalidateLayout(c: java.awt.Container): void
                        /**
                         * Returns the maximum layout size, which is Integer.MAX_VALUE
                         * in both directions.
                         */
                        // @ts-ignore
                        maximumLayoutSize(target: java.awt.Container): java.awt.Dimension
                        /**
                         * Marks the receiver so that the next time this instance is
                         * laid out it'll ask for the preferred sizes.
                         */
                        // @ts-ignore
                        resetToPreferredSizes(): void
                        /**
                         * Resets the size of the Component at the passed in location.
                         */
                        // @ts-ignore
                        resetSizeAt(index: number /*int*/): void
                        /**
                         * Sets the sizes to <code>newSizes</code>.
                         */
                        // @ts-ignore
                        setSizes(newSizes: number /*int*/[]): void
                        /**
                         * Returns the sizes of the components.
                         */
                        // @ts-ignore
                        getSizes(): int[]
                        /**
                         * Returns the width of the passed in Components preferred size.
                         */
                        // @ts-ignore
                        getPreferredSizeOfComponent(c: java.awt.Component): int
                        /**
                         * Returns the width of the passed in component.
                         */
                        // @ts-ignore
                        getSizeOfComponent(c: java.awt.Component): int
                        /**
                         * Returns the available width based on the container size and
                         * Insets.
                         */
                        // @ts-ignore
                        getAvailableSize(containerSize: java.awt.Dimension, insets: java.awt.Insets): int
                        /**
                         * Returns the left inset, unless the Insets are null in which case
                         * 0 is returned.
                         */
                        // @ts-ignore
                        getInitialLocation(insets: java.awt.Insets): int
                        /**
                         * Sets the width of the component c to be size, placing its
                         * x location at location, y to the insets.top and height
                         * to the containersize.height less the top and bottom insets.
                         */
                        // @ts-ignore
                        setComponentToSize(c: java.awt.Component, size: number /*int*/, location: number /*int*/, insets: java.awt.Insets, containerSize: java.awt.Dimension): void
                        /**
                         * Determines the components. This should be called whenever
                         * a new instance of this is installed into an existing
                         * SplitPane.
                         */
                        // @ts-ignore
                        updateComponents(): void
                    }
                }
            }
        }
    }
}
