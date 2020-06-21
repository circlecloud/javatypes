declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicTabbedPaneUI {
                    /**
                     * This class should be treated as a &quot;protected&quot; inner class.
                     * Instantiate it only within subclasses of BasicTabbedPaneUI.
                     */
                    // @ts-ignore
                    class TabbedPaneLayout extends java.lang.Object implements java.awt.LayoutManager {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public addLayoutComponent(name: java.lang.String | string, comp: java.awt.Component): void
                        // @ts-ignore
                        public removeLayoutComponent(comp: java.awt.Component): void
                        // @ts-ignore
                        public preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension
                        // @ts-ignore
                        public minimumLayoutSize(parent: java.awt.Container): java.awt.Dimension
                        // @ts-ignore
                        calculateSize(minimum: boolean): java.awt.Dimension
                        // @ts-ignore
                        preferredTabAreaHeight(tabPlacement: number /*int*/, width: number /*int*/): number /*int*/
                        // @ts-ignore
                        preferredTabAreaWidth(tabPlacement: number /*int*/, height: number /*int*/): number /*int*/
                        // @ts-ignore
                        public layoutContainer(parent: java.awt.Container): void
                        // @ts-ignore
                        public calculateLayoutInfo(): void
                        // @ts-ignore
                        calculateTabRects(tabPlacement: number /*int*/, tabCount: number /*int*/): void
                        // @ts-ignore
                        rotateTabRuns(tabPlacement: number /*int*/, selectedRun: number /*int*/): void
                        // @ts-ignore
                        normalizeTabRuns(tabPlacement: number /*int*/, tabCount: number /*int*/, start: number /*int*/, max: number /*int*/): void
                        // @ts-ignore
                        padTabRun(tabPlacement: number /*int*/, start: number /*int*/, end: number /*int*/, max: number /*int*/): void
                        // @ts-ignore
                        padSelectedTab(tabPlacement: number /*int*/, selectedIndex: number /*int*/): void
                    }
                }
            }
        }
    }
}
