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
                        getOrientation(): int
                        // @ts-ignore
                        setOrientation(o: number /*int*/): void
                        // @ts-ignore
                        getOffset(): java.awt.Point
                        // @ts-ignore
                        setOffset(p: java.awt.Point): void
                        // @ts-ignore
                        setBorderColor(c: java.awt.Color): void
                        // @ts-ignore
                        getBorderColor(): java.awt.Color
                        // @ts-ignore
                        paint(g: java.awt.Graphics): void
                        // @ts-ignore
                        getInsets(): java.awt.Insets
                    }
                }
            }
        }
    }
}
