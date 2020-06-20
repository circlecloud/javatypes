declare namespace javax {
    namespace annotation {
        namespace processing {
            /**
             * A {@code Messager} provides the way for an annotation processor to
             * report error messages, warnings, and other notices.  Elements,
             * annotations, and annotation values can be passed to provide a
             * location hint for the message.  However, such location hints may be
             * unavailable or only approximate.
             * <p>Printing a message with an {@linkplain
             * javax.tools.Diagnostic.Kind#ERROR error kind} will {@linkplain
             * RoundEnvironment#errorRaised raise an error}.
             * <p>Note that the messages &quot;printed&quot; by methods in this
             * interface may or may not appear as textual output to a location
             * like {@link System#out} or {@link System#err}.  Implementations may
             * choose to present this information in a different fashion, such as
             * messages in a window.
             * @author Joseph D. Darcy
             * @author Scott Seligman
             * @author Peter von der Ah&eacute;
             * @see ProcessingEnvironment#getLocale
             * @since 1.6
             */
            // @ts-ignore
            interface Messager {
                /**
                 * Prints a message of the specified kind.
                 * @param kind the kind of message
                 * @param msg  the message, or an empty string if none
                 */
                // @ts-ignore
                printMessage(kind: javax.tools.Diagnostic.Kind, msg: java.lang.CharSequence): void
                /**
                 * Prints a message of the specified kind at the location of the
                 * element.
                 * @param kind the kind of message
                 * @param msg  the message, or an empty string if none
                 * @param e    the element to use as a position hint
                 */
                // @ts-ignore
                printMessage(kind: javax.tools.Diagnostic.Kind, msg: java.lang.CharSequence, e: javax.lang.model.element.Element): void
                /**
                 * Prints a message of the specified kind at the location of the
                 * annotation mirror of the annotated element.
                 * @param kind the kind of message
                 * @param msg  the message, or an empty string if none
                 * @param e    the annotated element
                 * @param a    the annotation to use as a position hint
                 */
                // @ts-ignore
                printMessage(kind: javax.tools.Diagnostic.Kind, msg: java.lang.CharSequence, e: javax.lang.model.element.Element, a: javax.lang.model.element.AnnotationMirror): void
                /**
                 * Prints a message of the specified kind at the location of the
                 * annotation value inside the annotation mirror of the annotated
                 * element.
                 * @param kind the kind of message
                 * @param msg  the message, or an empty string if none
                 * @param e    the annotated element
                 * @param a    the annotation containing the annotation value
                 * @param v    the annotation value to use as a position hint
                 */
                // @ts-ignore
                printMessage(kind: javax.tools.Diagnostic.Kind, msg: java.lang.CharSequence, e: javax.lang.model.element.Element, a: javax.lang.model.element.AnnotationMirror, v: javax.lang.model.element.AnnotationValue): void
            }
        }
    }
}
