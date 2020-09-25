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
                /**
                 * Represents a <i>normal</i> window.
                 * This is the default type for objects of the {@code Window} class or
                 * its descendants. Use this type for regular top-level windows.
                 */
                // @ts-ignore
                public static readonly NORMAL: java.awt.Window.Type
                /**
                 * Represents a <i>utility</i> window.
                 * A utility window is usually a small window such as a toolbar or a
                 * palette. The native system may render the window with smaller
                 * title-bar if the window is either a {@code Frame} or a {@code
                 * Dialog} object, and if it has its decorations enabled.
                 */
                // @ts-ignore
                public static readonly UTILITY: java.awt.Window.Type
                /**
                 * Represents a <i>popup</i> window.
                 * A popup window is a temporary window such as a drop-down menu or a
                 * tooltip. On some platforms, windows of that type may be forcibly
                 * made undecorated even if they are instances of the {@code Frame} or
                 * {@code Dialog} class, and have decorations enabled.
                 */
                // @ts-ignore
                public static readonly POPUP: java.awt.Window.Type
                // @ts-ignore
                public static values(): java.awt.Window.Type[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.awt.Window.Type
            }
        }
    }
}
