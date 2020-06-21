declare namespace java {
    namespace awt {
        namespace dnd {
            /**
             * This class contains constant values representing
             * the type of action(s) to be performed by a Drag and Drop operation.
             * @since 1.2
             */
            // @ts-ignore
            class DnDConstants extends java.lang.Object {
                /**
                 * An <code>int</code> representing no action.
                 */
                // @ts-ignore
                public static readonly ACTION_NONE: number /*int*/
                /**
                 * An <code>int</code> representing a &quot;copy&quot; action.
                 */
                // @ts-ignore
                public static readonly ACTION_COPY: number /*int*/
                /**
                 * An <code>int</code> representing a &quot;move&quot; action.
                 */
                // @ts-ignore
                public static readonly ACTION_MOVE: number /*int*/
                /**
                 * An <code>int</code> representing a &quot;copy&quot; or
                 * &quot;move&quot; action.
                 */
                // @ts-ignore
                public static readonly ACTION_COPY_OR_MOVE: number /*int*/
                /**
                 * An <code>int</code> representing a &quot;link&quot; action.
                 * The link verb is found in many, if not all native DnD platforms, and the
                 * actual interpretation of LINK semantics is both platform
                 * and application dependent. Broadly speaking, the
                 * semantic is "do not copy, or move the operand, but create a reference
                 * to it". Defining the meaning of "reference" is where ambiguity is
                 * introduced.
                 * The verb is provided for completeness, but its use is not recommended
                 * for DnD operations between logically distinct applications where
                 * misinterpretation of the operations semantics could lead to confusing
                 * results for the user.
                 */
                // @ts-ignore
                public static readonly ACTION_LINK: number /*int*/
                /**
                 * An <code>int</code> representing a &quot;reference&quot;
                 * action (synonym for ACTION_LINK).
                 */
                // @ts-ignore
                public static readonly ACTION_REFERENCE: number /*int*/
            }
        }
    }
}
