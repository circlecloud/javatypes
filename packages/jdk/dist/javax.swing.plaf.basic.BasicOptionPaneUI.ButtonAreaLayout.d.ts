declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicOptionPaneUI {
                    /**
                     * <code>ButtonAreaLayout</code> behaves in a similar manner to
                     * <code>FlowLayout</code>. It lays out all components from left to
                     * right. If <code>syncAllWidths</code> is true, the widths of each
                     * component will be set to the largest preferred size width.
                     * This class should be treated as a &quot;protected&quot; inner class.
                     * Instantiate it only within subclasses of {@code BasicOptionPaneUI}.
                     */
                    // @ts-ignore
                    class ButtonAreaLayout extends java.lang.Object implements java.awt.LayoutManager {
                        // @ts-ignore
                        constructor(syncAllWidths: boolean, padding: number /*int*/)
                        // @ts-ignore
                        syncAllWidths: boolean
                        // @ts-ignore
                        padding: number /*int*/
                        /**
                         * If true, children are lumped together in parent.
                         */
                        // @ts-ignore
                        centersChildren: boolean
                        // @ts-ignore
                        public setSyncAllWidths(newValue: boolean): void
                        // @ts-ignore
                        public getSyncAllWidths(): boolean
                        // @ts-ignore
                        public setPadding(newPadding: number /*int*/): void
                        // @ts-ignore
                        public getPadding(): number /*int*/
                        // @ts-ignore
                        public setCentersChildren(newValue: boolean): void
                        // @ts-ignore
                        public getCentersChildren(): boolean
                        // @ts-ignore
                        public addLayoutComponent(string: java.lang.String | string, comp: java.awt.Component): void
                        // @ts-ignore
                        public layoutContainer(container: java.awt.Container): void
                        // @ts-ignore
                        public minimumLayoutSize(c: java.awt.Container): java.awt.Dimension
                        // @ts-ignore
                        public preferredLayoutSize(c: java.awt.Container): java.awt.Dimension
                        // @ts-ignore
                        public removeLayoutComponent(c: java.awt.Component): void
                    }
                }
            }
        }
    }
}
