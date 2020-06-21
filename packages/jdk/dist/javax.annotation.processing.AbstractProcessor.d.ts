declare namespace javax {
    namespace annotation {
        namespace processing {
            /**
             * An abstract annotation processor designed to be a convenient
             * superclass for most concrete annotation processors.  This class
             * examines annotation values to compute the {@linkplain
             * #getSupportedOptions options}, {@linkplain
             * #getSupportedAnnotationTypes annotation types}, and {@linkplain
             * #getSupportedSourceVersion source version} supported by its
             * subtypes.
             * <p>The getter methods may {@linkplain Messager#printMessage issue
             * warnings} about noteworthy conditions using the facilities available
             * after the processor has been {@linkplain #isInitialized
             * initialized}.
             * <p>Subclasses are free to override the implementation and
             * specification of any of the methods in this class as long as the
             * general {@link javax.annotation.processing.Processor Processor}
             * contract for that method is obeyed.
             * @author Joseph D. Darcy
             * @author Scott Seligman
             * @author Peter von der Ah&eacute;
             * @since 1.6
             */
            // @ts-ignore
            abstract class AbstractProcessor extends java.lang.Object implements javax.annotation.processing.Processor {
                /**
                 * Constructor for subclasses to call.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Processing environment providing by the tool framework.
                 */
                // @ts-ignore
                processingEnv: javax.annotation.processing.ProcessingEnvironment
                /**
                 * If the processor class is annotated with {@link
                 * SupportedOptions}, return an unmodifiable set with the same set
                 * of strings as the annotation.  If the class is not so
                 * annotated, an empty set is returned.
                 * @return the options recognized by this processor, or an empty
                 *  set if none
                 */
                // @ts-ignore
                public getSupportedOptions(): Array<java.lang.String | string>
                /**
                 * If the processor class is annotated with {@link
                 * SupportedAnnotationTypes}, return an unmodifiable set with the
                 * same set of strings as the annotation.  If the class is not so
                 * annotated, an empty set is returned.
                 * @return the names of the annotation types supported by this
                 *  processor, or an empty set if none
                 */
                // @ts-ignore
                public getSupportedAnnotationTypes(): Array<java.lang.String | string>
                /**
                 * If the processor class is annotated with {@link
                 * SupportedSourceVersion}, return the source version in the
                 * annotation.  If the class is not so annotated, {@link
                 * SourceVersion#RELEASE_6} is returned.
                 * @return the latest source version supported by this processor
                 */
                // @ts-ignore
                public getSupportedSourceVersion(): javax.lang.model.SourceVersion
                /**
                 * Initializes the processor with the processing environment by
                 * setting the {@code processingEnv} field to the value of the
                 * {@code processingEnv} argument.  An {@code
                 * IllegalStateException} will be thrown if this method is called
                 * more than once on the same object.
                 * @param processingEnv environment to access facilities the tool framework
                 *  provides to the processor
                 * @throws IllegalStateException if this method is called more than once.
                 */
                // @ts-ignore
                public init(processingEnv: javax.annotation.processing.ProcessingEnvironment): void
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public abstract process(annotations: java.util.Set<any> | Array<any>, roundEnv: javax.annotation.processing.RoundEnvironment): boolean
                /**
                 * Returns an empty iterable of completions.
                 * @param element {#inheritDoc}
                 * @param annotation {#inheritDoc}
                 * @param member {#inheritDoc}
                 * @param userText {#inheritDoc}
                 */
                // @ts-ignore
                public getCompletions(element: javax.lang.model.element.Element, annotation: javax.lang.model.element.AnnotationMirror, member: javax.lang.model.element.ExecutableElement, userText: java.lang.String | string): java.lang.Iterable<any>
                /**
                 * Returns {@code true} if this object has been {@linkplain #init
                 * initialized}, {@code false} otherwise.
                 * @return {#code true} if this object has been initialized,
                 *  {@code false} otherwise.
                 */
                // @ts-ignore
                isInitialized(): boolean
            }
        }
    }
}
