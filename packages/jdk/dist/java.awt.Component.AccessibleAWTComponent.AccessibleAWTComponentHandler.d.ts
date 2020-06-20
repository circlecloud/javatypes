declare namespace java {
    namespace awt {
        namespace Component {
            namespace AccessibleAWTComponent {
                /**
                 * Fire PropertyChange listener, if one is registered,
                 * when shown/hidden..
                 * @since 1.3
                 */
                // @ts-ignore
                class AccessibleAWTComponentHandler extends java.lang.Object implements java.awt.event.ComponentListener {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    componentHidden(e: java.awt.event.ComponentEvent): void
                    // @ts-ignore
                    componentShown(e: java.awt.event.ComponentEvent): void
                    // @ts-ignore
                    componentMoved(e: java.awt.event.ComponentEvent): void
                    // @ts-ignore
                    componentResized(e: java.awt.event.ComponentEvent): void
                }
            }
        }
    }
}
