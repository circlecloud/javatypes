declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * The path to a type argument, wildcard bound, array element type, or static inner type within an
             * enclosing type.
             * @author Eric Bruneton
             */
            // @ts-ignore
            class TypePath extends java.lang.Object {
                /**
                 * A type path step that steps into the element type of an array type. See {@link #getStep}.
                 */
                // @ts-ignore
                readonly ARRAY_ELEMENT: number /*int*/
                /**
                 * A type path step that steps into the nested type of a class type. See {@link #getStep}.
                 */
                // @ts-ignore
                readonly INNER_TYPE: number /*int*/
                /**
                 * A type path step that steps into the bound of a wildcard type. See {@link #getStep}.
                 */
                // @ts-ignore
                readonly WILDCARD_BOUND: number /*int*/
                /**
                 * A type path step that steps into a type argument of a generic type. See {@link #getStep}.
                 */
                // @ts-ignore
                readonly TYPE_ARGUMENT: number /*int*/
                /**
                 * Returns the length of this path, i.e. its number of steps.
                 * @return the length of this path.
                 */
                // @ts-ignore
                getLength(): int
                /**
                 * Returns the value of the given step of this path.
                 * @param index an index between 0 and {#link #getLength()}, exclusive.
                 * @return one of {#link #ARRAY_ELEMENT}, {@link #INNER_TYPE}, {@link #WILDCARD_BOUND}, or {@link
                 *      #TYPE_ARGUMENT}.
                 */
                // @ts-ignore
                getStep(index: number /*int*/): int
                /**
                 * Returns the index of the type argument that the given step is stepping into. This method should
                 * only be used for steps whose value is {@link #TYPE_ARGUMENT}.
                 * @param index an index between 0 and {#link #getLength()}, exclusive.
                 * @return the index of the type argument that the given step is stepping into.
                 */
                // @ts-ignore
                getStepArgument(index: number /*int*/): int
                /**
                 * Converts a type path in string form, in the format used by {@link #toString()}, into a TypePath
                 * object.
                 * @param typePath a type path in string form, in the format used by {#link #toString()}. May be
                 *      {@literal null} or empty.
                 * @return the corresponding TypePath object, or {#literal null} if the path is empty.
                 */
                // @ts-ignore
                fromString(typePath: string): org.springframework.asm.TypePath
                /**
                 * Returns a string representation of this type path. {@link #ARRAY_ELEMENT} steps are represented
                 * with '[', {@link #INNER_TYPE} steps with '.', {@link #WILDCARD_BOUND} steps with '*' and {@link
                 * #TYPE_ARGUMENT} steps with their type argument index in decimal form followed by ';'.
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
