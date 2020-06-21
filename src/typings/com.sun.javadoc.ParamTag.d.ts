declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents an @param documentation tag.
             * Stores the name and comment parts of the parameter tag.
             * An @param tag may represent either a method or constructor parameter,
             * or a type parameter.
             * @author Robert Field
             */
            // @ts-ignore
            interface ParamTag extends com.sun.javadoc.Tag {
                /**
                 * Return the name of the parameter or type parameter
                 * associated with this <code>ParamTag</code>.
                 * The angle brackets delimiting a type parameter are not part of
                 * its name.
                 * @return the parameter name.
                 */
                // @ts-ignore
                parameterName(): string
                /**
                 * Return the parameter comment
                 * associated with this <code>ParamTag</code>.
                 * @return the parameter comment.
                 */
                // @ts-ignore
                parameterComment(): string
                /**
                 * Return true if this <code>ParamTag</code> corresponds to a type
                 * parameter.  Return false if it corresponds to an ordinary parameter
                 * of a method or constructor.
                 * @return true if this <code>ParamTag</code> corresponds to a type
                 *  parameter.
                 * @since 1.5
                 */
                // @ts-ignore
                isTypeParameter(): boolean
            }
        }
    }
}
