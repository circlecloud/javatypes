declare namespace javax {
    namespace activation {
        /**
         * The CommandInfo class is used by CommandMap implementations to
         * describe the results of command requests. It provides the requestor
         * with both the verb requested, as well as an instance of the
         * bean. There is also a method that will return the name of the
         * class that implements the command but <i>it is not guaranteed to
         * return a valid value</i>. The reason for this is to allow CommandMap
         * implmentations that subclass CommandInfo to provide special
         * behavior. For example a CommandMap could dynamically generate
         * JavaBeans. In this case, it might not be possible to create an
         * object with all the correct state information solely from the class
         * name.
         * @since 1.6
         */
        // @ts-ignore
        class CommandInfo extends java.lang.Object {
            /**
             * The Constructor for CommandInfo.
             * @param verb The command verb this CommandInfo decribes.
             * @param className The command's fully qualified class name.
             */
            // @ts-ignore
            constructor(verb: java.lang.String | string, className: java.lang.String | string)
            /**
             * Return the command verb.
             * @return the command verb.
             */
            // @ts-ignore
            public getCommandName(): string
            /**
             * Return the command's class name. <i>This method MAY return null in
             * cases where a CommandMap subclassed CommandInfo for its
             * own purposes.</i> In other words, it might not be possible to
             * create the correct state in the command by merely knowing
             * its class name. <b>DO NOT DEPEND ON THIS METHOD RETURNING
             * A VALID VALUE!</b>
             * @return The class name of the command, or <i>null</i>
             */
            // @ts-ignore
            public getCommandClass(): string
            /**
             * Return the instantiated JavaBean component.
             * <p>
             * Begin by instantiating the component with
             * <code>Beans.instantiate()</code>.
             * <p>
             * If the bean implements the <code>javax.activation.CommandObject</code>
             * interface, call its <code>setCommandContext</code> method.
             * <p>
             * If the DataHandler parameter is null, then the bean is
             * instantiated with no data. NOTE: this may be useful
             * if for some reason the DataHandler that is passed in
             * throws IOExceptions when this method attempts to
             * access its InputStream. It will allow the caller to
             * retrieve a reference to the bean if it can be
             * instantiated.
             * <p>
             * If the bean does NOT implement the CommandObject interface,
             * this method will check if it implements the
             * java.io.Externalizable interface. If it does, the bean's
             * readExternal method will be called if an InputStream
             * can be acquired from the DataHandler.<p>
             * @param dh        The DataHandler that describes the data to be
             *                   passed to the command.
             * @param loader    The ClassLoader to be used to instantiate the bean.
             * @return The bean
             * @see java.beans.Beans#instantiate
             * @see javax.activation.CommandObject
             */
            // @ts-ignore
            public getCommandObject(dh: javax.activation.DataHandler, loader: java.lang.ClassLoader): any
        }
    }
}
