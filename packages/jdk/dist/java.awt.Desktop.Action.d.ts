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
                readonly OPEN: java.awt.Desktop.Action
                /**
                 * Represents an "edit" action.
                 * @see Desktop#edit(java.io.File)
                 */
                // @ts-ignore
                readonly EDIT: java.awt.Desktop.Action
                /**
                 * Represents a "print" action.
                 * @see Desktop#print(java.io.File)
                 */
                // @ts-ignore
                readonly PRINT: java.awt.Desktop.Action
                /**
                 * Represents a "mail" action.
                 * @see Desktop#mail()
                 * @see Desktop#mail(java.net.URI)
                 */
                // @ts-ignore
                readonly MAIL: java.awt.Desktop.Action
                /**
                 * Represents a "browse" action.
                 * @see Desktop#browse(java.net.URI)
                 */
                // @ts-ignore
                readonly BROWSE: java.awt.Desktop.Action
                // @ts-ignore
                values(): java.awt.Desktop.Action[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): java.awt.Desktop.Action
            }
        }
    }
}
