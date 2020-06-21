declare namespace javax {
    namespace print {
        /**
         * Services may optionally provide UIs which allow different styles
         * of interaction in different roles.
         * One role may be end-user browsing and setting of print options.
         * Another role may be administering the print service.
         * <p>
         * Although the Print Service API does not presently provide standardised
         * support for administering a print service, monitoring of the print
         * service is possible and a UI may provide for private update mechanisms.
         * <p>
         * The basic design intent is to allow applications to lazily locate and
         * initialize services only when needed without any API dependencies
         * except in an environment in which they are used.
         * <p>
         * Swing UIs are preferred as they provide a more consistent {@literal L&F}
         * and can support accessibility APIs.
         * <p>
         * Example usage:
         * <pre>
         * ServiceUIFactory factory = printService.getServiceUIFactory();
         * if (factory != null) {
         * JComponent swingui = (JComponent)factory.getUI(
         * ServiceUIFactory.MAIN_UIROLE,
         * ServiceUIFactory.JCOMPONENT_UI);
         * if (swingui != null) {
         * tabbedpane.add("Custom UI", swingui);
         * }
         * }
         * </pre>
         */
        // @ts-ignore
        abstract class ServiceUIFactory extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Denotes a UI implemented as a Swing component.
             * The value of the String is the fully qualified classname :
             * "javax.swing.JComponent".
             */
            // @ts-ignore
            public static readonly JCOMPONENT_UI: java.lang.String | string
            /**
             * Denotes a UI implemented as an AWT panel.
             * The value of the String is the fully qualified classname :
             * "java.awt.Panel"
             */
            // @ts-ignore
            public static readonly PANEL_UI: java.lang.String | string
            /**
             * Denotes a UI implemented as an AWT dialog.
             * The value of the String is the fully qualified classname :
             * "java.awt.Dialog"
             */
            // @ts-ignore
            public static readonly DIALOG_UI: java.lang.String | string
            /**
             * Denotes a UI implemented as a Swing dialog.
             * The value of the String is the fully qualified classname :
             * "javax.swing.JDialog"
             */
            // @ts-ignore
            public static readonly JDIALOG_UI: java.lang.String | string
            /**
             * Denotes a UI which performs an informative "About" role.
             */
            // @ts-ignore
            public static readonly ABOUT_UIROLE: number /*int*/
            /**
             * Denotes a UI which performs an administrative role.
             */
            // @ts-ignore
            public static readonly ADMIN_UIROLE: number /*int*/
            /**
             * Denotes a UI which performs the normal end user role.
             */
            // @ts-ignore
            public static readonly MAIN_UIROLE: number /*int*/
            /**
             * Not a valid role but role id's greater than this may be used
             * for private roles supported by a service. Knowledge of the
             * function performed by this role is required to make proper use
             * of it.
             */
            // @ts-ignore
            public static readonly RESERVED_UIROLE: number /*int*/
            /**
             * Get a UI object which may be cast to the requested UI type
             * by the application and used in its user interface.
             * <P>
             * @param role requested. Must be one of the standard roles or
             *  a private role supported by this factory.
             * @param ui type in which the role is requested.
             * @return the UI role or null if the requested UI role is not available
             *  from this factory
             * @throws IllegalArgumentException if the role or ui is neither
             *  one of the standard ones, nor a private one
             *  supported by the factory.
             */
            // @ts-ignore
            public abstract getUI(role: number /*int*/, ui: java.lang.String | string): any
            /**
             * Given a UI role obtained from this factory obtain the UI
             * types available from this factory which implement this role.
             * The returned Strings should refer to the static variables defined
             * in this class so that applications can use equality of reference
             * ("==").
             * @param role to be looked up.
             * @return the UI types supported by this class for the specified role,
             *  null if no UIs are available for the role.
             * @throws IllegalArgumentException is the role is a non-standard
             *  role not supported by this factory.
             */
            // @ts-ignore
            public abstract getUIClassNamesForRole(role: number /*int*/): string[]
        }
    }
}
