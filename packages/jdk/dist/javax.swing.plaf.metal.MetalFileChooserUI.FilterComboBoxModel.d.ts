declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                namespace MetalFileChooserUI {
                    /**
                     * Data model for a type-face selection combo-box.
                     */
                    // @ts-ignore
                    class FilterComboBoxModel extends javax.swing.AbstractListModel<java.lang.Object> implements javax.swing.ComboBoxModel<java.lang.Object>, java.beans.PropertyChangeListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        filters: javax.swing.filechooser.FileFilter[]
                        // @ts-ignore
                        propertyChange(e: java.beans.PropertyChangeEvent): void
                        // @ts-ignore
                        setSelectedItem(filter: any): void
                        // @ts-ignore
                        getSelectedItem(): java.lang.Object
                        // @ts-ignore
                        getSize(): int
                        // @ts-ignore
                        getElementAt(index: number /*int*/): java.lang.Object
                    }
                }
            }
        }
    }
}
