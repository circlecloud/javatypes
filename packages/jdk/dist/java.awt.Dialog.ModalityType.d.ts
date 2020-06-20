declare namespace java {
    namespace awt {
        namespace Dialog {
            /**
             * Modal dialogs block all input to some top-level windows.
             * Whether a particular window is blocked depends on dialog's type
             * of modality; this is called the "scope of blocking". The
             * <code>ModalityType</code> enum specifies modal types and their
             * associated scopes.
             * @see Dialog#getModalityType
             * @see Dialog#setModalityType
             * @see Toolkit#isModalityTypeSupported
             * @since 1.6
             */
            // @ts-ignore
            class ModalityType extends java.lang.Enum<java.awt.Dialog.ModalityType> {
                // @ts-ignore
                values(): java.awt.Dialog.ModalityType[]
                // @ts-ignore
                valueOf(name: string): java.awt.Dialog.ModalityType
            }
        }
    }
}
