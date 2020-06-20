declare namespace java {
    namespace beans {
        /**
         * An EventSetDescriptor describes a group of events that a given Java
         * bean fires.
         * <P>
         * The given group of events are all delivered as method calls on a single
         * event listener interface, and an event listener object can be registered
         * via a call on a registration method supplied by the event source.
         */
        // @ts-ignore
        class EventSetDescriptor extends java.beans.FeatureDescriptor {
            /**
             * Creates an <TT>EventSetDescriptor</TT> assuming that you are
             * following the most simple standard design pattern where a named
             * event &quot;fred&quot; is (1) delivered as a call on the single method of
             * interface FredListener, (2) has a single argument of type FredEvent,
             * and (3) where the FredListener may be registered with a call on an
             * addFredListener method of the source component and removed with a
             * call on a removeFredListener method.
             * @param sourceClass  The class firing the event.
             * @param eventSetName  The programmatic name of the event.  E.g. &quot;fred&quot;.
             *           Note that this should normally start with a lower-case character.
             * @param listenerType  The target interface that events
             *           will get delivered to.
             * @param listenerMethodName  The method that will get called when the event gets
             *           delivered to its target listener interface.
             * @exception IntrospectionException if an exception occurs during
             *               introspection.
             */
            // @ts-ignore
            constructor(sourceClass: java.lang.Class<any>, eventSetName: string, listenerType: java.lang.Class<any>, listenerMethodName: string)
            /**
             * Creates an <TT>EventSetDescriptor</TT> from scratch using
             * string names.
             * @param sourceClass  The class firing the event.
             * @param eventSetName The programmatic name of the event set.
             *           Note that this should normally start with a lower-case character.
             * @param listenerType  The Class of the target interface that events
             *           will get delivered to.
             * @param listenerMethodNames The names of the methods that will get called
             *           when the event gets delivered to its target listener interface.
             * @param addListenerMethodName  The name of the method on the event source
             *           that can be used to register an event listener object.
             * @param removeListenerMethodName  The name of the method on the event source
             *           that can be used to de-register an event listener object.
             * @exception IntrospectionException if an exception occurs during
             *               introspection.
             */
            // @ts-ignore
            constructor(sourceClass: java.lang.Class<any>, eventSetName: string, listenerType: java.lang.Class<any>, listenerMethodNames: string[], addListenerMethodName: string, removeListenerMethodName: string)
            /**
             * This constructor creates an EventSetDescriptor from scratch using
             * string names.
             * @param sourceClass  The class firing the event.
             * @param eventSetName The programmatic name of the event set.
             *           Note that this should normally start with a lower-case character.
             * @param listenerType  The Class of the target interface that events
             *           will get delivered to.
             * @param listenerMethodNames The names of the methods that will get called
             *           when the event gets delivered to its target listener interface.
             * @param addListenerMethodName  The name of the method on the event source
             *           that can be used to register an event listener object.
             * @param removeListenerMethodName  The name of the method on the event source
             *           that can be used to de-register an event listener object.
             * @param getListenerMethodName The method on the event source that
             *           can be used to access the array of event listener objects.
             * @exception IntrospectionException if an exception occurs during
             *               introspection.
             * @since 1.4
             */
            // @ts-ignore
            constructor(sourceClass: java.lang.Class<any>, eventSetName: string, listenerType: java.lang.Class<any>, listenerMethodNames: string[], addListenerMethodName: string, removeListenerMethodName: string, getListenerMethodName: string)
            /**
             * Creates an <TT>EventSetDescriptor</TT> from scratch using
             * <TT>java.lang.reflect.Method</TT> and <TT>java.lang.Class</TT> objects.
             * @param eventSetName The programmatic name of the event set.
             * @param listenerType The Class for the listener interface.
             * @param listenerMethods  An array of Method objects describing each
             *           of the event handling methods in the target listener.
             * @param addListenerMethod  The method on the event source
             *           that can be used to register an event listener object.
             * @param removeListenerMethod  The method on the event source
             *           that can be used to de-register an event listener object.
             * @exception IntrospectionException if an exception occurs during
             *               introspection.
             */
            // @ts-ignore
            constructor(eventSetName: string, listenerType: java.lang.Class<any>, listenerMethods: java.lang.reflect.Method[], addListenerMethod: java.lang.reflect.Method, removeListenerMethod: java.lang.reflect.Method)
            /**
             * This constructor creates an EventSetDescriptor from scratch using
             * java.lang.reflect.Method and java.lang.Class objects.
             * @param eventSetName The programmatic name of the event set.
             * @param listenerType The Class for the listener interface.
             * @param listenerMethods  An array of Method objects describing each
             *           of the event handling methods in the target listener.
             * @param addListenerMethod  The method on the event source
             *           that can be used to register an event listener object.
             * @param removeListenerMethod  The method on the event source
             *           that can be used to de-register an event listener object.
             * @param getListenerMethod The method on the event source
             *           that can be used to access the array of event listener objects.
             * @exception IntrospectionException if an exception occurs during
             *               introspection.
             * @since 1.4
             */
            // @ts-ignore
            constructor(eventSetName: string, listenerType: java.lang.Class<any>, listenerMethods: java.lang.reflect.Method[], addListenerMethod: java.lang.reflect.Method, removeListenerMethod: java.lang.reflect.Method, getListenerMethod: java.lang.reflect.Method)
            /**
             * Creates an <TT>EventSetDescriptor</TT> from scratch using
             * <TT>java.lang.reflect.MethodDescriptor</TT> and <TT>java.lang.Class</TT>
             * objects.
             * @param eventSetName The programmatic name of the event set.
             * @param listenerType The Class for the listener interface.
             * @param listenerMethodDescriptors  An array of MethodDescriptor objects
             *            describing each of the event handling methods in the
             *            target listener.
             * @param addListenerMethod  The method on the event source
             *           that can be used to register an event listener object.
             * @param removeListenerMethod  The method on the event source
             *           that can be used to de-register an event listener object.
             * @exception IntrospectionException if an exception occurs during
             *               introspection.
             */
            // @ts-ignore
            constructor(eventSetName: string, listenerType: java.lang.Class<any>, listenerMethodDescriptors: java.beans.MethodDescriptor[], addListenerMethod: java.lang.reflect.Method, removeListenerMethod: java.lang.reflect.Method)
            /**
             * Gets the <TT>Class</TT> object for the target interface.
             * @return The Class object for the target interface that will
             *  get invoked when the event is fired.
             */
            // @ts-ignore
            getListenerType(): java.lang.Class<?>
            /**
             * Gets the methods of the target listener interface.
             * @return An array of <TT>Method</TT> objects for the target methods
             *  within the target listener interface that will get called when
             *  events are fired.
             */
            // @ts-ignore
            getListenerMethods(): java.lang.reflect.Method[]
            /**
             * Gets the <code>MethodDescriptor</code>s of the target listener interface.
             * @return An array of <code>MethodDescriptor</code> objects for the target methods
             *  within the target listener interface that will get called when
             *  events are fired.
             */
            // @ts-ignore
            getListenerMethodDescriptors(): java.beans.MethodDescriptor[]
            /**
             * Gets the method used to add event listeners.
             * @return The method used to register a listener at the event source.
             */
            // @ts-ignore
            getAddListenerMethod(): java.lang.reflect.Method
            /**
             * Gets the method used to remove event listeners.
             * @return The method used to remove a listener at the event source.
             */
            // @ts-ignore
            getRemoveListenerMethod(): java.lang.reflect.Method
            /**
             * Gets the method used to access the registered event listeners.
             * @return The method used to access the array of listeners at the event
             *          source or null if it doesn't exist.
             * @since 1.4
             */
            // @ts-ignore
            getGetListenerMethod(): java.lang.reflect.Method
            /**
             * Mark an event set as unicast (or not).
             * @param unicast  True if the event set is unicast.
             */
            // @ts-ignore
            setUnicast(unicast: boolean): void
            /**
             * Normally event sources are multicast.  However there are some
             * exceptions that are strictly unicast.
             * @return <TT>true</TT> if the event set is unicast.
             *           Defaults to <TT>false</TT>.
             */
            // @ts-ignore
            isUnicast(): boolean
            /**
             * Marks an event set as being in the &quot;default&quot; set (or not).
             * By default this is <TT>true</TT>.
             * @param inDefaultEventSet <code>true</code> if the event set is in
             *                           the &quot;default&quot; set,
             *                           <code>false</code> if not
             */
            // @ts-ignore
            setInDefaultEventSet(inDefaultEventSet: boolean): void
            /**
             * Reports if an event set is in the &quot;default&quot; set.
             * @return <TT>true</TT> if the event set is in
             *           the &quot;default&quot; set.  Defaults to <TT>true</TT>.
             */
            // @ts-ignore
            isInDefaultEventSet(): boolean
        }
    }
}
