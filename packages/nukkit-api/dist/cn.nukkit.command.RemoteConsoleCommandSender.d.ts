declare namespace cn {
    namespace nukkit {
        namespace command {
            /**
             * Represents an RCON command sender.
             * @author Tee7even
             */
            // @ts-ignore
            class RemoteConsoleCommandSender extends cn.nukkit.command.ConsoleCommandSender {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public sendMessage(message: java.lang.String | string): void
                // @ts-ignore
                public sendMessage(message: cn.nukkit.lang.TextContainer): void
                // @ts-ignore
                public getMessages(): string
                // @ts-ignore
                public getName(): string
            }
        }
    }
}
