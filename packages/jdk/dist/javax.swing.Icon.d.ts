declare namespace javax {
    namespace swing {
        /**
         * A small fixed size picture, typically used to decorate components.
         * @see ImageIcon
         */
        // @ts-ignore
        interface Icon {
            /**
             * Draw the icon at the specified location.  Icon implementations
             * may use the Component argument to get properties useful for
             * painting, e.g. the foreground or background color.
             */
            // @ts-ignore
            paintIcon(c: java.awt.Component, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/): void
            /**
             * Returns the icon's width.
             * @return an int specifying the fixed width of the icon.
             */
            // @ts-ignore
            getIconWidth(): int
            /**
             * Returns the icon's height.
             * @return an int specifying the fixed height of the icon.
             */
            // @ts-ignore
            getIconHeight(): int
        }
    }
}
