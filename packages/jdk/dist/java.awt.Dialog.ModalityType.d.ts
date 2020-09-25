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
                /**
                 * <code>MODELESS</code> dialog doesn't block any top-level windows.
                 */
                // @ts-ignore
                public static readonly MODELESS: java.awt.Dialog.ModalityType
                /**
                 * A <code>DOCUMENT_MODAL</code> dialog blocks input to all top-level windows
                 * from the same document except those from its own child hierarchy.
                 * A document is a top-level window without an owner. It may contain child
                 * windows that, together with the top-level window are treated as a single
                 * solid document. Since every top-level window must belong to some
                 * document, its root can be found as the top-nearest window without an owner.
                 */
                // @ts-ignore
                public static readonly DOCUMENT_MODAL: java.awt.Dialog.ModalityType
                /**
                 * An <code>APPLICATION_MODAL</code> dialog blocks all top-level windows
                 * from the same Java application except those from its own child hierarchy.
                 * If there are several applets launched in a browser, they can be
                 * treated either as separate applications or a single one. This behavior
                 * is implementation-dependent.
                 */
                // @ts-ignore
                public static readonly APPLICATION_MODAL: java.awt.Dialog.ModalityType
                /**
                 * A <code>TOOLKIT_MODAL</code> dialog blocks all top-level windows run
                 * from the same toolkit except those from its own child hierarchy. If there
                 * are several applets launched in a browser, all of them run with the same
                 * toolkit; thus, a toolkit-modal dialog displayed by an applet may affect
                 * other applets and all windows of the browser instance which embeds the
                 * Java runtime environment for this toolkit.
                 * Special <code>AWTPermission</code> "toolkitModality" must be granted to use
                 * toolkit-modal dialogs. If a <code>TOOLKIT_MODAL</code> dialog is being created
                 * and this permission is not granted, a <code>SecurityException</code> will be
                 * thrown, and no dialog will be created. If a modality type is being changed
                 * to <code>TOOLKIT_MODAL</code> and this permission is not granted, a
                 * <code>SecurityException</code> will be thrown, and the modality type will
                 * be left unchanged.
                 */
                // @ts-ignore
                public static readonly TOOLKIT_MODAL: java.awt.Dialog.ModalityType
                // @ts-ignore
                public static values(): java.awt.Dialog.ModalityType[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.awt.Dialog.ModalityType
            }
        }
    }
}
