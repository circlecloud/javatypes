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
                /**
                 * No modal exclusion.
                 */
                // @ts-ignore
                public static readonly NO_EXCLUDE: java.awt.Dialog.ModalExclusionType
                /**
                 * <code>APPLICATION_EXCLUDE</code> indicates that a top-level window
                 * won't be blocked by any application-modal dialogs. Also, it isn't
                 * blocked by document-modal dialogs from outside of its child hierarchy.
                 */
                // @ts-ignore
                public static readonly APPLICATION_EXCLUDE: java.awt.Dialog.ModalExclusionType
                /**
                 * <code>TOOLKIT_EXCLUDE</code> indicates that a top-level window
                 * won't be blocked by  application-modal or toolkit-modal dialogs. Also,
                 * it isn't blocked by document-modal dialogs from outside of its
                 * child hierarchy.
                 * The "toolkitModality" <code>AWTPermission</code> must be granted
                 * for this exclusion. If an exclusion property is being changed to
                 * <code>TOOLKIT_EXCLUDE</code> and this permission is not granted, a
                 * <code>SecurityEcxeption</code> will be thrown, and the exclusion
                 * property will be left unchanged.
                 */
                // @ts-ignore
                public static readonly TOOLKIT_EXCLUDE: java.awt.Dialog.ModalExclusionType
                // @ts-ignore
                public static values(): java.awt.Dialog.ModalExclusionType[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.awt.Dialog.ModalExclusionType
            }
        }
    }
}
