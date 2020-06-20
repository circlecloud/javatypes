declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * A position in the bytecode of a method. Labels are used for jump, goto, and switch instructions,
             * and for try catch blocks. A label designates the <i>instruction</i> that is just after. Note
             * however that there can be other elements between a label and the instruction it designates (such
             * as other labels, stack map frames, line numbers, etc.).
             * @author Eric Bruneton
             */
            // @ts-ignore
            class Label extends java.lang.Object {
                /**
                 * Constructs a new label.
                 */
                // @ts-ignore
                constructor()
                /**
                 * A user managed state associated with this label. Warning: this field is used by the ASM tree
                 * package. In order to use it with the ASM tree package you must override the getLabelNode method
                 * in MethodNode.
                 */
                // @ts-ignore
                info: any
                /**
                 * Returns the bytecode offset corresponding to this label. This offset is computed from the start
                 * of the method's bytecode. <i>This method is intended for {@link Attribute} sub classes, and is
                 * normally not needed by class generators or adapters.</i>
                 * @return the bytecode offset corresponding to this label.
                 * @throws IllegalStateException if this label is not resolved yet.
                 */
                // @ts-ignore
                getOffset(): int
                /**
                 * Returns a string representation of this label.
                 * @return a string representation of this label.
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
