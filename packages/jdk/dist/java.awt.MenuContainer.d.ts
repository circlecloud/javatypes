declare namespace java {
    namespace awt {
        /**
         * The super class of all menu related containers.
         * @author Arthur van Hoff
         */
        // @ts-ignore
        interface MenuContainer {
            // @ts-ignore
            getFont(): java.awt.Font
            // @ts-ignore
            remove(comp: java.awt.MenuComponent): void
            /**
             * @deprecated As of JDK version 1.1
             *  replaced by dispatchEvent(AWTEvent).
             */
            // @ts-ignore
            postEvent(evt: java.awt.Event): boolean
        }
    }
}
