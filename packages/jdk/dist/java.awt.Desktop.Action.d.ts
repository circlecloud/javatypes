declare namespace java {
    namespace awt {
        namespace Desktop {
            /**
             * Represents an action type.  Each platform supports a different
             * set of actions.  You may use the {@link Desktop#isSupported}
             * method to determine if the given action is supported by the
             * current platform.
             * @see java.awt.Desktop#isSupported(java.awt.Desktop.Action)
             * @since 1.6
             */
            // @ts-ignore
            class Action extends java.lang.Enum<java.awt.Desktop.Action> {
                /**
                 * Represents an "open" action.
                 * @see Desktop#open(java.io.File)
                 */
                // @ts-ignore
                public static readonly OPEN: java.awt.Desktop.Action
                /**
                 * Represents an "edit" action.
                 * @see Desktop#edit(java.io.File)
                 */
                // @ts-ignore
                public static readonly EDIT: java.awt.Desktop.Action
                /**
                 * Represents a "print" action.
                 * @see Desktop#print(java.io.File)
                 */
                // @ts-ignore
                public static readonly PRINT: java.awt.Desktop.Action
                /**
                 * Represents a "mail" action.
                 * @see Desktop#mail()
                 * @see Desktop#mail(java.net.URI)
                 */
                // @ts-ignore
                public static readonly MAIL: java.awt.Desktop.Action
                /**
                 * Represents a "browse" action.
                 * @see Desktop#browse(java.net.URI)
                 */
                // @ts-ignore
                public static readonly BROWSE: java.awt.Desktop.Action
                // @ts-ignore
                public static values(): java.awt.Desktop.Action[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.awt.Desktop.Action
            }
        }
    }
}
