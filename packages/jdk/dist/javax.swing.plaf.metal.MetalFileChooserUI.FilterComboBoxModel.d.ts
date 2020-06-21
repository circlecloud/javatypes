declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                namespace MetalFileChooserUI {
                    /**
                     * Data model for a type-face selection combo-box.
                     */
                    // @ts-ignore
                    class FilterComboBoxModel extends javax.swing.AbstractListModel<java.lang.Object | any> implements javax.swing.ComboBoxModel<java.lang.Object | any>, java.beans.PropertyChangeListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        filters: javax.swing.filechooser.FileFilter[]
                        // @ts-ignore
                        public propertyChange(e: java.beans.PropertyChangeEvent): void
                        // @ts-ignore
                        public setSelectedItem(filter: java.lang.Object | any): void
                        // @ts-ignore
                        public getSelectedItem(): any
                        // @ts-ignore
                        public getSize(): number /*int*/
                        // @ts-ignore
                        public getElementAt(index: number /*int*/): any
                    }
                }
            }
        }
    }
}
