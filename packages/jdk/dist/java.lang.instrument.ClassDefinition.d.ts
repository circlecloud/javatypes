declare namespace java {
    namespace lang {
        namespace instrument {
            /**
             * This class serves as a parameter block to the <code>Instrumentation.redefineClasses</code> method.
             * Serves to bind the <code>Class</code> that needs redefining together with the new class file bytes.
             * @see java.lang.instrument.Instrumentation#redefineClasses
             * @since 1.5
             */
            // @ts-ignore
            class ClassDefinition extends java.lang.Object {
                /**
                 * Creates a new <code>ClassDefinition</code> binding using the supplied
                 * class and class file bytes. Does not copy the supplied buffer, just captures a reference to it.
                 * @param theClass the <code>Class</code> that needs redefining
                 * @param theClassFile the new class file bytes
                 * @throws java.lang.NullPointerException if the supplied class or array is <code>null</code>.
                 */
                // @ts-ignore
                constructor(theClass: java.lang.Class<any>, theClassFile: number /*byte*/[])
                /**
                 * Returns the class.
                 * @return the <code>Class</code> object referred to.
                 */
                // @ts-ignore
                public getDefinitionClass(): java.lang.Class<any>
                /**
                 * Returns the array of bytes that contains the new class file.
                 * @return the class file bytes.
                 */
                // @ts-ignore
                public getDefinitionClassFile(): number /*byte*/[]
            }
        }
    }
}
