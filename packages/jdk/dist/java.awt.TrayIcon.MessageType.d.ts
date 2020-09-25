declare namespace java {
    namespace awt {
        namespace TrayIcon {
            /**
             * The message type determines which icon will be displayed in the
             * caption of the message, and a possible system sound a message
             * may generate upon showing.
             * @see TrayIcon
             * @see TrayIcon#displayMessage(String, String, MessageType)
             * @since 1.6
             */
            // @ts-ignore
            class MessageType extends java.lang.Enum<java.awt.TrayIcon.MessageType> {
                /**
                 * An error message
                 */
                // @ts-ignore
                public static readonly ERROR: java.awt.TrayIcon.MessageType
                /**
                 * A warning message
                 */
                // @ts-ignore
                public static readonly WARNING: java.awt.TrayIcon.MessageType
                /**
                 * An information message
                 */
                // @ts-ignore
                public static readonly INFO: java.awt.TrayIcon.MessageType
                /**
                 * Simple message
                 */
                // @ts-ignore
                public static readonly NONE: java.awt.TrayIcon.MessageType
                // @ts-ignore
                public static values(): java.awt.TrayIcon.MessageType[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.awt.TrayIcon.MessageType
            }
        }
    }
}
