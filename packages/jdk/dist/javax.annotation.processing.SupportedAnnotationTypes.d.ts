declare namespace javax {
    namespace annotation {
        namespace processing {
            /**
             * An annotation used to indicate what annotation types an annotation
             * processor supports.  The {@link
             * Processor#getSupportedAnnotationTypes} method can construct its
             * result from the value of this annotation, as done by {@link
             * AbstractProcessor#getSupportedAnnotationTypes}.  Only {@linkplain
             * Processor#getSupportedAnnotationTypes strings conforming to the
             * grammar} should be used as values.
             * @author Joseph D. Darcy
             * @author Scott Seligman
             * @author Peter von der Ah&eacute;
             * @since 1.6
             */
            // @ts-ignore
            abstract class SupportedAnnotationTypes implements java.lang.annotation.Annotation {
            }
        }
    }
}
