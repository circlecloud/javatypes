declare namespace java {
    namespace lang {
        namespace invoke {
            /**
             * Serialized form of a lambda expression.  The properties of this class
             * represent the information that is present at the lambda factory site, including
             * static metafactory arguments such as the identity of the primary functional
             * interface method and the identity of the implementation method, as well as
             * dynamic metafactory arguments such as values captured from the lexical scope
             * at the time of lambda capture.
             * <p>Implementors of serializable lambdas, such as compilers or language
             * runtime libraries, are expected to ensure that instances deserialize properly.
             * One means to do so is to ensure that the {@code writeReplace} method returns
             * an instance of {@code SerializedLambda}, rather than allowing default
             * serialization to proceed.
             * <p>{@code SerializedLambda} has a {@code readResolve} method that looks for
             * a (possibly private) static method called
             * {@code $deserializeLambda$(SerializedLambda)} in the capturing class, invokes
             * that with itself as the first argument, and returns the result.  Lambda classes
             * implementing {@code $deserializeLambda$} are responsible for validating
             * that the properties of the {@code SerializedLambda} are consistent with a
             * lambda actually captured by that class.
             * @see LambdaMetafactory
             */
            // @ts-ignore
            class SerializedLambda extends java.lang.Object implements java.io.Serializable {
                /**
                 * Create a {@code SerializedLambda} from the low-level information present
                 * at the lambda factory site.
                 * @param capturingClass The class in which the lambda expression appears
                 * @param functionalInterfaceClass Name, in slash-delimited form, of static
                 *                                  type of the returned lambda object
                 * @param functionalInterfaceMethodName Name of the functional interface
                 *                                       method for the present at the
                 *                                       lambda factory site
                 * @param functionalInterfaceMethodSignature Signature of the functional
                 *                                            interface method present at
                 *                                            the lambda factory site
                 * @param implMethodKind Method handle kind for the implementation method
                 * @param implClass Name, in slash-delimited form, for the class holding
                 *                   the implementation method
                 * @param implMethodName Name of the implementation method
                 * @param implMethodSignature Signature of the implementation method
                 * @param instantiatedMethodType The signature of the primary functional
                 *                                interface method after type variables
                 *                                are substituted with their instantiation
                 *                                from the capture site
                 * @param capturedArgs The dynamic arguments to the lambda factory site,
                 *                      which represent variables captured by
                 *                      the lambda
                 */
                // @ts-ignore
                constructor(capturingClass: java.lang.Class<any>, functionalInterfaceClass: java.lang.String | string, functionalInterfaceMethodName: java.lang.String | string, functionalInterfaceMethodSignature: java.lang.String | string, implMethodKind: number /*int*/, implClass: java.lang.String | string, implMethodName: java.lang.String | string, implMethodSignature: java.lang.String | string, instantiatedMethodType: java.lang.String | string, capturedArgs: java.lang.Object[] | any[])
                /**
                 * Get the name of the class that captured this lambda.
                 * @return the name of the class that captured this lambda
                 */
                // @ts-ignore
                public getCapturingClass(): string
                /**
                 * Get the name of the invoked type to which this
                 * lambda has been converted
                 * @return the name of the functional interface class to which
                 *  this lambda has been converted
                 */
                // @ts-ignore
                public getFunctionalInterfaceClass(): string
                /**
                 * Get the name of the primary method for the functional interface
                 * to which this lambda has been converted.
                 * @return the name of the primary methods of the functional interface
                 */
                // @ts-ignore
                public getFunctionalInterfaceMethodName(): string
                /**
                 * Get the signature of the primary method for the functional
                 * interface to which this lambda has been converted.
                 * @return the signature of the primary method of the functional
                 *  interface
                 */
                // @ts-ignore
                public getFunctionalInterfaceMethodSignature(): string
                /**
                 * Get the name of the class containing the implementation
                 * method.
                 * @return the name of the class containing the implementation
                 *  method
                 */
                // @ts-ignore
                public getImplClass(): string
                /**
                 * Get the name of the implementation method.
                 * @return the name of the implementation method
                 */
                // @ts-ignore
                public getImplMethodName(): string
                /**
                 * Get the signature of the implementation method.
                 * @return the signature of the implementation method
                 */
                // @ts-ignore
                public getImplMethodSignature(): string
                /**
                 * Get the method handle kind (see {@link MethodHandleInfo}) of
                 * the implementation method.
                 * @return the method handle kind of the implementation method
                 */
                // @ts-ignore
                public getImplMethodKind(): number /*int*/
                /**
                 * Get the signature of the primary functional interface method
                 * after type variables are substituted with their instantiation
                 * from the capture site.
                 * @return the signature of the primary functional interface method
                 *  after type variable processing
                 */
                // @ts-ignore
                public getInstantiatedMethodType(): string
                /**
                 * Get the count of dynamic arguments to the lambda capture site.
                 * @return the count of dynamic arguments to the lambda capture site
                 */
                // @ts-ignore
                public getCapturedArgCount(): number /*int*/
                /**
                 * Get a dynamic argument to the lambda capture site.
                 * @param i the argument to capture
                 * @return a dynamic argument to the lambda capture site
                 */
                // @ts-ignore
                public getCapturedArg(i: number /*int*/): any
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
