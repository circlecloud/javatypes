declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicComboBoxUI {
                    /**
                     * This layout manager handles the 'standard' layout of combo boxes.  It puts
                     * the arrow button to the right and the editor to the left.  If there is no
                     * editor it still keeps the arrow button to the right.
                     * This public inner class should be treated as protected.
                     * Instantiate it only within subclasses of
                     * <code>BasicComboBoxUI</code>.
                     */
                    // @ts-ignore
                    class ComboBoxLayoutManager extends java.lang.Object implements java.awt.LayoutManager {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        addLayoutComponent(name: string, comp: java.awt.Component): void
                        // @ts-ignore
                        removeLayoutComponent(comp: java.awt.Component): void
                        // @ts-ignore
                        preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension
                        // @ts-ignore
                        minimumLayoutSize(parent: java.awt.Container): java.awt.Dimension
                        // @ts-ignore
                        layoutContainer(parent: java.awt.Container): void
                    }
                }
            }
        }
    }
}
