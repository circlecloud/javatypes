declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicComboPopup {
                    /**
                     * This listener watches for bound properties that have changed in the
                     * combo box.
                     * <p>
                     * Subclasses which wish to listen to combo box property changes should
                     * call the superclass methods to ensure that the combo popup correctly
                     * handles property changes.
                     * @see #createPropertyChangeListener
                     */
                    // @ts-ignore
                    class PropertyChangeHandler extends java.lang.Object implements java.beans.PropertyChangeListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public propertyChange(e: java.beans.PropertyChangeEvent): void
                    }
                }
            }
        }
    }
}
