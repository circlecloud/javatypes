declare namespace java {
    namespace beans {
        /**
         * An <code>Encoder</code> is a class which can be used to create
         * files or streams that encode the state of a collection of
         * JavaBeans in terms of their public APIs. The <code>Encoder</code>,
         * in conjunction with its persistence delegates, is responsible for
         * breaking the object graph down into a series of <code>Statements</code>s
         * and <code>Expression</code>s which can be used to create it.
         * A subclass typically provides a syntax for these expressions
         * using some human readable form - like Java source code or XML.
         * @since 1.4
         * @author Philip Milne
         */
        // @ts-ignore
        class Encoder extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Write the specified object to the output stream.
             * The serialized form will denote a series of
             * expressions, the combined effect of which will create
             * an equivalent object when the input stream is read.
             * By default, the object is assumed to be a <em>JavaBean</em>
             * with a nullary constructor, whose state is defined by
             * the matching pairs of "setter" and "getter" methods
             * returned by the Introspector.
             * @param o The object to be written to the stream.
             * @see XMLDecoder#readObject
             */
            // @ts-ignore
            writeObject(o: java.lang.Object | any): void
            /**
             * Sets the exception handler for this stream to <code>exceptionListener</code>.
             * The exception handler is notified when this stream catches recoverable
             * exceptions.
             * @param exceptionListener The exception handler for this stream;
             *        if <code>null</code> the default exception listener will be used.
             * @see #getExceptionListener
             */
            // @ts-ignore
            public setExceptionListener(exceptionListener: java.beans.ExceptionListener): void
            /**
             * Gets the exception handler for this stream.
             * @return The exception handler for this stream;
             *     Will return the default exception listener if this has not explicitly been set.
             * @see #setExceptionListener
             */
            // @ts-ignore
            public getExceptionListener(): java.beans.ExceptionListener
            /**
             * Returns the persistence delegate for the given type.
             * The persistence delegate is calculated by applying
             * the following rules in order:
             * <ol>
             * <li>
             * If a persistence delegate is associated with the given type
             * by using the {@link #setPersistenceDelegate} method
             * it is returned.
             * <li>
             * A persistence delegate is then looked up by the name
             * composed of the the fully qualified name of the given type
             * and the "PersistenceDelegate" postfix.
             * For example, a persistence delegate for the {@code Bean} class
             * should be named {@code BeanPersistenceDelegate}
             * and located in the same package.
             * <pre>
             * public class Bean { ... }
             * public class BeanPersistenceDelegate { ... }</pre>
             * The instance of the {@code BeanPersistenceDelegate} class
             * is returned for the {@code Bean} class.
             * <li>
             * If the type is {@code null},
             * a shared internal persistence delegate is returned
             * that encodes {@code null} value.
             * <li>
             * If the type is a {@code enum} declaration,
             * a shared internal persistence delegate is returned
             * that encodes constants of this enumeration
             * by their names.
             * <li>
             * If the type is a primitive type or the corresponding wrapper,
             * a shared internal persistence delegate is returned
             * that encodes values of the given type.
             * <li>
             * If the type is an array,
             * a shared internal persistence delegate is returned
             * that encodes an array of the appropriate type and length,
             * and each of its elements as if they are properties.
             * <li>
             * If the type is a proxy,
             * a shared internal persistence delegate is returned
             * that encodes a proxy instance by using
             * the {@link java.lang.reflect.Proxy#newProxyInstance} method.
             * <li>
             * If the {@link BeanInfo} for this type has a {@link BeanDescriptor}
             * which defined a "persistenceDelegate" attribute,
             * the value of this named attribute is returned.
             * <li>
             * In all other cases the default persistence delegate is returned.
             * The default persistence delegate assumes the type is a <em>JavaBean</em>,
             * implying that it has a default constructor and that its state
             * may be characterized by the matching pairs of "setter" and "getter"
             * methods returned by the {@link Introspector} class.
             * The default constructor is the constructor with the greatest number
             * of parameters that has the {@link ConstructorProperties} annotation.
             * If none of the constructors has the {@code ConstructorProperties} annotation,
             * then the nullary constructor (constructor with no parameters) will be used.
             * For example, in the following code fragment, the nullary constructor
             * for the {@code Foo} class will be used,
             * while the two-parameter constructor
             * for the {@code Bar} class will be used.
             * <pre>
             * public class Foo {
             * public Foo() { ... }
             * public Foo(int x) { ... }
             * }
             * public class Bar {
             * public Bar() { ... }
             * &#64;ConstructorProperties({"x"})
             * public Bar(int x) { ... }
             * &#64;ConstructorProperties({"x", "y"})
             * public Bar(int x, int y) { ... }
             * }</pre>
             * </ol>
             * @param type  the class of the objects
             * @return the persistence delegate for the given type
             * @see #setPersistenceDelegate
             * @see java.beans.Introspector#getBeanInfo
             * @see java.beans.BeanInfo#getBeanDescriptor
             */
            // @ts-ignore
            public getPersistenceDelegate(type: java.lang.Class<any>): java.beans.PersistenceDelegate
            /**
             * Associates the specified persistence delegate with the given type.
             * @param type  the class of objects that the specified persistence delegate applies to
             * @param delegate  the persistence delegate for instances of the given type
             * @see #getPersistenceDelegate
             * @see java.beans.Introspector#getBeanInfo
             * @see java.beans.BeanInfo#getBeanDescriptor
             */
            // @ts-ignore
            public setPersistenceDelegate(type: java.lang.Class<any>, delegate: java.beans.PersistenceDelegate): void
            /**
             * Removes the entry for this instance, returning the old entry.
             * @param oldInstance The entry that should be removed.
             * @return The entry that was removed.
             * @see #get
             */
            // @ts-ignore
            public remove(oldInstance: java.lang.Object | any): any
            /**
             * Returns a tentative value for <code>oldInstance</code> in
             * the environment created by this stream. A persistence
             * delegate can use its <code>mutatesTo</code> method to
             * determine whether this value may be initialized to
             * form the equivalent object at the output or whether
             * a new object must be instantiated afresh. If the
             * stream has not yet seen this value, null is returned.
             * @param oldInstance The instance to be looked up.
             * @return The object, null if the object has not been seen before.
             */
            // @ts-ignore
            public get(oldInstance: java.lang.Object | any): any
            /**
             * Writes statement <code>oldStm</code> to the stream.
             * The <code>oldStm</code> should be written entirely
             * in terms of the callers environment, i.e. the
             * target and all arguments should be part of the
             * object graph being written. These expressions
             * represent a series of "what happened" expressions
             * which tell the output stream how to produce an
             * object graph like the original.
             * <p>
             * The implementation of this method will produce
             * a second expression to represent the same expression in
             * an environment that will exist when the stream is read.
             * This is achieved simply by calling <code>writeObject</code>
             * on the target and all the arguments and building a new
             * expression with the results.
             * @param oldStm The expression to be written to the stream.
             */
            // @ts-ignore
            public writeStatement(oldStm: java.beans.Statement): void
            /**
             * The implementation first checks to see if an
             * expression with this value has already been written.
             * If not, the expression is cloned, using
             * the same procedure as <code>writeStatement</code>,
             * and the value of this expression is reconciled
             * with the value of the cloned expression
             * by calling <code>writeObject</code>.
             * @param oldExp The expression to be written to the stream.
             */
            // @ts-ignore
            public writeExpression(oldExp: java.beans.Expression): void
        }
    }
}
