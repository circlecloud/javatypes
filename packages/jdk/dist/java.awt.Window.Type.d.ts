declare namespace java {
    namespace awt {
        namespace Window {
            /**
             * Enumeration of available <i>window types</i>.
             * A window type defines the generic visual appearance and behavior of a
             * top-level window. For example, the type may affect the kind of
             * decorations of a decorated {@code Frame} or {@code Dialog} instance.
             * <p>
             * Some platforms may not fully support a certain window type. Depending on
             * the level of support, some properties of the window type may be
             * disobeyed.
             * @see #getType
             * @see #setType
             * @since 1.7
             */
            // @ts-ignore
            class Type extends java.lang.Enum<java.awt.Window.Type> {
                // @ts-ignore
                values(): java.awt.Window.Type[]
                // @ts-ignore
                valueOf(name: string): java.awt.Window.Type
            }
        }
    }
}
