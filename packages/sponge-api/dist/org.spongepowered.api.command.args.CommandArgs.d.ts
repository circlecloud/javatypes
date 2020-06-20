declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    /**
                     * Holder for command arguments.
                     */
                    // @ts-ignore
                    class CommandArgs extends java.lang.Object {
                        /**
                         * Create a new CommandArgs instance with the given raw input and arguments.
                         * @param rawInput Raw input
                         * @param args Arguments extracted from the raw input
                         */
                        // @ts-ignore
                        constructor(rawInput: string, args: Array<org.spongepowered.api.command.args.parsing.SingleArg>)
                        /**
                         * Return whether more arguments remain to be read.
                         * @return Whether more arguments remain
                         */
                        // @ts-ignore
                        hasNext(): boolean
                        /**
                         * Try to read the next argument without advancing the current index.
                         * @return The next argument
                         * @throws ArgumentParseException if not enough arguments are present
                         */
                        // @ts-ignore
                        peek(): java.lang.String
                        /**
                         * Try to read the next argument, advancing the current index if successful.
                         * @return The next argument
                         * @throws ArgumentParseException if not enough arguments are present
                         */
                        // @ts-ignore
                        next(): java.lang.String
                        /**
                         * Try to read the next argument, advancing the current index if successful
                         * or returning an absent optional if not.
                         * @return The optional next argument.
                         */
                        // @ts-ignore
                        nextIfPresent(): java.util.Optional<java.lang.String>
                        /**
                         * Create a parse exception with the provided message which has the position
                         * of the last parsed argument attached. The returned exception must be
                         * thrown at the target
                         * @param message The message for the exception
                         * @return the newly created, but unthrown exception
                         */
                        // @ts-ignore
                        createError(message: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.ArgumentParseException
                        /**
                         * Gets a list of all arguments as a string. The returned list is immutable.
                         * @return all arguments
                         */
                        // @ts-ignore
                        getAll(): java.util.List<java.lang.String>
                        /**
                         * Return this arguments object's current state. Can be used to reset with
                         * the {@link #setState(Object)} method.
                         * @deprecated Use {#link #getSnapshot()} and
                         *              {@link #applySnapshot(Snapshot)} instead
                         * @return The current state
                         */
                        // @ts-ignore
                        getState(): java.lang.Object
                        /**
                         * Restore the arguments object's state to a state previously used.
                         * @deprecated Use {#link #getSnapshot()} and
                         *              {@link #applySnapshot(Snapshot)} instead
                         * @param state the previous state
                         */
                        // @ts-ignore
                        setState(state: any): void
                        /**
                         * Return the raw string used to provide input to this arguments object.
                         * @return The raw input
                         */
                        // @ts-ignore
                        getRaw(): java.lang.String
                        /**
                         * Get an arg at the specified position.
                         * @param index index of the element to return
                         */
                        // @ts-ignore
                        get(index: number /*int*/): java.lang.String
                        /**
                         * Insert an arg as the next arg to be returned by {@link #next()}.
                         * @param value The argument to insert
                         */
                        // @ts-ignore
                        insertArg(value: string): void
                        /**
                         * Remove the arguments parsed between startState and endState.
                         * @deprecated Use with {#link #getSnapshot()} instead of
                         *      {@link #getState()} with {@link #removeArgs(Snapshot, Snapshot)}
                         * @param startState The starting state
                         * @param endState The ending state
                         */
                        // @ts-ignore
                        removeArgs(startState: any, endState: any): void
                        /**
                         * Remove the arguments parsed between two snapshots.
                         * @param startSnapshot The starting state
                         * @param endSnapshot The ending state
                         */
                        // @ts-ignore
                        removeArgs(startSnapshot: org.spongepowered.api.command.args.CommandArgs.Snapshot, endSnapshot: org.spongepowered.api.command.args.CommandArgs.Snapshot): void
                        /**
                         * Returns the number of arguments
                         * @return the number of arguments
                         */
                        // @ts-ignore
                        size(): int
                        /**
                         * Gets the current position in raw input.
                         * @return the raw position
                         */
                        // @ts-ignore
                        getRawPosition(): int
                        /**
                         * Gets a snapshot of the data inside this context to allow it to be
                         * restored later.
                         * @return The {#link CommandArgs.Snapshot} containing the current state of the
                         *       {@link CommandArgs}
                         */
                        // @ts-ignore
                        getSnapshot(): org.spongepowered.api.command.args.CommandArgs.Snapshot
                        /**
                         * Resets a {@link CommandArgs} to a previous state using a previously
                         * created {@link CommandArgs.Snapshot}.
                         * @param snapshot The {#link CommandArgs.Snapshot} to restore this context
                         *       with
                         */
                        // @ts-ignore
                        applySnapshot(snapshot: org.spongepowered.api.command.args.CommandArgs.Snapshot): void
                        /**
                         * Resets a {@link CommandArgs} to a previous state using a previously
                         * created {@link CommandArgs.Snapshot}.
                         * <p>If resetArgs is set to false, this snapshot will not reset the
                         * argument list to its previous state, only the index.</p>
                         * @param snapshot The {#link CommandArgs.Snapshot} to restore this context
                         *       with
                         * @param resetArgs Whether to restore the argument list
                         */
                        // @ts-ignore
                        applySnapshot(snapshot: org.spongepowered.api.command.args.CommandArgs.Snapshot, resetArgs: boolean): void
                    }
                }
            }
        }
    }
}
