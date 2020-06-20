declare namespace javax {
    namespace annotation {
        namespace processing {
            /**
             * An annotation used to indicate what options an annotation processor
             * supports.  The {@link Processor#getSupportedOptions} method can
             * construct its result from the value of this annotation, as done by
             * {@link AbstractProcessor#getSupportedOptions}.  Only {@linkplain
             * Processor#getSupportedOptions strings conforming to the
             * grammar} should be used as values.
             * @author Joseph D. Darcy
             * @author Scott Seligman
             * @author Peter von der Ah&eacute;
             * @since 1.6
             */
            // @ts-ignore
            class SupportedOptions implements java.lang.annotation.Annotation {
            }
        }
    }
}
