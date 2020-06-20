declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents a member of a java class: field, constructor, or method.
             * This is an abstract class dealing with information common to
             * method, constructor and field members. Class members of a class
             * (innerclasses) are represented instead by ClassDoc.
             * @see MethodDoc
             * @see FieldDoc
             * @see ClassDoc
             * @author Kaiyang Liu (original)
             * @author Robert Field (rewrite)
             */
            // @ts-ignore
            interface MemberDoc extends com.sun.javadoc.ProgramElementDoc {
                /**
                 * Returns true if this member was synthesized by the compiler.
                 */
                // @ts-ignore
                isSynthetic(): boolean
            }
        }
    }
}
