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
                // @ts-ignore
                values(): java.awt.TrayIcon.MessageType[]
                // @ts-ignore
                valueOf(name: string): java.awt.TrayIcon.MessageType
            }
        }
    }
}
