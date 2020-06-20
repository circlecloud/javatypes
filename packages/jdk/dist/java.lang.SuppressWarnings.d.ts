declare namespace java {
    namespace lang {
        /**
         * Indicates that the named compiler warnings should be suppressed in the
         * annotated element (and in all program elements contained in the annotated
         * element).  Note that the set of warnings suppressed in a given element is
         * a superset of the warnings suppressed in all containing elements.  For
         * example, if you annotate a class to suppress one warning and annotate a
         * method to suppress another, both warnings will be suppressed in the method.
         * <p>As a matter of style, programmers should always use this annotation
         * on the most deeply nested element where it is effective.  If you want to
         * suppress a warning in a particular method, you should annotate that
         * method rather than its class.
         * @author Josh Bloch
         * @since 1.5
         * @jls 4.8 Raw Types
         * @jls 4.12.2 Variables of Reference Type
         * @jls 5.1.9 Unchecked Conversion
         * @jls 5.5.2 Checked Casts and Unchecked Casts
         * @jls 9.6.3.5 #SuppressWarnings
         */
        // @ts-ignore
        class SuppressWarnings implements java.lang.annotation.Annotation {
        }
    }
}
