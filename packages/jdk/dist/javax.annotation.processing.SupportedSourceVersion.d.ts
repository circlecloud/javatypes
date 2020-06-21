declare namespace javax {
    namespace annotation {
        namespace processing {
            /**
             * An annotation used to indicate the latest source version an
             * annotation processor supports.  The {@link
             * Processor#getSupportedSourceVersion} method can construct its
             * result from the value of this annotation, as done by {@link
             * AbstractProcessor#getSupportedSourceVersion}.
             * @author Joseph D. Darcy
             * @author Scott Seligman
             * @author Peter von der Ah&eacute;
             * @since 1.6
             */
            // @ts-ignore
            abstract class SupportedSourceVersion implements java.lang.annotation.Annotation {
            }
        }
    }
}
