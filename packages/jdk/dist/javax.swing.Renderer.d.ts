declare namespace javax {
    namespace swing {
        /**
         * Defines the requirements for an object responsible for
         * "rendering" (displaying) a value.
         * @author Arnaud Weber
         */
        // @ts-ignore
        interface Renderer {
            /**
             * Specifies the value to display and whether or not the
             * value should be portrayed as "currently selected".
             * @param aValue      an Object object
             * @param isSelected  a boolean
             */
            // @ts-ignore
            setValue(aValue: any, isSelected: boolean): void
            /**
             * Returns the component used to render the value.
             * @return the Component responsible for displaying the value
             */
            // @ts-ignore
            getComponent(): java.awt.Component
        }
    }
}
