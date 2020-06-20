declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicOptionPaneUI {
                    /**
                     * This class should be treated as a &quot;protected&quot; inner class.
                     * Instantiate it only within subclasses of {@code BasicOptionPaneUI}.
                     */
                    // @ts-ignore
                    class PropertyChangeHandler extends java.lang.Object implements java.beans.PropertyChangeListener {
                        // @ts-ignore
                        constructor()
                        /**
                         * If the source of the PropertyChangeEvent <code>e</code> equals the
                         * optionPane and is one of the ICON_PROPERTY, MESSAGE_PROPERTY,
                         * OPTIONS_PROPERTY or INITIAL_VALUE_PROPERTY,
                         * validateComponent is invoked.
                         */
                        // @ts-ignore
                        propertyChange(e: java.beans.PropertyChangeEvent): void
                    }
                }
            }
        }
    }
}
