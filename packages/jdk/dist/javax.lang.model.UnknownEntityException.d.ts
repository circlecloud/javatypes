declare namespace javax {
    namespace lang {
        namespace model {
            /**
             * Superclass of exceptions which indicate that an unknown kind of
             * entity was encountered.  This situation can occur if the language
             * evolves and new kinds of constructs are introduced.  Subclasses of
             * this exception may be thrown by visitors to indicate that the
             * visitor was created for a prior version of the language.
             * <p>A common superclass for those exceptions allows a single catch
             * block to have code handling them uniformly.
             * @author Joseph D. Darcy
             * @see javax.lang.model.element.UnknownElementException
             * @see javax.lang.model.element.UnknownAnnotationValueException
             * @see javax.lang.model.type.UnknownTypeException
             * @since 1.7
             */
            // @ts-ignore
            class UnknownEntityException extends java.lang.RuntimeException {
                /**
                 * Creates a new {@code UnknownEntityException} with the specified
                 * detail message.
                 * @param message the detail message
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
            }
        }
    }
}
