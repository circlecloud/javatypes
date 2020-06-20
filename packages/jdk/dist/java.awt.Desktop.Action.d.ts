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
                // @ts-ignore
                values(): java.awt.Desktop.Action[]
                // @ts-ignore
                valueOf(name: string): java.awt.Desktop.Action
            }
        }
    }
}
