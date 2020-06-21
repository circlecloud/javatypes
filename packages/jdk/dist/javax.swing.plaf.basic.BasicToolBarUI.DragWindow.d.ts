declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicToolBarUI {
                    // @ts-ignore
                    class DragWindow extends java.awt.Window {
                        /**
                         * Returns the orientation of the toolbar window when the toolbar is
                         * floating. The orientation is either one of <code>JToolBar.HORIZONTAL</code>
                         * or <code>JToolBar.VERTICAL</code>.
                         * @return the orientation of the toolbar window
                         * @since 1.6
                         */
                        // @ts-ignore
                        public getOrientation(): number /*int*/
                        // @ts-ignore
                        public setOrientation(o: number /*int*/): void
                        // @ts-ignore
                        public getOffset(): java.awt.Point
                        // @ts-ignore
                        public setOffset(p: java.awt.Point): void
                        // @ts-ignore
                        public setBorderColor(c: java.awt.Color): void
                        // @ts-ignore
                        public getBorderColor(): java.awt.Color
                        // @ts-ignore
                        public paint(g: java.awt.Graphics): void
                        // @ts-ignore
                        public getInsets(): java.awt.Insets
                    }
                }
            }
        }
    }
}
