declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * A reference to a field or a method.
             * @author Remi Forax
             * @author Eric Bruneton
             */
            // @ts-ignore
            class Handle extends java.lang.Object {
                /**
                 * Constructs a new field or method handle.
                 * @param tag the kind of field or method designated by this Handle. Must be {#link
                 *      Opcodes#H_GETFIELD}, {@link Opcodes#H_GETSTATIC}, {@link Opcodes#H_PUTFIELD}, {@link
                 *      Opcodes#H_PUTSTATIC}, {@link Opcodes#H_INVOKEVIRTUAL}, {@link Opcodes#H_INVOKESTATIC},
                 *      {@link Opcodes#H_INVOKESPECIAL}, {@link Opcodes#H_NEWINVOKESPECIAL} or {@link
                 *      Opcodes#H_INVOKEINTERFACE}.
                 * @param owner the internal name of the class that owns the field or method designated by this
                 *      handle.
                 * @param name the name of the field or method designated by this handle.
                 * @param descriptor the descriptor of the field or method designated by this handle.
                 * @deprecated this constructor has been superseded by {#link #Handle(int, String, String, String,
                 *      boolean)}.
                 */
                // @ts-ignore
                constructor(tag: number /*int*/, owner: java.lang.String | string, name: java.lang.String | string, descriptor: java.lang.String | string)
                /**
                 * Constructs a new field or method handle.
                 * @param tag the kind of field or method designated by this Handle. Must be {#link
                 *      Opcodes#H_GETFIELD}, {@link Opcodes#H_GETSTATIC}, {@link Opcodes#H_PUTFIELD}, {@link
                 *      Opcodes#H_PUTSTATIC}, {@link Opcodes#H_INVOKEVIRTUAL}, {@link Opcodes#H_INVOKESTATIC},
                 *      {@link Opcodes#H_INVOKESPECIAL}, {@link Opcodes#H_NEWINVOKESPECIAL} or {@link
                 *      Opcodes#H_INVOKEINTERFACE}.
                 * @param owner the internal name of the class that owns the field or method designated by this
                 *      handle.
                 * @param name the name of the field or method designated by this handle.
                 * @param descriptor the descriptor of the field or method designated by this handle.
                 * @param isInterface whether the owner is an interface or not.
                 */
                // @ts-ignore
                constructor(tag: number /*int*/, owner: java.lang.String | string, name: java.lang.String | string, descriptor: java.lang.String | string, isInterface: boolean)
                /**
                 * Returns the kind of field or method designated by this handle.
                 * @return {#link Opcodes#H_GETFIELD}, {@link Opcodes#H_GETSTATIC}, {@link Opcodes#H_PUTFIELD},
                 *      {@link Opcodes#H_PUTSTATIC}, {@link Opcodes#H_INVOKEVIRTUAL}, {@link
                 *      Opcodes#H_INVOKESTATIC}, {@link Opcodes#H_INVOKESPECIAL}, {@link
                 *      Opcodes#H_NEWINVOKESPECIAL} or {@link Opcodes#H_INVOKEINTERFACE}.
                 */
                // @ts-ignore
                public getTag(): number /*int*/
                /**
                 * Returns the internal name of the class that owns the field or method designated by this handle.
                 * @return the internal name of the class that owns the field or method designated by this handle.
                 */
                // @ts-ignore
                public getOwner(): string
                /**
                 * Returns the name of the field or method designated by this handle.
                 * @return the name of the field or method designated by this handle.
                 */
                // @ts-ignore
                public getName(): string
                /**
                 * Returns the descriptor of the field or method designated by this handle.
                 * @return the descriptor of the field or method designated by this handle.
                 */
                // @ts-ignore
                public getDesc(): string
                /**
                 * Returns true if the owner of the field or method designated by this handle is an interface.
                 * @return true if the owner of the field or method designated by this handle is an interface.
                 */
                // @ts-ignore
                public isInterface(): boolean
                // @ts-ignore
                public equals(object: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns the textual representation of this handle. The textual representation is:
                 * <ul>
                 * <li>for a reference to a class: owner "." name descriptor " (" tag ")",
                 * <li>for a reference to an interface: owner "." name descriptor " (" tag " itf)".
                 * </ul>
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
