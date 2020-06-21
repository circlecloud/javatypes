declare namespace javax {
    namespace swing {
        /**
         * The editor component used for JComboBox components.
         * @author Arnaud Weber
         */
        // @ts-ignore
        interface ComboBoxEditor {
            /**
             * Return the component that should be added to the tree hierarchy for
             * this editor
             */
            // @ts-ignore
            getEditorComponent(): java.awt.Component
            /**
             * Set the item that should be edited. Cancel any editing if necessary
             */
            // @ts-ignore
            setItem(anObject: java.lang.Object | any): void
            /**
             * Return the edited item
             */
            // @ts-ignore
            getItem(): any
            /**
             * Ask the editor to start editing and to select everything
             */
            // @ts-ignore
            selectAll(): void
            /**
             * Add an ActionListener. An action event is generated when the edited item changes
             */
            // @ts-ignore
            addActionListener(l: java.awt.event.ActionListener): void
            /**
             * Remove an ActionListener
             */
            // @ts-ignore
            removeActionListener(l: java.awt.event.ActionListener): void
        }
    }
}
