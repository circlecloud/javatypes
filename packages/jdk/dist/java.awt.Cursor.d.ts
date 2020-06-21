declare namespace java {
    namespace awt {
        /**
         * A class to encapsulate the bitmap representation of the mouse cursor.
         * @see Component#setCursor
         * @author Amy Fowler
         */
        // @ts-ignore
        class Cursor extends java.lang.Object implements java.io.Serializable {
            /**
             * Creates a new cursor object with the specified type.
             * @param type the type of cursor
             * @throws IllegalArgumentException if the specified cursor type
             *  is invalid
             */
            // @ts-ignore
            constructor(type: number /*int*/)
            /**
             * Creates a new custom cursor object with the specified name.<p>
             * Note:  this constructor should only be used by AWT implementations
             * as part of their support for custom cursors.  Applications should
             * use Toolkit.createCustomCursor().
             * @param name the user-visible name of the cursor.
             * @see java.awt.Toolkit#createCustomCursor
             */
            // @ts-ignore
            constructor(name: java.lang.String | string)
            /**
             * The default cursor type (gets set if no cursor is defined).
             */
            // @ts-ignore
            public static readonly DEFAULT_CURSOR: number /*int*/
            /**
             * The crosshair cursor type.
             */
            // @ts-ignore
            public static readonly CROSSHAIR_CURSOR: number /*int*/
            /**
             * The text cursor type.
             */
            // @ts-ignore
            public static readonly TEXT_CURSOR: number /*int*/
            /**
             * The wait cursor type.
             */
            // @ts-ignore
            public static readonly WAIT_CURSOR: number /*int*/
            /**
             * The south-west-resize cursor type.
             */
            // @ts-ignore
            public static readonly SW_RESIZE_CURSOR: number /*int*/
            /**
             * The south-east-resize cursor type.
             */
            // @ts-ignore
            public static readonly SE_RESIZE_CURSOR: number /*int*/
            /**
             * The north-west-resize cursor type.
             */
            // @ts-ignore
            public static readonly NW_RESIZE_CURSOR: number /*int*/
            /**
             * The north-east-resize cursor type.
             */
            // @ts-ignore
            public static readonly NE_RESIZE_CURSOR: number /*int*/
            /**
             * The north-resize cursor type.
             */
            // @ts-ignore
            public static readonly N_RESIZE_CURSOR: number /*int*/
            /**
             * The south-resize cursor type.
             */
            // @ts-ignore
            public static readonly S_RESIZE_CURSOR: number /*int*/
            /**
             * The west-resize cursor type.
             */
            // @ts-ignore
            public static readonly W_RESIZE_CURSOR: number /*int*/
            /**
             * The east-resize cursor type.
             */
            // @ts-ignore
            public static readonly E_RESIZE_CURSOR: number /*int*/
            /**
             * The hand cursor type.
             */
            // @ts-ignore
            public static readonly HAND_CURSOR: number /*int*/
            /**
             * The move cursor type.
             */
            // @ts-ignore
            public static readonly MOVE_CURSOR: number /*int*/
            /**
             * @deprecated As of JDK version 1.7, the {#link #getPredefinedCursor(int)}
             *  method should be used instead.
             */
            // @ts-ignore
            static predefined: java.awt.Cursor[]
            /**
             * The type associated with all custom cursors.
             */
            // @ts-ignore
            public static readonly CUSTOM_CURSOR: number /*int*/
            /**
             * The user-visible name of the cursor.
             * @serial 
             * @see #getName()
             */
            // @ts-ignore
            name: java.lang.String | string
            /**
             * Returns a cursor object with the specified predefined type.
             * @param type the type of predefined cursor
             * @return the specified predefined cursor
             * @throws IllegalArgumentException if the specified cursor type is
             *          invalid
             */
            // @ts-ignore
            public static getPredefinedCursor(type: number /*int*/): java.awt.Cursor
            /**
             * Returns a system-specific custom cursor object matching the
             * specified name.  Cursor names are, for example: "Invalid.16x16"
             * @param name a string describing the desired system-specific custom cursor
             * @return the system specific custom cursor named
             * @exception HeadlessException if
             *  <code>GraphicsEnvironment.isHeadless</code> returns true
             */
            // @ts-ignore
            public static getSystemCustomCursor(name: java.lang.String | string): java.awt.Cursor
            /**
             * Return the system default cursor.
             */
            // @ts-ignore
            public static getDefaultCursor(): java.awt.Cursor
            /**
             * Returns the type for this cursor.
             */
            // @ts-ignore
            public getType(): number /*int*/
            /**
             * Returns the name of this cursor.
             * @return a localized description of this cursor.
             * @since 1.2
             */
            // @ts-ignore
            public getName(): string
            /**
             * Returns a string representation of this cursor.
             * @return a string representation of this cursor.
             * @since 1.2
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
