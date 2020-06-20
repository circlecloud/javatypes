declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicComboBoxUI {
                    /**
                     * This listener watches for bound properties that have changed in the
                     * combo box.
                     * <p>
                     * Subclasses which wish to listen to combo box property changes should
                     * call the superclass methods to ensure that the combo box ui correctly
                     * handles property changes.
                     * <p>
                     * This public inner class should be treated as protected.
                     * Instantiate it only within subclasses of
                     * <code>BasicComboBoxUI</code>.
                     * @see #createPropertyChangeListener
                     */
                    // @ts-ignore
                    class PropertyChangeHandler extends java.lang.Object implements java.beans.PropertyChangeListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        propertyChange(e: java.beans.PropertyChangeEvent): void
                    }
                }
            }
        }
    }
}
