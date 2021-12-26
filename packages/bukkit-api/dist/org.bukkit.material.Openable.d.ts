declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
            interface Openable {
                /**
                 * Check to see if the door is open.
                 * @return true if the door has swung counterclockwise around its hinge.
                 */
                // @ts-ignore
                isOpen(): boolean
                /**
                 * Configure this door to be either open or closed;
                 * @param isOpen True to open the door.
                 */
                // @ts-ignore
                setOpen(isOpen: boolean): void
            }
        }
    }
}
