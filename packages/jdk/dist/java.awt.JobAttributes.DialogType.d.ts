declare namespace java {
    namespace awt {
        namespace JobAttributes {
            /**
             * A type-safe enumeration of possible dialogs to display to the user.
             * @since 1.3
             */
            // @ts-ignore
            class DialogType extends java.awt.AttributeValue {
                /**
                 * The <code>DialogType</code> instance to use for
                 * specifying the cross-platform, pure Java print dialog.
                 */
                // @ts-ignore
                readonly COMMON: java.awt.JobAttributes.DialogType
                /**
                 * The <code>DialogType</code> instance to use for
                 * specifying the platform's native print dialog.
                 */
                // @ts-ignore
                readonly NATIVE: java.awt.JobAttributes.DialogType
                /**
                 * The <code>DialogType</code> instance to use for
                 * specifying no print dialog.
                 */
                // @ts-ignore
                readonly NONE: java.awt.JobAttributes.DialogType
            }
        }
    }
}
