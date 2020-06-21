declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    /**
                     * Context that a command is executed in.
                     * This object stores parsed arguments from other commands
                     */
                    // @ts-ignore
                    class CommandContext extends java.lang.Object {
                        /**
                         * Create a new empty CommandContext.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * The argument key for a target block position that may be present
                         * during tab completion, of type {@link Location Location&lt;World&gt;}.
                         */
                        // @ts-ignore
                        public static readonly TARGET_BLOCK_ARG: java.lang.String | string
                        /**
                         * The argument key to indicate that a tab completion is taking place.
                         */
                        // @ts-ignore
                        public static readonly TAB_COMPLETION: java.lang.String | string
                        /**
                         * Gets all values for the given argument. May return an empty list if no
                         * values are present.
                         * @param key The key to get values for
                         * @param <T> the type of value to get
                         * @return the collection of all values
                         */
                        // @ts-ignore
                        public getAll<T>(key: java.lang.String | string): Array<T>
                        /**
                         * Gets all values for the given argument. May return an empty list if no
                         * values are present.
                         * @param key The key to get values for
                         * @param <T> the type of value to get
                         * @return the collection of all values
                         */
                        // @ts-ignore
                        public getAll<T>(key: org.spongepowered.api.text.Text): Array<T>
                        /**
                         * Gets the value for the given key if the key has only one value.
                         * <p>An empty {@link Optional} indicates that there are either zero or more
                         * than one values for the given key. Use {@link #hasAny(Text)} to verify
                         * which.</p>
                         * @param key the key to get
                         * @param <T> the expected type of the argument
                         * @return the argument
                         */
                        // @ts-ignore
                        public getOne<T>(key: java.lang.String | string): java.util.Optional<T>
                        /**
                         * Gets the value for the given key if the key has only one value.
                         * <p>An empty {@link Optional} indicates that there are either zero or more
                         * than one values for the given key. Use {@link #hasAny(Text)} to verify
                         * which.</p>
                         * @param key the key to get
                         * @param <T> the expected type of the argument
                         * @return the argument
                         */
                        // @ts-ignore
                        public getOne<T>(key: org.spongepowered.api.text.Text): java.util.Optional<T>
                        /**
                         * Gets the value for the given key if the key has only one value, throws an
                         * exception otherwise.
                         * @param key the key to get
                         * @param <T> the expected type of the argument
                         * @return the argument
                         * @throws java.util.NoSuchElementException if there is no element with the
                         *       associated key
                         * @throws IllegalArgumentException if there are more than one element
                         *       associated with the key (thus, the argument is illegal in this
                         *       context)
                         * @throws ClassCastException if the element type is not what is expected
                         *       by the caller
                         */
                        // @ts-ignore
                        public requireOne<T>(key: java.lang.String | string): T
                        /**
                         * Gets the value for the given key if the key has only one value, throws an
                         * exception otherwise.
                         * @param key the key to get
                         * @param <T> the expected type of the argument
                         * @return the argument
                         * @throws java.util.NoSuchElementException if there is no element with the
                         *       associated key
                         * @throws IllegalArgumentException if there are more than one element
                         *       associated with the key (thus, the argument is illegal in this
                         *       context)
                         * @throws ClassCastException if the element type is not what is expected
                         */
                        // @ts-ignore
                        public requireOne<T>(key: org.spongepowered.api.text.Text): T
                        /**
                         * Insert an argument into this context.
                         * @param key the key to store the arg under
                         * @param value the value for this argument
                         */
                        // @ts-ignore
                        public putArg(key: java.lang.String | string, value: java.lang.Object | any): void
                        /**
                         * Insert an argument into this context.
                         * @param key the key to store the arg under
                         * @param value the value for this argument
                         */
                        // @ts-ignore
                        public putArg(key: org.spongepowered.api.text.Text, value: java.lang.Object | any): void
                        /**
                         * Perform a permissions check, throwing an exception if the required
                         * permissions are not present.
                         * @param commander the source to check against
                         * @param permission The permission to check
                         * @throws CommandException if the source does not have permission
                         */
                        // @ts-ignore
                        public checkPermission(commander: org.spongepowered.api.command.CommandSource, permission: java.lang.String | string): void
                        /**
                         * Returns whether this context has any value for the given argument key.
                         * @param key The key to look up
                         * @return whether there are any values present
                         */
                        // @ts-ignore
                        public hasAny(key: java.lang.String | string): boolean
                        /**
                         * Returns whether this context has any value for the given argument key.
                         * @param key The key to look up
                         * @return whether there are any values present
                         */
                        // @ts-ignore
                        public hasAny(key: org.spongepowered.api.text.Text): boolean
                        /**
                         * Gets a snapshot of the data inside this context to allow it to be
                         * restored later.
                         * <p>This is only guaranteed to create a <em>shallow copy</em> of the
                         * backing store. If any value is mutable, any changes to that value
                         * will be reflected in this snapshot. It is therefore not recommended
                         * that you keep this snapshot around for longer than is necessary.</p>
                         * @return The {#link Snapshot} containing the current state of the
                         *       {@link CommandContext}
                         */
                        // @ts-ignore
                        public createSnapshot(): org.spongepowered.api.command.args.CommandContext.Snapshot
                        /**
                         * Resets a {@link CommandContext} to a previous state using a previously
                         * created {@link Snapshot}.
                         * @param snapshot The {#link Snapshot} to restore this context with
                         */
                        // @ts-ignore
                        public applySnapshot(snapshot: org.spongepowered.api.command.args.CommandContext.Snapshot): void
                    }
                }
            }
        }
    }
}
