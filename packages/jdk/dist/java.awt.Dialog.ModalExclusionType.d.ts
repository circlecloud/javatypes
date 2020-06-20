declare namespace java {
    namespace awt {
        namespace Dialog {
            /**
             * Any top-level window can be marked not to be blocked by modal
             * dialogs. This is called "modal exclusion". This enum specifies
             * the possible modal exclusion types.
             * @see Window#getModalExclusionType
             * @see Window#setModalExclusionType
             * @see Toolkit#isModalExclusionTypeSupported
             * @since 1.6
             */
            // @ts-ignore
            class ModalExclusionType extends java.lang.Enum<java.awt.Dialog.ModalExclusionType> {
                // @ts-ignore
                values(): java.awt.Dialog.ModalExclusionType[]
                // @ts-ignore
                valueOf(name: string): java.awt.Dialog.ModalExclusionType
            }
        }
    }
}
