declare namespace javax {
    namespace swing {
        namespace JComponent {
            namespace AccessibleJComponent {
                /**
                 * Fire PropertyChange listener, if one is registered,
                 * when children added/removed.
                 */
                // @ts-ignore
                class AccessibleContainerHandler extends java.lang.Object implements java.awt.event.ContainerListener {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    componentAdded(e: java.awt.event.ContainerEvent): void
                    // @ts-ignore
                    componentRemoved(e: java.awt.event.ContainerEvent): void
                }
            }
        }
    }
}
